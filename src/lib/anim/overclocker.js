// Time Overclocker. What the game shows, and where it is written:
//  - A working Overclocker draws its active model, <tier>_time_overclocker (blockstates: active=true; active=false is <tier>_time_overclocker_off,
//    which does not move). The side and top textures of that model are strips of 18 frames at 2 ticks a frame (time_overclocker/<tier>_side.png
//    and _top.png with their .mcmeta): one loop of the animation lasts 1.8 seconds.
//  - The five tiers are five models: Basic (x16), Advanced (x32), Elite (x64), Ultimate (x256) and Supraquantum (x1024).
// The view plays the game's own loop, and every 5 loops the block becomes the next tier, up to the Supraquantum, then the Basic again
// (Enzo, 12 November 2026). With reduced motion nothing moves: the Basic tier stays on its first picture.
import { caption } from './ui.js';
import { L, num } from '../i18n.js';
import { textureAnimator } from '../mcmodel.js';

const TIERS = [['basic', 'Basic', 16], ['advanced', 'Advanced', 32], ['elite', 'Elite', 64], ['ultimate', 'Ultimate', 256], ['supraquantum', 'Supraquantum', 1024]];
const LOOPS = 5;

export default async function setup({ stage, base, host, obj, still, buildBlock }) {
  const blocks = [obj];                    // the page shows the Basic tier; the four others wait, hidden, so that a change never pops in late
  for (const [id] of TIERS.slice(1)) {
    const o = await buildBlock(base, `mekanismengineering:block/${id}_time_overclocker`);
    o.visible = false; stage.root.add(o); blocks.push(o);
  }
  const anims = blocks.map(o => textureAnimator(o));
  let loop = 36 * 50;                      // one loop of the strip, read from its .mcmeta
  obj.traverse(o => { const a = o.material?.map?.userData.anim; if (a) loop = a.total * 50; });
  const note = caption(host, '');
  let shown = -1;
  const show = i => {
    if (i === shown) return false;
    blocks.forEach((o, k) => { o.visible = k === i; });
    shown = i;
    const [, name, x] = TIERS[i];
    note.set(L('{name} Time Overclocker: the machine next to it runs {x} times as fast. Every 5 loops of its animation, the view moves to the next tier.', { name: L(name), x: num(x) }));
    return true;
  };
  show(0);
  if (still) { anims[0](0); stage.draw(); return; }
  let t0 = null;
  stage.live(now => {
    t0 ??= now;
    const t = now - t0, changed = show(Math.floor(t / (loop * LOOPS)) % TIERS.length);
    return anims[shown](t) || changed;
  }, { fps: 30 });
}
