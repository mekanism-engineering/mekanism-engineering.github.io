// The big additions of a version that the site puts forward: a card on the home page, a banner under the page header and the
// section itself drawn as a feature (src/lib/rehype-features.mjs). Each one names its page and the heading of its section in
// the wiki, as the import writes them; every summary below only repeats that section's own text. When the heading is no longer
// on the page, nothing is shown.
export const FEATURES = [
  {
    page: 'quantum-digital-miner',
    version: '1.2',
    icon: 'quantum_digital_miner',
    // real screens of the game (the mod's client GUI bench, 1.21.1, GUI scale 4), one animation and its four pictures:
    // public/screens/quick-filters-<en|fr>.gif and -1.png to -4.png
    screens: 'screens/quick-filters',
    en: {
      heading: 'Quick filters and saved filter lists',
      anchor: 'quick-filters-and-saved-filter-lists',
      badge: 'New in 1.2',
      machine: 'Quantum Digital Miner',
      title: 'Quick filters and saved filter lists',
      lead: 'Two shortcuts in the New filter window: ready-made ore tag filters, and filter lists saved under a name to load on any miner. Only the filter list changes, every other setting stays as it is.',
      cards: [
        ['Quick filters', 'Ready-made ore tag filters: iron, gold, coal and redstone, plus copper, lapis, diamond, emerald, tin, lead, osmium and uranium when their tag exists. <b>Replace</b> the list with one, or <b>Add</b> it at the end; ores from other mods are included.'],
        ['Configurations', '<b>Save current filters</b> under a name, then load the list on any miner with Replace or Add. Your own library, in the world or on the server: up to 32 lists of 128 filters.'],
      ],
      shots: ['The New filter window starts with Quick filters and Configurations', 'Quick filters: Coal chosen, its tag c:ores/coal, Replace or Add', 'Add: “Coal added (1 filter)”, the filter is in the list', 'Configurations: the list saved as “Charbon”, ready to load on any miner'],
      alt: 'The Quick filters in game: the New filter window, Coal chosen and added, then the list saved under a name',
      more: 'How it works',
      open: 'Discover quick filters',
    },
    fr: {
      heading: 'Filtres rapides et listes de filtres enregistrées',
      anchor: 'filtres-rapides-et-listes-de-filtres-enregistrées',
      badge: 'Nouveau en 1.2',
      machine: 'Quantum Digital Miner',
      title: 'Filtres rapides et listes de filtres enregistrées',
      lead: 'Deux raccourcis dans la fenêtre Nouveau filtre : des filtres par tag de minerai tout prêts, et des listes de filtres enregistrées sous un nom, à charger sur n’importe quel mineur. Seule la liste des filtres change ; tous les autres réglages restent tels quels.',
      cards: [
        ['Filtres rapides', 'Des filtres par tag de minerai tout prêts : fer, or, charbon et redstone, puis cuivre, lapis, diamant, émeraude, étain, plomb, osmium et uranium quand leur tag existe. <b>Remplacer</b> la liste par l’un d’eux, ou l’<b>Ajouter</b> à la fin ; les minerais des autres mods sont inclus.'],
        ['Configurations', '<b>Enregistrer les filtres actuels</b> sous un nom, puis charger la liste sur n’importe quel mineur avec Remplacer ou Ajouter. Votre propre bibliothèque, dans le monde ou sur le serveur : jusqu’à 32 listes de 128 filtres.'],
      ],
      shots: ['La fenêtre Nouveau filtre commence par Filtres rapides et Configurations', 'Filtres rapides : Charbon choisi, son tag c:ores/coal, Remplacer ou Ajouter', 'Ajouter : « Charbon ajouté (1 filtre) », le filtre est dans la liste', 'Configurations : la liste enregistrée sous « Charbon », prête à charger sur n’importe quel mineur'],
      alt: 'Les filtres rapides en jeu : la fenêtre Nouveau filtre, Charbon choisi et ajouté, puis la liste enregistrée sous un nom',
      more: 'Voir le fonctionnement',
      open: 'Découvrir les filtres rapides',
    },
  },
];

// The home page's block for the current point release (1.3.1): no new machine, so no card with a picture, only a short strip of what
// changed, then a link to its release notes. Every text only repeats the 1.3.1 release notes (changelog/1-3-1), and only its gains.
// The block is shown while the notes page exists (the French one when translated, otherwise the English one).
export const UPDATE = {
  version: '1.3.1',
  changelog: 'changelog/1-3-1',
  en: { eyebrow: 'Updated in 1.3.1', title: 'Sturdier Machines, Sharper Screens',
    lead: 'No new machine this time. The forges, the Time Overclocker, the Quantum machines and the refinery were corrected and tested again, on Minecraft 1.21.1 and 1.20.1.',
    all: 'Read the 1.3.1 release notes →' },
  fr: { eyebrow: 'Mis à jour en 1.3.1', title: 'Sturdier Machines, Sharper Screens',
    lead: 'Pas de nouvelle machine cette fois. Les forges, le Time Overclocker, les machines Quantum et la raffinerie ont été corrigés et retestés, sur Minecraft 1.21.1 et 1.20.1.',
    all: 'Lire les notes de la 1.3.1 →' },
  items: [
    {
      en: { badge: 'New', family: 'Industrial Fluid Pump', title: 'Fluids of other mods', say: 'Any fluid a bucket can pick up can now be pumped. A server can switch this off, or forbid single fluids.' },
      fr: { badge: 'Nouveau', family: 'Industrial Fluid Pump', title: 'Les fluides des autres mods', say: 'Tout fluide qu’un seau peut ramasser peut désormais être pompé. Un serveur peut couper cela, ou interdire certains fluides.' },
    },
    {
      en: { badge: 'New', family: 'Quantum machines', title: 'Several windows at once', say: 'The frequency and faces windows of the Receiver, the Chargepad and the Entangloporter, and the Miner’s source windows, can stay open together.' },
      fr: { badge: 'Nouveau', family: 'Machines Quantum', title: 'Plusieurs fenêtres à la fois', say: 'Les fenêtres de fréquence et de faces du Receiver, du Chargepad et de l’Entangloporter, et les fenêtres de sources du Miner, peuvent rester ouvertes ensemble.' },
    },
    {
      en: { badge: 'New', family: 'JEI and EMI', title: 'Recipes one click away', say: 'Click the progress arrow of a forge or a factory to open its recipes. In EMI, each part of the refinery structure is a slot of its own.' },
      fr: { badge: 'Nouveau', family: 'JEI et EMI', title: 'Les recettes à un clic', say: 'Cliquez sur la flèche de progression d’une forge ou d’une usine pour ouvrir ses recettes. Dans EMI, chaque partie de la structure de la raffinerie a son propre emplacement.' },
    },
    {
      en: { badge: 'Improved', family: 'Time Overclocker', title: 'Only works when it should', say: 'An idle machine is neither repeated nor paid for, a second Overclocker says the block is already served, and a mod that forbids crop growth is respected.' },
      fr: { badge: 'Amélioré', family: 'Time Overclocker', title: 'Il n’agit que quand il faut', say: 'Une machine inactive n’est ni répétée ni payée, un second Overclocker dit que le bloc est déjà servi, et un mod qui interdit la croissance des cultures est respecté.' },
    },
    {
      en: { badge: 'Faster', family: 'Performance', title: 'Lighter on the server', say: 'Measured against 1.3.0 on 1.21.1: an idle Upgrade Controller costs 85 to 91 % less, an idle Industrial Fluid Pump about 35 % less.' },
      fr: { badge: 'Plus rapide', family: 'Performances', title: 'Plus léger pour le serveur', say: 'Mesuré contre la 1.3.0 en 1.21.1 : un Upgrade Controller au repos coûte 85 à 91 % de moins, une Industrial Fluid Pump au repos environ 35 % de moins.' },
    },
    {
      en: { badge: 'Polish', family: 'Screens', title: 'Sharper screens', say: 'The refinery’s tabs are in place from the first frame, forge messages fit their strip, and the configuration screen has readable names on 1.21.1.' },
      fr: { badge: 'Finitions', family: 'Écrans', title: 'Des écrans plus nets', say: 'Les onglets de la raffinerie sont en place dès la première image, les messages des forges tiennent dans leur bande, et l’écran de configuration a des noms lisibles en 1.21.1.' },
    },
  ],
};

// The home page's "What's new" block: big cards for the new machines, a strip of smaller items, then a link to the version's
// changelog. Every text only repeats the machines' own pages and the 1.3 changelog. A card is shown while its page exists
// (the French one when translated, otherwise the English one); `more` is an optional second page of the same card.
export const NEWS = {
  version: '1.3',
  changelog: 'changelog/1-3',
  en: { eyebrow: 'What’s new in 1.3', title: 'Time Overclocker, Alloy and Circuit Forges', also: 'Also in 1.3', all: 'See everything new in 1.3 →' },
  fr: { eyebrow: 'Nouveautés de la 1.3', title: 'Time Overclocker, Alloy Forge et Circuit Forge', also: 'Aussi en 1.3', all: 'Voir toutes les nouveautés de la 1.3 →' },
  // real screens of the game: public/screens/<name>-<en|fr>.gif and -1.png (the still picture for reduced motion)
  cards: [
    {
      page: 'time-overclocker',
      screens: 'screens/overclocker',
      width: 560, height: 503,
      en: {
        badge: 'New machine', family: 'Acceleration', title: 'Time Overclocker',
        lead: 'Accelerates the six blocks around it, machines and crops alike, by up to 1,024 times. It runs on energy and leaves the accelerated block unchanged.',
        alt: 'The Time Overclocker in game, beside a machine',
        points: [
          ['Five tiers, x16 to x1024', 'Basic x16, Advanced x32, Elite x64, Ultimate x256 and Supraquantum x1024. Each tier can also run at a lower speed, selected on its screen.'],
          ['Machines and crops', 'Machines complete several operations per tick. Crops receive additional growth ticks and mature instantly beside a Supraquantum.'],
          ['Built for servers', 'Each face can be disabled individually. Servers set a global cap on extra ticks and a blacklist of blocks that are never accelerated.'],
        ],
        open: 'Discover the Time Overclocker',
      },
      fr: {
        badge: 'Nouvelle machine', family: 'Accélération', title: 'Time Overclocker',
        lead: 'Accélère les six blocs qui l’entourent, machines comme cultures, jusqu’à 1 024 fois. Il consomme de l’énergie et ne modifie pas le bloc accéléré.',
        alt: 'Le Time Overclocker en jeu, à côté d’une machine',
        points: [
          ['Cinq paliers, de x16 à x1024', 'Basic x16, Advanced x32, Elite x64, Ultimate x256 et Supraquantum x1024. Chaque palier peut aussi fonctionner à une vitesse inférieure, réglable depuis son écran.'],
          ['Machines et cultures', 'Les machines effectuent plusieurs opérations par tick. Les cultures reçoivent des ticks de croissance supplémentaires et arrivent à maturité instantanément à côté d’un Supraquantum.'],
          ['Pensé pour les serveurs', 'Chaque face se désactive individuellement. Le serveur fixe un plafond global de ticks supplémentaires et une liste noire de blocs jamais accélérés.'],
        ],
        open: 'Découvrir le Time Overclocker',
      },
    },
    {
      page: 'alloy-forge',
      more: 'circuit-forge',
      screens: 'screens/forges',
      width: 560, height: 388,
      en: {
        badge: 'New machines', family: 'Crafting', title: 'Alloy Forge and Circuit Forge',
        lead: 'Two dedicated machines for Mekanism’s alloys and control circuits, each available as a factory with 3, 5, 7 or 9 parallel lines.',
        alt: 'The Alloy Forge and the Circuit Forge in game',
        points: [
          ['Alloy Forge', 'Produces infused, reinforced and atomic alloy in a single machine. The target alloy is selected on its screen; three internal reservoirs hold the materials.'],
          ['Circuit Forge', 'Produces all four control circuits, Basic to Ultimate, from osmium, redstone and the three alloys held in its internal reserves.'],
          ['Four factory tiers', 'Basic, Advanced, Elite and Ultimate. Upgrading to the next tier preserves the machine’s contents, energy and upgrades.'],
        ],
        open: 'Discover the Alloy Forge',
        openMore: 'Discover the Circuit Forge',
      },
      fr: {
        badge: 'Nouvelles machines', family: 'Fabrication', title: 'Alloy Forge et Circuit Forge',
        lead: 'Deux machines dédiées aux alliages et aux circuits de contrôle de Mekanism, chacune déclinée en usines de 3, 5, 7 ou 9 lignes parallèles.',
        alt: 'L’Alloy Forge et la Circuit Forge en jeu',
        points: [
          ['Alloy Forge', 'Produit les alliages infusé, renforcé et atomique dans une seule machine. L’alliage voulu se sélectionne sur son écran ; trois réservoirs internes stockent les matériaux.'],
          ['Circuit Forge', 'Produit les quatre circuits de contrôle, de base à ultime, à partir d’osmium, de redstone et des trois alliages stockés dans ses réserves internes.'],
          ['Quatre paliers d’usine', 'Basic, Advanced, Elite et Ultimate. Le passage au palier supérieur conserve le contenu, l’énergie et les améliorations de la machine.'],
        ],
        open: 'Découvrir l’Alloy Forge',
        openMore: 'Découvrir la Circuit Forge',
      },
    },
  ],
  // the small strip under the cards
  alsoItems: [
    {
      en: { badge: 'New', family: 'Recipe viewers', title: 'EMI support', say: 'Optional, alongside JEI: recipe categories for both forges, the refinery’s 3D view and an information page for every block.' },
      fr: { badge: 'Nouveau', family: 'Visionneuses de recettes', title: 'Prise en charge d’EMI', say: 'Facultative, au même titre que JEI : catégories de recettes des deux forges, vue 3D de la raffinerie et page d’information pour chaque bloc.' },
    },
    {
      en: { badge: 'Faster', family: 'Quantum Digital Miner', title: 'Twice as fast', say: 'Now eight times the speed of Mekanism’s Digital Miner, at half the previous energy per block. Existing worlds keep any custom setting.' },
      fr: { badge: 'Plus rapide', family: 'Quantum Digital Miner', title: 'Deux fois plus rapide', say: 'Désormais huit fois plus rapide que le Mineur digital de Mekanism, pour deux fois moins d’énergie par bloc qu’avant. Les mondes existants conservent leurs réglages personnalisés.' },
    },
    {
      en: { badge: 'Polish', family: 'Visuals', title: 'Visual fixes', say: 'A cleaner Home tab on the refinery, flush port plates on the Entangloporter and the Network Controller, and refined Fluid Pump and Synthesis Plant models.' },
      fr: { badge: 'Finitions', family: 'Visuels', title: 'Corrections visuelles', say: 'Onglet Accueil de la raffinerie plus net, ports affleurants sur l’Entangloporter et le Contrôleur de réseau, modèles de la pompe à fluide et de la Synthesis Plant retravaillés.' },
    },
  ],
};

/** The features of a page (its id without the fr/ prefix) in language `lng`, each with its texts merged in. */
export const featuresOf = (page, lng) => FEATURES.filter(f => f.page === page).map(f => ({ ...f, ...f[lng === 'fr' ? 'fr' : 'en'] }));

/** True when the page's Markdown still has the feature's heading (the import may rename or drop a section). */
export const hasSection = (body, f) => new RegExp(`^#{2,4} +${f.heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} *$`, 'm').test(body || '');

/** A small funnel, the sign of a filter, drawn in the current text colour. */
export const FILTER_ICON = '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 5h17l-6.6 7.6v5.6l-3.8 1.9v-7.5z"/></svg>';
