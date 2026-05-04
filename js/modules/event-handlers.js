/**
 * Event Handlers Module
 * Centralized event delegation and handler management
 */

export class EventHandler {
  constructor() {
    this.handlers = new Map();
    this.init();
  }

  init() {
    // Use event delegation for better performance
    document.addEventListener('click', this.handleClick);
    document.addEventListener('change', this.handleChange);
    document.addEventListener('submit', this.handleSubmit);
    document.addEventListener('keydown', this.handleKeydown);
    
    // Handle window events
    window.addEventListener('resize', this.debounce(this.handleResize, 250));
    window.addEventListener('scroll', this.throttle(this.handleScroll, 100));
  }

  handleClick = (event) => {
    const target = event.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    const handler = this.handlers.get(`click:${action}`);
    
    if (handler) {
      event.preventDefault();
      handler(event, target);
    }
  };

  handleChange = (event) => {
    const target = event.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    const handler = this.handlers.get(`change:${action}`);
    
    if (handler) {
      handler(event, target);
    }
  };

  handleSubmit = (event) => {
    const target = event.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    const handler = this.handlers.get(`submit:${action}`);
    
    if (handler) {
      event.preventDefault();
      handler(event, target);
    }
  };

  handleKeydown = (event) => {
    const handler = this.handlers.get(`keydown:${event.key}`);
    if (handler) {
      handler(event);
    }
  };

  handleResize = () => {
    const handler = this.handlers.get('resize');
    if (handler) {
      handler();
    }
  };

  handleScroll = () => {
    const handler = this.handlers.get('scroll');
    if (handler) {
      handler();
    }
  };

  on(eventType, action, handler) {
    const key = `${eventType}:${action}`;
    this.handlers.set(key, handler);
  }

  off(eventType, action) {
    const key = `${eventType}:${action}`;
    this.handlers.delete(key);
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
}
