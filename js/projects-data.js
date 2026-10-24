/**
 * Game Portfolio - Projects Data
 * Real project catalog for Mateusz Szwarc
 */

export const projects = [
  {
    id: "prism-of-darkness",
    title: "Prism of Darkness",
    tagline: "Turn-based combat | Fantasy",
    category: "unreal",
    engine: "Unreal Engine 5",
    engineIcon: "assets/icons/Unrealicon.png",
    thumbnail: "assets/images/PrismOfDarkness.mp4",
    pageUrl: "prism-of-darkness.html",
    metaLine1: "| Turn Based Combat | Fantasy |",
    metaLine2: "| One month | PC | Team Size: 8 |",
    metaLine3: "| System Designer | Animation Implementation | UI programming |",
    itchUrl: "",
    isSoon: true,
    quickStats: [
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Duration", value: "1 Month" },
      { label: "Team Size", value: "8 Developers" },
      { label: "Platform", value: "PC" }
    ],
    summary: "An upcoming tactical fantasy turn-based combat game developed in Unreal Engine 5. Strategic ability timing, dynamic character animations, and intuitive tactical interface.",
    myRoles: [
      "System Designer",
      "Animation Implementation",
      "UI Programming"
    ],
    designPillars: [
      "Dark fantasy world",
      "Epic quality attack sequences",
      "Turn base system with Quick time events."
    ],
    systems: [
      "3 different characters to play.",
      "Turn based combat.",
      "Over 30 sequences across game.",
      "6 Different maps",
      "Loading screen",
      "Complex UI system",
      "Status effects, enemy and hero types"
    ],
    highlights: [
      "System Designer: Formulating tactical turn-based combat systems, ability interactions, and action economy.",
      "Animation Implementation: Implementing responsive animation state trees, combat montages, and hit-reaction feedback in Unreal Engine 5.",
      "UI Programming: Designing and programming tactical combat interfaces, turn-order trackers, and ability selection HUDs."
    ]
  },
  {
    id: "overbrewed",
    title: "Overbrewed",
    tagline: "Magic shop simulator | Multiplayer",
    category: "unreal",
    engine: "Unreal Engine 5",
    engineIcon: "assets/icons/Unrealicon.png",
    thumbnail: "assets/images/Overbrewed.gif",
    pageUrl: "overbrewed.html",
    metaLine1: "| Magic shop simulator | Multiplayer |",
    metaLine2: "| Two month | PC | Team Size: 12 |",
    metaLine3: "| System Designer | VFX |",
    itchUrl: "https://futuregames.itch.io/overbrewed",
    quickStats: [
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Duration", value: "2 Months" },
      { label: "Team Size", value: "12 Developers" },
      { label: "Platform", value: "PC" }
    ],
    summary: "A multiplayer magic shop simulator where players coordinate arcane ingredients, brew magical potions under pressure, and manage a chaotic storefront.",
    myRoles: [
      "System Designer",
      "VFX Artist"
    ],
    designPillars: [
      "Local co-op game working on few PCs at once.",
      "Choose one of roles : Alchemist or Shopkeeper.",
      "Receive order , cooperate with your teammate to finish it before customer get inpatient."
    ],
    systems: [
      "Players can pick up, carry, and throw items.",
      "Multiplayer game architecture.",
      "Queue system for NPC.",
      "Each station offers a different interaction."
    ],
    highlights: [
      "In game, we have 5 different types of magic: Fire, Wind, Earth, Water, and Heal.",
      "Dynamic potion brewing system with ingredient combining and reaction feedback.",
      "Programmed custom Niagara particle visual effects for shiny, dynamic, and explosive reactions on screen.",
      "Store system balancing and cooperative task management under customer deadlines."
    ]
  },
  {
    id: "catsmith",
    title: "Catsmith",
    tagline: "Local co-op crafting game | Management | Multiplayer",
    category: "unreal",
    engine: "Unreal Engine 5",
    engineIcon: "assets/icons/Unrealicon.png",
    thumbnail: "assets/images/Catsmith.gif",
    pageUrl: "catsmith.html",
    metaLine1: "| Management | Multiplayer |",
    metaLine2: "| Two month | PC | Team Size: 11 |",
    metaLine3: "| PO | Lead Designer | VFX | AI Programmer |",
    itchUrl: "https://futuregames.itch.io/catsmith",
    quickStats: [
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Duration", value: "2 Months" },
      { label: "Team Size", value: "11 Developers" },
      { label: "Platform", value: "PC" }
    ],
    summary: "Catsmith is a local co-op crafting game. Work together to manage a bustling forge, fulfill customer commissions, and master the rhythm of crafting through communication, coordination, and teamwork.",
    myRoles: [
      "Product Owner",
      "VFX Artist",
      "Lead Designer",
      "AI Programmer",
      "Level Design"
    ],
    designPillars: [
      "Local co-op.",
      "Craft recipies solo or together.",
      "Make sure customers leave with their order completed."
    ],
    systems: [
      "Fast paced minigames different from each other.",
      "Order management.",
      "Two different AI state trees for Customers and Master."
    ],
    highlights: [
      "Local multiplayer cooperative gameplay loop.",
      "Fast-paced minigames different from each other.",
      "Order management system.",
      "Particle system for responsive visual feedback.",
      "Two different AI state trees for Customers and Master."
    ]
  },
  {
    id: "wastemancer",
    title: "Wastemancer",
    tagline: "Fast-paced magical arcade action game",
    category: "unity",
    engine: "Unity",
    engineIcon: "assets/icons/Unityicon.png",
    thumbnail: "assets/images/Wastemancer.gif",
    pageUrl: "wastemancer.html",
    metaLine1: "| Fast Paced | Arcade game |",
    metaLine2: "| One month | PC / Console | Team Size: 11 |",
    metaLine3: "| Narrative, Level Designer | VFX |",
    itchUrl: "https://futuregames.itch.io/wastemancer",
    quickStats: [
      { label: "Engine", value: "Unity" },
      { label: "Duration", value: "1 Month" },
      { label: "Team Size", value: "11 Developers" },
      { label: "Platform", value: "PC / Console" }
    ],
    summary: "An arcade game that's easy to learn but hard to master, designed for people to jump in and enjoy.",
    myRoles: [
      "Narrative Design",
      "Level Design",
      "VFX Art"
    ],
    designPillars: [
      "Fast paced gameplay.",
      "Easy to learn, hard to master.",
      "Achieve the highest score possible."
    ],
    systems: [
      "Imput combination.",
      "Random enemy spawn.",
      "Attack combination and cooldown.",
      "Score based system."
    ],
    highlights: [
      "VFX Art: Created textures and meshes in Photoshop & Blender, built shaders, and programmed them in the VFX Graph.",
      "Designed 5 magic types: Fire, Wind, Earth, Water, and Heal. Collaborated with programmers so Earth and Water attacks count depending on enemy position.",
      "Narrative Design: Explained the combat system, why the world looks the same despite magic, and why monsters are encountered as trash, boosting team creativity.",
      "Level Design: Designed the combat arena on paper, built the blockout, populated the area with artists, set up lighting, tweaked camera, and tuned post-processing."
    ]
  },
  {
    id: "necromeowcy",
    title: "Necromeowcy",
    tagline: "Necromancer simulator with town management | 1-week game jam",
    category: "unity",
    engine: "Unity",
    engineIcon: "assets/icons/Unityicon.png",
    thumbnail: "assets/images/Necromeowcy.gif",
    pageUrl: "necromeowcy.html",
    metaLine1: "| Strategy | Management |",
    metaLine2: "| One week | PC | Team Size: 9 |",
    metaLine3: "| VFX | Narrative Designer |",
    itchUrl: "https://untalpanda.itch.io/necromeowcy",
    quickStats: [
      { label: "Engine", value: "Unity" },
      { label: "Duration", value: "1 Week Jam" },
      { label: "Team Size", value: "9 Developers" },
      { label: "Platform", value: "PC" }
    ],
    summary: "Necromancer simulator with town management. Keep your city alive and achieve your goal of escaping Cattish Mew-quisition!",
    myRoles: [
      "Narrative Design",
      "Quest Design",
      "System Design",
      "VFX Art"
    ],
    designPillars: [
      "Every resource management.",
      "Keep your population happy or face doom.",
      "Story driven situations with different outcomes.",
      "Resurrect your people but be careful not everyone likes to work with zombies."
    ],
    systems: [
      "Place buildings on grid.",
      "Manage your population sending them to different work places.",
      "Narrative events scaled with progression.",
      "Resurrection mechanic to boost your economy."
    ],
    highlights: [
      "Narrative Design: Finished the story fast under a 1-week deadline to ensure all team members worked towards the same goal without misinterpretation.",
      "Quest Design: Created 17 quests with their own story and outcomes. Every five days an event triggers in the city and player choices have strategic meaning.",
      "System Design: Formulated progression balancing so the player can survive, manage food, 'PURR' energy, and build enough homes and workshops.",
      "VFX Art: Created all particle effects and shaders, integrating code into shaders for 'PURR' energy with dynamic visibility, twirling, and noise animations."
    ]
  },
  {
    id: "domefall",
    title: "Domefall",
    tagline: "Mobile tower defense with in-game upgrade progression",
    category: "unity",
    engine: "Unity",
    engineIcon: "assets/icons/Unityicon.png",
    thumbnail: "assets/images/Domefall.gif",
    pageUrl: "domefall.html",
    metaLine1: "| Tower Defense |",
    metaLine2: "| One month | Mobile | Team Size: 10 |",
    metaLine3: "| VFX | Level Designer | Difficulty Scale |",
    itchUrl: "https://futuregames.itch.io/domefall",
    quickStats: [
      { label: "Engine", value: "Unity" },
      { label: "Duration", value: "1 Month" },
      { label: "Team Size", value: "10 Developers" },
      { label: "Platform", value: "Mobile" }
    ],
    summary: "A tower defense with an upgrade system during gameplay, where each defeat allows player to gain more upgrades and progress further.",
    myRoles: [
      "Balancing",
      "Level Design",
      "System Design",
      "VFX"
    ],
    designPillars: [
      "Mobile game.",
      "Tower defense , roguelite.",
      "Kill enemies upgrade your towers, Lose upgrade further."
    ],
    systems: [
      "Roguelite system of upgrades, temporary and permament ones.",
      "Spawn of enemies from different sides with hand crafter encounters.",
      "Gradually increase the difficulty to keep player engaged."
    ],
    highlights: [
      "Balancing: During development, answered key design questions: How many enemies per wave? How many hits to kill an enemy? What type should enemy be? How much gold should the player have? How should difficulty increase during playtime?",
      "Constructed balancing system so it allows us to easily add more levels and introduce three different difficulties in future versions.",
      "Level Design: Constructed and balanced enemy paths from spawners on different sides of the map, varying travel time and enemy types to create unique level feels.",
      "System Design: Dual progression system based on both temporary in-run upgrades and permanent evolution points earned upon death to customize tower skill trees."
    ]
  }
];

export const bioData = {
  name: "Mateusz Szwarc",
  title: "Game Designer",
  tagline: "Game Designer with over 1,5 year experience. Gaming nerd since young age, Anime enjoyer and jrpg fan, with a lot of hours in strategy games.",
  email: "engmatiszwarc@gmail.com",
  cvUrl: "https://canva.link/f33jqqh899scqk2",
  linkedinUrl: "http://www.linkedin.com/in/mszw",
  itchUrl: "https://zabiii.itch.io",
  futuregamesUrl: "https://futuregames.se",
  experienceYears: "1.5 Years",
  bio: "Game Designer with over 1,5 year experience. Gaming nerd since young age, Anime enjoyer and jrpg fan, with a lot of hours in strategy games."
};
