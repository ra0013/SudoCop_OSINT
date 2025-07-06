/**
 * License Plate Investigation Module
 * Comprehensive Google dorks and resources for license plate searches
 */

// License plate Google dorks and search strategies
const LICENSE_PLATE_DORKS = {
  name: "🚗 License Plate Investigation",
  dorks: [
    {
      name: "Basic License Plate Search",
      query: '"{query}"',
      description: "Direct license plate number search"
    },
    {
      name: "License Plate + Accident Reports",
      query: '"{query}" (accident OR crash OR collision OR incident OR police)',
      description: "Search for accident or incident reports"
    },
    {
      name: "License Plate + News Articles",
      query: '"{query}" (news OR article OR report OR story OR media)',
      description: "News articles mentioning the license plate"
    },
    {
      name: "License Plate + Social Media",
      query: '"{query}" (site:facebook.com OR site:twitter.com OR site:instagram.com OR site:reddit.com)',
      description: "Social media posts featuring the plate"
    },
    {
      name: "License Plate + Stolen Vehicle",
      query: '"{query}" (stolen OR theft OR missing OR recovered OR BOLO)',
      description: "Stolen vehicle reports and alerts"
    },
    {
      name: "License Plate + For Sale",
      query: '"{query}" (for sale OR selling OR craigslist OR autotrader OR cars.com)',
      description: "Vehicle sales listings"
    },
    {
      name: "License Plate + Court Records",
      query: '"{query}" (court OR lawsuit OR citation OR ticket OR violation)',
      description: "Legal proceedings involving the vehicle"
    },
    {
      name: "License Plate + Insurance Claims",
      query: '"{query}" (insurance OR claim OR damage OR total loss OR salvage)',
      description: "Insurance-related information"
    },
    {
      name: "License Plate + Parking Violations",
      query: '"{query}" (parking OR meter OR violation OR towed OR impound)',
      description: "Parking tickets and violations"
    },
    {
      name: "License Plate + Racing/Events",
      query: '"{query}" (racing OR track OR event OR show OR meet OR drag)',
      description: "Racing events and car shows"
    },
    {
      name: "License Plate + Forums",
      query: '"{query}" (forum OR discussion OR community OR board OR group)',
      description: "Forum discussions about the vehicle"
    },
    {
      name: "License Plate + DMV/Registration",
      query: '"{query}" (DMV OR registration OR title OR owner OR registered)',
      description: "DMV and registration information"
    },
    {
      name: "License Plate + State Specific",
      query: '"{query}" (California OR Texas OR Florida OR New York OR "license plate")',
      description: "State-specific searches (modify state as needed)"
    },
    {
      name: "License Plate + Photo Evidence",
      query: '"{query}" (photo OR picture OR image OR caught OR camera OR dash cam)',
      description: "Photos or camera footage of the vehicle"
    },
    {
      name: "License Plate + Documents",
      query: '"{query}" filetype:pdf OR filetype:doc OR filetype:docx',
      description: "Documents mentioning the license plate"
    }
  ]
};

// License plate format validation patterns
const LICENSE_PLATE_PATTERNS = {
  patterns: [
    {
      // Remove spaces and standardize
      test: /\s+/,
      fix: (term) => term.replace(/\s+/g, '').toUpperCase(),
      description: "Removed spaces and converted to uppercase"
    },
    {
      // Handle common separators
      test: /[-_]/,
      fix: (term) => term.replace(/[-_]/g, ''),
      description: "Removed separators"
    },
    {
      // Ensure alphanumeric only
      test: /[^A-Z0-9]/,
      fix: (term) => term.replace(/[^A-Z0-9]/g, ''),
      description: "Removed non-alphanumeric characters"
    }
  ],
  maxLength: 8,
  minLength: 2,
  validate: (term) => /^[A-Z0-9]{2,8}$/.test(term)
};

// Add license plate module to multi-source system
function addLicensePlateModule() {
  // Add to Google dorks if the system exists
  if (window.MODULE_GOOGLE_DORKS) {
    window.MODULE_GOOGLE_DORKS['license-plate'] = LICENSE_PLATE_DORKS;
    console.log('🚗 License plate Google dorks added to existing system');
  }

  // Add to URL patterns if the system exists
  if (window.URL_PATTERNS) {
    window.URL_PATTERNS['license-plate'] = LICENSE_PLATE_PATTERNS;
    console.log('🚗 License plate validation patterns added');
  }

  // Add to multi-source modules
  if (window.MULTI_SOURCE_MODULES) {
    window.MULTI_SOURCE_MODULES['license-plate'] = {
      name: "🚗 License Plate Investigation",
      sources: [
        {
          name: "Google: Basic Plate Search",
          url: "https://www.google.com/search?q=\"{query}\"",
          description: "Direct license plate search",
          category: "google-dorks"
        },
        {
          name: "Google: Accident Reports",
          url: "https://www.google.com/search?q=\"{query}\" (accident OR crash OR collision)",
          description: "Search for accident reports",
          category: "google-dorks"
        },
        {
          name: "Google: News Articles",
          url: "https://www.google.com/search?q=\"{query}\" (news OR article OR report)",
          description: "News articles mentioning plate",
          category: "google-dorks"
        },
        {
          name: "Google: Social Media",
          url: "https://www.google.com/search?q=\"{query}\" (site:facebook.com OR site:twitter.com OR site:instagram.com)",
          description: "Social media posts",
          category: "google-dorks"
        },
        {
          name: "Google: Stolen Vehicle",
          url: "https://www.google.com/search?q=\"{query}\" (stolen OR theft OR missing)",
          description: "Stolen vehicle reports",
          category: "google-dorks"
        },
        {
          name: "Google: For Sale Listings",
          url: "https://www.google.com/search?q=\"{query}\" (for sale OR craigslist OR autotrader)",
          description: "Vehicle sales listings",
          category: "google-dorks"
        },
        {
          name: "Google: Court Records",
          url: "https://www.google.com/search?q=\"{query}\" (court OR citation OR ticket)",
          description: "Legal proceedings",
          category: "google-dorks"
        },
        {
          name: "Google: Photo Evidence",
          url: "https://www.google.com/search?q=\"{query}\" (photo OR picture OR camera)",
          description: "Photos of the vehicle",
          category: "google-dorks"
        },
        {
          name: "Faxvin License Plate",
          url: "https://www.faxvin.com/license-plate-lookup",
          description: "Free license plate lookup service",
          category: "free"
        },
        {
          name: "VehicleHistory.com",
          url: "https://www.vehiclehistory.com/license-plate-search",
          description: "License plate search service",
          category: "premium"
        }
      ]
    };
    console.log('🚗 License plate module added to multi-source system');
  }
}

// License plate search handler
function runLicensePlateSearch(q, div) {
  // Validate and fix the license plate format
  const validation = validateLicensePlate(q);
  
  if (!validation.isValid) {
    showLicensePlateFormatHelp(validation.error, validation.suggestions);
    return;
  }

  // Show multi-source dialog if available
  if (window.showMultiSourceDialog) {
    window.showMultiSourceDialog('license-plate', validation.term, () => {
      // Fallback to basic Google search
      const url = `https://www.google.com/search?q="${encodeURIComponent(validation.term)}"`;
      window.open(url, '_blank');
      addToLog("License Plate Search", validation.term, url);
    });
  } else {
    // Direct Google dork search
    showLicensePlateGoogleDorks(validation.term);
  }
}

// Validate license plate format
function validateLicensePlate(term) {
  if (!term || typeof term !== 'string') {
    return {
      isValid: false,
      error: 'Please enter a license plate number',
      suggestions: ['Enter a valid license plate (e.g., ABC123, 123XYZ)']
    };
  }

  let fixed = term.trim().toUpperCase();
  const fixes = [];

  // Apply license plate pattern fixes
  LICENSE_PLATE_PATTERNS.patterns.forEach(pattern => {
    if (pattern.test.test(fixed)) {
      const newTerm = pattern.fix(fixed);
      if (newTerm !== fixed) {
        fixes.push(pattern.description);
        fixed = newTerm;
      }
    }
  });

  // Length validation
  if (fixed.length > LICENSE_PLATE_PATTERNS.maxLength) {
    return {
      isValid: false,
      error: `License plate too long (max ${LICENSE_PLATE_PATTERNS.maxLength} characters)`,
      suggestions: ['Most license plates are 6-7 characters', 'Check for typos or extra characters']
    };
  }

  if (fixed.length < LICENSE_PLATE_PATTERNS.minLength) {
    return {
      isValid: false,
      error: `License plate too short (min ${LICENSE_PLATE_PATTERNS.minLength} characters)`,
      suggestions: ['License plates are usually 4-8 characters', 'Check if you entered the complete number']
    };
  }

  // Format validation
  if (!LICENSE_PLATE_PATTERNS.validate(fixed)) {
    return {
      isValid: false,
      error: 'Invalid license plate format',
      suggestions: [
        'Use letters and numbers only (A-Z, 0-9)',
        'Examples: ABC123, 123XYZ, AB1234',
        'Remove special characters except letters and numbers'
      ]
    };
  }

  return {
    isValid: true,
    term: fixed,
    original: term,
    fixes: fixes
  };
}

// Show license plate format help
function showLicensePlateFormatHelp(error, suggestions) {
  const modal = document.createElement('div');
  modal.className = 'modal license-plate-help-modal';
  modal.style.display = 'block';

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 500px;">
      <div class="modal-header">
        <h3>🚗 License Plate Format Help</h3>
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
          <strong>Error:</strong> ${error}
        </div>
        
        <h4 style="color: var(--accent-primary); margin-bottom: 0.75rem;">💡 License Plate Format Guidelines:</h4>
        <ul style="margin: 0 0 1rem 1.5rem; color: var(--text-primary);">
          ${suggestions.map(suggestion => `<li style="margin-bottom: 0.5rem;">${suggestion}</li>`).join('')}
        </ul>
        
        <div style="
          background: var(--shadow-secondary);
          padding: 1rem;
          border-radius: 4px;
          border-left: 4px solid var(--accent-primary);
        ">
          <h5 style="margin: 0 0 0.5rem 0; color: var(--accent-primary);">✅ Valid Examples:</h5>
          <div style="font-family: monospace; font-size: 0.9rem; color: var(--text-primary);">
            <div>• ABC123 (California style)</div>
            <div>• 123XYZ (Numeric first)</div>
            <div>• AB1234 (Texas style)</div>
            <div>• XYZ789 (Standard format)</div>
            <div>• 1ABC234 (7-character plate)</div>
          </div>
        </div>
        
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
            Got It
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

// Show license plate Google dorks modal
function showLicensePlateGoogleDorks(term) {
  const modal = document.createElement('div');
  modal.className = 'modal license-plate-dorks-modal';
  modal.style.display = 'block';

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 800px;">
      <div class="modal-header">
        <h3>🚗 License Plate Investigation - Google Dorks</h3>
        <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
      </div>
      <div class="modal-body">
        <div style="
          background: var(--accent-primary);
          color: var(--bg-primary);
          padding: 0.75rem;
          border-radius: 4px;
          margin-bottom: 1.5rem;
          text-align: center;
          font-weight: 600;
        ">
          🎯 License Plate: "${term}"
        </div>
        
        <div style="
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        ">
          <button onclick="runAllLicensePlateDorks('${term}')" style="
            background: #dc3545;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
          ">
            🚀 Run All Searches (${LICENSE_PLATE_DORKS.dorks.length})
          </button>
          <button onclick="runBasicLicensePlateSearch('${term}')" style="
            background: #28a745;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
          ">
            🔍 Basic Search Only
          </button>
        </div>

        <div style="display: grid; gap: 0.75rem;">
          ${LICENSE_PLATE_DORKS.dorks.map((dork, index) => `
            <div style="
              display: flex;
              align-items: center;
              padding: 0.75rem;
              border: 1px solid var(--border-primary);
              border-radius: 4px;
              background: var(--bg-secondary);
              cursor: pointer;
              transition: all 0.2s ease;
            " onclick="runSingleLicensePlateDork('${term}', '${dork.name}', '${encodeURIComponent(dork.query)}')"
               onmouseover="this.style.borderColor='var(--accent-primary)'; this.style.transform='translateY(-1px)';"
               onmouseout="this.style.borderColor='var(--border-primary)'; this.style.transform='translateY(0)';">
              <div style="flex-grow: 1;">
                <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.25rem;">
                  🔍 ${dork.name}
                </div>
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.25rem;">
                  ${dork.description}
                </div>
                <div style="
                  font-family: monospace;
                  font-size: 0.8rem;
                  color: var(--accent-primary);
                  background: var(--shadow-secondary);
                  padding: 0.25rem 0.5rem;
                  border-radius: 2px;
                  display: inline-block;
                ">
                  ${dork.query.replace('{query}', term)}
                </div>
              </div>
              <div style="
                background: var(--accent-primary);
                color: var(--bg-primary);
                padding: 0.5rem 1rem;
                border-radius: 4px;
                font-size: 0.8rem;
                font-weight: 600;
                margin-left: 1rem;
              ">
                RUN
              </div>
            </div>
          `).join('')}
        </div>

        <div style="
          margin-top: 1.5rem;
          padding: 1rem;
          background: var(--shadow-secondary);
          border-radius: 4px;
          border-left: 4px solid var(--text-accent);
        ">
          <strong>💡 Investigation Tips:</strong>
          <ul style="margin: 0.5rem 0 0 1.5rem; color: var(--text-secondary);">
            <li>Start with "Basic Search" to see general mentions</li>
            <li>Use "Accident Reports" for traffic incidents</li>
            <li>Check "Social Media" for user-generated content</li>
            <li>Try "Stolen Vehicle" for theft reports</li>
            <li>Run "All Searches" for comprehensive coverage</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

// Run all license plate dorks
function runAllLicensePlateDorks(term) {
  const confirmed = confirm(`🚀 Run ${LICENSE_PLATE_DORKS.dorks.length} license plate searches?\n\nLicense Plate: "${term}"\n\nThis will open multiple Google search tabs.`);
  if (!confirmed) return;

  LICENSE_PLATE_DORKS.dorks.forEach((dork, index) => {
    setTimeout(() => {
      const query = dork.query.replace('{query}', encodeURIComponent(term));
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(url, '_blank');
      addToLog(`License Plate: ${dork.name}`, term, url);
    }, index * 250); // Longer delay for Google searches
  });

  document.querySelector('.license-plate-dorks-modal').remove();
  setTimeout(() => {
    showNotification(`🚗 Opened ${LICENSE_PLATE_DORKS.dorks.length} license plate searches`, 'success');
  }, 1000);
}

// Run basic license plate search
function runBasicLicensePlateSearch(term) {
  const url = `https://www.google.com/search?q="${encodeURIComponent(term)}"`;
  window.open(url, '_blank');
  addToLog("License Plate: Basic Search", term, url);
  
  document.querySelector('.license-plate-dorks-modal').remove();
  showNotification(`🔍 Opened basic license plate search`, 'info');
}

// Run single license plate dork
function runSingleLicensePlateDork(term, dorkName, encodedQuery) {
  const query = decodeURIComponent(encodedQuery).replace('{query}', encodeURIComponent(term));
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  window.open(url, '_blank');
  addToLog(`License Plate: ${dorkName}`, term, url);
  
  showNotification(`🔍 Opened: ${dorkName}`, 'info');
}

// Add license plate module to existing module groups
function addLicensePlateToModuleGroups() {
  // Find the vehicle intelligence group or create it
  const modulePalette = document.getElementById('modulePalette');
  if (!modulePalette) return;

  // Look for existing vehicle group
  let vehicleGroup = document.querySelector('[data-group="vehicle-intelligence"]');
  
  if (vehicleGroup) {
    // Add to existing vehicle group
    const groupContent = vehicleGroup.querySelector('.group-content');
    if (groupContent) {
      const licensePlateButton = document.createElement('button');
      licensePlateButton.draggable = true;
      licensePlateButton.className = 'module-button';
      licensePlateButton.dataset.type = 'license-plate';
      licensePlateButton.dataset.typeHandler = 'runLicensePlateSearch';
      licensePlateButton.innerHTML = '🚗 License Plate Search';
      
      // Setup drag and drop
      licensePlateButton.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', 'license-plate');
        licensePlateButton.style.opacity = '0.5';
      });
      
      licensePlateButton.addEventListener('dragend', e => {
        licensePlateButton.style.opacity = '1';
      });
      
      groupContent.appendChild(licensePlateButton);
      console.log('🚗 License plate button added to vehicle intelligence group');
    }
  }
}

// Make functions globally available
window.runLicensePlateSearch = runLicensePlateSearch;
window.runAllLicensePlateDorks = runAllLicensePlateDorks;
window.runBasicLicensePlateSearch = runBasicLicensePlateSearch;
window.runSingleLicensePlateDork = runSingleLicensePlateDork;

// Initialize license plate module
function initializeLicensePlateModule() {
  addLicensePlateModule();
  addLicensePlateToModuleGroups();
  
  console.log('🚗 License Plate Investigation Module initialized');
  console.log(`📊 Available license plate dorks: ${LICENSE_PLATE_DORKS.dorks.length}`);
  
  // Add to live log
  addToLiveLog("License Plate Module", "System Initialized", `${LICENSE_PLATE_DORKS.dorks.length} specialized Google dorks available`);
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    initializeLicensePlateModule();
  }, 4000); // Load after other systems
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    LICENSE_PLATE_DORKS,
    LICENSE_PLATE_PATTERNS,
    runLicensePlateSearch,
    validateLicensePlate,
    initializeLicensePlateModule
  };
}