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
    initScrollAnimations();
    initForms();

    // Initialize skill hover effects
    initSkillPowerEffects();

    // Store cleanup functions
    appState.cleanupFunctions.push(cleanup);

    // Mark as initialized
    appState.initialized = true;

    // Hide page loader
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
      pageLoader.classList.add('hidden');
      setTimeout(() => {
        pageLoader.remove();
        document.body.classList.remove('loading');
      }, 500);
    } else {
      document.body.classList.remove('loading');
    }

    console.log('Application initialized successfully');

    // Dispatch custom event for other scripts
    window.dispatchEvent(new CustomEvent('app:initialized'));

  } catch (error) {
    console.error('Failed to initialize application:', error);
    // Show user-friendly error message
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

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
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
window.App = { init, destroy, getState: () => appState };