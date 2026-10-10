# Mateusz Szwarc - Game Designer Portfolio

A sleek, modern game designer portfolio website matching the design and layout of [matiszwarc.wixstudio.com/portfolio](https://matiszwarc.wixstudio.com/portfolio).

Built with a **zero-build, high-performance static web stack** (HTML5, modern CSS3, vanilla ES6+ modules) that runs locally with one click and is 100% ready for free deployment to **GitHub Pages**.

---

## 🎮 Featured Projects Catalog

- **Catsmith** (Unreal Engine 5 | PC | Team: 11 | Local Co-op Forge Crafting)
- **Overbrewed** (Unreal Engine 5 | PC | Team: 12 | Multiplayer Magic Shop Simulator)
- **Domefall** (Unity | Mobile | Team: 10 | Mobile Tower Defense & Roguelite Progression)
- **Necromeowcy** (Unity | PC | Team: 9 | 1-Week Jam Necromancer Management)
- **Wastemancer** (Unity | PC/Console | Team: 11 | Fast-Paced Elemental Arcade Combat)

---

## 🚀 Quick Start (Local Preview)

### Method 1: One-Click Batch Script
Double-click `start_server.bat` in the root folder. It will start a local Python HTTP server and automatically launch your browser at `http://localhost:8000`.

### Method 2: Command Line (PowerShell / Terminal)
```powershell
py -m http.server 8000
```
Then navigate to [http://localhost:8000](http://localhost:8000) in your browser.

---

## 📁 Project Structure

```
Website/
├── index.html              # Main HTML markup and semantic layout
├── start_server.bat        # One-click Windows local server launcher
├── .nojekyll               # Disables Jekyll processing on GitHub Pages
├── .gitignore              # Ignores temp and system files
├── README.md               # Documentation & customization guide
│
├── css/
│   ├── style.css           # Montserrat typography, dark paper theme, card grid
│   └── game-ui.css         # Toast notifications & UI micro-interactions
│
├── js/
│   ├── main.js             # Project renderer, modal popup, filter controller
│   ├── projects-data.js    # Data source: Catsmith, Overbrewed, Domefall, etc.
│   ├── canvas-bg.js        # Elegant starfield / particle canvas background
│   └── audio-fx.js         # Procedural Web Audio API sound FX (pure synthesized)
│
└── assets/
    ├── icons/              # White Unreal Engine & Unity SVG badges
    │   ├── ue-white.svg
    │   └── unity-white.svg
    └── images/             # Local backup assets & avatars
```

---

## 🌐 Deploying to GitHub Pages (Free)

1. Create a new repository on [github.com/new](https://github.com/new) (e.g. `portfolio`).
2. Push or drag-and-drop the files from this folder.
3. In your repo, open **Settings > Pages**.
4. Set Branch to `main` and folder to `/(root)`, then click **Save**.
5. Your portfolio is live in 1–2 minutes!
