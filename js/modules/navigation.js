/**
 * Navigation Module
 * Handles smooth scrolling, navbar effects, and mobile menu
 */

let cleanupFunctions = [];

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
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const headerHeight = 70;
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
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
  if (window.innerWidth <= 768) {
    const mobileButton = document.createElement('button');
    mobileButton.className = 'mobile-menu-btn';
    mobileButton.setAttribute('aria-label', 'Toggle mobile menu');
    mobileButton.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;
    
    navbar.insertBefore(mobileButton, navLinks);
    
    mobileButton.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      mobileButton.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        mobileButton.classList.remove('active');
      });
    });
  }
}

/**
 * Set up accessibility navigation features
 */
function setupAccessibilityNavigation() {
  // Skip to main content link
  const skipLink = document.createElement('a');
  skipLink.href = '#main';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Skip to main content';
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Focus management for navigation
  document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
      const mobileMenu = document.querySelector('.nav-links.mobile-open');
      if (mobileMenu) {
        mobileMenu.classList.remove('mobile-open');
        document.querySelector('.mobile-menu-btn')?.classList.remove('active');
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