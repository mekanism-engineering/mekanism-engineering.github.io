<!-- source: e553c2f2e4b1bb19f43f6e9bd2974efcb50946a1 -->
# Alloy Forge

> Un Infuseur métallurgique renforcé pour les alliages : un lingot de cuivre (un lingot de fer en Minecraft 1.20.1) devient un alliage infusé, renforcé ou atomique dans une seule machine, avec trois réservoirs à remplir. Existe en quatre usines de 3, 5, 7 et 9 lignes.

| | |
|---|---|
| Type | Machine (un bloc), avec quatre usines : Basic, Advanced, Elite et Ultimate |
| Ajoutée en | 1.3 |
| Taille | 1 bloc |
| Lignes | Alloy Forge 1 ; Basic Alloy Forge Factory 3 ; Advanced 5 ; Elite 7 ; Ultimate 9 |
| Énergie | 100 J/t (40 FE/t) par ligne pendant qu'elle travaille ; 80 000 J (32 000 FE) stockés par l'Alloy Forge (`alloy_forge.energyUsage` / `energyStorage`) |
| Améliorations | Vitesse, Énergie, Étouffement (Mekanism) |
| Configuration des faces | Oui (Mekanism) : objets et énergie |

## Ce qu'elle fait

L'Alloy Forge fait pour les alliages ce que fait l'Infuseur métallurgique de Mekanism, dans une seule machine et à la chaîne. Elle a trois
**réservoirs**, un pour chaque type d'infusion : **Redstone**, **Diamant** et **Obsidienne raffinée**. On les remplit par trois
**emplacements orange** ; chaque emplacement orange ne prend que les objets de son propre réservoir (survoler un emplacement : « N'accepte que ... »), et
les transforme en infusion comme le fait l'Infuseur métallurgique de Mekanism.

Un lingot de cuivre placé dans l'emplacement d'entrée passe par trois étapes au plus, une recette après l'autre. En Minecraft 1.20.1, la première étape prend un lingot de fer à la place, comme le fait Mekanism 10.4 :

| Étape | Prend | Donne |
|---|---|---|
| 1 | un lingot de cuivre (un lingot de fer en 1.20.1) et 10 redstone | un alliage infusé |
| 2 | un alliage infusé et 20 diamant | un alliage renforcé |
| 3 | un alliage renforcé et 40 obsidienne raffinée | un alliage atomique |

Les quantités sont celles de Mekanism. Une étape dure 100 ticks sans Mises à niveau de la vitesse, donc un lingot de cuivre mené jusqu'à l'alliage
atomique demande 300 ticks. Un alliage infusé ou renforcé placé dans l'emplacement d'entrée continue à partir de là où il en est. Un objet déjà au niveau
**Choix** réglé, ou sans recette, reste dans l'emplacement d'entrée.

Un **bloc de cuivre** (un bloc de fer en 1.20.1) donne 9 alliages d'un coup : chaque étape demande 9 fois l'infusion et deux fois le
temps d'un lingot (200 ticks), donc le bloc est un peu plus lent que de le défaire en lingots à la main, tout en restant rapide.

**Lasers de Mekanism** : la forge et ses usines reçoivent le faisceau d'un Laser au lieu d'être creusées par lui, et un faisceau continu
les accélère, sans consommer plus d'énergie. Le bonus monte tant que le faisceau dure sans interruption : en 4 minutes, un **faisceau simple** (un
Laser, ou un Amplificateur laser alimenté par un seul) le porte à +50 % de vitesse, un **faisceau amplifié** (qui vaut deux lasers ou plus : un
Amplificateur laser alimenté par deux Lasers ou plus, ou deux Lasers pointés sur la machine) à +100 %, deux fois la vitesse. Le premier tick sans
faisceau fait retomber le bonus à zéro et la montée reprend du début : un amplificateur sur minuterie, qui tire par salves, n'apporte donc rien.
Le bonus n'est pas gardé quand le chunk se décharge.

Un réglage se trouve sous les lignes :

- **Choix** (1 à 3) : la dernière étape que la forge accomplit. À 1, elle s'arrête à l'alliage infusé ; à 3, elle va jusqu'à l'alliage atomique. Une nouvelle
  machine démarre sur le niveau le plus haut. La forge ne travaille que si les réservoirs contiennent tout ce que demande le niveau Choix ; elle ne s'arrête jamais
  en deçà, et la bande d'état dit quel réservoir manque.

Les recettes sont des recettes de datapack de type `mekanismengineering:alloy_forging`, donc un modpack peut les modifier. La famille de l'entrée
et les objets qui remplissent chaque réservoir sont lus dans les recettes Mekanism du pack lui-même, pas écrits dans la machine.

## Fabrication

```
I S I
C M C
I A I
```

- **I**: n'importe quel Lingot de fer (`c:ingots/iron`), ×4
- **S**: Boîtier en acier, ×1
- **C**: n'importe quel Circuit de contrôle de base (`c:circuits/basic`), ×2
- **M**: Infuseur métallurgique, ×1
- **A**: n'importe quel Alliage infusé (`mekanism:alloys/infused`), ×1

Résultat : 1 Alloy Forge.

## Les usines

Une usine est l'Alloy Forge avec plusieurs lignes qui travaillent en même temps. Toutes ses lignes puisent dans **un seul jeu de trois
réservoirs**, qui contiennent une part (1 000 mB) par ligne.

| Usine | Lignes | Circuits dans la recette | Cube d'énergie | Alliages (A) et lingot (I) |
|---|---|---|---|---|
| Basic Alloy Forge Factory | 3 | Circuit de contrôle de base | Cube d'énergie de base | Redstone, Lingot de fer |
| Advanced Alloy Forge Factory | 5 | Circuit de contrôle avancé | Cube d'énergie avancé | Alliage infusé, Lingot d'osmium |
| Elite Alloy Forge Factory | 7 | Circuit de contrôle d'élite | Cube d'énergie d'élite | Alliage renforcé, Lingot d'or |
| Ultimate Alloy Forge Factory | 9 | Circuit de contrôle ultime | Cube d'énergie ultime | Alliage atomique, Diamant |

Une usine se fabrique en **améliorant** la machine du palier inférieur dans une grille de fabrication. La Basic prend l'Alloy Forge,
les autres prennent l'usine du dessous.

```
C E C
C P C
A I A
```

- **C**: 4 circuits de contrôle du palier (voir le tableau)
- **E**: le Cube d'énergie du palier
- **P**: la machine du dessous (Alloy Forge, puis Basic, Advanced et Elite Alloy Forge Factory)
- **A**: 2 alliages du palier et **I**: 1 lingot du palier, comme pour les usines de Mekanism (voir le tableau)

Rien n'est perdu dans la fabrication : les objets de la machine (les emplacements orange et les lignes), les réservoirs et l'énergie, ainsi que les
améliorations passent à la nouvelle machine. Choix repart de sa valeur par défaut dans la nouvelle machine.

### Répartir les objets

Une usine a un onglet **Répartir** à gauche de son écran (désactivé par défaut). Activée, l'usine regarde ses emplacements d'entrée toutes les demi-secondes et déplace des objets entre ses lignes pour qu'elles finissent toutes à peu près en même temps. Les objets ne sont déplacés qu'entre les emplacements d'entrée des lignes : rien n'est créé ni perdu, un objet dont l'étape a déjà commencé reste où il est, et une ligne dont la sortie est pleine est laissée de côté. À utiliser quand on alimente l'usine à la main ou par un seul tuyau et que quelques lignes se retrouvent avec la plus grande partie du travail. Le réglage est enregistré avec la machine, mais pas dans l'objet obtenu en la cassant. L'Alloy Forge seule n'a pas cet onglet.

## Premiers pas

1. Fabriquer l'Alloy Forge (voir plus haut) et la poser.
2. Lui donner de l'énergie par la face arrière (un câble, ou un objet à énergie dans l'emplacement d'énergie).
3. Mettre des lingots de cuivre (des lingots de fer en 1.20.1) dans l'emplacement d'entrée (face gauche par défaut, ou à la main).
4. Remplir les trois réservoirs : mettre de la redstone, de la poussière de diamant et de la poussière d'obsidienne raffinée (les objets que l'Infuseur métallurgique de Mekanism prend
   pour ces infusions) dans les trois emplacements orange, ou les envoyer dans la face orange (le dessus par défaut).
5. Régler le niveau Choix, puis récupérer les alliages dans l'emplacement de sortie (face droite par défaut).

## L'interface

- **Bande d'état** (en haut) : « Inactif », « En marche », ou ce qui ne va pas : « Pas assez d'énergie », « Vide : *nom* » ou « Sortie
  pleine ».
- **Rangée Choix** : des boutons pour le niveau Choix (survol : « Désiré : » et le nom de l'alliage, par exemple « Désiré : Alliage infusé »).
- **Emplacements orange et barres de réservoir** : trois emplacements, avec une barre pour chaque réservoir empilée à côté. Des silhouettes grises des
  objets acceptés défilent dans un emplacement orange vide.
- **Lignes** : un emplacement d'entrée, une flèche de progression et un emplacement de sortie pour chaque ligne.
- **Onglet Répartir** (usines seulement, à gauche) : active ou coupe la répartition des objets d'entrée entre les lignes (survol : « Répartit les objets d'entrée entre les lignes libres. »).
- **Barre d'énergie et onglet d'énergie** : l'énergie stockée, avec l'avertissement habituel de Mekanism en cas d'énergie faible ; l'emplacement d'énergie prend un objet rechargeable.
- **Onglet laser** (à droite, sous l'onglet de sécurité) : une jauge de 8 crans qui se remplit avec le bonus laser, un cran par tranche de 12,5 %, donc un faisceau simple s'arrête à la moitié (survol : le faisceau, par exemple « Faisceau laser amplifié : jusqu'à +100 % en 4 minutes », et la vitesse qu'il ajoute maintenant, par exemple « +75 % de vitesse »).
- Les onglets propres à Mekanism : configuration des faces, améliorations, redstone et sécurité.

## Automatisation

Par défaut, l'entrée est à gauche, la sortie à droite, les emplacements orange sur le dessus et l'énergie à l'arrière. Chaque face
peut être réglée autrement dans la configuration des faces de Mekanism. Un objet envoyé dans une face orange va tout seul dans l'emplacement orange de
sa famille ; quand il n'y a pas de place, il reste dehors. Les alliages terminés sont éjectés par les faces de sortie.

Casser la machine donne un objet qui garde ses objets, ses réservoirs, son énergie et ses améliorations ; casser une usine fait de même.

## Configuration

Section `alloy_forge` de `mekanismengineering-server.toml` (voir [Configuration](Configuration.md)) :

| Clé | Défaut | Plage | Signification |
|---|---|---|---|
| `energyUsage` | 100 J/t | 0 à max | Énergie consommée par tick pendant que l'Alloy Forge travaille. Une usine consomme cette valeur pour chaque ligne qu'elle fait tourner. |
| `energyStorage` | 80 000 J | 1 à max | Énergie que stocke l'Alloy Forge. Une usine en stocke la moitié par ligne, et jamais moins qu'un tick de sa consommation. |

## Conseils et dépannage

- « Vide : *nom* » nomme le réservoir qui bloque la forge : le remplir par son emplacement orange.
- Une usine a un seul niveau Choix pour toutes ses lignes.
- Si quelques lignes d'une usine travaillent pendant que les autres attendent, activer **Répartir** (voir plus haut).
- La Circuit Forge garde des alliages en réserve pour ses circuits : voir la [Circuit Forge](Circuit-Forge.md).
