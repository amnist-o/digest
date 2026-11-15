/* Spectrum map + conference timeline.
 * window.SpectrumMap = { init(el, {world, places, events, bands?}), show(page, lang, t), create(el, data) -> {show} }
 * Needs global d3 v7. Renders map, legend, "where" list and timeline INSIDE el.
 * Re-colours in place (classes only); the DOM is built once per instance. */
(function () {
  'use strict';

  var CSS = [
    '.sm-root{--sm-c:var(--mid,#ff6b57);--sm-ink:var(--text,#f4efe9);--sm-mute:var(--muted,#b3aca3);--sm-hair:var(--hair,rgba(255,255,255,.10));',
    ' --sm-ease:cubic-bezier(.16,1,.3,1);--sm-mono:var(--font-mono,"JetBrains Mono",ui-monospace,monospace);display:flex;flex-direction:column;gap:10px;width:100%;height:100%;min-height:0;color:var(--sm-ink);font:13px/1.4 var(--font-body,"IBM Plex Sans","IBM Plex Sans Thai",system-ui,sans-serif);position:relative}',
    '.sm-root[data-group=low]{--sm-c:var(--low,#f2a65a)}.sm-root[data-group=mid]{--sm-c:var(--mid,#ff6b57)}.sm-root[data-group=high]{--sm-c:var(--high,#ff5d8f)}',
    /* the map keeps one place and one size on every page; the panel below takes what is left */
    '.sm-mapwrap{position:relative;flex:none;aspect-ratio:2/1;width:100%;max-height:min(56%,calc(100% - 354px));border:1px solid var(--sm-hair);border-radius:8px;overflow:hidden;',
    ' background:rgba(7,11,16,.82);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}',
    '.sm-svg{position:absolute;inset:0;width:100%;height:100%;display:block;overflow:visible}',
    /* The ocean is open: the picture behind shows through; only a faint rim and graticule */
    '.sm-sphere{fill:none;stroke:rgba(255,255,255,.16);stroke-width:.7}',
    '.sm-grat{fill:none;stroke:rgba(255,255,255,.09);stroke-width:.5}',
    '.sm-land path{fill:#1c2530;stroke:rgba(255,255,255,.3);stroke-width:.4;stroke-linejoin:round;pointer-events:none;transition:fill 1s var(--sm-ease)}',
    '.sm-l path{pointer-events:none;stroke:none;opacity:0;transition:opacity .7s var(--sm-ease),filter .7s var(--sm-ease)}',
    '.sm-l path.on{pointer-events:visiblePainted}',
    /* identified or harmonised: flat tint (+ thin outline when it is a whole ITU Region) */
    '.sm-tint path{fill:var(--sm-c)}.sm-tint path.on{opacity:.36}',
    '.sm-out path{fill:none;stroke:var(--sm-c);stroke-width:1.1;stroke-linejoin:round;stroke-linecap:round;opacity:0;transition:opacity .7s var(--sm-ease);pointer-events:none}',
    '.sm-out path.on{opacity:.95}',
    /* assigned or planned: diagonal hatch */
    '.sm-hatch path.on{opacity:1}',
    '.sm-hl-line{stroke:var(--sm-c);stroke-width:1.5;stroke-opacity:.95}',
    /* in use: solid bright fill */
    '.sm-solid path{fill:var(--sm-c)}.sm-solid path.on{opacity:.95;stroke:rgba(7,11,16,.55);stroke-width:.5}',
    /* "parts of" / "some countries in": dashed outline only (the mask hides inner borders and the inner half of the stroke) */
    '.sm-part path{fill:none;stroke:var(--sm-c);stroke-width:2.6;stroke-dasharray:4 3.5;stroke-linejoin:round;opacity:0;transition:opacity .7s var(--sm-ease)}',
    '.sm-part path.on,.sm-part path.hot{opacity:1;pointer-events:visibleStroke}',
    '.sm-pm path{fill:#000;display:none}.sm-pm path.on{display:inline}',
    '.sm-root.has-hot .sm-l path.on:not(.hot),.sm-root.has-hot .sm-out path.on:not(.hot),.sm-root.has-hot .sm-part path.on:not(.hot){opacity:.2}',
    '.sm-root.has-hot .sm-tint path.hot{opacity:.6}',
    '.sm-lab{opacity:0;transition:opacity .6s var(--sm-ease);pointer-events:none}',
    '.sm-lab.on{opacity:1}.sm-root.has-hot .sm-lab.on:not(.hot){opacity:.3}',
    '.sm-lab text{font:500 11px/1 var(--sm-mono);fill:var(--sm-ink);paint-order:stroke;stroke:rgba(7,11,16,.9);stroke-width:3.5px;stroke-linejoin:round}',
    '.sm-lab.k-itu text{letter-spacing:.1em;text-transform:uppercase;fill:var(--sm-c)}',
    '.sm-lab.k-area text{fill:var(--sm-ink);opacity:.85}',
    '.sm-root:lang(th) .sm-lab text{font-family:var(--font-body,"IBM Plex Sans Thai",sans-serif);font-size:13px;letter-spacing:0}',
    '.sm-lab line{stroke:var(--sm-ink);stroke-width:.7;opacity:.6}.sm-lab circle{fill:var(--sm-c);stroke:var(--sm-ink);stroke-width:.8}',
    '.sm-cap{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:center;text-align:center;padding:0 12% 8px;pointer-events:none;opacity:0;transition:opacity .7s var(--sm-ease);',
    ' font:400 clamp(15px,1.3vw,20px)/1.3 var(--font-display,"Instrument Serif",Georgia,serif);color:var(--sm-ink);text-shadow:0 0 14px #070b10,0 0 4px #070b10,0 0 2px #070b10}',
    '.sm-cap.on{opacity:1}',
    /* Legend, list and timeline sit on one glass panel so their small text stays legible over the picture */
    '.sm-info{flex:1 1 auto;min-height:0;overflow-y:auto;scrollbar-width:thin;display:flex;flex-direction:column;gap:6px;padding:10px 16px 8px;border:1px solid var(--sm-hair);border-radius:8px;',
    ' background:var(--glass,rgba(9,13,18,.74));-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px)}',
    '.sm-info>.sm-h{display:none}.sm-hd[hidden]{display:none}.sm-hd{display:flex;align-items:baseline;justify-content:space-between;gap:12px;flex-wrap:wrap;margin:0}',
    '.sm-h{font:500 11px/1.2 var(--sm-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--sm-mute)}',
    '.sm-root:lang(th) .sm-h{font-family:inherit;letter-spacing:0;text-transform:none;font-size:13px}',
    '.sm-legend{display:flex;gap:4px 14px;flex-wrap:wrap;color:var(--sm-mute);font-size:11.5px}',
    '.sm-root:lang(th) .sm-legend{font-size:13px}',
    '.sm-legend span{display:inline-flex;align-items:center;gap:6px;transition:opacity .5s var(--sm-ease)}.sm-legend span[hidden]{display:none}',
    '.sm-legend em{font-style:normal}',
    '.sm-sw{flex:none;width:14px;height:10px;border-radius:2px;display:inline-block;box-sizing:border-box}',
    '.sm-sw-identified{background:color-mix(in srgb,var(--sm-c) 36%,#1c2530);border:1px solid var(--sm-c)}',
    '.sm-sw-plan{background:repeating-linear-gradient(135deg,var(--sm-c) 0 1.5px,transparent 1.5px 4.5px)}',
    '.sm-sw-use{background:var(--sm-c)}',
    '.sm-sw-partial{background:none;border:1.5px dashed var(--sm-c)}',
    '.sm-sw+.sm-sw{margin-left:-5px}',
    '.sm-where{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:1px}',
    '.sm-where li{display:flex;gap:9px;align-items:flex-start;padding:2px 6px;margin:0 -6px;border-radius:4px;font-size:13px;line-height:1.4;cursor:default;transition:background .3s var(--sm-ease)}',
    '.sm-root:lang(th) .sm-where li{line-height:1.6;font-size:13.5px}',
    '.sm-where li .sm-sw{margin-top:.36em}',
    '.sm-where li:not(.sm-none):hover,.sm-where li.hot{background:rgba(255,255,255,.07)}',
    '.sm-where li.sm-none{color:var(--sm-mute);padding-left:29px}',
    '.sm-where li:focus-visible{outline:2px solid var(--sm-ink);outline-offset:2px}',
    '.sm-note{margin:0;color:var(--sm-mute);font-size:11.5px;line-height:1.4}.sm-root:lang(th) .sm-note{font-size:12.5px}',
    '.sm-time{display:block;width:100%;height:64px;flex:none;overflow:visible}',
    '.sm-ax{stroke:rgba(255,255,255,.28);stroke-width:1}.sm-ax.fut{stroke-dasharray:3 4}',
    '.sm-ev circle{fill:#070b10;stroke:rgba(255,255,255,.45);stroke-width:1;transition:r .5s var(--sm-ease),fill .5s var(--sm-ease),stroke .5s var(--sm-ease),filter .5s var(--sm-ease)}',
    '.sm-ev.fut circle{stroke-dasharray:2 2}',
    '.sm-ev.on circle{fill:var(--sm-c);stroke:var(--sm-ink);stroke-width:.8;filter:drop-shadow(0 0 5px var(--sm-c))}',
    '.sm-ev .nm{font:400 11px/1 var(--sm-mono);fill:var(--sm-mute);text-anchor:middle;transition:fill .5s var(--sm-ease)}',
    '.sm-ev.fut .nm{font-style:italic}',
    '.sm-ev.on .nm{fill:var(--sm-ink)}',
    '.sm-ev .lead{stroke:var(--sm-c);stroke-width:1;opacity:0;transition:opacity .5s var(--sm-ease)}',
    '.sm-ev.on .lead{opacity:.75}',
    '.sm-ev .lb{font:500 11px/1 var(--sm-mono);fill:var(--sm-ink);opacity:0;transition:opacity .5s var(--sm-ease)}',
    '.sm-root:lang(th) .sm-ev :is(.lb,.nm){font-family:var(--font-body,"IBM Plex Sans Thai",sans-serif);font-size:13px;font-style:normal}',
    '.sm-ev.on .lb{opacity:1}',
    '@media (prefers-reduced-motion:reduce){.sm-root *{transition-duration:.01ms!important}}'
  ].join('\n');

  // label offsets (px at 700px map width) for country labels: [dx, dy]; default [28,-26]
  var OFFSET = {
    usa: [-70, 50], can: [-10, -26], jpn: [46, -4], kor: [-26, 40], chn: [0, 0],
    idn: [26, 34], ind: [-6, 54], bra: [0, 0]
  };

  var uid = 0, cssDone = false;
  var NS = 'http://www.w3.org/2000/svg';

  function el(tag, attrs, parent, ns) {
    var e = ns === false ? document.createElement(tag) : document.createElementNS(NS, tag);
    if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function html(tag, cls, parent) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (parent) parent.appendChild(e);
    return e;
  }
  function injectCss() {
    if (cssDone) return;
    cssDone = true;
    var s = document.createElement('style');
    s.className = 'sm-style';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function create(host, data) {
    injectCss();
    var world = data.world, places = data.places, events = (data.events || []).slice();
    var bandNames = {};
    (data.bands || []).forEach(function (b) { bandNames[b.id] = b.name || b.id; });
    var id = 'sm' + (++uid);

    // ---- DOM (built once)
    host.textContent = '';
    var root = html('div', 'sm-root', host);
    root.dataset.group = 'mid';
    var wrap = html('div', 'sm-mapwrap', root);
    var svg = el('svg', { 'class': 'sm-svg', role: 'img', preserveAspectRatio: 'xMidYMid meet' }, wrap);
    var defs = el('defs', null, svg);
    var pat = el('pattern', { id: id + '-h', patternUnits: 'userSpaceOnUse', width: 6.5, height: 6.5, patternTransform: 'rotate(45)' }, defs);
    el('line', { x1: 0, y1: 0, x2: 0, y2: 6.5, 'class': 'sm-hl-line' }, pat);
    // mask for "partial" outlines: everything visible except the inside of the partial places
    var mask = el('mask', { id: id + '-pm', maskUnits: 'userSpaceOnUse', 'class': 'sm-pm' }, defs);
    var maskRect = el('rect', { fill: '#fff' }, mask);
    var gAria = el('g', { 'aria-hidden': 'true' }, svg);
    var sphere = el('path', { 'class': 'sm-sphere' }, gAria);
    var grat = el('path', { 'class': 'sm-grat' }, gAria);
    var gLand = el('g', { 'class': 'sm-land' }, gAria);
    var gTint = el('g', { 'class': 'sm-l sm-tint' }, gAria);
    var gHatch = el('g', { 'class': 'sm-l sm-hatch' }, gAria);
    var gSolid = el('g', { 'class': 'sm-l sm-solid' }, gAria);
    var gOut = el('g', { 'class': 'sm-out' }, gAria);
    var gPart = el('g', { 'class': 'sm-part', mask: 'url(#' + id + '-pm)' }, gAria);
    var gLab = el('g', { 'class': 'sm-labels' }, gAria);
    var cap = html('div', 'sm-cap', wrap);
    cap.setAttribute('aria-hidden', 'true');

    var info = html('div', 'sm-info', root);
    var hd = html('div', 'sm-hd', info);
    var hWhere = html('span', 'sm-h', hd);
    var legend = html('div', 'sm-legend', hd);
    legend.setAttribute('aria-hidden', 'true');
    var legItems = {};
    ['use', 'plan', 'identified', 'partial'].forEach(function (k) {
      var s = html('span', '', legend);
      html('i', 'sm-sw sm-sw-' + k, s);
      html('b', '', s).style.fontWeight = 400;
      html('em', '', s);
      legItems[k] = s;
    });
    var ul = html('ul', 'sm-where', info);
    var note = html('p', 'sm-note', info);
    var hWhen = html('span', 'sm-h', info);
    var tl = el('svg', { 'class': 'sm-time', role: 'img' }, info);

    // ---- geometry layers
    var feats = world.features;
    var byA3 = {};
    var layers = { tint: [], hatch: [], solid: [], part: [], pm: [], land: [] };
    var HL = ['tint', 'hatch', 'solid', 'part', 'pm'];       // layers that light up
    feats.forEach(function (f, i) {
      var a = f.properties.a3;
      (byA3[a] = byA3[a] || []).push(i);
      layers.land.push(el('path', null, gLand));
      layers.tint.push(el('path', null, gTint));
      layers.hatch.push(el('path', { fill: 'url(#' + id + '-h)' }, gHatch));
      layers.solid.push(el('path', null, gSolid));
      layers.part.push(el('path', null, gPart));
      layers.pm.push(el('path', null, mask));
      [layers.tint, layers.hatch, layers.solid, layers.part].forEach(function (L) {
        L[i].dataset.a3 = a;
      });
    });
    var outEls = {};
    [1, 2, 3].forEach(function (r) { outEls[r] = el('path', null, gOut); });

    // labels: one per place key
    var labels = {};
    Object.keys(places).forEach(function (k) {
      var p = places[k];
      var g = el('g', { 'class': 'sm-lab k-' + p.kind }, gLab);
      var line = el('line', null, g), dot = el('circle', { r: 2.2 }, g), tx = el('text', null, g);
      labels[k] = { g: g, line: line, dot: dot, tx: tx, kind: p.kind, pt: null };
    });

    // ---- timeline DOM
    events.sort(function (a, b) { return a.year - b.year; });
    var axPast = el('line', { 'class': 'sm-ax' }, tl), axFut = el('line', { 'class': 'sm-ax fut' }, tl);
    var evEls = events.map(function (e) {
      var g = el('g', { 'class': 'sm-ev' + (e.future ? ' fut' : '') }, tl);
      return {
        g: g, e: e,
        lead: el('line', { 'class': 'lead' }, g),
        c: el('circle', { r: 3 }, g),
        nm: el('text', { 'class': 'nm' }, g),
        lb: el('text', { 'class': 'lb' }, g)
      };
    });

    // ---- state
    var proj = d3.geoNaturalEarth1(), path = d3.geoPath(proj);
    var W = 0, H = 0, TW = 0;
    var cur = null;          // {page, lang, t}
    var entries = [];        // current where entries with resolved data
    var lit = {};            // a3 -> true
    var litPlaces = {};
    var graticule = d3.geoGraticule().step([30, 30]);

    function placeA3(keys) {
      var s = {};
      (keys || []).forEach(function (k) { var p = places[k]; if (p) p.a3.forEach(function (a) { s[a] = 1; }); });
      return s;
    }

    function layout() {
      var r = wrap.getBoundingClientRect();
      var w = Math.round(r.width), h = Math.round(r.height);
      var tr = tl.getBoundingClientRect();
      if (w < 10 || h < 10) return;
      W = w; H = h; TW = Math.round(tr.width) || w;
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      var pad = 4;
      proj.fitExtent([[pad, pad], [W - pad, H - pad]], { type: 'Sphere' });
      sphere.setAttribute('d', path({ type: 'Sphere' }));
      grat.setAttribute('d', path(graticule()));
      feats.forEach(function (f, i) {
        var d = path(f) || '';
        layers.land[i].setAttribute('d', d);
        HL.forEach(function (k) { layers[k][i].setAttribute('d', d); });
      });
      [mask, maskRect].forEach(function (m) {
        m.setAttribute('x', -20); m.setAttribute('y', -20); m.setAttribute('width', W + 40); m.setAttribute('height', H + 40);
      });
      [1, 2, 3].forEach(function (n) {
        var o = world.outline && world.outline[n];
        outEls[n].setAttribute('d', o ? path(o) || '' : '');
      });
      placeLabels();
      layoutTimeline();
    }

    function labelText(k) {
      var t = cur && cur.t;
      var v = t ? t('place.' + k) : '';
      return v && v !== 'place.' + k ? v : k;
    }

    function placeLabels() {
      var s = Math.max(.75, Math.min(1.25, W / 700));
      var placed = [];
      var order = Object.keys(labels).filter(function (k) { return labels[k].g.classList.contains('on'); });
      // countries first (anchored), ITU next, areas last so areas yield
      var rank = { country: 0, itu: 1, area: 2 };
      order.sort(function (a, b) { return rank[labels[a].kind] - rank[labels[b].kind]; });
      order.forEach(function (k) {
        var L = labels[k], p = places[k];
        var pt = proj(p.label_at);
        if (!pt) return;
        var off = OFFSET[k] || (p.kind === 'country' ? [28, -26] : [0, 0]);
        var x = pt[0] + off[0] * s, y = pt[1] + off[1] * s;
        L.tx.textContent = labelText(k);
        var anchor = 'middle';
        L.tx.setAttribute('text-anchor', anchor);
        L.tx.setAttribute('x', x); L.tx.setAttribute('y', y);
        var bb;
        try { bb = L.tx.getBBox(); } catch (e) { bb = null; }
        if (bb && bb.width) {
          var dx = 0;
          if (bb.x < 3) dx = 3 - bb.x;
          if (bb.x + bb.width > W - 3) dx = W - 3 - (bb.x + bb.width);
          x += dx;
          var h = bb.height, tries = 0, box;
          do {
            var hit = false;
            box = { x: x - bb.width / 2 - 2, y: y - h + 1, w: bb.width + 4, h: h + 2 };
            if (box.y < 2) { y += 2 - box.y; box.y = 2; }
            if (box.y + box.h > H - 2) { y -= box.y + box.h - (H - 2); box.y = H - 2 - box.h; }
            for (var j = 0; j < placed.length; j++) {
              var o = placed[j];
              if (box.x < o.x + o.w && box.x + box.w > o.x && box.y < o.y + o.h && box.y + box.h > o.y) { hit = true; y = o.y + o.h + h - 1 + 1; break; }
            }
            tries++;
          } while (hit && tries < 8);
          placed.push(box);
          L.tx.setAttribute('x', x); L.tx.setAttribute('y', y);
        }
        // leader / dot only for country labels placed away from their point
        var far = Math.hypot(x - pt[0], y - pt[1]) > 22 * s;
        if (L.kind === 'country' && far) {
          var ty = y - 3;
          L.line.setAttribute('x1', pt[0]); L.line.setAttribute('y1', pt[1]);
          L.line.setAttribute('x2', x); L.line.setAttribute('y2', ty < pt[1] ? ty : ty);
          L.dot.setAttribute('cx', pt[0]); L.dot.setAttribute('cy', pt[1]);
          L.line.style.display = ''; L.dot.style.display = '';
        } else { L.line.style.display = 'none'; L.dot.style.display = 'none'; }
      });
    }

    // Timeline: every conference is a tick with its short name under the axis. Lit ones get a label
    // block above ("scope · R2·R3" or "scope · band", one line per scope). Blocks are measured and
    // placed so they never overlap each other or another block's leader line; the svg grows to fit.
    function layoutTimeline() {
      var n = evEls.length;
      if (!n || !TW) return;
      evEls.forEach(function (o) { o.nm.textContent = o.full || o.e.label; });
      var widths = evEls.map(function (o) { try { return o.nm.getComputedTextLength(); } catch (e) { return 40; } });
      var maxW = Math.max.apply(null, widths), nameH = 14;
      try { nameH = Math.ceil(evEls[0].nm.getBBox().height); } catch (e) { /* not laid out */ }
      var pad = Math.max(12, maxW / 2 + 2);
      var xs = evEls.map(function (o, i) { return n === 1 ? TW / 2 : pad + i * (TW - 2 * pad) / (n - 1); });
      // narrow screens: names under the axis alternate between two rows; narrower still, they shorten to the year ('07)
      var sp = n > 1 ? (TW - 2 * pad) / (n - 1) : TW, stagger = 0;
      if (maxW + 6 > 2 * sp) evEls.forEach(function (o) { o.nm.textContent = "'" + String(o.e.year).slice(2); });
      else if (maxW + 6 > sp) stagger = nameH + 1;
      var fs = parseFloat(getComputedStyle(evEls[0].lb).fontSize) || 11;
      var lh = Math.round(fs * 1.3), gapX = 10, gapY = 4, lead = 9;
      var lit = [];
      evEls.forEach(function (o, i) { o.x = xs[i]; if (o.g.classList.contains('on') && o.lines) lit.push(o); });
      lit.forEach(function (o) {                                          // Thai glyphs stand taller than the font size
        try { lh = Math.max(lh, Math.ceil(o.lb.firstChild.getBBox().height)); } catch (e) { /* not laid out */ }
      });
      lit.forEach(function (o) {
        o.w = 0;
        Array.prototype.forEach.call(o.lb.childNodes, function (ts) { try { o.w = Math.max(o.w, ts.getComputedTextLength()); } catch (e) { o.w = Math.max(o.w, 120); } });
      });
      // Greedy placement in a given order; each block takes the lowest free spot of three anchorings
      function place(order) {
        var placed = [], boxes = new Map(), cross = 0;
        order.forEach(function (o, k) {
          var x = o.x, w = o.w, h = o.lines.length * lh;
          var rest = order.slice(k + 1);
          var best = null;
          [x - w / 2, x - w + 6, x - 6].forEach(function (x0, ci) {          // centred, ending at the tick, starting at the tick
            x0 = Math.max(0, Math.min(TW - w, x0));
            var x1 = x0 + w, b = 0, moved = true;
            while (moved) {
              moved = false;
              placed.forEach(function (p) {
                var hor = x0 < p.x1 + gapX && x1 > p.x0 - gapX;
                if (hor && b < p.b1 + gapY && b + h > p.b0 - gapY) { b = p.b1 + gapY; moved = true; }        // block on block
                if (p.x > x0 - 4 && p.x < x1 + 4 && b < p.b0) { b = Math.max(b, p.b1 + gapY); moved = true; }  // over a leader
              });
            }
            // ticks still to be labelled that this block would sit on (their leaders would cross it), and crowding of their centred spot
            var covers = rest.filter(function (q) { return q.x > x0 - gapX && q.x < x1 + gapX; }).length;
            var crowds = rest.filter(function (q) { return x1 + gapX > q.x - q.w / 2 && x0 - gapX < q.x + q.w / 2; }).length ? lh : 0;
            var cost = b + covers * 400 + crowds + ci * .5;
            if (!best || cost < best.cost) best = { cost: cost, x0: x0, x1: x1, b0: b, b1: b + h, x: x };
          });
          boxes.set(o, best);
          placed.push(best);
        });
        placed.forEach(function (p) { placed.forEach(function (q) { if (p !== q && q.x > p.x0 - 4 && q.x < p.x1 + 4 && q.b0 > p.b0) cross++; }); });
        var top = placed.reduce(function (m, p) { return Math.max(m, p.b1); }, 0);
        return { boxes: boxes, top: top, score: cross * 1000 + top };
      }
      var A = place(lit), B2 = place(lit.slice().reverse());              // left to right, or right to left: keep the cleaner one
      var L = B2.score < A.score ? B2 : A;
      lit.forEach(function (o) { o.box = L.boxes.get(o); });
      var top = L.top;
      var ay = Math.ceil(top + (top ? lead + 6 : 8)) + 2, H2 = ay + 22 + stagger;
      tl.setAttribute('viewBox', '0 0 ' + TW + ' ' + H2);
      tl.style.height = H2 + 'px';
      var lastPast = -1;
      evEls.forEach(function (o, i) { if (!o.e.future) lastPast = i; });
      axPast.setAttribute('x1', xs[0]); axPast.setAttribute('x2', xs[Math.max(lastPast, 0)]);
      axFut.setAttribute('x1', xs[Math.max(lastPast, 0)]); axFut.setAttribute('x2', xs[n - 1]);
      [axPast, axFut].forEach(function (a) { a.setAttribute('y1', ay); a.setAttribute('y2', ay); });
      evEls.forEach(function (o, i) {
        var on = o.g.classList.contains('on');
        o.c.setAttribute('cx', o.x); o.c.setAttribute('cy', ay);
        o.c.setAttribute('r', on ? 4.6 : 3);
        o.nm.setAttribute('x', o.x); o.nm.setAttribute('y', ay + 18 + (i % 2 ? stagger : 0));
        if (!on || !o.box) return;
        var B = o.box, bottom = ay - lead - B.b0;                         // bottom edge of this block
        Array.prototype.forEach.call(o.lb.childNodes, function (ts, j) {
          ts.setAttribute('x', B.x0);
          ts.setAttribute('y', bottom - (o.lines.length - 1 - j) * lh - Math.round(lh * .28));
        });
        o.lead.setAttribute('x1', o.x); o.lead.setAttribute('x2', o.x);
        o.lead.setAttribute('y1', bottom + 1); o.lead.setAttribute('y2', ay - 6);
      });
    }

    function timelineLines(items, t) {
      var groups = [], byKey = {};
      items.forEach(function (it) {
        var s = t('scope.' + it.scope);
        if (!s || s === 'scope.' + it.scope) s = it.scope;
        var key = s + '|' + (it.itu || []).join();
        var g = byKey[key];
        if (!g) { g = byKey[key] = { s: s, itu: it.itu, bands: [] }; groups.push(g); }
        if (it.band && cur.page.bands && cur.page.bands.length > 1) {
          var nm = String(bandNames[it.band] || it.band).replace(/\s*\(.*\)/, '');
          if (g.bands.indexOf(nm) < 0) g.bands.push(nm);
        }
      });
      return groups.map(function (g) {
        var bits = [g.s];
        if (g.itu && g.itu.length) bits.push('R' + g.itu.join('·R'));
        if (g.bands.length) bits.push(g.bands.join(', '));
        return bits.join(' · ');
      });
    }

    function evName(e, t) {
      var v = t('event.' + e.id);
      return v && v !== 'event.' + e.id ? v : e.label;
    }

    // ---- show
    function clearState() {
      HL.forEach(function (k) { layers[k].forEach(function (p) { p.classList.remove('on', 'hot'); }); });
      [1, 2, 3].forEach(function (n) { outEls[n].classList.remove('on', 'hot'); });
      Object.keys(labels).forEach(function (k) { labels[k].g.classList.remove('on', 'hot'); });
    }

    // An entry's places, split into the ones named whole and the ones only "partly" meant
    function isPartial(e, k) { return e.partial === true || (e.partial_places || []).indexOf(k) >= 0; }
    // Light (cls 'on') or emphasise (cls 'hot') the map shapes of one where entry
    // whole: places another entry names in full; there the full treatment wins and the dashed line shows only on hover
    var LAYER = { use: 'solid', plan: 'hatch', identified: 'tint' };
    function mark(e, cls, whole) {
      if (e.level === 'global') return;
      e.places.forEach(function (k) {
        if (!places[k]) return;
        var part = isPartial(e, k);
        var L = part ? (cls === 'on' && whole && whole[k] ? ['pm'] : ['part', 'pm']) : [LAYER[e.status] || 'tint'];
        places[k].a3.forEach(function (a) {
          (byA3[a] || []).forEach(function (j) { L.forEach(function (n) { if (n !== 'pm' || cls === 'on') layers[n][j].classList.add(cls); }); });
        });
        var m = /^itu([123])$/.exec(k);
        if (m && !part && e.status === 'identified') outEls[m[1]].classList.add(cls);
        labels[k].g.classList.add(cls);
      });
    }

    function setHot(i) {
      var e = i == null ? null : entries[i];
      root.classList.toggle('has-hot', !!e && e.level !== 'global');
      HL.forEach(function (k) { layers[k].forEach(function (p) { p.classList.remove('hot'); }); });
      [1, 2, 3].forEach(function (n) { outEls[n].classList.remove('hot'); });
      Object.keys(labels).forEach(function (k) { labels[k].g.classList.remove('hot'); });
      Array.prototype.forEach.call(ul.children, function (li, j) { li.classList.toggle('hot', j === i); });
      if (e) mark(e, 'hot');
    }

    function show(page, lang, t) {
      cur = { page: page, lang: lang, t: t };
      var T = function (k) { var v = t(k); return v == null || v === k ? '' : v; };
      root.dataset.group = page.group || 'mid';
      if (lang) root.setAttribute('lang', lang);
      hWhere.textContent = T('ui.where');
      hWhen.textContent = T('ui.when');
      clearState();
      root.classList.remove('has-hot');
      ul.textContent = '';
      entries = (page.where || []).map(function (w) {
        return { id: w.id, level: w.level, status: w.status || 'identified', places: w.places || [], partial: w.partial, partial_places: w.partial_places,
          text: T('where.' + page.id + '.' + w.id) || w.en || '' };
      });

      var isGlobal = false, names = [], whole = {};
      entries.forEach(function (e) { e.places.forEach(function (k) { if (e.level !== 'global' && !isPartial(e, k)) whole[k] = 1; }); });
      entries.forEach(function (e, i) {
        var li = html('li', '', ul);
        li.tabIndex = 0;
        var parts = e.places.filter(function (k) { return isPartial(e, k); }).length;
        if (parts < e.places.length || e.level === 'global') html('i', 'sm-sw sm-sw-' + e.status, li);
        if (parts) html('i', 'sm-sw sm-sw-partial', li);
        html('span', '', li).textContent = e.text;
        li.addEventListener('mouseenter', function () { setHot(i); });
        li.addEventListener('mouseleave', function () { setHot(null); });
        li.addEventListener('focus', function () { setHot(i); });
        li.addEventListener('blur', function () { setHot(null); });
        if (e.level === 'global') { isGlobal = true; return; }
        mark(e, 'on', whole);
        e.places.forEach(function (k) { if (places[k]) names.push(labelText(k)); });
      });
      if (isGlobal) layers.tint.forEach(function (p) { p.classList.add('on'); });   // identified worldwide: every land area tinted
      // "harmonised in some countries, none named" (e.g. 50 GHz): a last, muted row without a swatch
      var noneText = T('where.' + page.id + '.none');
      if (noneText && entries.length) html('li', 'sm-none', ul).textContent = noneText;
      var none = !entries.length;
      note.textContent = T('ui.legend.note');
      var capText = isGlobal ? T('ui.legend.global') : none ? noneText : '';
      cap.textContent = capText;
      cap.classList.toggle('on', !!capText);

      // legend
      var legKey = { use: 'ui.legend.use', plan: 'ui.legend.plan', identified: 'ui.legend.identified', partial: 'ui.legend.partial' };
      Object.keys(legItems).forEach(function (k) {
        var s = legItems[k];
        s.children[1].textContent = T(legKey[k]);
      });

      // aria summary (list below is the accessible equivalent)
      var summary = capText || names.join(', ');
      svg.setAttribute('aria-label', (T('ui.where') + (summary ? ': ' + summary : '')).trim());

      // timeline
      var byEv = {};
      (page.events || []).forEach(function (it) { (byEv[it.event] = byEv[it.event] || []).push(it); });
      var tlNames = [];
      evEls.forEach(function (o) {
        var items = byEv[o.e.id];
        o.g.classList.toggle('on', !!items);
        o.nm.textContent = o.full = evName(o.e, t);
        o.lb.textContent = '';
        o.lines = items ? timelineLines(items, t) : null;
        if (items) {
          o.lines.forEach(function (s) { el('tspan', null, o.lb).textContent = s; });
          tlNames.push(evName(o.e, t) + ' ' + o.lines.join('; '));
        }
      });
      tl.setAttribute('aria-label', (T('ui.when') + (tlNames.length ? ': ' + tlNames.join('; ') : '')).trim());

      layout();
    }

    // map -> list hover
    function mapOver(ev) {
      var a = ev.target && ev.target.dataset && ev.target.dataset.a3;
      if (!a) return;
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].level !== 'global' && placeA3(entries[i].places)[a]) { setHot(i); return; }
      }
    }
    [gTint, gHatch, gSolid, gPart].forEach(function (g) {
      g.addEventListener('pointerover', mapOver);
      g.addEventListener('pointerleave', function () { setHot(null); });
    });

    // resize
    if (typeof ResizeObserver !== 'undefined') {
      var ro = new ResizeObserver(function () { layout(); });
      ro.observe(wrap); ro.observe(tl);
    } else window.addEventListener('resize', layout);
    // first-time year labels etc. before any show()
    evEls.forEach(function (o) { o.nm.textContent = o.e.label || String(o.e.year); });
    layout();

    return { show: show, root: root };
  }

  var main = null;
  window.SpectrumMap = {
    create: create,
    init: function (el, data) { main = create(el, data); return main; },
    show: function (page, lang, t) { if (main) main.show(page, lang, t); }
  };
})();
