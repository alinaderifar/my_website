/**
 * Forms Module
 * Handles form validation, submission, and accessibility
 */

let cleanupFunctions = [];

/**
 * Initialize forms
 */
export function initForms() {
  setupContactForm();
  setupFormValidation();
  setupFormAccessibility();
  
  // Store cleanup functions
  cleanupFunctions.push(() => {
    // Remove form event listeners
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.replaceWith(contactForm.cloneNode(true));
    }
  });
}

/**
 * Set up contact form
 */
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('.btn-primary');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = getTranslation('form_sending') || 'Sending...';
    submitBtn.disabled = true;
    
    try {
      // Simulate form submission
      await simulateFormSubmission(formData);
      
      // Show success message
      showFormMessage('success', getTranslation('form_success') || 'Message sent successfully!');
      
      // Reset form
      contactForm.reset();
      
    } catch (error) {
      // Show error message
      showFormMessage('error', getTranslation('form_error') || 'Failed to send message. Please try again.');
      
    } finally {
      // Restore button
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

/**
 * Simulate form submission (replace with actual API call)
 */
function simulateFormSubmission(formData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate random success/failure
      if (Math.random() > 0.2) {
        resolve({ success: true });
      } else {
        reject(new Error('Network error'));
      }
    }, 1500);
  });
}

/**
 * Show form message
 */
function showFormMessage(type, message) {
  // Remove existing messages
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Create message element
  const messageDiv = document.createElement('div');
  messageDiv.className = `form-message form-message-${type}`;
  messageDiv.textContent = message;
  messageDiv.setAttribute('role', 'alert');
  messageDiv.setAttribute('aria-live', 'polite');
  
  // Style the message
  messageDiv.style.cssText = `
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: var(--radius-sm);
    text-align: center;
    font-weight: 500;
  `;
  
  if (type === 'success') {
    messageDiv.style.background = 'rgba(16, 185, 129, 0.1)';
    messageDiv.style.color = '#10b981';
    messageDiv.style.border = '1px solid rgba(16, 185, 129, 0.2)';
  } else {
    messageDiv.style.background = 'rgba(239, 68, 68, 0.1)';
    messageDiv.style.color = '#ef4444';
    messageDiv.style.border = '1px solid rgba(239, 68, 68, 0.2)';
  }
  
  // Insert message before form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.parentNode.insertBefore(messageDiv, contactForm);
    
    // Auto-remove message after 5 seconds
    setTimeout(() => {
      if (messageDiv.parentNode) {
        messageDiv.remove();
      }
    }, 5000);
  }
}

/**
 * Set up form validation
 */
function setupFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      // Real-time validation
      input.addEventListener('blur', () => {
        validateField(input);
      });
      
      // Clear error on input
      input.addEventListener('input', () => {
        clearFieldError(input);
      });
    });
  });
}

/**
 * Validate a form field
 */
function validateField(field) {
  const value = field.value.trim();
  const fieldName = field.name || field.id;
  
  // Required field validation
  if (field.hasAttribute('required') && !value) {
    showFieldError(field, `${fieldName} is required`);
    return false;
  }
  
  // Email validation
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showFieldError(field, 'Please enter a valid email address');
      return false;
    }
  }
  
  // Clear error if valid
  clearFieldError(field);
  return true;
}

/**
 * Show field error
 */
function showFieldError(field, message) {
  // Remove existing error
  clearFieldError(field);
  
  // Add error class
  field.classList.add('error');
  
  // Create error message
  const errorDiv = document.createElement('div');
  errorDiv.className = 'field-error';
  errorDiv.textContent = message;
  errorDiv.style.cssText = `
    color: #ef4444;
    font-size: 0.85rem;
    margin-top: 0.25rem;
    display: block;
  `;
  
  // Insert after field
  field.parentNode.insertBefore(errorDiv, field.nextSibling);
  
  // Announce to screen readers
  announceToScreenReader(message);
}

/**
 * Clear field error
 */
function clearFieldError(field) {
  field.classList.remove('error');
  const errorDiv = field.parentNode.querySelector('.field-error');
  if (errorDiv) {
    errorDiv.remove();
  }
}

/**
 * Set up form accessibility
 */
function setupFormAccessibility() {
  // Add aria-describedby to inputs with help text
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      // Check for associated label
      if (!input.hasAttribute('aria-label') && !input.hasAttribute('aria-labelledby')) {
        const label = form.querySelector(`label[for="${input.id}"]`);
        if (label) {
          input.setAttribute('aria-labelledby', label.id || `${input.id}-label`);
        }
      }
      
      // Add required indicator for screen readers
      if (input.hasAttribute('required')) {
        input.setAttribute('aria-required', 'true');
      }
    });
  });
}

/**
 * Get translation for key
 */
function getTranslation(key) {
  // This would normally use the translations module
  // For now, return null to use default messages
  return null;
}

/**
 * Announce message to screen readers
 */
function announceToScreenReader(message) {
  const liveRegion = document.getElementById('sr-announcement') || createLiveRegion();
  liveRegion.textContent = '';
  setTimeout(() => {
    liveRegion.textContent = message;
  }, 100);
}

/**
 * Create live region for screen reader announcements
 */
function createLiveRegion() {
  const liveRegion = document.createElement('div');
  liveRegion.id = 'sr-announcement';
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  document.body.appendChild(liveRegion);
  return liveRegion;
}

/**
 * Cleanup function
 */
export function cleanupForms() {
  cleanupFunctions.forEach(fn => fn());
  cleanupFunctions = [];
}