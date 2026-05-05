/**
 * Cleanup Module
 * Centralized cleanup function for all modules
 */

import { cleanupDeviceShowcase } from './device-showcase.js';
import { cleanupInteractiveDemos } from './interactive-demos.js';
import { cleanupScrollAnimations } from './scroll-animations.js';
import { cleanupNavigation } from './navigation.js';
import { cleanupForms } from './forms.js';

/**
 * Main cleanup function
 * Call this to properly clean up all event listeners and resources
 */
export function cleanup() {
  console.log('Running cleanup...');
  
  // Run module-specific cleanup
  cleanupDeviceShowcase();
  cleanupInteractiveDemos();
  cleanupScrollAnimations();
  cleanupNavigation();
  cleanupForms();
  
  // Remove global event listeners
  removeGlobalEventListeners();
  
  // Clear any timeouts/intervals
  clearTimeoutsAndIntervals();
  
  console.log('Cleanup completed');
}

/**
 * Remove global event listeners
 */
function removeGlobalEventListeners() {
  // Remove scroll listeners
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
  
  // Remove visibility change listener
  document.removeEventListener('visibilitychange', handleVisibilityChange);
}

/**
 * Clear timeouts and intervals
 */
function clearTimeoutsAndIntervals() {
  // Get the highest timeout/interval ID
  const highestId = setTimeout(() => {});
  
  // Clear all timeouts
  for (let i = 0; i < highestId; i++) {
    clearTimeout(i);
    clearInterval(i);
  }
}

/**
 * Placeholder handlers (these would be defined elsewhere)
 */
function handleScroll() {}
function handleResize() {}
function handleVisibilityChange() {}