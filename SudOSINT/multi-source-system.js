/**
 * Fix for Multi-Source System - Ensures all sources actually open
 */

// Fixed function to properly open all sources
function openAllSources(moduleType, searchTerm) {
  const sources = MULTI_SOURCE_MODULES[moduleType];
  if (!sources) {
    console.error('No sources found for module type:', moduleType);
    return;
  }

  const totalSources = sources.sources.length;
  const confirmed = confirm(`🚀 Open ${totalSources} tabs for ${sources.name}?\n\nSearch term: "${searchTerm}"\n\nThis will open many browser tabs. Continue?`);
  if (!confirmed) return;

  console.log(`Opening ${totalSources} sources for ${moduleType}:`, sources.sources.map(s => s.name));

  let successCount = 0;
  let errorCount = 0;

  sources.sources.forEach((source, index) => {
    setTimeout(() => {
      try {
        let url = source.url;
        
        // Handle different URL patterns
        if (url.includes('{query}')) {
          url = url.replace('{query}', encodeURIComponent(searchTerm));
        } else if (source.category === 'google-dorks' && source.dorkQuery) {
          // Handle Google dork sources
          const query = source.dorkQuery.replace('{query}', encodeURIComponent(searchTerm));
          url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
        
        console.log(`Opening source ${index + 1}/${totalSources}: ${source.name} -> ${url}`);
        
        // Open the URL
        const newWindow = window.open(url, '_blank');
        
        if (newWindow) {
          successCount++;
          addToLog(`${sources.name} - ${source.name}`, searchTerm, url);
          console.log(`✅ Successfully opened: ${source.name}`);
        } else {
          errorCount++;
          console.warn(`❌ Failed to open: ${source.name} (popup blocked?)`);
        }
        
        // Show progress update every 5 sources
        if ((index + 1) % 5 === 0 || index === totalSources - 1) {
          const progress = `Opened ${index + 1}/${totalSources} sources`;
          console.log(progress);
          
          // Update user with progress for large batches
          if (totalSources > 10 && (index + 1) % 5 === 0) {
            showNotification(progress, 'info');
          }
        }
        
      } catch (error) {
        errorCount++;
        console.error(`Error opening source ${source.name}:`, error);
      }
      
      // Show final completion message
      if (index === totalSources - 1) {
        setTimeout(() => {
          const message = `🚀 Completed: ${successCount} sources opened${errorCount > 0 ? `, ${errorCount} failed` : ''}`;
          showNotification(message, successCount > 0 ? 'success' : 'error');
          console.log(`Final result: ${successCount} successful, ${errorCount} failed`);
        }, 500);
      }
      
    }, index * 150); // Stagger the openings with 150ms delays
  });

  // Close modal after starting the process
  setTimeout(() => {
    const modal = document.querySelector('.multi-source-modal');
    if (modal) {
      modal.remove();
      console.log('Multi-source modal closed');
    }
  }, 1000); // Give time for user to see the process starting
}

// Fixed function for primary sources
function openPrimarySources(moduleType, searchTerm) {
  const sources = MULTI_SOURCE_MODULES[moduleType];
  if (!sources) return;

  const primarySources = sources.sources.filter(source => source.category === 'primary');
  const totalSources = primarySources.length;
  
  if (totalSources === 0) {
    showNotification('No primary sources found for this module', 'warning');
    return;
  }
  
  const confirmed = confirm(`⭐ Open ${totalSources} primary sources for ${sources.name}?\n\nSearch term: "${searchTerm}"`);
  if (!confirmed) return;

  console.log(`Opening ${totalSources} primary sources:`, primarySources.map(s => s.name));

  let successCount = 0;

  primarySources.forEach((source, index) => {
    setTimeout(() => {
      try {
        let url = source.url;
        if (url.includes('{query}')) {
          url = url.replace('{query}', encodeURIComponent(searchTerm));
        }
        
        const newWindow = window.open(url, '_blank');
        if (newWindow) {
          successCount++;
          addToLog(`${sources.name} - ${source.name}`, searchTerm, url);
          console.log(`✅ Opened primary source: ${source.name}`);
        }
      } catch (error) {
        console.error(`Error opening primary source ${source.name}:`, error);
      }
      
      if (index === totalSources - 1) {
        setTimeout(() => {
          showNotification(`⭐ Opened ${successCount} primary sources`, 'success');
        }, 300);
      }
    }, index * 150);
  });

  setTimeout(() => {
    const modal = document.querySelector('.multi-source-modal');
    if (modal) modal.remove();
  }, 500);
}

// Fixed function for free sources
function openFreeSources(moduleType, searchTerm) {
  const sources = MULTI_SOURCE_MODULES[moduleType];
  if (!sources) return;

  const freeSources = sources.sources.filter(source => source.category === 'free');
  const totalSources = freeSources.length;
  
  if (totalSources === 0) {
    showNotification('No free sources found for this module', 'warning');
    return;
  }
  
  const confirmed = confirm(`🆓 Open ${totalSources} free sources for ${sources.name}?\n\nSearch term: "${searchTerm}"`);
  if (!confirmed) return;

  console.log(`Opening ${totalSources} free sources:`, freeSources.map(s => s.name));

  let successCount = 0;

  freeSources.forEach((source, index) => {
    setTimeout(() => {
      try {
        let url = source.url;
        if (url.includes('{query}')) {
          url = url.replace('{query}', encodeURIComponent(searchTerm));
        }
        
        const newWindow = window.open(url, '_blank');
        if (newWindow) {
          successCount++;
          addToLog(`${sources.name} - ${source.name}`, searchTerm, url);
          console.log(`✅ Opened free source: ${source.name}`);
        }
      } catch (error) {
        console.error(`Error opening free source ${source.name}:`, error);
      }
      
      if (index === totalSources - 1) {
        setTimeout(() => {
          showNotification(`🆓 Opened ${successCount} free sources`, 'success');
        }, 300);
      }
    }, index * 150);
  });

  setTimeout(() => {
    const modal = document.querySelector('.multi-source-modal');
    if (modal) modal.remove();
  }, 500);
}

// Fixed function for category sources
function openCategorySources(moduleType, searchTerm, category) {
  const sources = MULTI_SOURCE_MODULES[moduleType];
  if (!sources) return;

  const categorySources = sources.sources.filter(source => source.category === category);
  const totalSources = categorySources.length;
  
  if (totalSources === 0) {
    showNotification(`No ${category} sources found`, 'warning');
    return;
  }
  
  const confirmed = confirm(`📋 Open ${totalSources} ${category} sources?\n\nSearch term: "${searchTerm}"`);
  if (!confirmed) return;

  console.log(`Opening ${totalSources} ${category} sources:`, categorySources.map(s => s.name));

  let successCount = 0;

  categorySources.forEach((source, index) => {
    setTimeout(() => {
      try {
        let url = source.url;
        if (url.includes('{query}')) {
          url = url.replace('{query}', encodeURIComponent(searchTerm));
        } else if (source.category === 'google-dorks' && source.dorkQuery) {
          const query = source.dorkQuery.replace('{query}', encodeURIComponent(searchTerm));
          url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
        
        const newWindow = window.open(url, '_blank');
        if (newWindow) {
          successCount++;
          addToLog(`${sources.name} - ${source.name}`, searchTerm, url);
          console.log(`✅ Opened ${category} source: ${source.name}`);
        }
      } catch (error) {
        console.error(`Error opening ${category} source ${source.name}:`, error);
      }
      
      if (index === totalSources - 1) {
        setTimeout(() => {
          showNotification(`📋 Opened ${successCount} ${category} sources`, 'success');
        }, 300);
      }
    }, index * 150);
  });

  // Don't close modal immediately for category sources - let user see progress
  setTimeout(() => {
    showNotification(`📋 ${category} sources opening...`, 'info');
  }, 100);
}

// Enhanced single source function with better error handling
function openSingleSource(moduleType, searchTerm, sourceName, sourceUrl) {
  try {
    let url = sourceUrl;
    if (url.includes('{query}')) {
      url = url.replace('{query}', encodeURIComponent(searchTerm));
    }
    
    console.log(`Opening single source: ${sourceName} -> ${url}`);
    
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
      addToLog(`${MULTI_SOURCE_MODULES[moduleType].name} - ${sourceName}`, searchTerm, url);
      showNotification(`🔍 Opened ${sourceName}`, 'info');
      console.log(`✅ Successfully opened: ${sourceName}`);
    } else {
      showNotification(`❌ Failed to open ${sourceName} (popup blocked?)`, 'error');
      console.warn(`❌ Failed to open: ${sourceName}`);
    }
  } catch (error) {
    console.error(`Error opening single source ${sourceName}:`, error);
    showNotification(`❌ Error opening ${sourceName}`, 'error');
  }
}

// Enhanced notification function with better styling
function showNotification(message, type = 'info') {
  // Remove any existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notif => notif.remove());
  
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  
  const colors = {
    'info': 'background: #0dcaf0; color: #000;',
    'success': 'background: #198754; color: #fff;', 
    'warning': 'background: #ffc107; color: #000;',
    'error': 'background: #dc3545; color: #fff;'
  };
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    ${colors[type]}
    padding: 1rem 1.5rem;
    border-radius: 6px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    z-index: 3000;
    font-family: var(--font-family);
    font-size: 14px;
    font-weight: 600;
    animation: slideInRight 0.3s ease;
    max-width: 300px;
    word-wrap: break-word;
  `;
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Auto-remove after 4 seconds (longer for error messages)
  const timeout = type === 'error' ? 6000 : 4000;
  setTimeout(() => {
    if (document.body.contains(notification)) {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }
  }, timeout);
}

// Apply fixes to global scope
function applyMultiSourceFixes() {
  // Override the existing functions with fixed versions
  window.openAllSources = openAllSources;
  window.openPrimarySources = openPrimarySources;
  window.openFreeSources = openFreeSources;
  window.openCategorySources = openCategorySources;
  window.openSingleSource = openSingleSource;
  window.showNotification = showNotification;
  
  console.log('🔧 Multi-source system fixes applied');
  
  // Add browser popup blocker detection
  setTimeout(() => {
    addPopupBlockerWarning();
  }, 1000);
}

// Add popup blocker warning
function addPopupBlockerWarning() {
  const warningStyle = document.createElement('style');
  warningStyle.textContent = `
    .popup-blocker-warning {
      position: fixed;
      top: 80px;
      right: 20px;
      background: #ffc107;
      color: #000;
      padding: 0.75rem 1rem;
      border-radius: 4px;
      font-size: 0.85rem;
      z-index: 2999;
      max-width: 280px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      border-left: 4px solid #ff8c00;
    }
  `;
  document.head.appendChild(warningStyle);
  
  // Show warning about popup blockers
  setTimeout(() => {
    const warning = document.createElement('div');
    warning.className = 'popup-blocker-warning';
    warning.innerHTML = `
      ⚠️ <strong>Tip:</strong> If tabs don't open, disable popup blocker for this site to allow multi-source searches.
      <button onclick="this.parentElement.remove()" style="
        float: right;
        background: none;
        border: none;
        font-size: 1.2em;
        cursor: pointer;
        margin-left: 0.5rem;
      ">&times;</button>
    `;
    document.body.appendChild(warning);
    
    // Auto-remove after 8 seconds
    setTimeout(() => {
      if (document.body.contains(warning)) {
        warning.remove();
      }
    }, 8000);
  }, 3000);
}

// Initialize fixes when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    applyMultiSourceFixes();
  }, 3000); // Apply after other systems load
});

// Export fixed functions
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    openAllSources,
    openPrimarySources,
    openFreeSources,
    openCategorySources,
    openSingleSource,
    showNotification,
    applyMultiSourceFixes
  };
}