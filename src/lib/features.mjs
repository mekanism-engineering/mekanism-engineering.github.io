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
        lead: 'Place it next to a machine or a crop and it works several times as fast, for energy. The machine itself is not changed.',
        alt: 'The Time Overclocker in game, beside a machine',
        points: [
          ['Five tiers, x16 to x1024', 'Basic x16, Advanced x32, Elite x64, Ultimate x256, Supraquantum x1024. Pick any speed up to the tier’s own on its screen.'],
          ['Machines and crops', 'A machine repeats its own work in the same tick; plants get extra random ticks, and beside a Supraquantum crops are fully grown at once.'],
          ['Safe by default', 'Six faces you can switch off, a server limit on extra ticks, a blacklist of blocks never sped up.'],
        ],
        open: 'Discover the Time Overclocker',
      },
      fr: {
        badge: 'Nouvelle machine', family: 'Accélération', title: 'Time Overclocker',
        lead: 'Posez-le à côté d’une machine ou d’une culture : elle travaille plusieurs fois plus vite, contre de l’énergie. La machine elle-même n’est pas modifiée.',
        alt: 'Le Time Overclocker en jeu, à côté d’une machine',
        points: [
          ['Cinq paliers, de x16 à x1024', 'Basic x16, Advanced x32, Elite x64, Ultimate x256, Supraquantum x1024. Choisissez sur son écran n’importe quelle vitesse jusqu’à celle du palier.'],
          ['Machines et cultures', 'Une machine répète son propre travail dans le même tick ; les plantes reçoivent des ticks aléatoires supplémentaires, et à côté d’un Supraquantum les cultures arrivent aussitôt à maturité.'],
          ['Sûr par défaut', 'Six faces que l’on peut désactiver, une limite serveur sur les ticks supplémentaires, une liste noire de blocs jamais accélérés.'],
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
        lead: 'Mekanism’s alloys and control circuits, made in one machine each, and in chains of 3, 5, 7 or 9 lines.',
        alt: 'The Alloy Forge and the Circuit Forge in game',
        points: [
          ['Alloy Forge', 'A copper ingot becomes an infused, a reinforced or an atomic alloy, up to the Desired level you pick, from three reservoirs.'],
          ['Circuit Forge', 'Basic to Ultimate control circuits from osmium, redstone and the three alloys, which it keeps in reserve.'],
          ['Four factories each', 'Basic, Advanced, Elite and Ultimate, upgraded step by step without losing what the machine holds.'],
        ],
        open: 'Discover the Alloy Forge',
        openMore: 'Discover the Circuit Forge',
      },
      fr: {
        badge: 'Nouvelles machines', family: 'Fabrication', title: 'Alloy Forge et Circuit Forge',
        lead: 'Les alliages et les circuits de contrôle de Mekanism, fabriqués chacun dans une seule machine, et en chaînes de 3, 5, 7 ou 9 lignes.',
        alt: 'L’Alloy Forge et la Circuit Forge en jeu',
        points: [
          ['Alloy Forge', 'Un lingot de cuivre devient un alliage infusé, renforcé ou atomique, jusqu’au niveau souhaité que vous choisissez, à partir de trois réservoirs.'],
          ['Circuit Forge', 'Les circuits de contrôle de base à ultime, à partir d’osmium, de redstone et des trois alliages, qu’elle garde en réserve.'],
          ['Quatre usines chacune', 'Basic, Advanced, Elite et Ultimate, améliorées pas à pas sans perdre ce que contient la machine.'],
        ],
        open: 'Découvrir l’Alloy Forge',
        openMore: 'Découvrir la Circuit Forge',
      },
    },
  ],
  // the small strip under the cards
  alsoItems: [
    {
      en: { badge: 'New', family: 'Recipe viewers', title: 'EMI support', say: 'Optional, like JEI: forging categories, the refinery’s 3D view and an information page for every block.' },
      fr: { badge: 'Nouveau', family: 'Visionneuses de recettes', title: 'Prise en charge d’EMI', say: 'Facultative, comme JEI : catégories des forges, vue 3D de la raffinerie et une page d’information pour chaque bloc.' },
    },
    {
      en: { badge: 'Faster', family: 'Quantum Digital Miner', title: 'Twice as fast', say: 'Eight times Mekanism’s Digital Miner, at half the energy per block. Existing worlds are moved once.' },
      fr: { badge: 'Plus rapide', family: 'Quantum Digital Miner', title: 'Deux fois plus rapide', say: 'Huit fois le Mineur digital de Mekanism, pour moitié moins d’énergie par bloc. Les mondes existants sont migrés une seule fois.' },
    },
    {
      en: { badge: 'Polish', family: 'Visuals', title: 'Visual fixes', say: 'Refinery home tab, closed port plates on the Entangloporter and the Controller, Fluid Pump and Synthesis Plant models.' },
      fr: { badge: 'Finitions', family: 'Visuels', title: 'Corrections visuelles', say: 'Onglet Accueil de la raffinerie, plaques de ports fermées sur l’Entangloporter et le Contrôleur, modèles de la pompe à fluide et de la Synthesis Plant.' },
    },
  ],
};

/** The features of a page (its id without the fr/ prefix) in language `lng`, each with its texts merged in. */
export const featuresOf = (page, lng) => FEATURES.filter(f => f.page === page).map(f => ({ ...f, ...f[lng === 'fr' ? 'fr' : 'en'] }));

/** True when the page's Markdown still has the feature's heading (the import may rename or drop a section). */
export const hasSection = (body, f) => new RegExp(`^#{2,4} +${f.heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} *$`, 'm').test(body || '');

/** A small funnel, the sign of a filter, drawn in the current text colour. */
export const FILTER_ICON = '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 5h17l-6.6 7.6v5.6l-3.8 1.9v-7.5z"/></svg>';
