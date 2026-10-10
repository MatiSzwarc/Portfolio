/**
 * Game Portfolio - Projects Data
 * Real project catalog for Mateusz Szwarc (matiszwarc.wixstudio.com/portfolio)
 */

export const projects = [
  {
    id: "catsmith",
    title: "Catsmith",
    tagline: "Local co-op crafting game | Management | Multiplayer",
    category: "unity", // User requested: Catsmith to unity tab
    engine: "Unity",
    engineIcon: "assets/icons/unity-white.svg",
    thumbnail: "assets/images/Catsmith.gif",
    metaLine1: "| Management | Multiplayer |",
    metaLine2: "| Two month | PC | Team Size: 11 |",
    metaLine3: "| PO | Lead Designer | VFX | AI Programmer |",
    itchUrl: "https://futuregames.itch.io/catsmith",
    quickStats: [
      { label: "Engine", value: "Unity" },
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
    highlights: [
      "Local multiplayer cooperative gameplay loop.",
      "Fast-paced minigames different from each other.",
      "Order management system.",
      "Particle system for responsive visual feedback.",
      "Two different AI state trees for Customers and Master."
    ],
    detailedSections: [
      {
        title: "Systems",
        content: "- local multiplayer\n- fast paced minigames different from each other\n- Order management\n- Particle system for visual feedback\n- Two different AI state trees for Customers and Master"
      }
    ]
  },
  {
    id: "overbrewed",
    title: "Overbrewed",
    tagline: "Magic shop simulator | Multiplayer",
    category: "unreal", // User requested: Overbrewed to unreal tab
    engine: "Unreal Engine 5",
    engineIcon: "assets/icons/ue-white.svg",
    thumbnail: "assets/images/Overbrewed.gif",
    metaLine1: "| magic shop simulator | Multiplayer |",
    metaLine2: "| Two month | PC | Team Size: 12 |",
    metaLine3: "| System Designer | VFX |",
    itchUrl: "",
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
    highlights: [
      "In game, we have 5 different types of magic: Fire, Wind, Earth, Water, and Heal.",
      "Dynamic potion brewing system with ingredient combining and reaction feedback.",
      "Programmed custom Niagara particle visual effects for shiny, dynamic, and explosive reactions on screen.",
      "Store system balancing and cooperative task management under customer deadlines."
    ],
    detailedSections: [
      {
        title: "Magic & Systems",
        content: "We designed 5 different types of magic: Fire, Wind, Earth, Water, and Heal. Programmed dynamic visual effects and balancing mechanics so each magical action feels distinct and satisfying."
      }
    ]
  },
  {
    id: "domefall",
    title: "Domefall",
    tagline: "Mobile tower defense with in-game upgrade progression",
    category: "unity", // User requested: Domefall to unity tab
    engine: "Unity",
    engineIcon: "assets/icons/unity-white.svg",
    thumbnail: "assets/images/Domefall.gif",
    metaLine1: "| Tower Defense |",
    metaLine2: "| One month | mobile | Team Size: 10 |",
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
    highlights: [
      "Balancing: During development, answered key design questions: How many enemies per wave? How many hits to kill an enemy? What type should enemy be? How much gold should the player have? How should difficulty increase during playtime?",
      "Constructed balancing system so it allows us to easily add more levels and introduce three different difficulties in future versions.",
      "Level Design: Constructed and balanced enemy paths from spawners on different sides of the map, varying travel time and enemy types to create unique level feels.",
      "System Design: Dual progression system based on both temporary in-run upgrades and permanent evolution points earned upon death to customize tower skill trees."
    ],
    detailedSections: [
      {
        title: "Balancing",
        content: "During the development process, simple ideas multiplied a lot into a nightmare of numbers. How many enemies per wave? How many hits does the player tower require to kill the enemy? What type should enemy be? How much gold should the player have during game? How should the difficulty increase during playtime? These questions were answered after hours of balancing and going through numbers, adjusting values to fit the game system. The system is constructed in a way that allows us to easily add more levels and introduce three different difficulties in the future version."
      },
      {
        title: "Level Design",
        content: "Level Design and balancing are connected to the game, since the game has spawners with enemies. Placing them on different sides of the map and then constructing and balancing a path towards the main objective for the enemies was a task I took. With different amounts of spawners, travel time, and types of enemies coming from each, I was able to create levels that feel different for the player."
      },
      {
        title: "System Design",
        content: "The game system includes the main tower, and additional ones used by AI to defeat enemies. The progression system is based on both temporary upgrades and permanent ones. Each time a player dies, they get evolution points depending on how far they progressed. These points are used in the skill tree. Every tower has a different skill tree that also includes paths that completely change how the tower behaves. In the worst-case scenario, the player can choose to spend points to rearrange the skill tree for their needs."
      }
    ]
  },
  {
    id: "necromeowcy",
    title: "Necromeowcy",
    tagline: "Necromancer simulator with town management | 1-week game jam",
    category: "unity", // User requested: Necromeowcy to unity tab
    engine: "Unity",
    engineIcon: "assets/icons/unity-white.svg",
    thumbnail: "assets/images/Necromeowcy.gif",
    metaLine1: "| Strategy | management |",
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
    highlights: [
      "Narrative Design: Finished the story fast under a 1-week deadline to ensure all team members worked towards the same goal without misinterpretation.",
      "Quest Design: Created 17 quests with their own story and outcomes. Every five days an event triggers in the city and player choices have strategic meaning.",
      "System Design: Formulated progression balancing so the player can survive, manage food, 'PURR' energy, and build enough homes and workshops.",
      "VFX Art: Created all particle effects and shaders, integrating code into shaders for 'PURR' energy with dynamic visibility, twirling, and noise animations."
    ],
    detailedSections: [
      {
        title: "Narrative Design",
        content: "As this project deadline was only one week long, we needed to finish the story as fast as possible, so every team member could have an understanding of the project. It's about working towards the same goal without misinterpretation. At the start, our game included magic, cats, and a necromancer as the main character. I answered why he revives people, why the game has a time limit, and created a background for goals in game, different endings, and quest design."
      },
      {
        title: "Quest Design",
        content: "I also made quests in the game. The main idea is that every five days, something happens in the city, and the player needs to react. Depending on what choices are made, different outcomes occur—choosing options has strategic meaning. Overall, I created 17 quests with their own story and outcome. Depending on the level of progression, they become easier or harder."
      },
      {
        title: "System Design",
        content: "To clearly write ideas for programmers to implement under a short deadline was a challenge. I proposed a progression in the game that was accepted. The game includes a lot of systems that we needed to balance so the player can survive: manage food, purr energy, and enough homes and workshops to progress."
      },
      {
        title: "VFX Art",
        content: "I was responsible for all particle effects. I mainly focused on looking into the code and placing them exactly where they should appear. The most complex was 'PURR' energy, the main resource of magic in the game. I wanted it to look cool with animations for filling and taking it. I integrated the code system into the shader: visibility depends on the value, and movement is done by twirling and noise."
      }
    ]
  },
  {
    id: "wastemancer",
    title: "Wastemancer",
    tagline: "Fast-paced magical arcade action game",
    category: "unity", // User requested: Wastemancer to unity tab
    engine: "Unity",
    engineIcon: "assets/icons/unity-white.svg",
    thumbnail: "assets/images/Wastemancer.gif",
    metaLine1: "| Fast Paced | arcade game |",
    metaLine2: "| One month | PC / Console | Team Size: 11 |",
    metaLine3: "| Narrative/Level Designer | VFX |",
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
    highlights: [
      "VFX Art: Created textures and meshes in Photoshop & Blender, built shaders, and programmed them in the VFX Graph.",
      "Designed 5 magic types: Fire, Wind, Earth, Water, and Heal. Collaborated with programmers so Earth and Water attacks count depending on enemy position.",
      "Narrative Design: Explained the combat system, why the world looks the same despite magic, and why monsters are encountered as trash, boosting team creativity.",
      "Level Design: Designed the combat arena on paper, built the blockout, populated the area with artists, set up lighting, tweaked camera, and tuned post-processing."
    ],
    detailedSections: [
      {
        title: "VFX Art",
        content: "I was responsible for creating various textures and meshes using Photoshop and Blender. Depending on the effect, I also made shaders and programmed them in the VFX graph. That was my main task after I completed the narrative part of the game. I asked programmers to help me with the earth attack and water to make it count depending on where the enemy is. In game, we have 5 different types of magic: Fire, Wind, Earth, Water, and Heal. And who doesn't like shiny, dynamic, explosive visual effects on screen? It makes the game so much better."
      },
      {
        title: "Narrative Design",
        content: "The narrative part of the game needed to explain all the ideas we developed: magic-related combat system, why the world looks the same despite access to magic, and why we encounter monsters as trash. Making narration boosted the creativity of our artists, defining who our character is with features that define him."
      },
      {
        title: "Level Design",
        content: "We wanted to include one area for the player to fight because of the development timeframe. For this demo, I presented the idea on paper, how the main screen could look, and then created a blockout. After that, I closely cooperated with artists deciding how to populate the area and what feeling the player should get. When everything was in place, I made a setup with lighting, tweaked the camera, and applied post-processing effects."
      }
    ]
  }
];

export const bioData = {
  name: "Mateusz Szwarc",
  title: "Game Designer",
  tagline: "Crafting engaging mechanics, tactile VFX, and responsive gameplay systems in Unreal Engine 5 and Unity.",
  email: "engmatiszwarc@gmail.com",
  phone: "+48 794 531 839",
  cvUrl: "https://canva.link/f33jqqh899scqk2",
  linkedinUrl: "http://www.linkedin.com/in/mszw",
  itchUrl: "https://zabiii.itch.io",
  futuregamesUrl: "https://futuregames.se",
  experienceYears: "1.5 Years",
  bio: "I am a Game Designer and Technical Artist with hands-on experience in Unreal Engine 5 (1 year, confident) and Unity (6 months). Having collaborated on multi-disciplinary teams of up to 12 developers at Futuregames and in competitive game jams, my work spans Product Ownership, lead design, state tree AI programming, and authoring explosive Niagara / VFX Graph particle effects."
};
