/**
 * Scroll Animations Module
 * Handles scroll-triggered animations with IntersectionObserver
 */

let cleanupFunctions = [];

/**
 * Initialize scroll animations
 */
export function initScrollAnimations() {
  setupScrollReveal();
  setupEnhancedScrollReveal();
  setupParallaxEffects();
  
  // Store cleanup functions
  cleanupFunctions.push(() => {
    // Remove scroll event listeners
    window.removeEventListener('scroll', handleScroll);
  });
}

/**
 * Basic scroll reveal animations
 */
function setupScrollReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe timeline items
  document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
  });
  
  // Observe project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    cardObserver.observe(card);
  });
}

/**
 * Enhanced scroll reveal with animations
 */
function setupEnhancedScrollReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Section reveal animations
  const sections = [
    { selector: '.hero-content', animation: 'fadeInLeft' },
    { selector: '.hero-image', animation: 'fadeInRight' },
    { selector: '#about', animation: 'fadeInUp' },
    { selector: '#skills', animation: 'fadeInUp' },
    { selector: '#experience', animation: 'fadeInUp' },
    { selector: '#projects', animation: 'fadeInUp' },
    { selector: '#contact', animation: 'fadeInUp' }
  ];
  
  // Card hover effects enhancement
  const cards = document.querySelectorAll('.project-card, .skill-category');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      if (!prefersReducedMotion) {
        this.style.transform = 'translateY(-8px)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      if (!prefersReducedMotion) {
        this.style.transform = 'translateY(0)';
      }
    });
  });
  
  // Button hover effects
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      if (!prefersReducedMotion) {
        this.style.transform = 'translateY(-2px)';
      }
    });
    
    btn.addEventListener('mouseleave', function() {
      if (!prefersReducedMotion) {
        this.style.transform = 'translateY(0)';
      }
    });
  });
  
  // Nav link hover effects
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      if (!prefersReducedMotion) {
        this.style.transform = 'translateY(-1px)';
      }
    });
    
    link.addEventListener('mouseleave', function() {
      if (!prefersReducedMotion) {
        this.style.transform = 'translateY(0)';
      }
    });
  });
  
  // Set up IntersectionObserver for scroll animations
  if (prefersReducedMotion) {
    // If reduced motion is preferred, just show all elements
    sections.forEach(section => {
      const elements = document.querySelectorAll(section.selector);
      elements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
    return;
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const section = sections.find(s => 
          entry.target.matches(s.selector) || 
          entry.target.closest(s.selector)
        );
        if (section) {
          setTimeout(() => {
            entry.target.style.animation = `${section.animation} 0.6s ease-out forwards`;
          }, index * 100);
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observe sections
  sections.forEach(section => {
    const elements = document.querySelectorAll(section.selector);
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = section.animation.includes('Left') ? 'translateX(-30px)' :
                          section.animation.includes('Right') ? 'translateX(30px)' :
                          section.animation.includes('Down') ? 'translateY(-30px)' : 'translateY(30px)';
      observer.observe(el);
    });
  });
  
  // Observe timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    
    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.transition = 'all 0.6s ease-out';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }, index * 100);
          itemObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    itemObserver.observe(item);
  });
  
  // Observe project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, cardIndex) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.transition = 'all 0.6s ease-out';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    cardObserver.observe(card);
  });
}

/**
 * Parallax effects
 */
function setupParallaxEffects() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;
  
  let ticking = false;
  
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-image, .phone-mockup');
        
        parallaxElements.forEach(el => {
          const speed = 0.5;
          const yPos = -(scrolled * speed);
          el.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
      });
      
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Cleanup function
 */
export function cleanupScrollAnimations() {
  cleanupFunctions.forEach(fn => fn());
  cleanupFunctions = [];
}