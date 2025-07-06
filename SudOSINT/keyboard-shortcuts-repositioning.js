/**
 * Keyboard Shortcuts Repositioning System
 * Provides multiple positioning options and toggle functionality
 */

// Keyboard shortcuts positioning options
const KEYBOARD_HELP_POSITIONS = {
  'bottom-left': {
    bottom: '10px',
    left: '10px',
    right: 'auto',
    top: 'auto'
  },
  'top-left': {
    top: '90px', // Below navigation
    left: '10px',
    right: 'auto',
    bottom: 'auto'
  },
  'top-right': {
    top: '90px',
    right: '10px',
    left: 'auto',
    bottom: 'auto'
  },
  'center-bottom': {
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    right: 'auto',
    top: 'auto'
  },
  'floating': {
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    left: 'auto',
    bottom: 'auto'
  }
};

// Enhanced keyboard help with better positioning
function createEnhancedKeyboardHelp() {
  // Remove existing keyboard help if present
  const existingHelp = document.getElementById('keyboardHelp');
  if (existingHelp) {
    existingHelp.remove();
  }

  const keyboardHelp = document.createElement('div');
  keyboardHelp.id = 'keyboardHelp';
  keyboardHelp.className = 'keyboard-help-enhanced';
  
  // Default to bottom-left position
  const position = KEYBOARD_HELP_POSITIONS['bottom-left'];
  
  keyboardHelp.style.cssText = `
    position: fixed;
    background: var(--bg-primary);
    color: var(--text-primary);
    padding: 0.75rem;
    border: 1px solid var(--border-primary);
    border-radius: 6px;
    font-size: 0.75rem;
    z-index: 1000;
    box-shadow: 0 4px 15px var(--shadow-primary);
    font-family: var(--font-family);
    max-width: 250px;
    opacity: 0.9;
    transition: all 0.3s ease;
    cursor: move;
    user-select: none;
    ${Object.entries(position).map(([key, value]) => `${key}: ${value}`).join('; ')};
  `;

  // Create collapsible content
  keyboardHelp.innerHTML = `
    <div class="keyboard-help-header" style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid var(--border-secondary);
      padding-bottom: 0.25rem;
    ">
      <strong style="color: var(--accent-primary); font-size: 0.8rem;">⌨️ Shortcuts</strong>
      <div class="keyboard-help-controls">
        <button class="help-btn" onclick="toggleKeyboardHelp()" title="Collapse/Expand" style="
          background: none;
          border: none;
          color: var(--accent-primary);
          cursor: pointer;
          font-size: 0.8rem;
          padding: 0.2rem;
          margin-right: 0.25rem;
        ">−</button>
        <button class="help-btn" onclick="repositionKeyboardHelp()" title="Change Position" style="
          background: none;
          border: none;
          color: var(--accent-primary);
          cursor: pointer;
          font-size: 0.8rem;
          padding: 0.2rem;
          margin-right: 0.25rem;
        ">📍</button>
        <button class="help-btn" onclick="hideKeyboardHelp()" title="Hide" style="
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 0.8rem;
          padding: 0.2rem;
        ">✕</button>
      </div>
    </div>
    <div class="keyboard-help-content" id="keyboardHelpContent">
      <div style="margin-bottom: 0.25rem;"><strong style="color: var(--accent-primary);">Ctrl+S:</strong> Export Log</div>
      <div style="margin-bottom: 0.25rem;"><strong style="color: var(--accent-primary);">Ctrl+P:</strong> Print Report</div>
      <div style="margin-bottom: 0.25rem;"><strong style="color: var(--accent-primary);">Ctrl+N:</strong> Add Notes</div>
      <div style="margin-bottom: 0.25rem;"><strong style="color: var(--accent-primary);">Enter:</strong> Run Search</div>
      <div style="margin-bottom: 0.25rem;"><strong style="color: var(--accent-primary);">Esc:</strong> Clear Search</div>
      <div style="font-size: 0.7rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">
        Click and drag to move • Click 📍 to reposition • Click − to minimize
      </div>
    </div>
  `;

  // Add hover effects
  keyboardHelp.addEventListener('mouseenter', () => {
    keyboardHelp.style.opacity = '1';
    keyboardHelp.style.transform = (position.transform || '') + ' scale(1.02)';
  });

  keyboardHelp.addEventListener('mouseleave', () => {
    keyboardHelp.style.opacity = '0.9';
    keyboardHelp.style.transform = position.transform || '';
  });

  // Make draggable
  makeDraggable(keyboardHelp);

  document.body.appendChild(keyboardHelp);
  
  // Store current position in localStorage
  try {
    localStorage.setItem('keyboardHelp_position', 'bottom-left');
    localStorage.setItem('keyboardHelp_visible', 'true');
  } catch (e) {
    // Ignore localStorage errors
  }
}

// Toggle keyboard help visibility
function toggleKeyboardHelp() {
  const help = document.getElementById('keyboardHelp');
  const content = document.getElementById('keyboardHelpContent');
  const toggleBtn = help.querySelector('.help-btn');
  
  if (content.style.display === 'none') {
    content.style.display = 'block';
    toggleBtn.textContent = '−';
    help.style.maxWidth = '250px';
  } else {
    content.style.display = 'none';
    toggleBtn.textContent = '+';
    help.style.maxWidth = 'auto';
  }
  
  try {
    localStorage.setItem('keyboardHelp_collapsed', content.style.display === 'none');
  } catch (e) {
    // Ignore localStorage errors
  }
}

// Hide keyboard help completely
function hideKeyboardHelp() {
  const help = document.getElementById('keyboardHelp');
  if (help) {
    help.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
      help.remove();
      // Add a small show button
      createShowKeyboardHelpButton();
    }, 300);
  }
  
  try {
    localStorage.setItem('keyboardHelp_visible', 'false');
  } catch (e) {
    // Ignore localStorage errors
  }
}

// Create small button to show keyboard help again
function createShowKeyboardHelpButton() {
  const showBtn = document.createElement('button');
  showBtn.id = 'showKeyboardHelpBtn';
  showBtn.innerHTML = '⌨️';
  showBtn.title = 'Show Keyboard Shortcuts';
  showBtn.style.cssText = `
    position: fixed;
    bottom: 10px;
    left: 10px;
    background: var(--accent-primary);
    color: var(--bg-primary);
    border: none;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 999;
    font-size: 0.9rem;
    box-shadow: 0 2px 10px var(--shadow-primary);
    transition: all 0.2s ease;
  `;
  
  showBtn.addEventListener('mouseenter', () => {
    showBtn.style.transform = 'scale(1.1)';
    showBtn.style.boxShadow = '0 4px 20px var(--shadow-primary)';
  });
  
  showBtn.addEventListener('mouseleave', () => {
    showBtn.style.transform = 'scale(1)';
    showBtn.style.boxShadow = '0 2px 10px var(--shadow-primary)';
  });
  
  showBtn.onclick = () => {
    showBtn.remove();
    createEnhancedKeyboardHelp();
  };
  
  document.body.appendChild(showBtn);
}

// Reposition keyboard help
function repositionKeyboardHelp() {
  const positions = Object.keys(KEYBOARD_HELP_POSITIONS);
  const currentPos = getCurrentPosition();
  const currentIndex = positions.indexOf(currentPos);
  const nextIndex = (currentIndex + 1) % positions.length;
  const nextPosition = positions[nextIndex];
  
  setKeyboardHelpPosition(nextPosition);
  
  // Show brief notification of new position
  showNotification(`Shortcuts moved to: ${nextPosition.replace('-', ' ')}`, 'info');
}

// Get current position from localStorage or default
function getCurrentPosition() {
  try {
    return localStorage.getItem('keyboardHelp_position') || 'bottom-left';
  } catch (e) {
    return 'bottom-left';
  }
}

// Set keyboard help position
function setKeyboardHelpPosition(positionName) {
  const help = document.getElementById('keyboardHelp');
  if (!help) return;
  
  const position = KEYBOARD_HELP_POSITIONS[positionName];
  if (!position) return;
  
  // Apply new position styles
  Object.entries(position).forEach(([property, value]) => {
    help.style[property] = value;
  });
  
  // Reset other position properties
  const allProps = ['top', 'bottom', 'left', 'right', 'transform'];
  allProps.forEach(prop => {
    if (!position[prop]) {
      help.style[prop] = 'auto';
    }
  });
  
  try {
    localStorage.setItem('keyboardHelp_position', positionName);
  } catch (e) {
    // Ignore localStorage errors
  }
}

// Make element draggable
function makeDraggable(element) {
  let isDragging = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  element.addEventListener('mousedown', dragStart);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', dragEnd);

  function dragStart(e) {
    if (e.target.classList.contains('help-btn')) return; // Don't drag when clicking buttons
    
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === element || e.target.classList.contains('keyboard-help-header')) {
      isDragging = true;
      element.style.cursor = 'grabbing';
    }
  }

  function drag(e) {
    if (isDragging) {
      e.preventDefault();
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      xOffset = currentX;
      yOffset = currentY;

      // Override position styles when dragging
      element.style.top = `${currentY}px`;
      element.style.left = `${currentX}px`;
      element.style.right = 'auto';
      element.style.bottom = 'auto';
      element.style.transform = 'none';
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
    element.style.cursor = 'move';
  }
}

// Position selector modal
function showPositionSelector() {
  const modal = document.createElement('div');
  modal.className = 'modal position-selector-modal';
  modal.style.display = 'block';

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 400px;">
      <div class="modal-header">
        <h3>📍 Position Keyboard Shortcuts</h3>
        <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
      </div>
      <div class="modal-body">
        <p style="color: var(--text-secondary); margin-bottom: 1rem;">
          Choose where you'd like the keyboard shortcuts help to appear:
        </p>
        
        <div style="display: grid; gap: 0.5rem;">
          ${Object.entries(KEYBOARD_HELP_POSITIONS).map(([key, position]) => `
            <button onclick="setKeyboardHelpPosition('${key}'); this.closest('.modal').remove();" style="
              background: var(--bg-secondary);
              color: var(--text-primary);
              border: 1px solid var(--border-primary);
              padding: 0.75rem;
              border-radius: 4px;
              cursor: pointer;
              text-align: left;
              transition: all 0.2s ease;
            " onmouseover="this.style.background='var(--accent-primary)'; this.style.color='var(--bg-primary)';"
               onmouseout="this.style.background='var(--bg-secondary)'; this.style.color='var(--text-primary)';">
              📍 ${key.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          `).join('')}
        </div>
        
        <div style="
          margin-top: 1rem;
          padding: 0.75rem;
          background: var(--shadow-secondary);
          border-radius: 4px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        ">
          💡 <strong>Tip:</strong> You can also drag the shortcuts box to any position you like!
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

// Load saved keyboard help preferences
function loadKeyboardHelpPreferences() {
  try {
    const isVisible = localStorage.getItem('keyboardHelp_visible') !== 'false';
    const position = localStorage.getItem('keyboardHelp_position') || 'bottom-left';
    const isCollapsed = localStorage.getItem('keyboardHelp_collapsed') === 'true';
    
    if (isVisible) {
      createEnhancedKeyboardHelp();
      setKeyboardHelpPosition(position);
      
      if (isCollapsed) {
        setTimeout(() => toggleKeyboardHelp(), 100);
      }
    } else {
      createShowKeyboardHelpButton();
    }
  } catch (e) {
    // Fallback to default
    createEnhancedKeyboardHelp();
  }
}

// Add CSS animations
function addKeyboardHelpStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeOut {
      from { opacity: 1; transform: scale(1); }
      to { opacity: 0; transform: scale(0.8); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.8); }
      to { opacity: 1; transform: scale(1); }
    }
    
    .keyboard-help-enhanced {
      animation: fadeIn 0.3s ease;
    }
    
    .help-btn:hover {
      background: var(--shadow-secondary) !important;
      border-radius: 2px;
    }
    
    [data-theme="professional"] .keyboard-help-enhanced {
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      border: 1px solid #dee2e6;
    }
    
    [data-theme="professional"] #showKeyboardHelpBtn {
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    
    @media (max-width: 768px) {
      .keyboard-help-enhanced {
        max-width: 200px !important;
        font-size: 0.7rem !important;
      }
      
      #showKeyboardHelpBtn {
        width: 30px !important;
        height: 30px !important;
        font-size: 0.8rem !important;
      }
    }
  `;
  document.head.appendChild(style);
}

// Make functions globally available
window.toggleKeyboardHelp = toggleKeyboardHelp;
window.hideKeyboardHelp = hideKeyboardHelp;
window.repositionKeyboardHelp = repositionKeyboardHelp;
window.setKeyboardHelpPosition = setKeyboardHelpPosition;
window.showPositionSelector = showPositionSelector;

// Initialize enhanced keyboard help
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    addKeyboardHelpStyles();
    loadKeyboardHelpPreferences();
    
    console.log('⌨️ Enhanced keyboard shortcuts help loaded');
  }, 1000);
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createEnhancedKeyboardHelp,
    toggleKeyboardHelp,
    hideKeyboardHelp,
    repositionKeyboardHelp,
    setKeyboardHelpPosition,
    KEYBOARD_HELP_POSITIONS
  };
}