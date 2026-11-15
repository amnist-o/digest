/* Spectrum Harmonization: builds the page from script.md (all wording) and bands.json (all numbers),
   then adds the full-screen "deck" mode on large screens. Every effect is optional: if one fails,
   the plain scrolling page still shows all the content. */
(() => {
'use strict';

const html = document.documentElement;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMQ = matchMedia('(prefers-reduced-motion: reduce)');
const deckMQ = matchMedia('(min-width: 1000px) and (min-height: 600px)');

// Small element builder: el('p', {class: 'x', 'data-k': 'why.title'}, child, 'text')
function el(tag, attrs, ...kids) {
  const e = document.createElement(tag);
  for (const k in attrs || {}) if (attrs[k] != null && attrs[k] !== false) e.setAttribute(k, attrs[k]);
  for (const c of kids) if (c != null) e.append(c);
  return e;
}
const SVGNS = 'http://www.w3.org/2000/svg';
function sv(tag, attrs, parent) {
  const e = document.createElementNS(SVGNS, tag);
  for (const k in attrs || {}) e.setAttribute(k, attrs[k]);
  if (parent) parent.append(e);
  return e;
}
const safe = (what, fn) => { try { return fn(); } catch (err) { console.warn('[spectrum page] ' + what + ' failed:', err); } };

// ---------- Wording: script.md (same format and rules as episode 1) ----------
function parseScript(md) {
  const blocks = {};
  let key = null, lang = null;
  for (const raw of md.split(/\r?\n/)) {
    const line = raw.trim();
    const head = line.match(/^##\s+(\S+)/);
    if (head) { key = head[1]; lang = null; blocks[key] = {}; continue; }
    if (!key || line.startsWith('>') || line === '---' || /^#\s/.test(line)) continue;
    const tag = line.match(/^(EN|TH):\s*(.*)$/);
    if (tag) { lang = tag[1]; blocks[key][lang] = tag[2]; continue; }
    if (lang && line) blocks[key][lang] += (blocks[key][lang] ? '\n' : '') + line;
  }
  return blocks;
}
// "~" keeps words together: a word joiner in Thai, a non-breaking space in English
const tidy = (text, lang) => text.replace(/~/g, lang === 'TH' ? '⁠' : ' ');

let blocks = {}, data = null;
let lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'EN' : 'TH';
const missing = new Set();
function t(k) {
  const b = blocks[k];
  const v = b && (b[lang] || b.EN);
  if (!v) { missing.add(k); return ''; }
  return tidy(v, lang);
}
const has = k => !!(blocks[k] && (blocks[k][lang] || blocks[k].EN));
const keysWith = prefix => Object.keys(blocks).filter(k => k.startsWith(prefix));
const fmt = n => Number(n).toLocaleString('en-US');

// Text with [name](https://…) parts becomes real links, never raw HTML
function setLinked(node, text) {
  node.replaceChildren();
  let last = 0;
  for (const m of text.matchAll(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g)) {
    node.append(text.slice(last, m.index), el('a', { href: m[2], target: '_blank', rel: 'noopener' }, m[1]));
    last = m.index + m[0].length;
  }
  node.append(text.slice(last));
}

// ---------- Numbers and units ----------
const C = 299792458;
function wavelength(mhz) {                       // speed of light ÷ frequency (calculated, not from the report)
  const cm = C / (mhz * 1e6) * 100;
  if (cm >= 10) return Math.round(cm) + ' cm';
  if (cm >= 1) return (Math.round(cm * 10) / 10) + ' cm';
  return Math.round(cm * 10) + ' mm';
}
function freqLabel(mhz, ghz) { return ghz ? String(+(mhz / 1000).toFixed(3)) : String(+mhz.toFixed(1)); }
const qKey = q => 'ui.q.' + String(q).trim().toLowerCase().replace(/\s+/g, '-');

// ---------- Views ----------
let views = [], pagesById = {}, bandsById = {};
const FIXED_BEFORE = ['cover', 'why', 'kinds'], FIXED_AFTER = ['next', 'index'];
const isPage = id => !!pagesById[id];

function buildBandPages() {
  const next = $('#next');
  data.pages.forEach(page => {
    const id = page.id, g = page.group;
    const bands = page.bands.map(b => bandsById[b]).filter(Boolean);
    const sec = el('section', { class: 'view view-band', id, 'data-group': g, 'aria-labelledby': 'h-' + id, 'data-image': page.image });
    const text = el('div', { class: 'band-text' },
      el('p', { class: 'kicker rv' }, el('span', { 'data-k': `kinds.${g}.name` }), ' · ', el('span', { 'data-k': `kinds.${g}.role` })),
      el('h2', { id: 'h-' + id, class: 'rv', tabindex: '-1', 'data-k': `page.${id}.title` }),
      el('p', { class: 'lede rv', 'data-k': `page.${id}.lede` }),
      el('div', { class: `bcards n${bands.length}` }, ...bands.map(bandCard)),
      el('div', { class: 'sections rv' }, ...['overview', 'harmonisation', 'ecosystem', 'future'].map(s =>
        el('section', { class: 'sec' }, el('h3', { 'data-k': 'ui.' + s }), el('p', { 'data-k': `page.${id}.${s}` }))))
    );
    const geo = el('div', { class: 'band-geo rv', 'data-page': id });
    geo.append(geoFallback(page));
    sec.append(el('div', { class: 'band-bg', 'aria-hidden': 'true' }), el('div', { class: 'band-inner' }, text, geo));
    next.before(sec);
  });
}

// Plain "where" list and conference list: always present, replaced by the map when js/map.js works
function geoFallback(page) {
  const box = el('div', { class: 'geo-plain' });
  box.append(el('h3', { 'data-k': 'ui.where' }));
  if (page.where && page.where.length) {
    box.append(el('ul', { class: 'where-plain' }, ...page.where.map(w => {
      const parts = (w.places || []).filter(k => w.partial === true || (w.partial_places || []).includes(k)).length;
      return el('li', { 'data-level': w.level },
        parts < (w.places || []).length || w.level === 'global' ? el('i', { class: 'sw sw-' + (w.status || 'identified'), 'aria-hidden': 'true' }) : null,
        parts ? el('i', { class: 'sw sw-partial', 'aria-hidden': 'true' }) : null,
        el('span', { 'data-k': `where.${page.id}.${w.id}` }));
    })));
  }
  if (!(page.where && page.where.length) || blocks[`where.${page.id}.none`]) box.append(el('p', { class: 'where-none', 'data-k': `where.${page.id}.none` }));
  box.append(el('h3', { 'data-k': 'ui.when' }));
  const evs = data.events.slice().sort((a, b) => a.year - b.year);
  box.append(el('ol', { class: 'when-plain' }, ...evs.map(e => {
    const hits = (page.events || []).filter(x => x.event === e.id);
    const li = el('li', { class: (hits.length ? 'on' : '') + (e.future ? ' fut' : '') }, el('b', { 'data-k': 'event.' + e.id }, e.label));
    hits.forEach((x, i) => li.append(i ? ' / ' : ' ', x.band && bandsById[x.band] ? bandsById[x.band].name + ': ' : '', el('span', { 'data-k': 'scope.' + x.scope }),
      x.itu && x.itu.length ? ' (R' + x.itu.join(', R') + ')' : ''));
    return li;
  })));
  return box;
}

function bandCard(b) {
  const ghz = b.max_mhz >= 10000;
  const all = b.plans.flatMap(p => p.blocks);
  const lo = Math.min(...all.map(k => k.from)), hi = Math.max(...all.map(k => k.to));
  const centre = (b.min_mhz + b.max_mhz) / 2;
  const chips = el('ul', { class: 'chips', 'aria-label': '3GPP' },
    ...b.gpp.map(x => el('li', { class: 'chip' }, x)),
    ...(b.gens || []).map(x => el('li', { class: 'chip gen' }, x)),
    ...(b.gens_future || []).map(x => el('li', { class: 'chip gen fut' }, x)));
  // wavelength: calculated (speed of light ÷ centre frequency), so it is a small chip with its own note, not a figure
  const wl = el('span', { class: 'chip wl', 'data-k-title': 'ui.derived' }, el('span', { class: 'sr-only', 'data-k': 'ui.wavelength' }), 'λ ≈ ' + wavelength(centre),
    el('sup', { 'aria-hidden': 'true' }, '*'), el('span', { class: 'sr-only' }, ' (', el('span', { 'data-k': 'ui.derived' }), ')'));
  const labelled = b.plans.some(p => p.label);                   // all rows share one scale, so all get the label column
  const plans = el('div', { class: 'plans' + (labelled ? ' labelled' : '') }, ...b.plans.map(p => planDiagram(p, lo, hi, ghz, labelled)));
  return el('article', { class: 'bcard rv' },
    el('header', null, el('h3', null, b.name), wl, el('p', { class: 'range' }, b.range_lines.join(' · '))),
    chips, plans,
    el('dl', { class: 'figs' },
      figure('ui.networks', b.networks, 'ui.noNetworks'),
      figure('ui.devices', b.devices, 'ui.noFigure')));
}

// A figure from the report, with its qualifier word ("over", "around"); never a big "0"
function figure(labelKey, f, emptyKey) {
  const dd = el('dd');
  f = f || {};
  const q = f.qualifier ? el('span', { class: 'q', 'data-k': qKey(f.qualifier), 'data-q': f.qualifier }) : null;
  if (f.count) {
    dd.append(q || '', el('b', null, fmt(f.count)));
  } else if (f.count === 0 || !(f.alt && f.alt.length)) {
    dd.classList.add('none');
    dd.append(el('span', { 'data-k': f.count === 0 ? emptyKey : 'ui.noFigure' }));
  }
  const small = [];
  if (f.split) for (const g in f.split) {
    const s = f.split[g];
    small.push(el('span', null, g + ' ', s.qualifier ? el('span', { 'data-k': qKey(s.qualifier), 'data-q': s.qualifier }) : '', ' ' + fmt(s.count)));
  }
  (f.alt || []).forEach(a => {
    const what = a.year ? String(a.year) : String(a.range || '').replace(/\s*\(.*\)/, '');   // the diagram already shows the edges
    if (f.count && a.count === f.count && a.year) return;          // same as the main figure
    small.push(el('span', null, what + ': ', a.qualifier ? el('span', { 'data-k': qKey(a.qualifier), 'data-q': a.qualifier }) : '', ' ' + fmt(a.count)));
  });
  if (small.length) {
    const s = el('small', { class: 'alt' });
    small.forEach((x, i) => { if (i) s.append(' · '); s.append(x); });
    dd.append(s);
  }
  return el('div', { class: 'fig' }, el('dt', { 'data-k': labelKey }), dd);
}

// Band-plan diagram at true proportions. Positions are in %, so text stays crisp at any width.
const KIND = { uplink: ['↑', 'ui.uplink'], downlink: ['↓', 'ui.downlink'], tdd: ['⇅', 'ui.tdd'], sdl: ['↓', 'ui.sdl'], unknown: ['', ''] };
// Words inside a block, longest first; fitPlanTexts() keeps the longest that fits the block on screen
function blockOptions(arrow, key, label, planLabel) {
  const kindWord = key ? t(key) : '';
  label = label && label !== planLabel ? label : '';
  const dup = label && kindWord && (label.toLowerCase().includes(kindWord.toLowerCase()) || kindWord.toLowerCase().includes(label.toLowerCase()));
  const j = a => a.filter(Boolean).join(' ');
  return [...new Set([dup ? j([arrow, kindWord]) : j([arrow, kindWord, label]), j([arrow, label]), j([arrow, kindWord]), arrow, ''])];
}
const blockWords = (arrow, key, w, label, planLabel) => blockOptions(arrow, key, label, planLabel)[0];
// Edge frequencies: measured, so close ones drop to a second row and never print over each other
function fitEdges(svg) {
  const last = [-1e9, -1e9];
  let two = false;
  $$('text.edge-t', svg).forEach(tx => {
    const tick = tx.previousElementSibling;
    let bb;
    try { bb = tx.getBBox(); } catch (e) { return; }
    if (!bb.width) return;
    const row = bb.x >= last[0] + 5 ? 0 : bb.x >= last[1] + 5 ? 1 : -1;
    tx.style.display = tick.style.display = row < 0 ? 'none' : '';
    if (row < 0) return;
    last[row] = bb.x + bb.width;
    if (row) two = true;
    tx.setAttribute('y', row ? 46 : 36);
    tick.setAttribute('y2', row ? 37 : 28);
  });
  svg.setAttribute('height', two ? 48 : 38);
}
function fitPlanTexts(root) {
  $$('.plan-svg', root).forEach(svg => { $$('text.edge-t', svg).forEach(tx => { tx.style.display = tx.previousElementSibling.style.display = ''; }); fitEdges(svg); });
  $$('.plan-svg text.gap-t', root).forEach(tx => {                // "gap" label only where the gap is wide enough
    tx.textContent = t('ui.gap');
    try { if (tx.getComputedTextLength() > tx.previousElementSibling.getBBox().width - 8) tx.textContent = ''; } catch (e) { /* not laid out */ }
  });
  $$('.plan-svg text.blk-t', root).forEach(tx => {
    const rect = tx.previousElementSibling;
    let room;
    try { room = rect.getBBox().width - 6; } catch (e) { return; }
    if (!(room > 0)) return;
    const d = tx.dataset;
    for (const s of blockOptions(d.arrow, d.kk, d.lab, d.pl)) {
      tx.textContent = s;
      if (!s || tx.getComputedTextLength() <= room) break;
    }
  });
}
function planDiagram(plan, lo, hi, ghz, labelled) {
  const pad = 3, span = hi - lo || 1;
  const X = v => pad + (v - lo) / span * (100 - 2 * pad);
  const blocks = plan.blocks.slice().sort((a, b) => a.from - b.from);
  const wrap = el('figure', { class: 'plan' });
  if (labelled) wrap.append(el('figcaption', null, plan.label || ''));
  const svg = sv('svg', { class: 'plan-svg', width: '100%', height: 48, role: 'img' });
  const desc = [];
  sv('line', { x1: X(lo) + '%', x2: X(hi) + '%', y1: 13, y2: 13, class: 'plan-base' }, svg);
  blocks.forEach((k, i) => {
    const kind = String(k.kind || 'unknown').toLowerCase();
    const [arrow, key] = KIND[kind] || KIND.unknown;
    const x0 = X(k.from), w = X(k.to) - x0;
    sv('rect', { x: x0 + '%', y: 3, width: Math.max(w, .4) + '%', height: 20, class: 'blk k-' + kind }, svg);
    const tx = sv('text', { x: (x0 + w / 2) + '%', y: 17, class: 'blk-t', 'text-anchor': 'middle', 'data-kk': key, 'data-arrow': arrow, 'data-w': w, 'data-lab': k.label || '', 'data-pl': plan.label || '' }, svg);
    tx.textContent = blockWords(arrow, key, w, k.label, plan.label);
    desc.push(`${freqLabel(k.from, ghz)}–${freqLabel(k.to, ghz)} ${kind}`);
    const nx = blocks[i + 1];
    if (nx && nx.from > k.to) {                                    // the gap between two blocks stays visibly empty
      const g0 = X(k.to), g1 = X(nx.from);
      sv('line', { x1: g0 + '%', x2: g1 + '%', y1: 13, y2: 13, class: 'plan-gap' }, svg);
      if (g1 - g0 > 12) { const gt = sv('text', { x: (g0 + g1) / 2 + '%', y: 17, class: 'gap-t', 'text-anchor': 'middle', 'data-kk': 'ui.gap' }, svg); gt.textContent = t('ui.gap'); }
    }
  });
  // Edge frequencies under the blocks; close ones drop to a second row
  const edges = [...new Set(blocks.flatMap(k => [k.from, k.to]))].sort((a, b) => a - b);
  const lastX = [-99, -99];
  let rows = 1;
  edges.forEach(v => {
    const x = X(v);
    const row = x - lastX[0] >= 9 ? 0 : x - lastX[1] >= 9 ? 1 : -1;
    if (row < 0) return;
    lastX[row] = x;
    if (row) rows = 2;
    sv('line', { x1: x + '%', x2: x + '%', y1: 23, y2: row ? 37 : 28, class: 'edge-tick' }, svg);
    const anchor = x < 6 ? 'start' : x > 94 ? 'end' : 'middle';
    sv('text', { x: x + '%', y: row ? 46 : 36, class: 'edge-t', 'text-anchor': anchor }, svg).textContent = freqLabel(v, ghz);
  });
  svg.setAttribute('height', rows === 2 ? 48 : 38);
  svg.setAttribute('aria-label', (plan.label ? plan.label + ': ' : '') + desc.join(', ') + (ghz ? ' GHz' : ' MHz'));
  wrap.append(svg);
  return wrap;
}
function relabelPlans() {                                         // language switch: words inside the diagrams
  $$('.plan-svg text[data-kk]').forEach(tx => {
    if (tx.classList.contains('gap-t')) { tx.textContent = t('ui.gap'); return; }
    const d = tx.dataset;
    tx.textContent = blockWords(d.arrow, d.kk, +d.w, d.lab, d.pl);
  });
}

// ---------- Why: the alignment figure (fragments of a wave that fall into step) ----------
function buildAlign() {
  const svg = $('.align-svg');
  const defs = sv('defs', null, svg);
  const lg = sv('linearGradient', { id: 'align-grad', gradientUnits: 'userSpaceOnUse', x1: 0, x2: 1200, y1: 0, y2: 0 }, defs);
  [['0', 'var(--low)'], ['.5', 'var(--mid)'], ['1', 'var(--high)']].forEach(([o, c]) => sv('stop', { offset: o, style: 'stop-color:' + c }, lg));
  const N = 8, W = 1200, L = 150, A = 34, mid = 60;
  const OFF = [[50, 30], [45, -26], [-30, 18], [70, -34], [-75, 22], [35, -18], [-50, 32], [-60, -24]];   // ends move inwards, never off screen   // fixed, so it looks the same every time
  for (let i = 0; i < N; i++) {
    let d = '';
    for (let x = i * L; x <= (i + 1) * L; x += 3) d += (d ? 'L' : 'M') + x + ',' + (mid + A * Math.sin(x / W * Math.PI * 2 * 6)).toFixed(1);
    const g = sv('g', { class: 'frag', style: `--dx:${OFF[i][0]}px;--dy:${OFF[i][1]}px;--i:${i}` }, svg);
    sv('path', { d, class: 'frag-glow' }, g);
    sv('path', { d, class: 'frag-line' }, g);
  }
}

// ---------- Stats, kinds, index ----------
const STAT_KEYS = ['uniqueSubscribers', 'gdpContribution', 'fiveGShare2030', 'upper6Population'];   // matches why.stat1..4.label
function renderStats() {
  const dl = $('#stats');
  dl.replaceChildren();
  STAT_KEYS.forEach((def, i) => {
    const n = i + 1;
    const key = has(`why.stat${n}.key`) ? t(`why.stat${n}.key`).trim() : def;       // the script may pick another figure
    const s = data.stats && data.stats[key];
    if (!s) return;
    const value = has(`why.stat${n}.value`) ? t(`why.stat${n}.value`) : s.value;   // the script may word the value (e.g. in Thai)
    dl.append(el('div', { class: 'stat rv', style: `--i:${5 + i}` }, el('dd', null, value), el('dt', null, t(`why.stat${n}.label`))));
  });
}

function buildKinds() {
  const box = $('#kind-panels');
  ['low', 'mid', 'high'].forEach(g => {
    const first = data.pages.find(p => p.group === g);
    const names = data.bands.filter(b => b.group === g).map(b => b.name.replace(/\s*\(.*\)/, ''));
    box.append(el('a', { class: 'kind rv', href: '#' + (first ? first.id : 'kinds'), 'data-group': g, 'data-image': 'kind-' + g },
      el('span', { class: 'kind-bg', 'aria-hidden': 'true' }),
      el('span', { class: 'kind-body' },
        el('span', { class: 'kind-role', 'data-k': `kinds.${g}.role` }),
        el('span', { class: 'kind-name', 'data-k': `kinds.${g}.name` }),
        el('span', { class: 'kind-text', 'data-k': `kinds.${g}.body` }),
        el('span', { class: 'kind-fact', 'data-k': `kinds.${g}.fact` }),
        el('span', { class: 'kind-bands' }, ...names.map(n => el('span', null, n))))));
  });
}

function buildIndex() {
  const rows = $('#band-rows');
  data.bands.forEach(b => {
    const page = data.pages.find(p => p.bands.includes(b.id));
    const evs = page ? page.events.filter(e => !e.band || e.band === b.id) : [];
    const evIds = [...new Set(evs.map(e => e.event))];
    const fig = (f, emptyKey) => {
      const td = el('td', { class: 'n' });
      if (f && f.count) td.append(f.qualifier ? el('span', { class: 'q', 'data-k': qKey(f.qualifier), 'data-q': f.qualifier }) : '', ' ' + fmt(f.count));
      else if (f && f.alt && f.alt.length) td.append(f.alt.map(a => fmt(a.count)).join(' / '));
      else td.append(el('span', { class: 'muted', 'data-k': f && f.count === 0 ? emptyKey : 'ui.noFigure' }));
      return td;
    };
    rows.append(el('tr', { 'data-group': b.group },
      el('th', { scope: 'row' }, page ? el('a', { href: '#' + page.id }, b.name) : b.name),
      el('td', { class: 'mono' }, b.range_lines.join(' · ')),
      el('td', null, el('span', { 'data-k': `kinds.${b.group}.name` })),
      el('td', { class: 'mono' }, b.gpp.join(', ')),
      fig(b.networks, 'ui.noNetworks'), fig(b.devices, 'ui.noFigure'),
      el('td', { class: 'mono' }, ...evIds.map((id, i) => {
        const e = data.events.find(x => x.id === id);
        return el('span', { class: e && e.future ? 'fut' : '' }, (i ? ', ' : ''), el('span', { 'data-k': 'event.' + id }, e ? e.label : id));
      }))));
  });
}

// Lists that follow whatever keys the script has (glossary, notes, credits)
function renderLists() {
  const gloss = $('#gloss');
  gloss.replaceChildren();
  keysWith('gloss.').filter(k => k !== 'gloss.title').forEach(k => {
    const v = t(k);
    const m = v.match(/^(.{1,14}?)\s*[:：—–]\s+(.+)$/s);          // "ABBR: meaning" or the key's own name
    gloss.append(el('div', null, el('dt', null, m ? m[1] : k.slice(6).replace(/-/g, ' ')), el('dd', null, m ? m[2] : v)));
  });
  const list = (id, prefix) => {
    const ul = $(id);
    ul.replaceChildren();
    keysWith(prefix).filter(k => k !== prefix + 'title').forEach(k => { const li = el('li'); setLinked(li, t(k)); ul.append(li); });
  };
  list('#notes', 'notes.');
  list('#credits', 'credits.');
}

// ---------- Render all wording ----------
function render() {
  html.lang = lang.toLowerCase();
  $$('[data-k]').forEach(e => {
    let v = t(e.dataset.k);
    if (!v && e.dataset.q) v = lang === 'EN' ? e.dataset.q : '';            // qualifier word missing from the script
    if (!v && e.dataset.k.startsWith('event.')) return;                    // keep the label from bands.json
    e.textContent = v;
  });
  $$('.view-band h2').forEach(h => h.style.setProperty('--len', Math.max(4, h.textContent.length)));   // title size fits its length
  $$('[data-k-label]').forEach(e => e.setAttribute('aria-label', t(e.dataset.kLabel)));
  $$('[data-k-title]').forEach(e => { e.title = t(e.dataset.kTitle); });
  const title = blocks['cover.title'] && (blocks['cover.title'][lang] || blocks['cover.title'].EN);
  document.title = title ? title.replace(/~/g, '') : 'Spectrum Harmonization';   // no word joiners in the tab title
  safe('stats', renderStats);
  safe('lists', renderLists);
  safe('plans', relabelPlans);
  safe('plans fit', () => fitPlanTexts());
  safe('spectrum lang', () => window.Spectrum && spectrumOn && Spectrum.setLang());
  safe('map lang', showMaps);
  updateChrome();
}

// ---------- Pictures: gradients until images/<name>.jpg actually loads ----------
const imgState = {};
function probe(name, cb) {
  if (!name) return;
  const s = imgState[name];
  if (s === true) return cb();
  if (s) { s.push(cb); return; }
  const list = imgState[name] = [cb];
  const im = new Image();
  im.onload = () => { imgState[name] = true; list.forEach(f => f()); };
  im.onerror = () => { imgState[name] = false; };
  im.src = 'images/' + name + '.jpg';
}
function wireImages() {
  $$('[data-image]').forEach(v => {
    const name = v.dataset.image;
    const target = v.matches('.view-band') ? $('.band-bg', v) : v.matches('.kind') ? $('.kind-bg', v) : v;
    probe(name, () => { target.style.backgroundImage = `url("images/${name}.jpg")`; target.classList.add('has-img'); });
  });
  probe('cover', () => $('#cover').classList.add('has-img'));
}
// Full-screen mode: two fixed layers cross-fade between view backgrounds
const BG_OF = id => id === 'cover' ? ['cover', 'cover'] : id === 'next' ? ['next', 'next'] : isPage(id) ? [pagesById[id].image, pagesById[id].group]
  : id === 'why' ? ['', 'why'] : ['', 'plain'];
let bgFront = 0, bgName = null;
function setBg(id) {
  const [img, tone] = BG_OF(id);
  const name = img + '|' + tone;
  if (name === bgName) return;
  bgName = name;
  const layers = $$('#bg .bg-layer');
  bgFront = 1 - bgFront;
  const L = layers[bgFront], O = layers[1 - bgFront];
  L.dataset.tone = tone;
  L.dataset.img = img;                                            // per-picture crop in the CSS
  L.style.backgroundImage = '';
  L.style.transition = 'none';                                    // restart the slow zoom from the start
  L.classList.remove('has-img', 'zoom');
  if (img) probe(img, () => { if (bgName === name) { L.style.backgroundImage = `url("images/${img}.jpg")`; L.classList.add('has-img'); } });
  void L.offsetWidth;
  L.style.transition = '';
  L.classList.add('front', 'zoom');
  O.classList.remove('front');
}

// ---------- Spectrum ----------
let spectrumOn = false;
function initSpectrum() {
  if (!window.Spectrum) return;
  Spectrum.init($('#spectrum'), data, {
    t, heroEl: $('.hero-slot'),
    onSelect: id => {
      if (id === 'low' || id === 'mid' || id === 'high') { const p = data.pages.find(x => x.group === id); id = p ? p.id : 'kinds'; }
      navigate(id);
    },
  });
  spectrumOn = true;
}
const spec = (fn, ...a) => { if (spectrumOn) safe('spectrum', () => Spectrum[fn](...a)); };

// ---------- Map (js/map.js): one shared panel in deck mode, one per band in the scrolling page ----------
let mapData = null, mapMain = null, mapInstances = [], mapIO = null;
const mapT = k => t(k);
function initMaps() {
  if (!window.SpectrumMap || !mapData) return;
  safe('map (deck)', () => {
    mapMain = SpectrumMap.init($('#geo-stage'), mapData);
    html.classList.add('geo-ok');
  });
  mapIO = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting || deck) return;
    mapIO.unobserve(e.target);
    safe('map (page)', () => {
      const page = pagesById[e.target.dataset.page];
      const inst = SpectrumMap.create(e.target, mapData);
      inst.page = page;
      inst.show(page, lang.toLowerCase(), mapT);
      e.target.classList.add('has-map');
      mapInstances.push(inst);
    });
  }), { rootMargin: '300px 0px' }) : null;
  if (mapIO) $$('.band-geo').forEach(g => mapIO.observe(g));
}
function showMaps() {
  mapInstances.forEach(m => m.show(m.page, lang.toLowerCase(), mapT));
  const id = views[cur] && views[cur].id;
  if (mapMain && isPage(id)) mapMain.show(pagesById[id], lang.toLowerCase(), mapT);
}
// The shared panel sits exactly over the active band page's right-hand column
function placeStage() {
  const stage = $('#geo-stage'), v = views[cur];
  const on = deck && mapMain && v && isPage(v.id);
  stage.classList.toggle('on', !!on);
  stage.inert = !on;
  if (on) stage.removeAttribute('aria-hidden'); else stage.setAttribute('aria-hidden', 'true');
  if (!on) return;
  stage.dataset.group = pagesById[v.id].group;
  let n = $('.band-geo', v), x = 0, y = 0;
  const w = n.offsetWidth, h = n.offsetHeight;
  while (n && n !== v) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
  Object.assign(stage.style, { left: x + 'px', top: y + 'px', width: w + 'px', height: h + 'px' });
}

// ---------- Deck mode ----------
let deck = false, cur = 0, leaveTimer = 0, booted = false;
function currentHash() { const h = decodeURIComponent(location.hash.slice(1)); return views.findIndex(v => v.id === h); }
function writeHash(id) {
  const url = new URL(location.href);
  url.hash = id;
  history.replaceState(null, '', url);
}
function navigate(id) {
  const i = views.findIndex(v => v.id === id);
  if (i < 0) return;
  if (deck) go(i);
  else {
    const v = views[i];
    v.scrollIntoView({ behavior: reduceMQ.matches ? 'auto' : 'smooth' });
    // maps drawn on the way down make the page taller; land exactly once the scroll has settled
    const fix = () => { if (Math.abs(v.getBoundingClientRect().top - $('#spectrum').offsetHeight) > 40) v.scrollIntoView(); };
    setTimeout(fix, 1100); setTimeout(fix, 1800);
    writeHash(id); spec('setActive', id);
  }
}
function go(i, instant) {
  i = Math.max(0, Math.min(views.length - 1, i));
  if (!deck) return navigate(views[i].id);
  if (i === cur && !instant) return;
  const old = views[cur];
  html.style.setProperty('--dir', i >= cur ? 1 : -1);
  clearTimeout(leaveTimer);
  views.forEach(v => v.classList.remove('leaving'));
  if (old && old !== views[i] && !instant) {
    old.classList.add('leaving');
    leaveTimer = setTimeout(() => old.classList.remove('leaving'), reduceMQ.matches ? 160 : 340);
  }
  if (old) old.classList.remove('is-active', 'aligned');
  cur = i;
  activate(instant);
}
function activate(instant) {
  const v = views[cur], id = v.id;
  views.forEach(w => { w.inert = w !== v; });
  v.classList.toggle('instant', !!instant);
  v.classList.add('is-active');
  if (id === 'index') v.scrollTop = 0;
  writeHash(id);
  setBg(id);
  spec('setState', id === 'cover' ? 'hero' : 'docked');
  spec('setActive', id);
  html.dataset.view = isPage(id) ? 'band' : id;
  if (isPage(id) && mapMain) safe('map show', () => mapMain.show(pagesById[id], lang.toLowerCase(), mapT));
  placeStage();
  safe('plans fit', () => fitPlanTexts(v));
  const sec = $('.sections', v);                                  // last resort: the text grid scrolls; fade its lower edge as a hint
  if (sec) { const f = () => sec.classList.toggle('scrolls', sec.scrollHeight - sec.clientHeight > 2 && sec.scrollTop + sec.clientHeight < sec.scrollHeight - 2); f(); sec.onscroll = f; }
  if (id === 'why') setTimeout(() => views[cur] === v && v.classList.add('aligned'), reduceMQ.matches ? 0 : 1500);   // after the figure has faded in, so the reader sees the fragments fall into step
  updateChrome();
  const head = $('h1, h2', v);
  const step = t('ui.step').replace('{n}', cur + 1).replace('{total}', views.length);
  $('#live').textContent = (head ? head.textContent : id) + (step ? ' · ' + step : '');
  if (head) head.focus({ preventScroll: true });
}
function updateChrome() {
  const n = views.length;
  if (!n) return;
  $('.step-count').textContent = String(cur + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0');
  $('.step-prev').disabled = deck && cur === 0;
  $('.step-next').disabled = deck && cur === n - 1;
}

function setMode() {
  const want = deckMQ.matches && !/[?&]flow\b/.test(location.search);
  const first = !booted;
  if (want === deck && !first) return;
  // first load: open the view in the address; later (window resized): the view that was on screen. Measure before the layout changes.
  const h = currentHash(), near = want && !first ? (innerHeight > 200 ? nearestInFlow() : cur) : 0;
  if (!want && first) cur = Math.max(0, h);
  booted = true;
  deck = want;
  html.classList.toggle('deck', deck);
  if (deck) {
    cur = first ? Math.max(0, h) : near;
    window.scrollTo(0, 0);
    views.forEach(v => v.classList.remove('is-active', 'leaving'));
    go(cur, true);
  } else {
    views.forEach(v => { v.inert = false; v.classList.remove('is-active', 'leaving', 'instant'); v.classList.add('aligned'); });
    delete html.dataset.view;
    spec('setState', 'docked');
    placeStage();
    const v = views[cur];
    if (v && cur > 0) {
      requestAnimationFrame(() => v.scrollIntoView());
      setTimeout(() => v.scrollIntoView(), 700);                   // maps above may have grown the page meanwhile
    }
    if (mapIO) $$('.band-geo:not(.has-map)').forEach(g => { mapIO.unobserve(g); mapIO.observe(g); });
  }
  safe('plans fit', () => fitPlanTexts());
  updateChrome();
}
function nearestInFlow() {
  let best = 0;
  views.forEach((v, i) => { if (v.getBoundingClientRect().top < innerHeight * .4) best = i; });
  return best;
}

// Can the element under the pointer still scroll in this direction? Then let the browser scroll it.
function scrollerFor(node, dy) {
  for (let n = node; n && n !== document.body && n.nodeType === 1; n = n.parentElement) {
    const s = getComputedStyle(n);
    if (/(auto|scroll)/.test(s.overflowY) && n.scrollHeight > n.clientHeight + 1) {
      if (dy > 0 ? n.scrollTop + n.clientHeight < n.scrollHeight - 1 : n.scrollTop > 0) return n;
    }
    if (n.classList.contains('view')) break;
  }
  return null;
}

// Wheel: one gesture = one step. Add up the movement, step at 50px, then ignore everything until
// 900 ms have passed AND the wheel has been quiet for 150 ms (trackpad momentum outlasts 900 ms).
let acc = 0, lastWheel = 0, locked = false, lockUntil = 0;
function onWheel(e) {
  if (!deck || e.ctrlKey) return;
  const now = performance.now(), gap = now - lastWheel;
  lastWheel = now;
  const dy = (Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX) * (e.deltaMode === 1 ? 40 : e.deltaMode === 2 ? 800 : 1);
  if (scrollerFor(e.target, dy)) { locked = true; lockUntil = now; acc = 0; return; }   // native scroll inside #index etc.
  e.preventDefault();
  if (locked) { if (now < lockUntil || gap < 150) return; locked = false; acc = 0; }
  if (gap > 250) acc = 0;
  acc += dy;
  if (Math.abs(acc) >= 50) {
    go(cur + Math.sign(acc));
    acc = 0; locked = true; lockUntil = now + 900;
  }
}
function onKey(e) {
  if (!deck || e.altKey || e.ctrlKey || e.metaKey) return;
  const tg = e.target;
  if (tg.closest && tg.closest('input, textarea, select, [contenteditable], [role=slider], [role=listbox], [role=tablist]')) return;
  const isBtn = tg.closest && tg.closest('button, a[href], summary, [tabindex="0"]');
  let d = 0;
  switch (e.key) {
    case 'ArrowRight': case 'ArrowDown': case 'PageDown': d = 1; break;
    case 'ArrowLeft': case 'ArrowUp': case 'PageUp': d = -1; break;
    case ' ': if (isBtn) return; d = e.shiftKey ? -1 : 1; break;
    case 'Home': if (scrollerFor(tg, -1)) return; e.preventDefault(); return go(0);
    case 'End': if (scrollerFor(tg, 1)) return; e.preventDefault(); return go(views.length - 1);
    default: return;
  }
  const sc = scrollerFor(tg, d) || (views[cur].id === 'index' && scrollerFor(views[cur].firstElementChild || views[cur], d));
  if (sc && (e.key.startsWith('Arrow') ? e.key.endsWith('Down') || e.key.endsWith('Up') : true)) {
    if (!sc.contains(document.activeElement)) { e.preventDefault(); sc.scrollBy({ top: d * sc.clientHeight * .8, behavior: reduceMQ.matches ? 'auto' : 'smooth' }); }
    return;
  }
  e.preventDefault();
  go(cur + d);
}
let touch = null;
function onTouchStart(e) { if (deck && e.touches.length === 1) touch = { x: e.touches[0].clientX, y: e.touches[0].clientY, t: e.target }; }
function onTouchEnd(e) {
  if (!deck || !touch) return;
  const p = e.changedTouches[0], dx = p.clientX - touch.x, dy = p.clientY - touch.y;
  const st = touch; touch = null;
  if (Math.max(Math.abs(dx), Math.abs(dy)) < 50) return;
  const horiz = Math.abs(dx) > Math.abs(dy);
  const d = horiz ? (dx < 0 ? 1 : -1) : (dy < 0 ? 1 : -1);
  if (!horiz && scrollerFor(st.t, d)) return;
  go(cur + d);
}
function onTouchMove(e) {
  if (!deck || !touch) return;
  const p = e.touches[0];
  if (!scrollerFor(touch.t, touch.y - p.clientY)) e.preventDefault();
}

// Same-page links (#700-mhz, #index …): in deck mode switch view instead of jumping
function onClick(e) {
  const a = e.target.closest && e.target.closest('a[href^="#"]');
  if (!a || !deck) return;
  const id = decodeURIComponent(a.getAttribute('href').slice(1));
  if (views.some(v => v.id === id)) { e.preventDefault(); navigate(id); }
}

// Scrolling page: keep the spectrum bar's highlight on the band in view
function watchFlow() {
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (deck || !e.isIntersecting) return;
    cur = views.indexOf(e.target);
    spec('setActive', e.target.id);
    updateChrome();
  }), { rootMargin: '-40% 0px -55% 0px' });
  views.forEach(v => io.observe(v));
}

function wire() {
  $('.lang-switch').addEventListener('click', () => {
    lang = lang === 'TH' ? 'EN' : 'TH';
    const url = new URL(location.href);
    if (lang === 'EN') url.searchParams.set('lang', 'en'); else url.searchParams.delete('lang');
    history.replaceState(null, '', url);
    render();
    placeStage();
  });
  $('.step-prev').addEventListener('click', () => deck ? go(cur - 1) : navigate(views[Math.max(0, cur - 1)].id));
  $('.step-next').addEventListener('click', () => deck ? go(cur + 1) : navigate(views[Math.min(views.length - 1, cur + 1)].id));
  addEventListener('wheel', onWheel, { passive: false });
  addEventListener('keydown', onKey);
  addEventListener('touchstart', onTouchStart, { passive: true });
  addEventListener('touchmove', onTouchMove, { passive: false });
  addEventListener('touchend', onTouchEnd, { passive: true });
  document.addEventListener('click', onClick);
  addEventListener('hashchange', () => { const i = currentHash(); if (i >= 0 && deck) go(i); });
  deckMQ.addEventListener('change', () => safe('mode', setMode));
  let rz = 0;
  addEventListener('resize', () => { safe('stage', placeStage); clearTimeout(rz); rz = setTimeout(() => safe('plans fit', () => fitPlanTexts()), 150); });
  // Fonts change text sizes: re-place things that were measured
  if (document.fonts) {
    const refit = () => { safe('stage', placeStage); safe('plans fit', () => fitPlanTexts()); safe('map refit', showMaps); };   // map labels are measured too
    document.fonts.ready.then(refit);
    document.fonts.addEventListener && document.fonts.addEventListener('loadingdone', refit);   // Thai glyphs load later, on demand
  }
}

// ---------- Start ----------
const get = (url, as) => fetch(url, { cache: 'no-cache' }).then(r => { if (!r.ok) throw new Error(url + ' ' + r.status); return r[as](); });
Promise.all([get('script.md', 'text'), get('bands.json', 'json')]).then(([md, json]) => {
  blocks = parseScript(md);
  data = json;
  data.bands.forEach(b => { bandsById[b.id] = b; });
  data.pages.forEach(p => { pagesById[p.id] = p; });
  buildBandPages();
  safe('kinds', buildKinds);
  safe('index', buildIndex);
  safe('align figure', buildAlign);
  views = $$('#views > .view');
  // Stagger: each revealed line of a view arrives 60 ms after the one before
  views.forEach(v => $$('.rv', v).forEach((n, i) => n.style.setProperty('--i', i)));
  render();
  if (missing.size) console.info('[spectrum page] script.md has no text for:', [...missing].join(' '));
  safe('images', wireImages);
  safe('spectrum', initSpectrum);
  wire();
  watchFlow();
  safe('mode', setMode);
  html.classList.add('ready');
  // The map is optional and loads last
  Promise.all([get('lib/world.json', 'json'), get('lib/places.json', 'json')]).then(([world, places]) => {
    mapData = { world, places, events: data.events, bands: data.bands };
    initMaps();
    if (deck) { const id = views[cur].id; if (isPage(id) && mapMain) safe('map show', () => mapMain.show(pagesById[id], lang.toLowerCase(), mapT)); placeStage(); }
  }).catch(err => console.warn('[spectrum page] map data not loaded:', err));
}).catch(err => {
  console.error(err);
  const h = $('#h-cover');
  h.textContent = 'Could not load the page data · โหลดข้อมูลของหน้านี้ไม่ได้';
  html.classList.add('ready', 'failed');
});
})();
