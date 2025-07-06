/**
 * URL Validation and Error Handling System
 * Handles broken URLs, invalid search terms, and provides fallback options
 */

// URL validation and fixing patterns
const URL_PATTERNS = {
  phone: {
    // Common phone number formats and their fixes
    patterns: [
      {
        // Remove non-numeric characters for most phone lookups
        test: /^[\+\-\(\)\s\.]/,
        fix: (term) => term.replace(/[^\d]/g, ''),
        description: "Cleaned phone number (digits only)"
      },
      {
        // Format for US phone numbers (add dashes)
        test: /^\d{10}$/,
        fix: (term) => `${term.slice(0,3)}-${term.slice(3,6)}-${term.slice(6)}`,
        description: "Formatted US phone (XXX-XXX-XXXX)"
      },
      {
        // International format
        test: /^\+/,
        fix: (term) => term.replace(/[^\d\+]/g, ''),
        description: "International format"
      }
    ],
    maxLength: 15,
    minLength: 7
  },
  
  email: {
    patterns: [
      {
        // Basic email validation and cleanup
        test: /\s/,
        fix: (term) => term.trim().toLowerCase(),
        description: "Cleaned email address"
      },
      {
        // Remove extra characters
        test: /[<>"']/,
        fix: (term) => term.replace(/[<>"']/g, ''),
        description: "Removed invalid characters"
      }
    ],
    maxLength: 254,
    minLength: 5,
    validate: (term) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(term)
  },
  
  name: {
    patterns: [
      {
        // Clean up names
        test: /\s{2,}/,
        fix: (term) => term.replace(/\s+/g, ' ').trim(),
        description: "Cleaned spacing"
      },
      {
        // Title case
        test: /^[a-z]/,
        fix: (term) => term.split(' ').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' '),
        description: "Proper name formatting"
      }
    ],
    maxLength: 100,
    minLength: 2
  },
  
  domain: {
    patterns: [
      {
        // Remove protocol if present
        test: /^https?:\/\//,
        fix: (term) => term.replace(/^https?:\/\//, ''),
        description: "Removed protocol"
      },
      {
        // Remove trailing slash
        test: /\/$/,
        fix: (term) => term.replace(/\/$/, ''),
        description: "Cleaned domain format"
      },
      {
        // Convert to lowercase
        test: /[A-Z]/,
        fix: (term) => term.toLowerCase(),
        description: "Lowercase domain"
      }
    ],
    maxLength: 253,
    minLength: 4,
    validate: (term) => /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.[a-zA-Z]{2,}$/.test(term)
  },
  
  ip: {
    patterns: [
      {
        // Basic IP cleanup
        test: /\s/,
        fix: (term) => term.trim(),
        description: "Cleaned IP address"
      }
    ],
    validate: (term) => /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(term)
  },
  
  username: {
    patterns: [
      {
        // Remove @ symbol if present
        test: /^@/,
        fix: (term) => term.replace(/^@/, ''),
        description: "Removed @ symbol"
      },
      {
        // Clean username
        test: /\s/,
        fix: (term) => term.trim().toLowerCase(),
        description: "Cleaned username"
      }
    ],
    maxLength: 50,
    minLength: 1
  }
};

// Known problematic URLs and their fixes/alternatives
const URL_FIXES = {
  // Sites that commonly fail or have issues
  'truecaller.com': {
    issues: ['Requires login', 'Rate limiting'],
    alternatives: ['whitepages.com', 'spydialer.com'],
    fix: (url) => url.replace('/search/', '/lookup/')
  },
  
  'pipl.com': {
    issues: ['Premium service', 'Limited free searches'],
    alternatives: ['fastpeoplesearch.com', 'truepeoplesearch.com'],
    notice: 'This is a premium service with limited free access'
  },
  
  'dehashed.com': {
    issues: ['Requires subscription'],
    alternatives: ['haveibeenpwned.com', 'leakcheck.io'],
    notice: 'This service requires a paid subscription'
  },
  
  'snusbase.com': {
    issues: ['Requires subscription'],
    alternatives: ['haveibeenpwned.com'],
    notice: 'This service requires a paid subscription'
  },
  
  'spokeo.com': {
    issues: ['Requires subscription for full results'],
    alternatives: ['fastpeoplesearch.com', 'whitepages.com'],
    notice: 'Free preview only, full results require subscription'
  }
};

// Function to validate and fix search terms
function validateAndFixSearchTerm(term, moduleType) {
  if (!term || typeof term !== 'string') {
    return {
      isValid: false,
      error: 'Invalid search term',
      suggestions: ['Enter a valid search term']
    };
  }

  const original = term;
  let fixed = term.trim();
  const fixes = [];
  const warnings = [];
  
  const patterns = URL_PATTERNS[moduleType];
  if (!patterns) {
    return {
      isValid: true,
      term: fixed,
      original: original,
      fixes: []
    };
  }

  // Apply pattern fixes
  patterns.patterns?.forEach(pattern => {
    if (pattern.test.test(fixed)) {
      const newTerm = pattern.fix(fixed);
      if (newTerm !== fixed) {
        fixes.push(pattern.description);
        fixed = newTerm;
      }
    }
  });

  // Length validation
  if (patterns.maxLength && fixed.length > patterns.maxLength) {
    return {
      isValid: false,
      error: `Search term too long (max ${patterns.maxLength} characters)`,
      suggestions: [`Shorten to ${patterns.maxLength} characters or less`]
    };
  }

  if (patterns.minLength && fixed.length < patterns.minLength) {
    return {
      isValid: false,
      error: `Search term too short (min ${patterns.minLength} characters)`,
      suggestions: [`Use at least ${patterns.minLength} characters`]
    };
  }

  // Custom validation
  if (patterns.validate && !patterns.validate(fixed)) {
    return {
      isValid: false,
      error: `Invalid ${moduleType} format`,
      suggestions: getFormatSuggestions(moduleType)
    };
  }

  return {
    isValid: true,
    term: fixed,
    original: original,
    fixes: fixes,
    warnings: warnings
  };
}

// Get format suggestions for different module types
function getFormatSuggestions(moduleType) {
  const suggestions = {
    phone: [
      'Use format: 555-123-4567',
      'International: +1-555-123-4567',
      'Digits only: 5551234567'
    ],
    email: [
      'Use format: user@domain.com',
      'Check for typos in domain',
      'Remove extra spaces or characters'
    ],
    domain: [
      'Use format: example.com',
      'Remove http:// or https://',
      'Use lowercase letters only'
    ],
    ip: [
      'Use format: 192.168.1.1',
      'Must be valid IPv4 address',
      'Check for typos in numbers'
    ],
    name: [
      'Use full name: John Smith',
      'Check spelling and spacing',
      'Try different name variations'
    ],
    username: [
      'Remove @ symbol if present',
      'Use lowercase letters',
      'Check for special characters'
    ]
  };
  
  return suggestions[moduleType] || ['Check format and try again'];
}

// Enhanced URL building with validation
function buildValidatedURL(source, searchTerm, moduleType) {
  // Validate search term first
  const validation = validateAndFixSearchTerm(searchTerm, moduleType);
  
  if (!validation.isValid) {
    return {
      success: false,
      error: validation.error,
      suggestions: validation.suggestions
    };
  }

  const term = validation.term;
  let url = source.url;

  try {
    // Handle different URL patterns
    if (url.includes('{query}')) {
      url = url.replace('{query}', encodeURIComponent(term));
    } else if (source.category === 'google-dorks' && source.dorkQuery) {
      const query = source.dorkQuery.replace('{query}', encodeURIComponent(term));
      url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }

    // Apply any URL fixes
    const domain = extractDomain(url);
    const urlFix = URL_FIXES[domain];
    if (urlFix && urlFix.fix) {
      url = urlFix.fix(url);
    }

    return {
      success: true,
      url: url,
      term: term,
      originalTerm: validation.original,
      fixes: validation.fixes,
      warnings: urlFix ? [urlFix.notice] : [],
      alternatives: urlFix ? urlFix.alternatives : []
    };

  } catch (error) {
    return {
      success: false,
      error: `Failed to build URL: ${error.message}`,
      suggestions: ['Check the source configuration', 'Try a different search term']
    };
  }
}

// Extract domain from URL
function extractDomain(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return '';
  }
}

// Enhanced source opening with validation and error handling
function openSourceWithValidation(source, searchTerm, moduleType, sourceName) {
  const result = buildValidatedURL(source, searchTerm, moduleType);
  
  if (!result.success) {
    showValidationError(sourceName, result.error, result.suggestions);
    return { success: false, error: result.error };
  }

  // Show fixes applied if any
  if (result.fixes && result.fixes.length > 0) {
    const fixMessage = `Search term adjusted: ${result.fixes.join(', ')}`;
    showNotification(fixMessage, 'info');
    console.log(`🔧 Applied fixes to "${result.originalTerm}" → "${result.term}": ${result.fixes.join(', ')}`);
  }

  // Show warnings if any
  if (result.warnings && result.warnings.length > 0) {
    result.warnings.forEach(warning => {
      showNotification(`⚠️ ${sourceName}: ${warning}`, 'warning');
    });
  }

  try {
    console.log(`Opening validated source: ${sourceName} -> ${result.url}`);
    
    const newWindow = window.open(result.url, '_blank');
    
    if (newWindow) {
      addToLog(`${sourceName}`, result.term, result.url);
      
      // Log the fixes applied
      if (result.fixes.length > 0) {
        addToLog(`${sourceName} - Fixes Applied`, `${result.originalTerm} → ${result.term}`, result.fixes.join(', '));
      }
      
      return { success: true, url: result.url, term: result.term };
    } else {
      throw new Error('Popup blocked or window failed to open');
    }
    
  } catch (error) {
    console.error(`Failed to open ${sourceName}:`, error);
    
    // Show error with alternatives if available
    if (result.alternatives && result.alternatives.length > 0) {
      showErrorWithAlternatives(sourceName, error.message, result.alternatives);
    } else {
      showNotification(`❌ Failed to open ${sourceName}: ${error.message}`, 'error');
    }
    
    return { success: false, error: error.message };
  }
}

// Show validation error with suggestions
function showValidationError(sourceName, error, suggestions) {
  const modal = document.createElement('div');
  modal.className = 'modal validation-error-modal';
  modal.style.display = 'block';

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 500px;">
      <div class="modal-header">
        <h3>❌ Search Term Error</h3>
        <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
      </div>
      <div class="modal-body">
        <div style="
          background: #f8d7da;
          color: #721c24;
          padding: 1rem;
          border-radius: 4px;
          margin-bottom: 1rem;
          border-left: 4px solid #dc3545;
        ">
          <strong>Source:</strong> ${sourceName}<br/>
          <strong>Error:</strong> ${error}
        </div>
        
        <h4 style="color: var(--accent-primary); margin-bottom: 0.5rem;">💡 Suggestions:</h4>
        <ul style="margin: 0; padding-left: 1.5rem;">
          ${suggestions.map(suggestion => `<li style="margin-bottom: 0.5rem;">${suggestion}</li>`).join('')}
        </ul>
        
        <div style="text-align: center; margin-top: 1.5rem;">
          <button onclick="this.closest('.modal').remove()" style="
            background: var(--accent-primary);
            color: var(--bg-primary);
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
          ">
            OK, I'll Fix It
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

// Show error with alternative sources
function showErrorWithAlternatives(sourceName, error, alternatives) {
  const modal = document.createElement('div');
  modal.className = 'modal error-alternatives-modal';
  modal.style.display = 'block';

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 600px;">
      <div class="modal-header">
        <h3>⚠️ Source Issue Detected</h3>
        <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
      </div>
      <div class="modal-body">
        <div style="
          background: #fff3cd;
          color: #856404;
          padding: 1rem;
          border-radius: 4px;
          margin-bottom: 1rem;
          border-left: 4px solid #ffc107;
        ">
          <strong>Source:</strong> ${sourceName}<br/>
          <strong>Issue:</strong> ${error}
        </div>
        
        <h4 style="color: var(--accent-primary); margin-bottom: 1rem;">🔄 Try These Alternatives:</h4>
        <div style="display: grid; gap: 0.5rem;">
          ${alternatives.map(alt => `
            <button onclick="window.open('https://${alt}', '_blank'); this.closest('.modal').remove();" style="
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
              🔗 ${alt}
            </button>
          `).join('')}
        </div>
        
        <div style="text-align: center; margin-top: 1.5rem;">
          <button onclick="this.closest('.modal').remove()" style="
            background: var(--text-secondary);
            color: var(--bg-primary);
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
          ">
            Close
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

// Enhanced multi-source opening with validation
function openAllSourcesWithValidation(moduleType, searchTerm) {
  const sources = MULTI_SOURCE_MODULES[moduleType];
  if (!sources) return;

  const totalSources = sources.sources.length;
  let successCount = 0;
  let errorCount = 0;
  let fixCount = 0;
  
  const confirmed = confirm(`🚀 Open ${totalSources} validated sources for ${sources.name}?\n\nSearch term: "${searchTerm}"\n\nSystem will validate URLs and apply fixes automatically.`);
  if (!confirmed) return;

  console.log(`Opening ${totalSources} sources with validation for ${moduleType}`);

  sources.sources.forEach((source, index) => {
    setTimeout(() => {
      const result = openSourceWithValidation(source, searchTerm, moduleType, source.name);
      
      if (result.success) {
        successCount++;
        if (result.term !== searchTerm) fixCount++;
      } else {
        errorCount++;
      }
      
      // Progress update
      if ((index + 1) % 5 === 0 || index === totalSources - 1) {
        const progress = `Progress: ${index + 1}/${totalSources} (${successCount} ✅, ${errorCount} ❌)`;
        console.log(progress);
        
        if (totalSources > 10 && (index + 1) % 5 === 0) {
          showNotification(progress, 'info');
        }
      }
      
      // Final summary
      if (index === totalSources - 1) {
        setTimeout(() => {
          const summary = `🚀 Complete: ${successCount} opened, ${errorCount} failed${fixCount > 0 ? `, ${fixCount} fixed` : ''}`;
          showNotification(summary, successCount > errorCount ? 'success' : 'warning');
          
          // Log summary
          addToLog('Multi-Source Validation Summary', 
                  `${sources.name} - "${searchTerm}"`, 
                  `${successCount} successful, ${errorCount} failed, ${fixCount} search terms fixed`);
        }, 500);
      }
      
    }, index * 200); // Slightly longer delay for validation processing
  });

  // Close modal
  setTimeout(() => {
    const modal = document.querySelector('.multi-source-modal');
    if (modal) modal.remove();
  }, 1000);
}

// Override existing functions with validation
function applyValidationEnhancements() {
  // Store original functions
  window.originalOpenAllSources = window.openAllSources;
  window.originalOpenSingleSource = window.openSingleSource;
  
  // Override with validation versions
  window.openAllSources = openAllSourcesWithValidation;
  
  window.openSingleSource = function(moduleType, searchTerm, sourceName, sourceUrl) {
    const source = { url: sourceUrl, name: sourceName };
    openSourceWithValidation(source, searchTerm, moduleType, sourceName);
  };
  
  console.log('🛡️ URL validation and error handling system activated');
  
  // Add validation styles
  addValidationStyles();
}

// Add CSS for validation system
function addValidationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .validation-error-modal .modal-content,
    .error-alternatives-modal .modal-content {
      animation: bounceIn 0.3s ease;
    }
    
    @keyframes bounceIn {
      0% { transform: scale(0.3); opacity: 0; }
      50% { transform: scale(1.05); }
      70% { transform: scale(0.9); }
      100% { transform: scale(1); opacity: 1; }
    }
    
    .validation-error-modal h3 {
      color: #dc3545;
    }
    
    .error-alternatives-modal h3 {
      color: #ffc107;
    }
    
    [data-theme="professional"] .validation-error-modal .modal-content,
    [data-theme="professional"] .error-alternatives-modal .modal-content {
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
  `;
  document.head.appendChild(style);
}

// Initialize validation system
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    applyValidationEnhancements();
  }, 3500); // Load after other systems
});

// Export functions
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    validateAndFixSearchTerm,
    buildValidatedURL,
    openSourceWithValidation,
    openAllSourcesWithValidation,
    applyValidationEnhancements,
    URL_PATTERNS,
    URL_FIXES
  };
}