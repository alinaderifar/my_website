/**
 * Interactive Demos Module
 * Handles all interactive demo functionality
 */

let cleanupFunctions = [];

/**
 * Initialize all interactive demos
 */
export function initInteractiveDemos() {
  initFlutterDemo();
  initApiPlayground();
  initProductConfigurator();
  initKanbanBoard();
  initPatientDashboard();
  initDemoTabs();
  
  // Store cleanup functions
  cleanupFunctions.push(() => {
    // Remove event listeners from demo elements
    document.querySelectorAll('.demo-btn, .demo-tab, .config-option select, .color-option').forEach(el => {
      el.replaceWith(el.cloneNode(true));
    });
  });
}

/**
 * Flutter code editor demo
 */
function initFlutterDemo() {
  const demoBtnCode = document.querySelector('[data-demo="editor"]');
  const demoBtnPreview = document.querySelector('[data-demo="preview"]');
  const codeEditor = document.getElementById('flutterEditor');
  const codePreview = document.getElementById('flutterPreview');
  const demoFab = document.getElementById('demoFab');
  const demoCounter = document.getElementById('demoCounter');
  
  if (demoBtnCode && demoBtnPreview && codeEditor && codePreview) {
    demoBtnCode.addEventListener('click', () => {
      demoBtnCode.classList.add('active');
      demoBtnPreview.classList.remove('active');
      codeEditor.style.display = 'block';
      codePreview.style.display = 'none';
    });
    
    demoBtnPreview.addEventListener('click', () => {
      demoBtnPreview.classList.add('active');
      demoBtnCode.classList.remove('active');
      codeEditor.style.display = 'none';
      codePreview.style.display = 'block';
    });
  }
  
  if (demoFab && demoCounter) {
    let count = 0;
    demoFab.addEventListener('click', () => {
      count++;
      demoCounter.textContent = count;
      demoFab.style.transform = 'scale(1.2)';
      setTimeout(() => {
        demoFab.style.transform = 'scale(1)';
      }, 150);
    });
  }
}

/**
 * Laravel API playground
 */
function initApiPlayground() {
  const builderBtn = document.querySelector('[data-api-demo="builder"]');
  const testerBtn = document.querySelector('[data-api-demo="tester"]');
  const apiBuilder = document.getElementById('apiBuilder');
  const apiResponse = document.getElementById('apiResponse');
  const apiSendBtn = document.getElementById('apiSend');
  const apiMethod = document.getElementById('apiMethod');
  const apiEndpoint = document.getElementById('apiEndpoint');
  const apiHeaders = document.getElementById('apiHeaders');
  const apiBody = document.getElementById('apiBody');
  const responseTime = document.querySelector('.response-time');
  const responseContent = document.querySelector('.response-content code');
  
  if (builderBtn && testerBtn && apiBuilder && apiResponse) {
    builderBtn.addEventListener('click', () => {
      builderBtn.classList.add('active');
      testerBtn.classList.remove('active');
      apiBuilder.style.display = 'block';
      apiResponse.style.display = 'none';
    });
    
    testerBtn.addEventListener('click', () => {
      testerBtn.classList.add('active');
      builderBtn.classList.remove('active');
      apiBuilder.style.display = 'none';
      apiResponse.style.display = 'block';
    });
  }
  
  if (apiSendBtn) {
    apiSendBtn.addEventListener('click', () => {
      const method = apiMethod ? apiMethod.value : 'GET';
      const endpoint = apiEndpoint ? apiEndpoint.value : '/api/users';
      const startTime = Date.now();
      
      // Simulate API call
      apiSendBtn.textContent = 'Sending...';
      apiSendBtn.disabled = true;
      
      setTimeout(() => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        
        const mockResponses = {
          GET: {
            status: 'success',
            message: 'Data retrieved successfully',
            data: [
              { id: 1, name: 'John Doe', email: 'john@example.com' },
              { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
            ]
          },
          POST: {
            status: 'success',
            message: 'Resource created successfully',
            data: { id: 3, ...JSON.parse(apiBody ? apiBody.value || '{}' : '{}') }
          },
          PUT: {
            status: 'success',
            message: 'Resource updated successfully',
            data: { id: 1, updated: true }
          },
          DELETE: {
            status: 'success',
            message: 'Resource deleted successfully',
            data: null
          }
        };
        
        const response = mockResponses[method] || mockResponses.GET;
        
        if (responseTime) {
          responseTime.textContent = `${duration} ms`;
        }
        
        if (responseContent) {
          responseContent.textContent = JSON.stringify(response, null, 2);
        }
        
        apiSendBtn.textContent = 'Send Request';
        apiSendBtn.disabled = false;
        
        // Switch to tester view
        if (builderBtn && testerBtn) {
          testerBtn.classList.add('active');
          builderBtn.classList.remove('active');
          if (apiBuilder) apiBuilder.style.display = 'none';
          if (apiResponse) apiResponse.style.display = 'block';
        }
      }, 800 + Math.random() * 700);
    });
  }
}

/**
 * Product configurator
 */
function initProductConfigurator() {
  const configuratorDemo = document.getElementById('configuratorDemo');
  const productDetails = document.getElementById('productDetails');
  const demoTabs = document.querySelectorAll('.demo-tab');
  const productColor = document.getElementById('productColor');
  const productStorage = document.getElementById('productStorage');
  const productWarranty = document.getElementById('productWarranty');
  const warrantyCost = document.getElementById('warrantyCost');
  const totalPrice = document.getElementById('totalPrice');
  const colorOptions = document.querySelectorAll('.color-option');
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  
  // Demo tabs
  if (demoTabs.length > 0) {
    demoTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        demoTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const demo = tab.dataset.demo;
        if (demo === 'configurator' && configuratorDemo) {
          configuratorDemo.style.display = 'block';
        }
        if (demo === 'details' && productDetails) {
          productDetails.style.display = 'block';
        }
      });
    });
  }
  
  // Color selection
  if (colorOptions.length > 0) {
    colorOptions.forEach(option => {
      option.addEventListener('click', () => {
        colorOptions.forEach(o => o.classList.remove('active'));
        option.classList.add('active');
        
        if (productColor) {
          productColor.value = option.dataset.color;
        }
      });
    });
  }
  
  // Price calculation
  function updatePrice() {
    const basePrice = 299;
    const storagePrice = {
      '64': 0,
      '128': 50,
      '256': 150
    };
    const warrantyPrice = {
      '1': 0,
      '2': 49,
      '3': 99
    };
    
    const storage = productStorage ? productStorage.value : '64';
    const warranty = productWarranty ? productWarranty.value : '1';
    
    const storageCost = storagePrice[storage] || 0;
    const warrantyCostValue = warrantyPrice[warranty] || 0;
    const total = basePrice + storageCost + warrantyCostValue;
    
    if (warrantyCost) {
      warrantyCost.textContent = `$${warrantyCostValue}.00`;
    }
    if (totalPrice) {
      totalPrice.textContent = `$${total}.00`;
    }
  }
  
  if (productStorage) {
    productStorage.addEventListener('change', updatePrice);
  }
  if (productWarranty) {
    productWarranty.addEventListener('change', updatePrice);
  }
  
  // Add to cart
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      addToCartBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Added to Cart
      `;
      addToCartBtn.style.background = 'var(--success)';
      
      setTimeout(() => {
        addToCartBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Add to Cart
        `;
        addToCartBtn.style.background = '';
      }, 2000);
    });
  }
  
  updatePrice();
}

/**
 * Kanban board
 */
function initKanbanBoard() {
  const kanbanTasks = document.querySelectorAll('.kanban-task');
  const kanbanColumns = document.querySelectorAll('.kanban-tasks');
  
  if (kanbanTasks.length > 0) {
    kanbanTasks.forEach(task => {
      task.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', task.outerHTML);
        task.style.opacity = '0.5';
      });
      
      task.addEventListener('dragend', () => {
        task.style.opacity = '1';
      });
    });
  }
  
  if (kanbanColumns.length > 0) {
    kanbanColumns.forEach(column => {
      column.addEventListener('dragover', (e) => {
        e.preventDefault();
      });
      
      column.addEventListener('drop', (e) => {
        e.preventDefault();
        const taskHTML = e.dataTransfer.getData('text/plain');
        if (taskHTML) {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = taskHTML;
          const taskElement = tempDiv.firstChild;
          
          // Remove from old column
          const oldTask = document.querySelector(`[draggable="true"]`);
          if (oldTask && oldTask.parentElement !== column) {
            oldTask.remove();
          }
          
          column.appendChild(taskElement);
          initKanbanBoard(); // Reinitialize
        }
      });
    });
  }
}

/**
 * Patient dashboard
 */
function initPatientDashboard() {
  const scheduleBtn = document.querySelector('.dashboard-actions .btn-secondary');
  const joinBtns = document.querySelectorAll('.btn-small');
  
  if (scheduleBtn) {
    scheduleBtn.addEventListener('click', () => {
      alert('Appointment scheduling would open a calendar interface here.');
    });
  }
  
  if (joinBtns.length > 0) {
    joinBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        alert('Joining video consultation...');
      });
    });
  }
}

/**
 * Demo tabs
 */
function initDemoTabs() {
  const demoTabs = document.querySelectorAll('.demo-tab');
  
  if (demoTabs.length > 0) {
    demoTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const parent = tab.closest('.project-demo-container');
        if (parent) {
          const configuratorDemo = parent.querySelector('.configurator-demo');
          const productDetails = parent.querySelector('.product-details');
          
          if (tab.dataset.demo === 'configurator' && configuratorDemo) {
            configuratorDemo.style.display = 'block';
            if (productDetails) productDetails.style.display = 'none';
          } else if (tab.dataset.demo === 'details' && productDetails) {
            productDetails.style.display = 'block';
            if (configuratorDemo) configuratorDemo.style.display = 'none';
          }
          
          demoTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
        }
      });
    });
  }
}

/**
 * Cleanup function
 */
export function cleanupInteractiveDemos() {
  cleanupFunctions.forEach(fn => fn());
  cleanupFunctions = [];
}