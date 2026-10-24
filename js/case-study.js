/**
 * Game Case Study Subpage Controller
 * Handles image zoom lightbox, interactive video player, and navigation
 */

import { initCanvasBackground } from './canvas-bg.js';
import { sfx } from './audio-fx.js';

document.addEventListener('DOMContentLoaded', () => {
  // Ambient canvas
  initCanvasBackground('bg-canvas');

  // Subpage navigation
  initCaseStudyNav();

  // Fullscreen image zoom lightbox
  initImageLightbox();

  // Elemental Magic Video Player (Wastemancer)
  initMagicVideoPlayer();

  // Section tabs & contribution role buttons interactions
  initSubpageTabs();
});

function initSubpageTabs() {
  const tabs = document.querySelectorAll('.subpage-section-tab, .contribution-role-btn');
  tabs.forEach(tab => {
    tab.addEventListener('mouseenter', () => sfx.hover());
    tab.addEventListener('click', () => sfx.click());
  });
}

function initCaseStudyNav() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-links');

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
  }
}

/**
 * Image Lightbox Modal for Diagram and Screenshot Inspection
 */
function initImageLightbox() {
  // Create lightbox modal DOM if not already present
  let lightbox = document.querySelector('.lightbox-modal');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox-modal';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-label', 'Image preview');
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Close image preview">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <img class="lightbox-img" src="" alt="Fullscreen preview" />
    `;
    document.body.appendChild(lightbox);
  }

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    sfx.modalOpen();
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Preview';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    sfx.modalClose();
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });

  // Attach to zoomable image containers
  const zoomTargets = document.querySelectorAll(
    '.gallery-img-wrap img, .sequential-img-wrap img, .zoomable-img, .balance-img-wrap img, .picture-lane-thumb img'
  );

  zoomTargets.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      openLightbox(img.src, img.alt);
    });
  });
}

/**
 * Wastemancer Interactive Elemental Magic Player
 * Clicking an icon plays the corresponding movie
 */
function initMagicVideoPlayer() {
  const playerBox = document.getElementById('magic-player');
  if (!playerBox) return;

  const videoElement = playerBox.querySelector('#magic-video');
  const captionElement = playerBox.querySelector('#magic-caption');
  const iconButtons = playerBox.querySelectorAll('.magic-icon-btn');

  const magicDetails = {
    heal: {
      title: "Heal Magic",
      movie: "assets/images/Wastemancer/healmovie.mp4",
      desc: "Tactile healing visual aura with custom swirling particles and glowing restorative feedback."
    },
    fire: {
      title: "Fire Magic",
      movie: "assets/images/Wastemancer/firemovie.mp4",
      desc: "Explosive flame bursts and ignition shader effects authored in Unity VFX Graph."
    },
    water: {
      title: "Water Magic",
      movie: "assets/images/Wastemancer/watermovie.mp4",
      desc: "Dynamic fluid surge attack programmed in cooperation with code to detect enemy positioning."
    },
    earth: {
      title: "Earth Magic",
      movie: "assets/images/Wastemancer/earthmovie.mp4",
      desc: "Ground-shattering rock spikes with custom meshes modeled in Blender and textured in Photoshop."
    },
    wind: {
      title: "Wind Magic",
      movie: "assets/images/Wastemancer/windmovie.mp4",
      desc: "High-velocity vortex particle simulation with twirling velocity fields."
    }
  };

  iconButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => sfx.hover());
    btn.addEventListener('click', () => {
      sfx.click();
      const type = btn.getAttribute('data-type');
      const data = magicDetails[type];
      if (!data) return;

      iconButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (videoElement) {
        videoElement.src = data.movie;
        videoElement.load();
        videoElement.play().catch(() => {});
      }

      if (captionElement) {
        captionElement.innerHTML = `<strong>${data.title}</strong> — ${data.desc}`;
      }
    });
  });
}
