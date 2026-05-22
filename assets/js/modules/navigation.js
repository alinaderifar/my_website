/**
 * Navigation Module
 * Handles smooth scrolling, navbar effects, and mobile menu
 */

let cleanupFunctions = [];
let mobileMenuBtn = null;

/**
 * Initialize navigation
 */
export function initNavigation() {
  setupSmoothScrolling();
  setupNavbarScrollEffect();
  setupMobileMenu();
  setupAccessibilityNavigation();
  
  // Store cleanup functions
  cleanupFunctions.push(() => {
    // Remove event listeners
    document.querySelectorAll('.nav-link').forEach(link => {
      link.replaceWith(link.cloneNode(true));
    });
  });
}

/**
 * Set up smooth scrolling for navigation links
 */
function setupSmoothScrolling() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const headerHeight = 70;
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        if (prefersReducedMotion) {
          // Skip smooth scrolling for users who prefer reduced motion
          window.scrollTo({
            top: targetPosition,
            behavior: 'auto'
          });
        } else {
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
        
        // Update URL without page reload
        history.pushState(null, null, targetId);
      }
    });
  });
}

/**
 * Set up navbar scroll effect
 */
function setupNavbarScrollEffect() {
  const navbar = document.querySelector('.navbar');
  let lastScrollY = window.pageYOffset;
  let ticking = false;
  
  const updateNavbar = () => {
    if (!navbar) {
      ticking = false;
      return;
    }
    if (window.pageYOffset > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    ticking = false;
  };
  
  window.addEventListener('scroll', () => {
    lastScrollY = window.pageYOffset;
    
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Set up mobile menu (if needed)
 */
function setupMobileMenu() {
  // Check if we need a mobile menu
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');
  
  if (!navLinks || !navbar) return;
  
  // Create mobile menu button if needed
  function createMobileButton() {
    if (mobileMenuBtn) return;

    const navRow = navLinks.parentElement;
    if (!navRow || !navRow.contains(navLinks)) return;

    mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.setAttribute('aria-label', 'Toggle mobile menu');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;
    navRow.insertBefore(mobileMenuBtn, navLinks);
    setupMobileButtonEvents();
  }
  
  function destroyMobileButton() {
    if (mobileMenuBtn && mobileMenuBtn.parentNode) {
      mobileMenuBtn.parentNode.removeChild(mobileMenuBtn);
      mobileMenuBtn = null;
    }
    navLinks.classList.remove('mobile-open');
  }
  
  function setupMobileButtonEvents() {
    if (!mobileMenuBtn) return;
    
    const toggleMenu = () => {
      const isOpen = navLinks.classList.toggle('mobile-open');
      mobileMenuBtn.classList.toggle('active');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen.toString());
    };
    
    mobileMenuBtn.addEventListener('click', toggleMenu);
    
    const navLinkElements = navLinks.querySelectorAll('.nav-link');
    const closeMenu = () => {
      navLinks.classList.remove('mobile-open');
      mobileMenuBtn.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    };
    
    navLinkElements.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
  
  // Check on load
  if (window.innerWidth <= 768) {
    createMobileButton();
  }
  
  // Handle resize with debounce
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.innerWidth <= 768) {
        createMobileButton();
      } else {
        destroyMobileButton();
      }
    }, 150);
  });
}

/**
 * Set up accessibility navigation features
 */
function setupAccessibilityNavigation() {
  // Focus management for navigation
  document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
      const mobileMenu = document.querySelector('.nav-links.mobile-open');
      if (mobileMenu) {
        mobileMenu.classList.remove('mobile-open');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (mobileMenuBtn) {
          mobileMenuBtn.classList.remove('active');
        }
      }
    }
    
    // Tab navigation enhancement
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });
  
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });
}

/**
 * Cleanup function
 */
export function cleanupNavigation() {
  cleanupFunctions.forEach(fn => fn());
  cleanupFunctions = [];
}