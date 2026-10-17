# Mateusz Szwarc - Game Designer Portfolio

A sleek, modern game designer portfolio website featuring Unreal Engine 5 and Unity projects.

Built with a **zero-build, high-performance static web stack** (HTML5, modern CSS3, vanilla ES6+ modules) that runs locally with one click and is 100% ready for free deployment to **GitHub Pages**.

---

## 🎮 Featured Projects Catalog

### Unreal Engine 5:
- **Overbrewed** (Unreal Engine 5 | PC | Team: 12 | Multiplayer Magic Shop Simulator)
- **Catsmith** (Unreal Engine 5 | PC | Team: 11 | Local Co-op Forge Crafting)
- **Prism of Darkness** (Unreal Engine 5 | PC | Team: 8 | Turn-Based Fantasy Combat — *Coming Soon*)

### Unity:
- **Wastemancer** (Unity | PC/Console | Team: 11 | Fast-Paced Elemental Arcade Combat)
- **Necromeowcy** (Unity | PC | Team: 9 | 1-Week Jam Necromancer Management)
- **Domefall** (Unity | Mobile | Team: 10 | Mobile Tower Defense & Roguelite Progression)

---

## 🚀 Quick Start (Local Preview)

### Method 1: One-Click Batch Script
Double-click `start_server.bat` in the root folder. It will start a local Python HTTP server and launch your browser at `http://localhost:8000`.

### Method 2: Command Line (PowerShell / Terminal)
```powershell
python -m http.server 8000
```
Then navigate to [http://localhost:8000](http://localhost:8000) in your browser.

---

## 📁 Project Structure

```
Mateusz-Szwarc/
├── index.html              # Main portfolio showcase (3-column responsive grid)
├── catsmith.html           # Dedicated Catsmith breakdown & sequential gallery
├── overbrewed.html         # Dedicated Overbrewed breakdown & Niagara VFX
├── prism-of-darkness.html  # Dedicated Prism of Darkness teaser & systems breakdown
├── wastemancer.html        # Dedicated Wastemancer breakdown with interactive VFX player
├── necromeowcy.html        # Dedicated Necromeowcy breakdown with PURR shader video
├── domefall.html           # Dedicated Domefall breakdown with balancing matrix
├── start_server.bat        # One-click Windows local server launcher
├── .nojekyll               # Disables Jekyll processing on GitHub Pages
├── .gitignore              # Ignores temp and system files
├── README.md               # Documentation & project structure
│
├── css/
│   ├── style.css           # Montserrat typography, dark paper theme, 3-column grid
│   └── game-ui.css         # UI micro-interactions & toast alerts
│
├── js/
│   ├── main.js             # Projects renderer, 3-column filter, audio FX
│   ├── projects-data.js    # Data catalog for all 6 Unreal & Unity projects
│   ├── case-study.js       # Lightbox image zoom & interactive elemental magic player
│   ├── canvas-bg.js        # Starfield / particle ambient canvas background
│   └── audio-fx.js         # Procedural Web Audio API sound FX
│
└── assets/
    ├── icons/              # Unityicon, Unrealicon, Itchioicon, Linkedinicon, FutureGames
    └── images/             # Game GIFs, teasers, and subpage breakdown media
```
