// Mekanism Lasers on the Alloy Forge and the Circuit Forge. What the mod does, and where it is written (src/main/java/io/github/enzodr/mekanismengineering/):
// - integration/mekanism/forge/common/ForgeLaser.java: each tick with a beam adds to the boost, one unit for a single beam (about one laser of
//   usage.laser) and two for an amplified one (two lasers or more); RAMP_TICKS = 20 * 60 * 4, FULL = 2 * RAMP_TICKS, so both climbs are straight
//   lines that end after 4 minutes, a single beam at FULL / 2 (+50%), an amplified one at FULL (+100%). The first tick without a beam drops the
//   boost to 0. speedFactor = 1 + units / FULL. The forge uses no more energy for it.
// - client/gui/forge/common/GuiLaserTab.java: the laser tab of mock-up B (frozen by Enzo on 12 November 2026), 26 x 64 on the right of the
//   screen: a lens and 8 notches that light from the bottom, one for each 12.5%; its tooltip says the beam and "+x% speed" (lang: forge.laser.*).
//   The tab's picture here (public/anim/laser-tab.png) is cut from the client bench of 12 November 2026 (forge_alloy_forge_en_us_x3.png);
//   the lit notches are drawn over it with the tab's own rectangles and colours.
// - The forge takes a beam only on the special face at its back (body_back, the south face of the model that faces north; Enzo, 12 November
//   2026): one Laser there is a single beam, a Laser Amplifier fed by two Lasers or more an amplified one. So the view looks at the forge from
//   behind. Mekanism draws a beam as its red laser particles (particle/laser.png): a red line here, thicker for the amplified one.
//   The Laser and the Laser Amplifier take their blockstate turns (mekanism blockstates/laser*.json, the models point up).
// The view runs the 4 minutes in 12 seconds (TIME_SCALE), and says so.
import * as THREE from 'three';
import { caption } from './ui.js';
import { L, lang } from '../i18n.js';
import { loadFont, width, write } from './mcfont.js';

const RAMP = 20 * 60 * 4, FULL = 2 * RAMP;       // ForgeLaser, in ticks and units
const TIME_SCALE = 20;                           // 4 minutes of game in 12 seconds
const NOTCHES = 8, GAUGE_X = 7, GAUGE_Y = 19, GAUGE_W = 10, NOTCH_H = 4, NOTCH_STEP = 5;
const LIT = '#E81E16', CORE = '#FF7854', SPARK = '#FFE2BE';
const TAB_W = 26, TAB_H = 64;
const RED = 0xE81E16;

const TIPS = {
  en: { 0: 'No laser beam', 1: 'Single laser beam: up to +50% in 4 minutes', 2: 'Amplified laser beam: up to +100% in 4 minutes', speed: '+{n}% speed' },
  fr: { 0: 'Aucun faisceau laser', 1: "Faisceau laser simple : jusqu'à +50 % en 4 minutes", 2: "Faisceau laser amplifié : jusqu'à +100 % en 4 minutes", speed: '+{n} % de vitesse' },
};

export default async function setup({ stage, base, host, obj, still, BASE, choice }) {
  const { buildBlock } = await import('../mcmodel.js');
  const NORTH = { x: -90, y: 180 }, EAST = { x: -90, y: -90 };
  const place = async (model, turn, x, z) => { const o = await buildBlock(base, model, turn); o.position.set(x, 0, z); stage.root.add(o); return o; };
  // behind the forge (z = 3): one Laser, or a Laser Amplifier with a Laser on each side of it
  const laser = await place('mekanism:block/laser', NORTH, 0, 3);
  const amp = await place('mekanism:block/laser_amplifier', NORTH, 0, 3);
  const feeds = [await place('mekanism:block/laser', EAST, -2, 3), await place('mekanism:block/laser', NORTH, 0, 5)];
  const beamMat = new THREE.MeshBasicMaterial({ color: RED, transparent: true, opacity: 0.95, depthWrite: false });
  const glowMat = new THREE.MeshBasicMaterial({ color: 0xFF5A3C, transparent: true, opacity: 0.25, depthWrite: false, blending: THREE.AdditiveBlending });
  const beam = (a, b, thick) => {
    const g = new THREE.Group(), from = new THREE.Vector3(...a), to = new THREE.Vector3(...b), len = from.distanceTo(to);
    const core = new THREE.Mesh(new THREE.BoxGeometry(1, 1, len), beamMat), glow = new THREE.Mesh(new THREE.BoxGeometry(1, 1, len), glowMat);
    core.scale.set(thick / 16, thick / 16, 1); glow.scale.set(thick * 2.5 / 16, thick * 2.5 / 16, 1);
    g.add(core, glow); g.position.copy(from).lerp(to, 0.5); g.lookAt(to); g.renderOrder = 3; g.visible = false;
    stage.root.add(g);
    return g;
  };
  const single = beam([0.5, 0.5, 3], [0.5, 0.5, 1], 1.5);
  const amplified = [beam([0.5, 0.5, 3], [0.5, 0.5, 1], 2.5), beam([-1, 0.5, 3.5], [0, 0.5, 3.5], 1.5), beam([0.5, 0.5, 5], [0.5, 0.5, 4], 1.5)];
  const beams = [single, ...amplified];
  // seen from the side, a little in front: the front of the forge shows, and the Laser sits plainly behind it; framed with everything shown so that it never jumps
  stage.dir.set(Math.sign(stage.dir.x) || 1, 0.7, -0.3).normalize();
  stage.frame();

  // ---------- the state: the beam (0 none, 1 single, 2 amplified) and the boost in ForgeLaser units
  let kind = 0, units = 0;
  const percent = () => Math.floor(units * 100 / FULL);
  const cap = k => (k === 2 ? FULL : k === 1 ? FULL / 2 : 0);
  const tick = n => { if (!kind) { units = 0; return; } units = Math.min(units > cap(kind) ? cap(kind) : units + kind * n, cap(kind)); };

  // ---------- the laser tab, as the game draws it, on the right of the view (mock-up A, frozen by Enzo on 12 November 2026)
  const tabImg = await new Promise(ok => { const i = new Image(); i.onload = () => ok(i); i.onerror = () => ok(null); i.src = `${BASE}/anim/laser-tab.png`; });
  await loadFont(base);
  const wrap = document.createElement('div');
  wrap.className = 'me-lasertab'; wrap.setAttribute('aria-hidden', 'true');
  const canvas = document.createElement('canvas');
  wrap.append(canvas);
  host.append(wrap);
  const tips = TIPS[lang()] || TIPS.en;
  // as in the game, the tooltip shows only while the pointer is on the tab, to the left of it: it never hides the forge or the lasers
  let hover = false;
  const point = on => () => { hover = on; paintTab(); };
  canvas.addEventListener('pointerenter', point(true));
  canvas.addEventListener('pointerleave', point(false));
  function paintTab() {
    // interface scale 2; on a narrow view the tooltip is left out (the caption says the same)
    const s = 2, r = Math.min(window.devicePixelRatio || 1, 3), k = Math.max(1, Math.round(s * r)), tip = hover && host.clientWidth >= 560;
    const lines = [tips[kind], tips.speed.replace('{n}', percent())];
    const tipW = tip ? Math.max(...lines.map(width)) + 8 : 0, tipH = tip ? 2 * 10 + 6 : 0, gap = tip ? 4 : 0;
    const W = tipW + gap + TAB_W, H = TAB_H, tx = W - TAB_W, top = 0;
    canvas.width = W * k; canvas.height = H * k; canvas.style.width = W * s + 'px'; canvas.style.height = H * s + 'px';
    const g = canvas.getContext('2d'); g.imageSmoothingEnabled = false;
    const box = (x, y, w, h, c) => { g.fillStyle = c; g.fillRect(x * k, y * k, w * k, h * k); };
    if (tabImg) g.drawImage(tabImg, tx * k, top * k, TAB_W * k, TAB_H * k);
    const n = Math.floor(percent() * NOTCHES / 100), x = tx + GAUGE_X;
    for (let i = 0; i < n; i++) {
      const y = top + GAUGE_Y + (NOTCHES - 1 - i) * NOTCH_STEP;
      box(x, y, GAUGE_W, NOTCH_H, LIT); box(x + 3, y, 4, NOTCH_H, CORE);
      if (i === n - 1) box(x + 3, y, 4, 1, SPARK);
    }
    if (!tip) return;
    // the tooltip of the tab, as vanilla draws one (TooltipRenderUtil): dark violet back, purple frame
    const bg = 'rgba(16,0,16,0.94)', ox = 0;
    box(ox + 1, 0, tipW - 2, tipH, bg); box(ox, 1, tipW, tipH - 2, bg);
    box(ox + 1, 1, tipW - 2, 1, '#5000FF'); box(ox + 1, tipH - 2, tipW - 2, 1, '#28007F');
    box(ox + 1, 2, 1, tipH - 4, '#3C00BF'); box(ox + tipW - 2, 2, 1, tipH - 4, '#3C00BF');
    write(g, lines[0], (ox + 4) * k, 4 * k, '#FFFFFF', k, true);
    write(g, lines[1], (ox + 4) * k, 15 * k, '#55FF55', k, true);
  }

  // ---------- caption and controls
  const note = caption(host);
  let said = '';
  const say = () => {
    const fast = still ? '' : ' ' + L('(The view runs the 4 minutes in 12 seconds.)');
    const t = !kind ? L('No beam: the forge works at its own speed. A Mekanism Laser speeds it up only through the special face at its back; the first moment without a beam, the boost falls back to zero.')
      : percent() < cap(kind) * 100 / FULL ? (kind === 1
        ? L('One Laser on the back face: the boost climbs for as long as the beam stays on, up to +50% after 4 minutes.')
        : L('A Laser Amplifier fed by two Lasers or more, aimed at the back face: the boost climbs twice as fast, up to +100% after 4 minutes.')) + fast
      : kind === 1 ? L('Warmed up: +50% speed for as long as the beam stays on. The forge uses no more energy for it.')
      : L('Warmed up: +100%, twice the speed, for as long as the beam stays on. The forge uses no more energy for it.');
    if (t !== said) note.set(said = t);          // only when it says something new: the caption is read aloud
  };
  const show = () => {
    laser.visible = kind < 2; single.visible = kind === 1; amp.visible = kind === 2;
    for (const o of [...feeds, ...amplified]) o.visible = kind === 2;
    paintTab(); say(); stage.draw();
  };
  const ui = choice(L('Laser beam'), [[0, L('No beam')], [1, L('One Laser')], [2, L('Amplified beam')]], kind, v => {
    const was = kind; kind = Number(v);
    if (!kind) units = 0;
    else if (still) units = cap(kind);            // reduced motion: straight to where the climb ends
    else if (kind < was) units = Math.min(units, cap(kind));
    show();
  });

  // ---------- the clock: game ticks, sped up
  let lastPct = -1;
  if (!still) stage.live((now, dt) => {
    if (kind) { tick(dt / 50 * TIME_SCALE); beams.forEach(b => { b.children[1].material.opacity = 0.2 + 0.08 * Math.sin(now / 90); }); }
    if (percent() !== lastPct) { lastPct = percent(); paintTab(); say(); }
    return kind > 0;
  }, { fps: 30 });
  new ResizeObserver(() => paintTab()).observe(host);
  // the page opens on one Laser, its boost climbing
  kind = 1; units = still ? cap(1) : 0; ui.set(1);
  show();
}
