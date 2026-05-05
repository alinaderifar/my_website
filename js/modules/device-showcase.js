/**
 * Device Showcase Module
 * Handles device switching and 3D effects
 */

let cleanupFunctions = [];

/**
 * Initialize device showcase
 */
export function initDeviceShowcase() {
  setupDeviceToggle();
  setup3DEffects();
  setupDeviceMorphing();
  
  // Store cleanup functions
  cleanupFunctions.push(() => {
    // Remove event listeners
    document.querySelectorAll('.device-btn').forEach(btn => {
      btn.replaceWith(btn.cloneNode(true));
    });
  });
}

/**
 * Set up device toggle buttons
 */
function setupDeviceToggle() {
  const deviceBtns = document.querySelectorAll('.device-btn');
  const deviceMockups = document.querySelectorAll('.device-mockup');
  
  deviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const device = btn.dataset.device;
      
      // Update active button
      deviceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Switch device mockup
      deviceMockups.forEach(mockup => {
        mockup.classList.remove('active');
        if (mockup.dataset.device === device) {
          setTimeout(() => {
            mockup.classList.add('active');
          }, 50);
        }
      });
    });
  });
}

/**
 * Set up 3D tilt effects for device mockups
 */
function setup3DEffects() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;
  
  const deviceMockups = document.querySelectorAll('.device-mockup-3d, .laptop-mockup-3d');
  
  deviceMockups.forEach(mockup => {
    mockup.addEventListener('mousemove', (e) => {
      const rect = mockup.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;
      
      mockup.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    mockup.addEventListener('mouseleave', () => {
      mockup.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });
}

/**
 * Set up device morphing animations
 */
function setupDeviceMorphing() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;
  
  const showcaseSection = document.querySelector('.showcase-section');
  if (!showcaseSection) return;
  
  // Create morphing shapes
  for (let i = 0; i < 3; i++) {
    const shape = document.createElement('div');
    shape.className = 'device-morph';
    shape.style.left = Math.random() * 100 + '%';
    shape.style.top = Math.random() * 100 + '%';
    shape.style.animationDelay = Math.random() * 5 + 's';
    showcaseSection.appendChild(shape);
  }
}

/**
 * Cleanup function
 */
export function cleanupDeviceShowcase() {
  cleanupFunctions.forEach(fn => fn());
  cleanupFunctions = [];
}