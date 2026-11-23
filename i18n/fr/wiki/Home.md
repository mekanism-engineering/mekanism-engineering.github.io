<!-- source: a9f36e2b5b8a0f88aa4709806b88c8eb5c62b00d -->
# Mekanism: Engineering

> Des outils d'ingénierie pour les usines Mekanism : minage à distance, raffinage du minerai sur toute la chaîne, distribution précise des objets, améliorations d'usine, pompage de fluides à grande échelle, synthèse de roches, forge d'alliages et de circuits, et suraccélération des machines.

**Mekanism: Engineering** est un addon **non officiel** de [Mekanism](https://www.curseforge.com/minecraft/mc-mods/mekanism), pour Minecraft 1.21.1 avec NeoForge et pour Minecraft 1.20.1 avec Forge ou NeoForge. Il n'est ni affilié à l'équipe de Mekanism, ni approuvé ni produit par elle ; il ajoute de nouveaux blocs et objets qui fonctionnent aux côtés de ceux de Mekanism.

## Installation

Télécharger la dernière version sur [CurseForge](https://www.curseforge.com/minecraft/mc-mods/mekanism-engineering).

Installer ces éléments **à la fois sur le client et sur le serveur** : ce n'est pas un addon réservé au serveur ou au client.

| Composant | Minecraft 1.21.1 | Minecraft 1.20.1 |
|---|---|---|
| Minecraft Java Edition | 1.21.1 exactement | 1.20.1 exactement |
| Java | 21 | 17 |
| Chargeur | NeoForge 21.1.200 jusqu'à 21.2 exclu | Forge 47.2.0 ou plus récent (testé sur 47.2.0 et 47.4.28), ou NeoForge 47.1.106 (Forge 47.1.x n'est pas pris en charge) |
| Mekanism | 10.7.15 jusqu'à 10.7.24 exclu | 10.4.13 à 10.4.16 |

Chaque version de Minecraft a son propre fichier. Le fichier 1.21.1 ne vise que NeoForge, comme Mekanism.

Mettre les jars de Mekanism et de Mekanism: Engineering dans `mods/`. Ne garder qu'une seule version de chaque mod. Mekanism Generators, Tools et Additions sont facultatifs. Une version de Mekanism hors de la plage acceptée est refusée au démarrage au lieu d'être chargée. En 1.21.1, les cinq builds officielles, de la 10.7.15 à la 10.7.19, sont celles qui sont prises en charge ; la 10.7.20 à la 10.7.23 est l'édition non officielle Mekanism Overclocked, qui se charge aussi : ces versions sont acceptées, mais sans garantie.

La prise en charge de [JEI, EMI, Jade et WTHIT](JEI-Jade-WTHIT.md) est **facultative** elle aussi : si l'un d'eux est installé, l'addon y ajoute ses recettes et ses affichages ; sans eux, rien ne change.

Notes de version : les [notes de la 1.3.1](../releases/1.3.1.md) listent ce qui a changé dans la version actuelle, et les [notes de la 1.3](../releases/1.3.md), de la [1.2.1](../releases/1.2.1.md) et de la [1.2.0](../releases/1.2.md) celles d'avant ; les [notes de la 1.1.0](../releases/1.1.0.md) listent les builds de Mekanism, JEI, Jade et WTHIT avec lesquels cette version a été testée. Les [notes de la 1.0.0](../releases/1.0.0.md) retracent la première version stable.

## Ce qu'il ajoute

### Minage

- **[Quantum Digital Miner](Quantum-Digital-Miner.md)** : le successeur de fin de jeu du Mineur digital : mêmes filtres et réglages, rayon jusqu'à 128, vitesse de minage multipliée par huit, et énergie ou objets acheminés par les fréquences quantiques.
- **[Digital Miner Companion](Digital-Miner-Companion.md)** : lier un Mineur digital ou un Quantum Digital Miner, préparer ses filtres et sa configuration, et le démarrer, le mettre en pause ou le réinitialiser à distance, tant que son chunk est chargé et que les permissions le permettent.

### Raffinage du minerai

- **[Quantum Ore Refinery](Quantum-Ore-Refinery.md)** *(Ajoutée en 1.2.0)* : un multibloc de 10 × 4 × 3 qui exécute en une seule étape les cinq chaînes de traitement du minerai de Mekanism, si bien qu'un minerai donne jusqu'à cinq lingots, avec un module Quantum/QIO facultatif qui envoie les produits directement sur le réseau. [Structure et pièces](Quantum-Ore-Refinery-Structure.md) montre la construction couche par couche, avec chaque recette.

### Réseau quantique

- **[Récepteur d'énergie quantique](Quantum-Energy-Receiver.md)** *(Ajouté en 0.6)* : une fine plaque, de Basic à Ultimate, qui puise l'énergie d'une fréquence Quantum existante pour la machine sur laquelle elle est posée.
- **[Quantum Entangloporter radioactif](Radioactive-Quantum-Entangloporter.md)** *(Ajouté en 0.6, refait en 1.2.0)* : un transport blindé réservé aux chemicals radioactifs, sur ses propres fréquences radioactives, avec son propre tampon et sa propre énergie.
- **[Contrôleur de réseau quantique](Quantum-Network-Controller.md)** *(Ajouté en 0.6)* : une vue en lecture seule d'une fréquence quantique : ce qui entre, ce qu'elle contient, ce qui sort, et quelles familles d'appareils y puisent.
- **[Tablette de réseau quantique](Quantum-Network-Tablet.md)** *(Ajoutée en 1.2.0)* : l'écran du Contrôleur, dans la main.

### Téléportation

- **[Quantum Portable Teleporter](Quantum-Portable-Teleporter.md)** *(Ajouté en 0.7)* : un téléporteur portatif fonctionnant sur batterie : sauter vers la fréquence d'un Téléporteur de Mekanism, vers des coordonnées vérifiées, ou vers un endroit sûr choisi au hasard, loin.

### Recharge

- **[Quantum Chargepad](Quantum-Chargepad.md)** *(Ajouté en 0.7)* : la Plaque de rechargement de Mekanism au rythme de la fin de jeu : tous les objets à énergie portés se rechargent en même temps, l'armure d'abord, depuis un câble ou (depuis la 1.2.0) depuis une fréquence quantique.

### Fluides et roches

- **[Industrial Fluid Pump](Quantum-Fluid-Pump.md)** : une pompe de fin de jeu de 3 × 3 × 3, alimentée par un réseau de Tuyaux mécaniques, qui pompe de l'eau sans fin, de la lave, et de l'eau lourde avec une Mise à niveau du filtre.
- **[Petrogenic Synthesizer](Petrogenic-Synthesizer.md)** : fabrique de la pierre, de l'obsidienne, du basalte, du granite et d'autres roches à partir d'eau et de lave, un produit à la fois.
- **[Petrogenic Synthesis Plant](Petrogenic-Synthesis-Plant.md)** : fait tourner huit lignes de synthèse à la fois ; ses modules Hydro Condenser Upgrade et Magma Synthesizer Upgrade peuvent produire sa propre eau et sa propre lave à partir d'énergie.

### Forges et suraccélération

- **[Alloy Forge](Alloy-Forge.md)** *(Ajoutée en 1.3)* : un Infuseur métallurgique renforcé pour les alliages : un lingot de cuivre devient un alliage infusé, puis renforcé, puis atomique dans une seule machine, avec trois réservoirs à remplir. Quatre usines font tourner 3, 5, 7 ou 9 lignes.
- **[Circuit Forge](Circuit-Forge.md)** *(Ajoutée en 1.3)* : fabrique les quatre circuits de contrôle de Mekanism à partir de lingots d'osmium, de redstone et des trois alliages, et garde les alliages en réserve dans la machine. Quatre usines font tourner 3, 5, 7 ou 9 lignes.
- **[Basic Time Overclocker](Time-Overclocker.md)** *(Ajouté en 1.3)* : le poser à côté d'une machine, et la machine tourne seize fois plus vite (jusqu'à 1 024 fois avec le palier Supraquantum), contre de l'énergie.

### Logistique d'usine

- **[Precision Logistical Distributor](Precision-Logistical-Distributor.md)** : répartit les objets de son tampon vers ses faces de sortie, en parts exactes, équilibrées ou pondérées.
- **[Contrôleur d'améliorations de précision](Precision-Upgrade-Controller.md)** : contient les améliorations Mekanism de toute une usine et les installe dans les machines qui l'entourent.

### Intégrations facultatives

- **[JEI, EMI, Jade et WTHIT](JEI-Jade-WTHIT.md)** *(Ajouté en 1.1.0 ; EMI en 1.3)* : des catégories de recettes et des pages d'informations dans JEI et dans EMI, et un affichage compact sur chaque machine dans Jade et WTHIT. Les quatre sont facultatifs.

## Premiers pas

Nouveau sur le mod ? [Premiers pas](Getting-Started.md) présente les règles communes à toutes les machines (configuration des faces, améliorations, sécurité, données des machines cassées). [Configuration](Configuration.md) liste chaque réglage du serveur et l'unique réglage du client. La [FAQ](FAQ.md) répond aux questions courantes.

## Assistance

- Aide aux joueurs et façon de signaler un problème : [SUPPORT.md](https://gitlab.com/enzodr/mekanism-engineering/-/blob/main/SUPPORT.md).
- Suivi des tickets (rapports de bugs, questions, demandes de fonctionnalités) : [work items GitLab](https://gitlab.com/enzodr/mekanism-engineering/-/work_items).
