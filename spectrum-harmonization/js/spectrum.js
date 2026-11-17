/* The spectrum: three joined rulers (low, mid, a marked break, high), every band as a lit block,
   one button per band page, and a travelling wave whose wavelength shortens from left to right.
   Two states: "hero" (big, on the cover) and "docked" (a bar along the top), animated between.
   window.Spectrum = { init(el, data, {onSelect, t, heroEl}), setState('hero'|'docked'), setActive(id|null), setLang() } */
(() => {
'use strict';

// The axis. Inside each panel the scale is logarithmic, so the crowded low end of the mid panel gets room.
const PANELS = [
  { id: 'low', from: 600, to: 1000, w: .30, ticks: [600, 700, 800, 900] },
  { id: 'mid', from: 1000, to: 7200, w: .40, ticks: [1000, 1500, 2000, 3000, 4000, 5000, 6000, 7000] },
  { id: 'gap', from: 7200, to: 24000, w: .05, ticks: [] },
  { id: 'high', from: 24000, to: 71000, w: .25, ticks: [24000, 30000, 40000, 50000, 60000, 71000] },
];
let acc = 0;
PANELS.forEach(p => { p.u0 = acc; acc += p.w; p.u1 = acc; });
const WL_AT = [600, 1000, 3500, 26000, 71000];            // where the true wavelength is printed (c ÷ f, calculated)
const C = 299792458;

function u(f) {                                            // frequency (MHz) -> 0..1 along the axis
  const p = PANELS.find(q => f <= q.to) || PANELS[PANELS.length - 1];
  const r = Math.log(Math.max(f, p.from) / p.from) / Math.log(p.to / p.from);
  return p.u0 + p.w * Math.min(1, Math.max(0, r));
}
function wl(f) {
  const cm = C / (f * 1e6) * 100;
  return cm >= 10 ? Math.round(cm) + ' cm' : cm >= 1 ? (Math.round(cm * 10) / 10) + ' cm' : Math.round(cm * 10) + ' mm';
}
function tickText(f, first) {
  if (f < 1000) return first ? f + ' MHz' : String(f);
  const g = +(f / 1000).toFixed(1);
  return first ? g + ' GHz' : String(g);
}
const lerp = (a, b, k) => a + (b - a) * k;
const expoOut = x => x >= 1 ? 1 : 1 - Math.pow(2, -10 * x);
const hex = h => { h = h.trim().replace('#', ''); return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16)); };

let el, data, opts, canvas, ctx, dpr = 1, W = 0, H = 0;
let bands = [], pages = [], lanes = 1, colors = {}, stops = [];
let k = 1, kFrom = 1, kTo = 1, kT0 = 0;                 // 0 = hero, 1 = docked
let active = null, hover = null, needleX = null, needleA = 0;
let heroBox = null, running = false, last = 0, phase = 0, dirty = true;
let homeBtn, gapLab, panelBtns = [];
const reduce = matchMedia('(prefers-reduced-motion: reduce)');

// Colour along the axis: amber (low) -> coral (mid) -> rose (high), following the report's own group colours
function colorAt(x) {
  for (let i = 1; i < stops.length; i++) {
    if (x <= stops[i][0]) {
      const [a, ca] = stops[i - 1], [b, cb] = stops[i], m = (x - a) / (b - a || 1);
      return [0, 1, 2].map(j => Math.round(lerp(ca[j], cb[j], m)));
    }
  }
  return stops[stops.length - 1][1];
}
const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

function readColors() {
  const cs = getComputedStyle(document.documentElement);
  ['low', 'mid', 'high', 'text', 'muted'].forEach(n => { colors[n] = hex(cs.getPropertyValue('--' + n) || '#ffffff'); });
  stops = [[0, colors.low], [.27, colors.low], [.42, colors.mid], [.68, colors.mid], [.78, colors.high], [1, colors.high]];
}

// ---------- geometry ----------
function shortName(p) {
  const own = opts.t && (opts.t('page.' + p.id + '.short') || opts.t('page.' + p.id + '.title'));
  if (own && own.length <= 22) return own;
  const names = p.bands.map(b => b.name.replace(/\s*\(.*\)/, ''));
  const units = names.map(n => (n.match(/\s(MHz|GHz)$/) || [])[1]);
  if (names.length > 1 && units.every(x => x && x === units[0])) return names.map(n => n.replace(/\s(MHz|GHz)$/, '')).join(' / ') + ' ' + units[0];
  return names.join(' / ');
}

function assignLanes() {
  const sorted = bands.slice().sort((a, b) => a.min_mhz - b.min_mhz);
  const ends = [];
  sorted.forEach(b => {
    let i = ends.findIndex(e => e < b.min_mhz);
    if (i < 0) { i = ends.length; ends.push(0); }
    ends[i] = b.max_mhz;
    b.lane = i;
  });
  lanes = Math.max(1, ends.length);
}

// The rectangle the axis occupies, and sizes, for the current mix of hero (k=0) and docked (k=1)
function frame() {
  const bar = parseFloat(getComputedStyle(el).getPropertyValue('--bar')) || 76;
  const right = parseFloat(getComputedStyle(el).getPropertyValue('--sp-right')) || 0;
  const dock = { x: 64, y: 0, w: Math.max(120, W - 64 - right - 18), h: bar };
  const D = { ...dock, laneH: 6, laneGap: 2.5, cy: bar * .5 + 1, amp: 3.2, tickY: bar - 8, lam0: dock.w / 3, lam1: 4 };
  if (!heroBox || k >= 1) return D;
  const hb = heroBox;
  const laneH = Math.min(22, Math.max(11, hb.h * .045)), laneGap = 5;
  // the wave fills the slot: two label rows (96px) above its crest, the ruler's numbers (74px) below its trough
  const amp = Math.max(60, Math.min((hb.h - 170) / 2, 210));
  const Hh = { x: hb.x, y: hb.y, w: hb.w, h: hb.h, laneH, laneGap, cy: hb.y + 96 + amp, amp,
    tickY: hb.y + hb.h - 22, lam0: hb.w / 3.2, lam1: 11 };
  const m = {};
  for (const key in D) m[key] = lerp(Hh[key], D[key], k);
  return m;
}
const xAt = (F, f) => F.x + u(f) * F.w;
function laneTop(F, lane) {
  const blockH = lanes * F.laneH + (lanes - 1) * F.laneGap;
  return F.cy - blockH / 2 + lane * (F.laneH + F.laneGap);
}

// Fan the 15 labels out over two rows (plus the "next space" label over the break) so they never collide
function fan(F) {
  const items = pages.map(p => ({ p, cx: p.cx(F), w: p.labW }));
  items.push({ gap: true, cx: F.x + (PANELS[2].u0 + PANELS[2].w / 2) * F.w, w: gapLab.offsetWidth || 120 });
  items.sort((a, b) => a.cx - b.cx);
  const gapPx = 8, rows = [[], []], rightEdge = [F.x - 1e4, F.x - 1e4];
  items.forEach(it => {
    const want = it.cx - it.w / 2;
    let r = want >= rightEdge[0] + gapPx ? 0 : want >= rightEdge[1] + gapPx ? 1 : rightEdge[0] <= rightEdge[1] ? 0 : 1;
    it.x = Math.max(want, rightEdge[r] + gapPx, F.x - 20);
    rightEdge[r] = it.x + it.w;
    it.row = r;
    rows[r].push(it);
  });
  rows.forEach(row => {                                    // pull back anything pushed past the right edge
    let limit = F.x + F.w + 20;
    for (let i = row.length - 1; i >= 0; i--) { const it = row[i]; if (it.x + it.w > limit) it.x = limit - it.w; limit = it.x - gapPx; }
  });
  const top0 = Math.min(laneTop(F, 0), F.cy - F.amp + 46);   // labels sit above the wave's crest
  items.forEach(it => { it.y = top0 - 34 - it.row * 34 - 24; it.h = 24; });
  return items;
}

// ---------- drawing ----------
function draw(now) {
  const F = frame();
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, W, H);
  const heroA = 1 - k;
  const x0 = F.x, x1 = F.x + F.w;
  const top = laneTop(F, 0), bottom = laneTop(F, lanes - 1) + F.laneH;

  // panels: faint fields, joins, the break hatched
  PANELS.forEach(p => {
    const a = x0 + p.u0 * F.w, b = x0 + p.u1 * F.w;
    const kindsOn = active === 'kinds' && p.id !== 'gap';
    if (p.id === 'gap') {
      ctx.save();
      ctx.beginPath(); ctx.rect(a + 2, top - 4, b - a - 4, bottom - top + 8); ctx.clip();
      ctx.strokeStyle = 'rgba(255,255,255,.16)'; ctx.lineWidth = 1;
      for (let s = a - 40; s < b + 40; s += 5) { ctx.beginPath(); ctx.moveTo(s, bottom + 4); ctx.lineTo(s + (bottom - top + 8), top - 4); ctx.stroke(); }
      ctx.restore();
    } else {
      const c = colors[p.id];
      ctx.fillStyle = rgba(c, kindsOn ? .16 : .035 + heroA * .02);
      ctx.fillRect(a + 1, top - 4, b - a - 2, bottom - top + 8);
      if (kindsOn) {
        ctx.save(); ctx.shadowColor = rgba(c, .7); ctx.shadowBlur = 16;
        ctx.strokeStyle = rgba(c, .9); ctx.lineWidth = 1; ctx.strokeRect(a + 1.5, top - 3.5, b - a - 3, bottom - top + 7);
        ctx.restore();
      }
    }
    if (p.u0 > 0) {                                        // the join between two rulers
      ctx.strokeStyle = 'rgba(255,255,255,.28)'; ctx.lineWidth = 1;
      ctx.setLineDash(p.id === 'high' || p.id === 'gap' ? [2, 3] : []);
      ctx.beginPath(); ctx.moveTo(Math.round(a) + .5, top - 8); ctx.lineTo(Math.round(a) + .5, F.tickY - 10); ctx.stroke();
      ctx.setLineDash([]);
    }
  });

  // ticks and their labels (skip any that would touch the one before)
  ctx.font = `11px "JetBrains Mono", ui-monospace, monospace`;
  ctx.textBaseline = 'alphabetic';
  let lastR = -1e9;
  PANELS.forEach(p => p.ticks.forEach((f, i) => {
    const x = xAt(F, f);
    ctx.strokeStyle = 'rgba(255,255,255,.30)';
    ctx.beginPath(); ctx.moveTo(x, bottom + 5); ctx.lineTo(x, bottom + 9); ctx.stroke();
    const s = tickText(f, i === 0), tw = ctx.measureText(s).width;
    const align = f === 71000 ? 'right' : i === 0 ? 'left' : 'center';
    const left = align === 'left' ? x : align === 'right' ? x - tw : x - tw / 2;
    if (left < lastR + 6) return;
    lastR = left + tw;
    ctx.textAlign = align;
    ctx.fillStyle = rgba(colors.muted, i === 0 ? .95 : .7);
    ctx.fillText(s, x, F.tickY);
  }));
  if (heroA > .02) {                                       // true wavelengths, cover only
    ctx.globalAlpha = heroA;
    ctx.font = '11px "JetBrains Mono", ui-monospace, monospace';
    WL_AT.forEach(f => {
      const x = xAt(F, f);
      ctx.textAlign = f === 71000 ? 'right' : f === 600 ? 'left' : 'center';
      ctx.fillStyle = rgba(colorAt(u(f)), .85);
      ctx.fillText('λ ' + wl(f), x, F.tickY + 17);
    });
    ctx.globalAlpha = 1;
  }

  // the travelling wave
  drawWave(F, now);

  // band blocks, lit; the active page bright, others dimmed when docked
  const act = pages.find(p => p.id === active), hov = pages.find(p => p.id === hover);
  bands.forEach(b => {
    const a = xAt(F, b.min_mhz), w = Math.max(2, xAt(F, b.max_mhz) - a), y = laneTop(F, b.lane);
    const c = colorAt(u((b.min_mhz + b.max_mhz) / 2));
    const on = (act && act.ids.has(b.id)) || (hov && hov.ids.has(b.id));
    const dim = act || active === 'kinds' ? .3 : .62;
    const alpha = on ? 1 : lerp(.9, dim, k);
    if (on) { ctx.save(); ctx.shadowColor = rgba(c, .9); ctx.shadowBlur = 18; }
    ctx.fillStyle = rgba(c, alpha * .85);
    ctx.fillRect(a, y, w, F.laneH);
    ctx.fillStyle = rgba([255, 244, 236], alpha * .55);
    ctx.fillRect(a, y, w, Math.max(1, F.laneH * .22));      // a bright top edge, like a lit filament
    if (on) ctx.restore();
  });

  // leader lines from the fanned labels to their bands (cover)
  if (heroA > .02 && fanItems) {
    ctx.globalAlpha = heroA;
    ctx.lineWidth = 1;
    fanItems.forEach(it => {
      const lx = it.x + it.w / 2, ly = it.y + it.h;
      const tx = it.cx, ty = top - 5;
      const c = it.gap ? colors.muted : colorAt((tx - x0) / F.w);
      ctx.strokeStyle = rgba(c, it.gap ? .5 : .55);
      ctx.setLineDash(it.gap ? [2, 3] : []);
      ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(lx, ly + 6); ctx.lineTo(tx, ty - 4); ctx.lineTo(tx, ty); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = rgba(c, .9); ctx.beginPath(); ctx.arc(tx, ty, 1.6, 0, 6.3); ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  // the needle on the active page (docked), gliding to a new page
  const target = act ? act.cx(F) : null;
  if (target != null) needleX = needleX == null || k < 1 ? target : lerp(needleX, target, reduce.matches ? 1 : .14);
  needleA = reduce.matches ? (act ? k : 0) : lerp(needleA, act ? k : 0, .2);   // with less motion the loop stops, so jump straight there
  if (needleX != null && needleA > .02) {
    const c = colorAt((needleX - x0) / F.w);
    const g = ctx.createLinearGradient(0, 2, 0, F.h);
    g.addColorStop(0, rgba(c, 0)); g.addColorStop(.45, rgba(c, .95 * needleA)); g.addColorStop(1, rgba(c, 0));
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = g; ctx.fillRect(needleX - 1, 2, 2, F.h - 4);
    const rg = ctx.createRadialGradient(needleX, F.cy, 0, needleX, F.cy, 34);
    rg.addColorStop(0, rgba(c, .45 * needleA)); rg.addColorStop(1, rgba(c, 0));
    ctx.fillStyle = rg; ctx.fillRect(needleX - 36, F.cy - 36, 72, 72);
    ctx.restore();
  }
  return { F, target };
}

function drawWave(F, now) {
  const x0 = F.x, w = F.w;
  if (w < 20) return;
  const a = Math.log(F.lam1 / F.lam0) / w;             // wavelength on screen falls steadily (geometrically) left to right
  const phi = x => 2 * Math.PI * (Math.exp(-a * x) - 1) / (-a * F.lam0);
  const grad = ctx.createLinearGradient(x0, 0, x0 + w, 0);
  stops.forEach(([s, c]) => grad.addColorStop(s, rgba(c, 1)));
  // soft ends, and a little less height towards the short-wave end so it stays a line, not a smear
  const env = x => { const e = Math.min(x / (w * .03), (w - x) / (w * .03), 1); return (e < 0 ? 0 : e * e * (3 - 2 * e)) * (1 - .45 * x / w); };
  const line = (amp, off) => {
    ctx.beginPath();
    for (let x = 0; x <= w; x += x > w * .55 ? .75 : 1.5) {
      const y = F.cy + amp * env(x) * Math.sin(phi(x) - phase + off);
      x === 0 ? ctx.moveTo(x0 + x, y) : ctx.lineTo(x0 + x, y);
    }
  };
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  ctx.strokeStyle = grad;
  ctx.lineJoin = 'round';
  const docked = k;
  // faint echoes for depth
  [[.72, .9, .16], [.48, 1.9, .11], [.86, 2.7, .07]].forEach(([s, off, al]) => {
    line(F.amp * s, off); ctx.globalAlpha = al * (1 - docked * .6); ctx.lineWidth = 1; ctx.stroke();
  });
  line(F.amp, 0);
  ctx.globalAlpha = .07 + docked * .05; ctx.lineWidth = 12 - docked * 6; ctx.stroke();
  ctx.globalAlpha = .22; ctx.lineWidth = 4.5 - docked * 2; ctx.stroke();
  ctx.globalAlpha = .85 - docked * .15; ctx.lineWidth = 1.3 - docked * .3; ctx.stroke();
  ctx.restore();
}

// ---------- DOM: buttons positioned over the canvas ----------
let fanItems = null;
function place(F) {
  fanItems = heroBox && k < 1 ? fan(frameAt(0)) : null;          // labels are laid out where they sit on the cover
  const top = laneTop(F, 0);
  pages.forEach(p => {
    // docked: hit area over the page's own blocks; hero: the fanned label itself
    let a = Infinity, b = -Infinity, t0 = Infinity, t1 = -Infinity;
    p.bands.forEach(bd => { a = Math.min(a, xAt(F, bd.min_mhz)); b = Math.max(b, xAt(F, bd.max_mhz)); t0 = Math.min(t0, laneTop(F, bd.lane)); t1 = Math.max(t1, laneTop(F, bd.lane) + F.laneH); });
    const minW = 14, cx = (a + b) / 2, ww = Math.max(minW, b - a);
    const dockR = { x: cx - ww / 2, y: Math.min(t0 - 6, top - 6), w: ww, h: Math.max(t1 - t0 + 12, 22) };
    let R = dockR;
    if (fanItems) {
      const it = fanItems.find(x => x.p === p);
      const m = expoOut(Math.min(1, k * 1.6));
      R = { x: lerp(it.x, dockR.x, m), y: lerp(it.y, dockR.y, m), w: lerp(it.w, dockR.w, m), h: lerp(it.h, dockR.h, m) };
    }
    Object.assign(p.btn.style, { left: R.x + 'px', top: R.y + 'px', width: R.w + 'px', height: R.h + 'px' });
  });
  el.classList.toggle('sp-is-hero', !!fanItems && k < .5);
  // the "next space for mobile" label over the break (cover only)
  const g = fanItems && fanItems.find(x => x.gap);
  if (g) Object.assign(gapLab.style, { left: g.x + 'px', top: g.y + 'px', opacity: Math.max(0, 1 - k * 2) });
  else gapLab.style.opacity = 0;
  // the three panels, clickable on the "kinds" view
  panelBtns.forEach((btn, i) => {
    const p = PANELS[[0, 1, 3][i]];
    Object.assign(btn.style, { left: F.x + p.u0 * F.w + 'px', top: top - 6 + 'px', width: p.w * F.w + 'px', height: (F.tickY - top + 8) + 'px' });
  });
  homeBtn.style.top = F.cy - 1 + 'px';
}
function frameAt(kk) { const s = k; k = kk; const F = frame(); k = s; return F; }

function measureHero() {
  const h = opts.heroEl;
  if (!h || !h.offsetWidth) { heroBox = null; return; }
  let x = 0, y = 0, n = h;
  while (n) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
  const r = el.getBoundingClientRect();
  heroBox = { x: x - r.left, y: y - r.top, w: h.offsetWidth, h: h.offsetHeight };
}

function resize() {
  const r = el.getBoundingClientRect();
  W = r.width; H = r.height;
  dpr = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
  measureHero();
  if (!heroBox) { k = kFrom = kTo = 1; }
  pages.forEach(p => { p.labW = measureLabel(p); });
  dirty = true;
  kick();
}
function measureLabel(p) {
  const s = p.btn.querySelector('.sp-lab');
  const prev = s.style.cssText;
  s.style.cssText = 'position:absolute;visibility:hidden;transform:none;left:0;bottom:auto;opacity:1';
  const w = s.offsetWidth;
  s.style.cssText = prev;
  return w || 70;
}

// ---------- loop ----------
function tick(now) {
  running = false;
  if (document.hidden) return;
  const dt = Math.min(64, now - (last || now));
  last = now;
  if (kFrom !== kTo) {
    const m = reduce.matches ? 1 : Math.min(1, Math.max(0, (now - kT0) / 900));   // a frame's timestamp can predate kT0
    k = lerp(kFrom, kTo, expoOut(m));
    if (m >= 1) { k = kTo; kFrom = kTo; }
    dirty = true;
  }
  if (!reduce.matches) phase += dt / 1000 * 2 * Math.PI * .32;
  const { F, target } = draw(now);
  if (dirty) { place(F); dirty = kFrom !== kTo; }
  const settling = target != null && Math.abs(needleX - target) > .5;
  if (!reduce.matches || kFrom !== kTo || settling || dirty) kick();
}
function kick() { if (!running && !document.hidden && canvas) { running = true; requestAnimationFrame(tick); } }

// ---------- public ----------
function init(host, d, o) {
  el = host; data = d; opts = o || {};
  readColors();
  bands = d.bands.map(b => ({ ...b }));
  assignLanes();
  const byId = Object.fromEntries(bands.map(b => [b.id, b]));
  canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  ctx = canvas.getContext('2d');
  el.replaceChildren(canvas);
  homeBtn = document.createElement('button');
  homeBtn.type = 'button'; homeBtn.className = 'sp-home';
  homeBtn.innerHTML = '<svg viewBox="0 0 18 18" aria-hidden="true"><path d="M1 9c2-5 3-5 4 0s2 5 3.2 0 2-4 2.8 0 1.4 3 2 0 1-2 1.6 0 .7 1 1.4 0" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>';
  homeBtn.addEventListener('click', () => opts.onSelect && opts.onSelect('cover'));
  el.append(homeBtn);
  pages = d.pages.map(pg => {
    const pb = pg.bands.map(id => byId[id]).filter(Boolean);
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'sp-btn'; btn.dataset.page = pg.id;
    btn.dataset.group = pg.group;
    const lab = document.createElement('span'); lab.className = 'sp-lab';
    btn.append(lab);
    btn.addEventListener('click', () => opts.onSelect && opts.onSelect(pg.id));
    btn.addEventListener('pointerenter', () => { hover = pg.id; kick(); });
    btn.addEventListener('pointerleave', () => { hover = null; kick(); });
    btn.addEventListener('focus', () => { hover = pg.id; kick(); });
    btn.addEventListener('blur', () => { hover = null; kick(); });
    el.append(btn);
    const lo = Math.min(...pb.map(b => b.min_mhz)), hi = Math.max(...pb.map(b => b.max_mhz));
    return { id: pg.id, group: pg.group, bands: pb, ids: new Set(pg.bands), btn, lo, hi, page: pg, labW: 70,
      cx: F => F.x + (u(lo) + u(hi)) / 2 * F.w };
  });
  gapLab = document.createElement('span');
  gapLab.className = 'sp-gaplab'; gapLab.setAttribute('aria-hidden', 'true');
  el.append(gapLab);
  panelBtns = ['low', 'mid', 'high'].map(g => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'sp-panel'; b.dataset.group = g;
    b.addEventListener('click', () => opts.onSelect && opts.onSelect(g));
    el.append(b);
    return b;
  });
  setLang();
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(resize).observe(el); else addEventListener('resize', resize);
  addEventListener('resize', () => { measureHero(); dirty = true; kick(); });
  document.addEventListener('visibilitychange', () => { last = 0; kick(); });
  reduce.addEventListener && reduce.addEventListener('change', kick);
  if (document.fonts) document.fonts.ready.then(() => { pages.forEach(p => { p.labW = measureLabel(p); }); dirty = true; kick(); });
  resize();
}
function setState(s) {
  measureHero();
  const to = s === 'hero' && heroBox ? 0 : 1;
  if (to === kTo) { dirty = true; kick(); return; }
  kFrom = k; kTo = to; kT0 = performance.now(); dirty = true;
  kick();
}
function setActive(id) {
  active = id || null;
  pages.forEach(p => { if (p.id === active) p.btn.setAttribute('aria-current', 'page'); else p.btn.removeAttribute('aria-current'); });
  el.dataset.active = active || '';
  kick();
}
function setLang() {
  const t = opts.t || (() => '');
  pages.forEach(p => {
    const s = shortName(p);
    p.btn.querySelector('.sp-lab').textContent = s;
    p.btn.setAttribute('aria-label', t('page.' + p.id + '.title') || s);
  });
  homeBtn.setAttribute('aria-label', t('ui.home') || 'Home');
  homeBtn.title = t('ui.home') || '';
  gapLab.textContent = t('spectrum.gap');
  panelBtns.forEach(b => b.setAttribute('aria-label', t('kinds.' + b.dataset.group + '.name') || b.dataset.group));
  if (canvas) { pages.forEach(p => { p.labW = measureLabel(p); }); dirty = true; kick(); }
}

window.Spectrum = { init, setState, setActive, setLang };
})();
