---
title: "Accélération laser"
description: "Visez l'arrière d'une forge avec un Laser de Mekanism et elle chauffe peu à peu : jusqu'à deux fois plus vite, sans énergie en plus, tant que le faisceau ne s'arrête jamais."
sidebar:
  order: 3
  badge:
    text: Nouveau
    variant: tip
machine:
  id: "forge_laser_boost"
  family: "Fabrication"
  quantum: false
  structure: false
  model: "alloy_forge"
  isNew: true
---

Chaque [Alloy Forge](/fr/alloy-forge/) et [Circuit Forge](/fr/circuit-forge/), et chacune de leurs usines, peut
être accélérée avec les lasers de Mekanism. La vue ci-dessus le montre : choisissez un faisceau et regardez la forge
chauffer.

## Où va le faisceau

Une forge ne prend un faisceau que sur **sa face arrière**, la face spéciale avec la lentille ronde. Visez avec le Laser de
façon que son faisceau touche cette face.

Les cinq autres faces arrêtent quand même le faisceau, si bien qu'un laser égaré ne casse jamais une forge, mais elles ne
donnent aucune accélération.

## Comment l'accélération monte

L'accélération monte doucement tant que le faisceau reste allumé, et il lui faut **4 minutes sans la moindre coupure** pour
atteindre son maximum :

| Faisceau sur la face arrière | Après 4 minutes |
|---|---|
| Un Laser | +50 % de vitesse |
| Un Laser Amplifier alimenté par deux Lasers ou plus | +100 % de vitesse, deux fois plus vite |

- **Toute coupure la remet à zéro.** Au premier instant sans faisceau, l'accélération retombe à zéro et la montée reprend
  depuis le début. Un amplificateur qui ne tire que par salves sur minuterie ne donne donc rien : construisez un faisceau
  qui ne s'arrête jamais.
- **Faisceau plus faible, plafond plus bas.** Si un faisceau amplifié faiblit jusqu'à la force d'un seul Laser,
  l'accélération garde au plus +50 %.
- **Pas d'énergie en plus.** La forge consomme la même énergie par opération que sans faisceau ; ce sont les lasers qui
  paient le faisceau.
- **Pas sauvegardée.** Quand le chunk de la forge est déchargé puis rechargé, l'accélération repart de zéro.

## La suivre en jeu

L'écran de la forge a un onglet laser rouge sur sa droite. Sa jauge a 8 crans qui s'allument par le bas, un pour chaque
12,5 % d'accélération : un faisceau simple s'arrête donc à la moitié. Survolez l'onglet pour lire le faisceau et la
vitesse qu'il ajoute en ce moment.

<p class="me-gui not-content"><img src="/screens/gui/alloy_forge-fr.png" alt="L'onglet laser de l'Alloy Forge, à droite de son interface" width="456" height="390" loading="lazy" decoding="async"></p>
