<!-- source: d2fcc409f896dd257f46f7f4d3a6ef8532e88438 -->
# Circuit Forge

> Fabrique les quatre circuits de contrôle de Mekanism à partir de lingots d'osmium, de redstone et des trois alliages, et garde les alliages en réserve dans la machine. Existe en quatre usines de 3, 5, 7 et 9 lignes.

| | |
|---|---|
| Type | Machine (un bloc), avec quatre usines : Basic, Advanced, Elite et Ultimate |
| Ajoutée en | 1.3 |
| Taille | 1 bloc |
| Lignes | Circuit Forge 1 ; Basic Circuit Forge Factory 3 ; Advanced 5 ; Elite 7 ; Ultimate 9 |
| Énergie | 100 J/t (40 FE/t) par ligne pendant qu'elle travaille ; 80 000 J (32 000 FE) stockés par la Circuit Forge (`circuit_forge.energyUsage` / `energyStorage`) |
| Améliorations | Vitesse, Énergie, Étouffement (Mekanism) |
| Configuration des faces | Oui (Mekanism) : objets et énergie |

## Ce qu'elle fait

La Circuit Forge fabrique les Circuits de contrôle de base, avancé, d'élite et ultime. Chaque circuit correspond à une recette :

| Circuit | Prend |
|---|---|
| Circuit de contrôle de base | 1 lingot d'osmium, 20 redstone |
| Circuit de contrôle avancé | 1 lingot d'osmium, 20 redstone, 2 alliages infusés |
| Circuit de contrôle d'élite | 1 lingot d'osmium, 20 redstone, 2 alliages infusés, 2 alliages renforcés |
| Circuit de contrôle ultime | 1 lingot d'osmium, 20 redstone, 2 alliages infusés, 2 alliages renforcés, 2 alliages atomiques |

Un circuit demande 200 ticks sans Mises à niveau de la vitesse.

Où va chaque chose :

- **Les lingots d'osmium** vont dans l'emplacement d'entrée (le rouge) d'une ligne.
- **La redstone** va dans la cellule de redstone, l'une des cellules orange, ou entre dans la machine par un tuyau. Son réservoir prend la redstone par toutes les faces.
- **Les trois alliages** vont chacun dans leur propre cellule orange, à la main, par tuyau ou par entonnoir. Chaque cellule ne prend que son alliage. La machine déplace
  ce que contient la cellule dans une **réserve** à l'intérieur du bloc, jusqu'à 64 de chaque alliage, et paie les recettes avec la réserve.

Un réglage se trouve sous les lignes :

- **Choix** (1 à 4) : le circuit que fabrique la forge. À 1, elle ne fabrique que des Circuits de contrôle de base ; à 4, des circuits ultimes.
  Une nouvelle machine démarre sur le niveau le plus haut. La forge attend que les réserves puissent payer le circuit choisi ; elle ne se rabat jamais
  sur un circuit moins cher, et l'écran d'état dit quelle réserve manque.

Un **bloc d'osmium** donne 9 circuits du palier Choix d'un coup, pour 9 fois la redstone et les alliages et deux fois le temps
d'un lingot : un peu plus lent que de le défaire en lingots à la main, tout en restant rapide.

**Lasers de Mekanism** : la forge et ses usines ne reçoivent le faisceau d'un Laser que sur leur **face arrière**, la face faite pour
cela, et aucun laser ne peut les creuser, quelle que soit la face touchée : un faisceau sur une autre face est absorbé et ne donne rien. Un
faisceau continu sur l'arrière les accélère, sans consommer plus d'énergie. Le bonus monte tant que le faisceau dure sans interruption : en
4 minutes, un **faisceau simple** (un Laser, ou un Amplificateur laser alimenté par un seul) le porte à +50 % de vitesse, un **faisceau amplifié**
(un Amplificateur laser alimenté par deux Lasers ou plus, pointé sur la face arrière) à +100 %, deux fois la vitesse. Le premier tick sans
faisceau fait retomber le bonus à zéro et la montée reprend du début : un amplificateur sur minuterie, qui tire par salves, n'apporte donc rien.
Le bonus n'est pas gardé quand le chunk se décharge.

Les recettes sont des recettes de datapack de type `mekanismengineering:circuit_forging`, donc un modpack peut les modifier.

## Fabrication

```
C O C
O S O
A M A
```

- **C**: Circuit de contrôle de base (`c:circuits/basic`), ×2
- **O**: Lingot d'osmium (`c:ingots/osmium`), ×3
- **S**: Boîtier en acier, ×1
- **M**: Infuseur métallurgique, ×1
- **A**: Alliage infusé (`mekanism:alloys/infused`), ×2

Résultat : 1 Circuit Forge.

## Les usines

Une usine est la Circuit Forge avec plusieurs lignes qui travaillent en même temps. Chaque ligne prend son propre osmium et livre ses propres
circuits ; toutes les lignes puisent dans **les mêmes réserves d'alliages et la même redstone**.

| Usine | Lignes | Circuits dans la recette | Cube d'énergie | Alliages (A) et lingot (I) |
|---|---|---|---|---|
| Basic Circuit Forge Factory | 3 | Circuit de contrôle de base | Cube d'énergie de base | Redstone, Lingot de fer |
| Advanced Circuit Forge Factory | 5 | Circuit de contrôle avancé | Cube d'énergie avancé | Alliage infusé, Lingot d'osmium |
| Elite Circuit Forge Factory | 7 | Circuit de contrôle d'élite | Cube d'énergie d'élite | Alliage renforcé, Lingot d'or |
| Ultimate Circuit Forge Factory | 9 | Circuit de contrôle ultime | Cube d'énergie ultime | Alliage atomique, Diamant |

Une usine se fabrique en **améliorant** la machine du palier inférieur dans une grille de fabrication. La Basic prend la Circuit Forge,
les autres prennent l'usine du dessous.

```
C E C
A F A
C I C
```

- **C**: 4 circuits de contrôle du palier (voir le tableau)
- **E**: le Cube d'énergie du palier
- **F**: la machine du dessous (Circuit Forge, puis Basic, Advanced et Elite Circuit Forge Factory)
- **A**: 2 alliages du palier et **I**: 1 lingot du palier, comme pour les usines de Mekanism (voir le tableau)

Rien n'est perdu dans la fabrication : les objets de la machine, les réserves et l'énergie, ainsi que les améliorations passent à la nouvelle machine.
Choix repart de sa valeur par défaut dans la nouvelle machine.

### Répartir les objets

Une usine a un onglet **Répartir** à gauche de son écran (désactivé par défaut). Activée, l'usine regarde ses emplacements d'entrée toutes les demi-secondes et déplace des lingots d'osmium entre ses lignes pour qu'elles finissent toutes à peu près en même temps. Rien n'est créé ni perdu, un circuit dont la fabrication a commencé reste où il est, et une ligne dont la sortie est pleine est laissée de côté. À utiliser quand on alimente l'usine à la main ou par un seul tuyau et que quelques lignes se retrouvent avec la plus grande partie du travail. Le réglage est enregistré avec la machine, mais pas dans l'objet obtenu en la cassant. La Circuit Forge seule n'a pas cet onglet.

## Premiers pas

1. Fabriquer la Circuit Forge (voir plus haut) et la poser.
2. Lui donner de l'énergie par la face arrière (un câble, ou un objet à énergie dans l'emplacement d'énergie).
3. Mettre des lingots d'osmium dans l'emplacement d'entrée rouge (face du dessus par défaut, ou à la main).
4. Mettre la redstone et les alliages dans les cellules orange (face gauche par défaut, ou à la main). Les alliages peuvent venir de l'[Alloy Forge](Alloy-Forge.md).
5. Régler Choix sur le circuit voulu, puis récupérer les circuits dans l'emplacement de sortie (faces droite et du dessous par défaut).

## L'interface

- **Bande d'état** (en haut) : « Inactif », « En marche », ou ce qui ne va pas (pas assez d'énergie, un ingrédient manquant, sortie pleine).
- **Rangée Choix** : des boutons pour le circuit à fabriquer.
- **Cellules orange et barres de réserve** : la cellule de redstone et les trois cellules d'alliage, avec la quantité en réserve (« En réserve : n / 64 »).
- **Lignes** : un emplacement d'entrée, une flèche de progression et un emplacement de sortie pour chaque ligne.
- **Onglet Répartir** (usines seulement, à gauche) : active ou coupe la répartition de l'osmium entre les lignes (survol : « Répartit les objets d'entrée entre les lignes libres. »).
- **Barre d'énergie et onglet d'énergie**, et les onglets propres à Mekanism : configuration des faces, améliorations, redstone et sécurité.
- **Onglet laser** (à droite, sous l'onglet de sécurité) : une jauge de 8 crans qui se remplit avec le bonus laser, un cran par tranche de 12,5 %, donc un faisceau simple s'arrête à la moitié (survol : le faisceau, par exemple « Faisceau laser amplifié : jusqu'à +100 % en 4 minutes », et la vitesse qu'il ajoute maintenant, par exemple « +75 % de vitesse »).

## Automatisation

Par défaut, les cellules orange sont à gauche, l'entrée sur le dessus, la sortie à droite et en dessous, et l'énergie à
l'arrière. Chaque face peut être réglée autrement dans la configuration des faces de Mekanism. Les circuits terminés sont éjectés par les faces de sortie.

Casser la machine donne un objet qui garde ses objets, ses réserves d'alliages, son énergie et ses améliorations ; casser une usine fait de même.
Une recette en cours de fabrication à ce moment-là est perdue.

## Configuration

Section `circuit_forge` de `mekanismengineering-server.toml` (voir [Configuration](Configuration.md)) :

| Clé | Défaut | Plage | Signification |
|---|---|---|---|
| `energyUsage` | 100 J/t | 0 à max | Énergie consommée par tick pendant que la Circuit Forge travaille. Une usine consomme cette valeur pour chaque ligne. |
| `energyStorage` | 80 000 J | 1 à max | Énergie que stocke la Circuit Forge. Une usine en stocke la moitié par ligne, et jamais moins qu'un tick de sa consommation. |

## Conseils et dépannage

- Les alliages ne sont pas consommés quand on les met dans une cellule : ils vont d'abord dans la réserve. Regarder les barres « En réserve » pour voir ce qui reste.
- Les circuits avancé, d'élite et ultime demandent des alliages : les fabriquer dans l'[Alloy Forge](Alloy-Forge.md).
- Une usine a un seul niveau Choix pour toutes ses lignes.
- Si quelques lignes d'une usine travaillent pendant que les autres attendent, activer **Répartir** (voir plus haut).
