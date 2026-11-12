<!-- source: b43967c3d65dbed305b34cdf7be9b49a8d88bdbd -->
# Time Overclocker

> Accélère les blocs placés contre lui, machines comme cultures : 16 à 1 024 fois plus vite selon son palier. L'Overclocker répète le travail propre de la machine et consomme de l'énergie pour chaque tick ajouté.

| | |
|---|---|
| Type | Machine (un bloc) |
| Ajouté en | 1.3 |
| Taille | 1 bloc |
| Paliers | Basic (x16), Advanced (x32), Elite (x64), Ultimate (x256), Supraquantum (x1024) |
| Énergie | 100 J par tick supplémentaire qu'il produit ; le tampon contient le coût de trois secondes à la vitesse maximale du palier, jamais moins de 2 000 000 J (`max(2 MJ, (vitesse max − 1) × 100 J × 60)` : 2 MJ jusqu'à l'Ultimate, 6,14 MJ pour le Supraquantum) |
| Améliorations | aucune |
| Configuration des faces | Non : ses six faces sont les faces de son écran |

## Ce qu'il fait

Le Time Overclocker regarde les six blocs qui le touchent. Pour chacun de ceux qui sont autorisés, il rejoue le travail propre du bloc, dans le
même tick serveur, de sorte que le bloc fait en un tick ce qu'il ferait en seize (au palier Basic). La machine voisine n'est modifiée en rien :
elle ne sait pas qu'elle est accélérée, et elle cesse de l'être dès que l'Overclocker est retiré ou s'arrête.

Une plante n'a pas de travail propre à répéter : l'Overclocker lui donne donc des ticks aléatoires supplémentaires, le même genre de tick que le jeu donne à une culture ou à une pousse pour la faire grandir. La règle de jeu `randomTickSpeed` s'applique toujours : à 0, les plantes sont laissées tranquilles.

Les plantes reçoivent un **coup de pouce de croissance** en plus de la vitesse, puisque la vitesse seule ne fait que multiplier les ticks aléatoires. Ce coup de pouce suit la vitesse à laquelle l'Overclocker tourne :

| Vitesse | Ticks aléatoires dus à une plante (par rapport à une machine) | Blé, qui met environ 70 minutes seul |
|---|---|---|
| x16 (Basic) | x2 | environ 2 minutes |
| x32 (Advanced) | x3 | environ 45 secondes |
| x64 (Elite) | x4 | environ 17 secondes |
| x256 (Ultimate) | x6 | environ 3 secondes |
| x1024 (Supraquantum) | x8, et **les cultures sont aussitôt arrivées à maturité**, quelle que soit la vitesse | instantané |

À côté d'un Supraquantum, quelle que soit la vitesse à laquelle il tourne, le blé, les carottes, les pommes de terre, les betteraves (et toute culture construite comme elles), la verrue du Nether, le cacao et les baies sucrées sont amenés à leur dernier âge dans le tick même où l'Overclocker les regarde. Cela coûte autant que les ticks supplémentaires de la vitesse à laquelle il tourne (1 023 x 100 J à x1024), payés seulement quand la culture change réellement, et rien pour une culture déjà mûre. Les conditions de Minecraft restent : la culture doit être éclairée (lumière de 9 ou plus, pour les cultures qui en ont besoin), et un `randomTickSpeed` de 0 arrête toujours tout. Les pousses, la canne à sucre, les cactus et assimilés ne sont pas amenés à un état : ils reçoivent huit fois les ticks aléatoires, ce qui les fait pousser en une seconde ou deux. C'est le palier qui fait pousser les cultures d'un coup : un Supraquantum ralenti sur son écran, ou tenu sous x1024 par une ancienne configuration du serveur, le fait encore, et seul le coup de pouce du tableau suit la vitesse. Si le blé ne pousse pas d'un coup, vérifier qu'il est éclairé (lumière de 9 ou plus), que le tampon contient de l'énergie, et que `randomTickSpeed` n'est pas à 0. Les durées sont données pour le `randomTickSpeed` par défaut de 3.

Chaque tick supplémentaire coûte de l'énergie. Une machine accélérée à x16 reçoit quinze ticks supplémentaires par tick, donc un bloc coûte 1 500 J par tick.
L'Overclocker prend son énergie par n'importe quelle face, comme un Cube d'énergie, et son écran montre l'énergie qu'il paie par tick. Un emplacement de batterie sous la barre d'énergie recharge le tampon depuis une batterie ou un objet à énergie. L'animation du bloc ne joue que tant qu'il reçoit de l'énergie et qu'il accélère quelque chose.

> **Note :** le coût de 100 J par tick supplémentaire et le stockage minimal de 2 000 000 J ne sont pas des réglages du serveur en 1.3 ; le tampon des paliers supérieurs suit leur vitesse maximale comme indiqué plus haut.

L'Overclocker ne travaille que tant qu'il y est autorisé. Son écran nomme la raison quand ce n'est pas le cas :

| Message | Signification |
|---|---|
| Accélère *n* blocs | Il travaille |
| Rien à accélérer | Aucun voisin ne peut être accéléré |
| Pas assez d'énergie | Le tampon ne peut pas payer un tick supplémentaire |
| Arrêté par la redstone | Un signal de redstone l'arrête (onglet redstone de Mekanism) |
| Limite du serveur atteinte | La limite de ticks supplémentaires par tick fixée par le serveur est épuisée |
| Coupé par le serveur | Le serveur a coupé le Time Overclocker |

## Les règles

1. **Il n'accélère jamais un autre Time Overclocker, ni lui-même.**
2. **Un multibloc est accéléré une seule fois par tick**, quel que soit celui de ses blocs que touche l'Overclocker, et quel que soit le nombre d'Overclockers qui le touchent.
3. **Il y a une limite par tick serveur.** Tous les Overclockers d'un serveur ensemble peuvent ajouter au plus un nombre fixé de ticks supplémentaires en un
   tick serveur (20 000 par défaut). Au-delà, les machines ralentissent jusqu'au tick suivant. Cela évite qu'une foule d'Overclockers ne ralentisse le serveur.
4. **Le serveur a une liste noire** d'identifiants de blocs qui ne sont jamais accélérés. Par défaut, elle contient les blocs du réacteur à fission de Mekanism Generators et les éoliennes, les panneaux solaires et les panneaux solaires avancés ; le réacteur à fusion reste accéléré. Les plantes et tout le reste sont accélérés, sauf s'ils sont listés.
   **Les blocs qui ne font que transporter ou stocker de l'énergie ne sont jamais accélérés**, quoi que dise la liste noire : Câbles universels, Cubes d'énergie, Entangloporteurs quantiques et Matrice d'induction. Les blocs d'énergie d'un autre mod vont dans le tag de bloc `mekanismengineering:overclocker_blacklist`.
5. **Il n'agit que sur une machine qui travaille.** Une machine Mekanism qui signale qu'elle est inactive (pas d'entrée, pas d'énergie, arrêtée) n'est ni répétée ni payée, et l'Overclocker indique qu'il n'y a rien à accélérer. Les blocs qui ne le signalent pas (fours, multiblocs, autres mods) sont accélérés comme avant.
6. Un bloc qui lève une erreur pendant qu'il est accéléré est laissé tranquille pendant 200 ticks (10 secondes).
7. **Un [Quantum Digital Miner](Quantum-Digital-Miner.md) mine au plus 32 blocs par tick de jeu**, quel que soit le nombre de fois que l'Overclocker le fait tourner
   (`quantum_miner.maxBlocksPerGameTick`, un réglage du serveur, de 1 à 1 024). Au-delà, le mineur ne paie plus d'énergie pour le tick et garde la progression acquise pour le suivant.

## Faces et vitesse

- **Faces :** l'écran montre les six faces (Nord, Sud, Est, Ouest, Haut, Bas). Cliquer sur une face pour la couper ou la réactiver. Une face coupée n'est pas
  accélérée. L'infobulle d'une face dit pourquoi elle ne peut pas être accélérée : un autre Overclocker, la liste noire du serveur, ou l'interrupteur du serveur.
  Les interrupteurs sont enregistrés avec le bloc, et un Overclocker cassé les emporte : reposé, il a les mêmes faces coupées.
- **Vitesse :** les boutons Plus vite et Moins vite choisissent la vitesse. Les vitesses sont x16, x32, x64, x256 et x1024, et un palier propose celles jusqu'à la sienne, donc le
  Basic Overclocker ne propose que x16 et le Supraquantum les cinq. Un Overclocker cassé garde la vitesse choisie ; un neuf démarre à la vitesse maximale de son palier.

## Fabrication

```
U O U
T C T
U A U
```

- **U**: Circuit de contrôle ultime (`c:circuits/ultimate`), ×4
- **O**: Pastille de polonium (`c:pellets/polonium`), ×1
- **T**: Noyau de téléportation, ×2
- **C**: Cube d'énergie ultime, ×1
- **A**: Alliage atomique (`mekanism:alloys/atomic`), ×1

Résultat : 1 Basic Time Overclocker. C'est volontairement un bloc de fin de jeu ; l'antimatière n'arrive qu'avec le palier Advanced.

Chaque palier supérieur se fabrique à partir du palier inférieur, gardé au milieu de la grille (`X`) :

| Palier | Vitesse | Motif | Ingrédients |
|---|---|---|---|
| Advanced | x32 | `APA / UXU / ATA` | Alliage atomique (A) x4, Pastille d'antimatière (P) x1, Noyau de téléportation (T) x1, Circuit de contrôle ultime (U) x2, Basic Overclocker (X) |
| Elite | x64 | `TUT / PXP / TUT` | Noyau de téléportation (T) x4, Circuit de contrôle ultime (U) x2, Pastille d'antimatière (P) x2, Advanced Overclocker (X) |
| Ultimate | x256 | `PQP / TXT / PQP` | Pastille d'antimatière (P) x4, Entangloporteur quantique (Q) x2, Noyau de téléportation (T) x2, Elite Overclocker (X) |
| Supraquantum | x1024 | `PLP / QXQ / PZP` | Pastille d'antimatière (P) x4, Entangloporteur quantique (Q) x2, Disque OQO dilateur de temps (Z) x1, Matrice de focalisation laser (L), Ultimate Overclocker (X) |

> La Matrice de focalisation laser vient de Mekanism Generators. Un Entangloporteur quantique déjà configuré (fréquence, réglages des faces) peut quand même servir dans ces recettes ; il est consommé. Le Disque OQO dilateur de temps du Supraquantum est consommé lui aussi : **utilisez un disque vide**, les objets qu'il contient seraient perdus. Sans Mekanism Generators, la recette du Supraquantum prend à la place le Verre structurel de Mekanism (le jeu charge l'une des deux recettes, jamais les deux).

## Configuration

Section `overclocker` de `mekanismengineering-server.toml` (voir [Configuration](Configuration.md)) :

| Clé | Défaut | Plage | Signification |
|---|---|---|---|
| `enabled` | true | true / false | Interrupteur général. Désactivé, les Overclockers déjà posés ne font rien et indiquent que le serveur les a coupés, et la recette de fabrication du Basic Time Overclocker est retirée. La recette suit l'interrupteur au démarrage du serveur (un rechargement automatique des datapacks si l'interrupteur est désactivé) et à chaque `/reload` ; les paliers supérieurs ont besoin du Basic comme ingrédient. Seule cette recette est masquée : les Overclockers qu'un joueur possède déjà restent dans l'inventaire et peuvent encore être posés (ils ne font rien), et les recettes d'amélioration des paliers supérieurs ne sont pas touchées. |
| `maxMultiplier` | 1024 | 1 à 1 024 | Vitesse maximale qu'un Overclocker peut donner, quoi que son palier permette. |
| `maxExtraTicksPerServerTick` | 20 000 | 0 à 1 000 000 | Nombre maximal de ticks supplémentaires que tous les Overclockers ensemble peuvent ajouter en un tick serveur. |
| `blacklist` | les 5 blocs du réacteur à fission et les 3 générateurs sans combustible | liste d'identifiants de blocs | Identifiants de blocs qui ne sont jamais accélérés, un identifiant par entrée (par exemple `"mekanismgenerators:fission_reactor_casing"`). Par défaut : `"mekanismgenerators:fission_reactor_casing"`, `"mekanismgenerators:fission_reactor_port"`, `"mekanismgenerators:fission_reactor_logic_adapter"`, `"mekanismgenerators:fission_fuel_assembly"` `"mekanismgenerators:control_rod_assembly"`, `"mekanismgenerators:wind_generator"`, `"mekanismgenerators:solar_generator"` et `"mekanismgenerators:advanced_solar_generator"` (ils ne brûlent rien, donc des ticks répétés produiraient de l'énergie gratuite) ; le réacteur à fusion reste accéléré. Un fichier de configuration généré avant ce défaut garde son ancienne valeur (une liste vide) et doit être modifié à la main. Un Overclocker n'est jamais accéléré, quoi que dise cette liste. |

## Conseils et dépannage

- « Rien à accélérer » : l'Overclocker doit toucher une machine qui a un travail propre à répéter ; vérifier les faces coupées.
- « Limite du serveur atteinte » : sur un serveur qui a beaucoup d'Overclockers, interroger l'administrateur au sujet de `maxExtraTicksPerServerTick`.
- Une plante à côté de l'Overclocker ne pousse pas plus vite : vérifier que le tampon contient de l'énergie, que la face n'est pas coupée, et que la règle de jeu `randomTickSpeed` n'est pas à 0.
