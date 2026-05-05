/**
 * Main Application Tests
 * Tests for the main application entry point
 */

import { init, destroy, getState } from '../main.js';

describe('Main Application', () => {
  beforeEach(() => {
    // Reset DOM
    document.body.innerHTML = '';
  });

  afterEach(() => {
    // Clean up
    destroy();
  });

  test('should initialize application successfully', () => {
    // Mock required DOM elements
    document.body.innerHTML = `
      <div id="app">
        <nav class="navbar">
          <div class="container">
            <div class="nav-brand">Portfolio</div>
            <div class="nav-links">
              <a href="#home" class="nav-link">Home</a>
            </div>
          </div>
        </nav>
        <main id="main"></main>
      </div>
    `;

    // Mock console methods
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const errorSpy = jest.spyOn(console, 'error').mockImplementation();

    // Initialize
    init();

    // Check state
    const state = getState();
    expect(state.initialized).toBe(true);
    expect(state.eventHandler).toBeDefined();
    expect(state.cleanupFunctions).toBeDefined();

    // Check console logs
    expect(consoleSpy).toHaveBeenCalledWith('Initializing application...');
    expect(consoleSpy).toHaveBeenCalledWith('Application initialized successfully');

    // Restore mocks
    consoleSpy.mockRestore();
    errorSpy.mockRestore();
  });

  test('should not initialize twice', () => {
    document.body.innerHTML = `
      <div id="app">
        <nav class="navbar">
          <div class="container">
            <div class="nav-brand">Portfolio</div>
          </div>
        </nav>
        <main id="main"></main>
      </div>
    `;

    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

    init();
    init(); // Second call

    expect(consoleSpy).toHaveBeenCalledWith('Application already initialized');

    consoleSpy.mockRestore();
  });

  test('should handle initialization errors gracefully', () => {
    // Mock a failing module
    jest.mock('../modules/translations.js', () => {
      throw new Error('Translation module failed');
    });

    document.body.innerHTML = `
      <div id="app">
        <nav class="navbar">
          <div class="container">
            <div class="nav-brand">Portfolio</div>
          </div>
        </nav>
        <main id="main"></main>
      </div>
    `;

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    // Should not throw
    expect(() => init()).not.toThrow();

    // Should show error message
    const errorDiv = document.querySelector('.init-error');
    expect(errorDiv).toBeDefined();

    consoleSpy.mockRestore();
  });

  test('should destroy application properly', () => {
    document.body.innerHTML = `
      <div id="app">
        <nav class="navbar">
          <div class="container">
            <div class="nav-brand">Portfolio</div>
          </div>
        </nav>
        <main id="main"></main>
      </div>
    `;

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    init();
    destroy();

    const state = getState();
    expect(state.initialized).toBe(false);
    expect(state.eventHandler).toBeNull();
    expect(state.cleanupFunctions).toEqual([]);

    expect(consoleSpy).toHaveBeenCalledWith('Destroying application...');
    expect(consoleSpy).toHaveBeenCalledWith('Application destroyed');

    consoleSpy.mockRestore();
  });

  test('should handle page visibility changes', () => {
    document.body.innerHTML = `
      <div id="app">
        <nav class="navbar">
          <div class="container">
            <div class="nav-brand">Portfolio</div>
          </div>
        </nav>
        <main id="main"></main>
      </div>
    `;

    init();

    // Simulate page hidden
    Object.defineProperty(document, 'hidden', { value: true, writable: true });
    document.dispatchEvent(new Event('visibilitychange'));

    expect(document.body.classList.contains('page-hidden')).toBe(true);

    // Simulate page visible
    Object.defineProperty(document, 'hidden', { value: false, writable: true });
    document.dispatchEvent(new Event('visibilitychange'));

    expect(document.body.classList.contains('page-hidden')).toBe(false);
  });

  test('should export App object for debugging', () => {
    document.body.innerHTML = `
      <div id="app">
        <nav class="navbar">
          <div class="container">
            <div class="nav-brand">Portfolio</div>
          </div>
        </nav>
        <main id="main"></main>
      </div>
    `;

    init();

    expect(window.App).toBeDefined();
    expect(typeof window.App.init).toBe('function');
    expect(typeof window.App.destroy).toBe('function');
    expect(typeof window.App.getState).toBe('function');
  });
});