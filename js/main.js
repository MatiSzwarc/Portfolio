/**
 * Game Portfolio Website - Main Controller
 * Adapted to match Mateusz Szwarc Portfolio
 */

import { projects, bioData } from './projects-data.js';
import { initCanvasBackground } from './canvas-bg.js';
import { sfx } from './audio-fx.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize subtle canvas background
  initCanvasBackground('bg-canvas');

  // Initialize UI features
  initNavigation();
  renderProjects('all');
  initProjectFilters();
});

/* ==========================================================================
   Navigation & Header
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-links');
  const brandBlock = document.querySelector('.brand-block');

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      sfx.click();
      const isOpen = navMenu.style.display === 'flex';
      navMenu.style.display = isOpen ? 'none' : 'flex';
      if (!isOpen) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = 'rgba(12, 13, 18, 0.98)';
        navMenu.style.padding = '1.75rem';
        navMenu.style.borderBottom = '1px solid var(--border-subtle)';
        navMenu.style.gap = '1.25rem';
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.style.display = 'none';
        }
      });
    });
  }

  // Home link & brand block behavior (avoid adding #hero to URL)
  function handleHomeClick(e) {
    const isCurrentPageHome = window.location.pathname.endsWith('index.html') || 
                              window.location.pathname.endsWith('/') || 
                              window.location.pathname === '' ||
                              window.location.pathname.includes('/Portfolio/');
    
    // If we are already on home page, smoothly scroll to top without adding #hero
    if (document.getElementById('hero')) {
      e.preventDefault();
      sfx.click();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Replace URL state to clean portfolio root without #hero
      if (window.history.pushState) {
        window.history.pushState(null, '', 'https://matiszwarc.github.io/Portfolio/');
      }
    }
  }

  if (brandBlock) {
    brandBlock.addEventListener('click', handleHomeClick);
  }

  const homeNavLink = document.querySelector('a.nav-link[data-nav="home"]');
  if (homeNavLink) {
    homeNavLink.addEventListener('click', handleHomeClick);
  }

  // Active link highlighter via IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}` || (id === 'hero' && link.getAttribute('data-nav') === 'home')) {
            link.classList.add('active');
          } else if (href && href.startsWith('#')) {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(sec => observer.observe(sec));

  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => sfx.hover());
    link.addEventListener('click', () => sfx.click());
  });
}

/* ==========================================================================
   Projects Rendering (3-in-a-row Layout, direct links to game subpages)
   ========================================================================== */
function renderProjects(categoryFilter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = categoryFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === categoryFilter);

  grid.innerHTML = '';

  filtered.forEach(project => {
    const card = document.createElement('article');
    card.className = 'wix-card';

    card.innerHTML = `
      <a href="${project.pageUrl}" class="card-media-wrap" title="View ${project.title} breakdown">
        <div class="engine-badge-overlay" title="${project.engine}">
          <img src="${project.engineIcon}" alt="${project.engine} icon" />
        </div>
        ${project.thumbnail.endsWith('.mp4')
          ? `<video src="${project.thumbnail}" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none;"></video>`
          : `<img src="${project.thumbnail}" alt="${project.title} gameplay GIF" loading="lazy" />`
        }
      </a>
      <div class="card-content">
        <h3 class="card-title">
          <a href="${project.pageUrl}" class="card-title-link">${project.title}</a>
        </h3>
        <p class="card-meta-line">${project.metaLine1}</p>
        <p class="card-meta-line">${project.metaLine2}</p>
        <p class="card-meta-line roles">${project.metaLine3}</p>
        <div class="card-actions">
          <a href="${project.pageUrl}" class="btn-case-study">
            View Details
          </a>
          ${project.itchUrl ? `
            <a href="${project.itchUrl}" target="_blank" rel="noopener noreferrer" class="btn-itch-direct" title="View on itch.io" aria-label="View on itch.io">
              <img src="assets/icons/Itchioicon.png" alt="itch.io" width="18" height="18" />
            </a>
          ` : ''}
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Sound effects on hover
  const interactiveLinks = grid.querySelectorAll('.btn-case-study, .card-media-wrap, .btn-itch-direct, .card-title-link');
  interactiveLinks.forEach(elem => {
    elem.addEventListener('mouseenter', () => sfx.hover());
  });
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => sfx.hover());
    btn.addEventListener('click', () => {
      sfx.filterSwitch();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}
