/**
 * Game Portfolio Website - Main Controller
 * Adapted to match Mateusz Szwarc Wix Studio Portfolio
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
  initProjectModal();
  initCopyEmail();
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

  // Active link highlighter via IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
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
   SFX Button Controls
   ========================================================================== */
function initSFXControls() {
  const sfxBtn = document.getElementById('sfx-toggle');
  const sfxStatus = document.getElementById('sfx-status');
  if (!sfxBtn) return;

  function updateBtnUI(isUnmuted) {
    if (isUnmuted) {
      sfxBtn.classList.add('active');
      if (sfxStatus) sfxStatus.textContent = 'ON';
    } else {
      sfxBtn.classList.remove('active');
      if (sfxStatus) sfxStatus.textContent = 'MUTED';
    }
  }

  updateBtnUI(!sfx.isMuted());

  sfxBtn.addEventListener('click', () => {
    const isUnmuted = sfx.toggleMute();
    updateBtnUI(isUnmuted);
  });
}

/* ==========================================================================
   Projects Rendering (Wix Studio Card Hierarchy)
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
      <div class="card-media-wrap" data-id="${project.id}" title="Click to view ${project.title} breakdown">
        <div class="engine-badge-overlay" title="${project.engine}">
          <img src="${project.engineIcon}" alt="${project.engine} icon" />
        </div>
        <img src="${project.thumbnail}" alt="${project.title} gameplay GIF" loading="lazy" />
      </div>
      <div class="card-content">
        <h3 class="card-title">${project.title}</h3>
        <p class="card-meta-line">${project.metaLine1}</p>
        <p class="card-meta-line">${project.metaLine2}</p>
        <p class="card-meta-line roles">${project.metaLine3}</p>
        <div class="card-actions">
          <button class="btn-case-study view-details-btn" data-id="${project.id}">
            View Breakdown
          </button>
          ${project.itchUrl ? `
            <a href="${project.itchUrl}" target="_blank" rel="noopener noreferrer" class="btn-itch-direct" title="Play on Itch.io" aria-label="Play on Itch.io">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.5 4v16h19V4H2.5zm2.85 2h13.3c.75.95 1.85 2.37 1.85 2.37V10H3.5V8.37S4.6 6.95 5.35 6zm2.65 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm8 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
              </svg>
            </a>
          ` : ''}
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Attach click listeners to cards and buttons
  const detailButtons = grid.querySelectorAll('.view-details-btn');
  detailButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => sfx.hover());
    btn.addEventListener('click', (e) => {
      sfx.modalOpen();
      const projId = e.currentTarget.getAttribute('data-id');
      openProjectModal(projId);
    });
  });

  const mediaWraps = grid.querySelectorAll('.card-media-wrap');
  mediaWraps.forEach(wrap => {
    wrap.addEventListener('mouseenter', () => sfx.hover());
    wrap.addEventListener('click', (e) => {
      sfx.modalOpen();
      const projId = e.currentTarget.getAttribute('data-id');
      openProjectModal(projId);
    });
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

/* ==========================================================================
   Project Detail Lightbox / Modal
   ========================================================================== */
function initProjectModal() {
  const modalBackdrop = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');

  if (!modalBackdrop) return;

  function closeModal() {
    sfx.modalClose();
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const modalBackdrop = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBanner = document.getElementById('modal-banner');
  const modalStats = document.getElementById('modal-stats');
  const modalSummary = document.getElementById('modal-summary');
  const modalRoles = document.getElementById('modal-roles');
  const modalHighlights = document.getElementById('modal-highlights');
  const modalPlaySlot = document.getElementById('modal-play-slot');

  if (modalTitle) modalTitle.textContent = project.title;
  if (modalBanner) modalBanner.src = project.thumbnail;

  // Itch Play Button
  if (modalPlaySlot) {
    if (project.itchUrl) {
      modalPlaySlot.innerHTML = `
        <a href="${project.itchUrl}" target="_blank" rel="noopener noreferrer" class="modal-play-btn">
          <span>Play on itch.io</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.5 4v16h19V4H2.5zm2.85 2h13.3c.75.95 1.85 2.37 1.85 2.37V10H3.5V8.37S4.6 6.95 5.35 6zm2.65 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm8 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
          </svg>
        </a>
      `;
    } else {
      modalPlaySlot.innerHTML = '';
    }
  }

  // Quick specs
  if (modalStats && project.quickStats) {
    modalStats.innerHTML = project.quickStats.map(s => `
      <div class="modal-meta-item">
        <strong>${s.label}:</strong> ${s.value}
      </div>
    `).join('');
  }

  // Summary
  if (modalSummary) {
    modalSummary.textContent = project.summary;
  }

  // Roles
  if (modalRoles && project.myRoles) {
    modalRoles.innerHTML = project.myRoles.map(r => `
      <li>${r}</li>
    `).join('');
  }

  // Highlights & Systems
  if (modalHighlights && project.highlights) {
    modalHighlights.innerHTML = project.highlights.map(h => `
      <li>${h}</li>
    `).join('');
  }

  // Detailed Wix Sections (Balancing, Level Design, Systems, VFX Art, Narrative)
  const modalDetailed = document.getElementById('modal-detailed-sections');
  if (modalDetailed) {
    if (project.detailedSections && project.detailedSections.length > 0) {
      modalDetailed.innerHTML = project.detailedSections.map(sec => `
        <h3 class="modal-sec-title">${sec.title}</h3>
        <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.96rem; white-space: pre-line; margin-bottom: 1.25rem;">
          ${sec.content}
        </p>
      `).join('');
    } else {
      modalDetailed.innerHTML = '';
    }
  }

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   Copy Email & Toast Feedback
   ========================================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sfx.click();
    const email = bioData.email;
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Copied ${email} to clipboard!`);
    }).catch(() => {
      showToast(`Contact: ${email}`);
    });
  });
}

function showToast(msg) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${msg}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
