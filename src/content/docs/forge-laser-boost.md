---
title: "Laser boost"
description: "Aim a Mekanism Laser at the back of a forge and it slowly warms up: up to twice as fast, for no extra energy, as long as the beam never stops."
sidebar:
  order: 3
  badge:
    text: New
    variant: tip
machine:
  id: "forge_laser_boost"
  family: "Crafting"
  quantum: false
  structure: false
  model: "alloy_forge"
  isNew: true
---

Every [Alloy Forge](/alloy-forge/) and [Circuit Forge](/circuit-forge/), and every one of their factories, can be sped up
with Mekanism's own lasers. The view above shows it: pick a beam and watch the forge warm up.

## Where the beam goes

A forge takes a beam on **its back face only**, the special face with the round lens. Aim the Laser so that its beam hits
that face.

The five other faces still catch a beam, so a stray laser never breaks a forge, but they give no boost.

## How the boost grows

The boost climbs slowly while the beam stays on, and it needs **4 minutes without a single break** to reach its top:

| Beam on the back face | After 4 minutes |
|---|---|
| One Laser | +50% speed |
| A Laser Amplifier fed by two Lasers or more | +100% speed, twice as fast |

- **Any break resets it.** The first moment without a beam drops the boost to zero, and the climb starts again. An
  amplifier that only fires in bursts on a timer therefore gives nothing: build a beam that never stops.
- **Weaker beam, lower cap.** If an amplified beam weakens to the strength of one Laser, the boost keeps at most +50%.
- **No extra energy.** The forge uses the same energy per operation as without a beam; the lasers pay for the beam.
- **Not saved.** When the forge's chunk is unloaded and loaded again, the boost starts again from zero.

## Watch it in game

The forge's screen has a red laser tab on its right side. Its gauge has 8 notches that light from the bottom, one for each
12.5% of boost, so a single beam stops at half. Hover over the tab to read the beam and the speed it adds now.
