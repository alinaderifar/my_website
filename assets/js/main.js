/**
 * Main Application Entry Point
 * Properly structured ES6 module with cleanup and error handling
 */

import { initAccessibility } from './modules/accessibility.js';
import { EventHandler } from './modules/event-handlers.js';
import { initTranslations, getCurrentLanguage, setLanguage } from './modules/translations.js';
import { initDeviceShowcase } from './modules/device-showcase.js';
import { initInteractiveDemos } from './modules/interactive-demos.js';
import { initScrollAnimations } from './modules/scroll-animations.js';
import { initNavigation } from './modules/navigation.js';
import { initForms } from './modules/forms.js';
import { cleanup } from './modules/cleanup.js';

// Application state
const appState = {
  initialized: false,
  eventHandler: null,
  cleanupFunctions: []
};

/**
 * Initialize the application
 */
export function init() {
  if (appState.initialized) {
    console.warn('Application already initialized');
    return;
  }

  try {
    console.log('Initializing application...');

    // Initialize translations first (needed for all other modules)
    initTranslations();

    // Initialize event handler
    appState.eventHandler = new EventHandler();

    // Initialize core modules
    initAccessibility();
    initNavigation();
    initForms();

    // Initialize skill hover effects
    initSkillPowerEffects();

    initHeroPhoneTabs();
    initProjectMobilePreview();

    // Store cleanup functions
    appState.cleanupFunctions.push(cleanup);

    // Mark as initialized
    appState.initialized = true;

    // Hide page loader, then wire scroll reveals once layout is stable
    const pageLoader = document.getElementById('pageLoader');
    const startScrollAnimations = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => initScrollAnimations());
      });
    };

    if (pageLoader) {
      pageLoader.classList.add('hidden');
      startScrollAnimations();
      setTimeout(() => {
        pageLoader.remove();
        document.body.classList.remove('loading');
      }, 500);
    } else {
      document.body.classList.remove('loading');
      startScrollAnimations();
    }

    console.log('Application initialized successfully');

    // Dispatch custom event for other scripts
    window.dispatchEvent(new CustomEvent('app:initialized'));

  } catch (error) {
    console.error('Failed to initialize application:', error);
    appState.eventHandler = null;
    appState.cleanupFunctions = [];
    appState.initialized = false;
    showInitError();
  }
}

/**
 * Initialize skill category power-on effects
 * Adds 'powered' class on hover to trigger circuit animation
 * The class stays after hover to maintain the powered state
 */
function initSkillPowerEffects() {
  const skillCategories = document.querySelectorAll('.skill-category');
  
  skillCategories.forEach(category => {
    // Add powered class on mouse enter
    category.addEventListener('mouseenter', () => {
      category.classList.add('powered');
    });
    
    // Note: We intentionally do NOT remove 'powered' on mouseleave
    // This keeps the animation in its final state after first hover
    // If you want users to be able to "power off", uncomment below:
    // category.addEventListener('mouseleave', () => {
    //   category.classList.remove('powered');
    // });
  });
}

/**
 * Hero phone mockup: tab bar switches visible panels
 */
function initHeroPhoneTabs() {
  const screen = document.querySelector('.flutter-app-screen');
  if (!screen) return;

  const nav = screen.querySelector('.app-nav');
  const buttons = nav ? nav.querySelectorAll('.nav-item[data-app-tab]') : [];
  const panels = screen.querySelectorAll('.app-tab-panel[data-app-tab]');
  if (!buttons.length || !panels.length) return;

  const activate = (tab) => {
    buttons.forEach((btn) => {
      const on = btn.dataset.appTab === tab;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    panels.forEach((panel) => {
      const on = panel.dataset.appTab === tab;
      panel.classList.toggle('is-active', on);
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => activate(btn.dataset.appTab));
  });
}

/**
 * Mobile: project cards use a button to show image preview (no hover)
 */
function initProjectMobilePreview() {
  const cards = document.querySelectorAll('.project-card');
  if (!cards.length) return;

  const closeAll = () => {
    cards.forEach((card) => {
      card.classList.remove('preview-open');
      const toggle = card.querySelector('.project-preview-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  };

  cards.forEach((card) => {
    const btn = card.querySelector('.project-preview-toggle');
    if (!btn) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const opening = !card.classList.contains('preview-open');
      closeAll();
      if (opening) {
        card.classList.add('preview-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.project-card')) {
      closeAll();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });
}

/**
 * Show initialization error to user
 */
function showInitError() {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'init-error';
  errorDiv.innerHTML = `
    <div style="background: #ef4444; color: white; padding: 1rem; text-align: center; border-radius: 8px; margin: 1rem;">
      <h3>Application Error</h3>
      <p>Failed to load application. Please refresh the page.</p>
      <button onclick="location.reload()" style="margin-top: 0.5rem; padding: 0.5rem 1rem; background: white; color: #ef4444; border: none; border-radius: 4px; cursor: pointer;">
        Refresh Page
      </button>
    </div>
  `;
  document.body.insertBefore(errorDiv, document.body.firstChild);
}

/**
 * Destroy the application (cleanup)
 */
export function destroy() {
  if (!appState.initialized) return;

  console.log('Destroying application...');

  // Run all cleanup functions
  appState.cleanupFunctions.forEach(fn => {
    try {
      fn();
    } catch (error) {
      console.error('Cleanup error:', error);
    }
  });

  // Reset state
  appState.initialized = false;
  appState.eventHandler = null;
  appState.cleanupFunctions = [];

  console.log('Application destroyed');
}

/** @returns {typeof appState} */
export function getState() {
  return appState;
}

const shouldAutoInit =
  typeof process === 'undefined' || process.env.NODE_ENV !== 'test';

// Auto-initialize when DOM is ready (skipped under Jest)
if (shouldAutoInit) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause animations when tab is not visible
    document.body.classList.add('page-hidden');
  } else {
    // Resume animations when tab becomes visible
    document.body.classList.remove('page-hidden');
  }
});

// Export for debugging
window.App = { init, destroy, getState };

function initProjectPreviewImages() {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    const imageName = card.getAttribute('data-image');
    const previewImage = card.querySelector('.preview-image');
    if (!previewImage) return;
    previewImage.classList.remove('preview-image--placeholder');
    if (imageName && imageName !== 'placeholder') {
      const url = new URL(`assets/images/${imageName}`, document.baseURI).href;
      previewImage.style.backgroundImage = `url('${url}')`;
      previewImage.querySelectorAll('.preview-placeholder-label').forEach((el) => el.remove());
    } else {
      previewImage.style.backgroundImage = 'none';
      previewImage.classList.add('preview-image--placeholder');
    }
  });
}

// Initialize project hover images (module may run after DOMContentLoaded when deferred)
if (shouldAutoInit) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectPreviewImages);
  } else {
    initProjectPreviewImages();
  }
}