/**
 * Accessibility Module
 * Handles ARIA attributes, screen reader announcements, and keyboard navigation
 */

export function initAccessibility() {
  setupLiveRegions();
  setupFocusManagement();
  setupKeyboardShortcuts();
  setupReducedMotion();
}

function setupLiveRegions() {
  // Create screen reader announcement region
  let liveRegion = document.getElementById('sr-announcement');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'sr-announcement';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
  }
}

function setupFocusManagement() {
  // Manage focus for modals and dialogs
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const activeModal = document.querySelector('.modal.active');
      if (activeModal) {
        closeModal(activeModal);
      }
    }
  });
}

function setupKeyboardShortcuts() {
  // Keyboard shortcuts for common actions
  document.addEventListener('keydown', (event) => {
    // Skip if typing in input
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
      return;
    }

    // Focus search (if exists)
    if (event.key === '/' && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
      const search = document.querySelector('.search-input');
      if (search) search.focus();
    }
  });
}

function setupReducedMotion() {
  // Respect user's motion preferences
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) {
    document.documentElement.setAttribute('data-reduced-motion', 'true');
  }
}

export function announce(message) {
  const region = document.getElementById('sr-announcement');
  if (region) {
    region.textContent = '';
    setTimeout(() => {
      region.textContent = message;
    }, 100);
  }
}

export function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  });
}

function closeModal(modal) {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}
