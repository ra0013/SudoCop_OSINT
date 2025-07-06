/**
 * Google Dork Integration for Multi-Source System
 * Adds targeted Google dorks for each module type
 */

// Google Dork definitions for each module type
const MODULE_GOOGLE_DORKS = {
  phone: {
    name: "📞 Phone Number Google Dorks",
    dorks: [
      {
        name: "Basic Phone Search",
        query: '"{query}"',
        description: "Direct phone number search in quotes"
      },
      {
        name: "Phone + Contact Info",
        query: '"{query}" (contact OR phone OR call OR mobile)',
        description: "Phone number with contact-related terms"
      },
      {
        name: "Phone + Social Media",
        query: '"{query}" (site:facebook.com OR site:linkedin.com OR site:twitter.com OR site:instagram.com)',
        description: "Phone number on social media platforms"
      },
      {
        name: "Phone + Directory Listings",
        query: '"{query}" (directory OR listing OR phonebook OR yellow pages)',
        description: "Phone number in online directories"
      },
      {
        name: "Phone + Business Listings",
        query: '"{query}" (business OR company OR office OR store)',
        description: "Phone number associated with businesses"
      },
      {
        name: "Phone + Personal Info",
        query: '"{query}" (address OR name OR email OR age)',
        description: "Phone number with personal information"
      },
      {
        name: "Phone + Public Records",
        query: '"{query}" (court OR arrest OR citation OR violation)',
        description: "Phone number in legal/court records"
      },
      {
        name: "Phone Spam/Scam Check",
        query: '"{query}" (spam OR scam OR fraud OR complaint OR report)',
        description: "Check if phone number reported as spam/scam"
      }
    ]
  },

  email: {
    name: "📧 Email Address Google Dorks",
    dorks: [
      {
        name: "Basic Email Search",
        query: '"{query}"',
        description: "Direct email address search"
      },
      {
        name: "Email + Social Profiles",
        query: '"{query}" (site:facebook.com OR site:linkedin.com OR site:twitter.com OR site:instagram.com)',
        description: "Email on social media platforms"
      },
      {
        name: "Email + Professional Info",
        query: '"{query}" (resume OR CV OR curriculum OR linkedin OR professional)',
        description: "Email in professional contexts"
      },
      {
        name: "Email + Data Breaches",
        query: '"{query}" (breach OR leak OR dump OR hack OR compromised)',
        description: "Email in data breach discussions"
      },
      {
        name: "Email + Forums & Communities",
        query: '"{query}" (forum OR community OR discussion OR post OR comment)',
        description: "Email in forums and discussion boards"
      },
      {
        name: "Email + Documents",
        query: '"{query}" filetype:pdf OR filetype:doc OR filetype:docx OR filetype:xls',
        description: "Email in document files"
      },
      {
        name: "Email + Contact Pages",
        query: '"{query}" (contact OR about OR team OR staff OR employee)',
        description: "Email on contact/about pages"
      },
      {
        name: "Email + Registration Info",
        query: '"{query}" (registered OR registration OR account OR signup OR member)',
        description: "Email in registration contexts"
      }
    ]
  },

  name: {
    name: "👤 Name Google Dorks",
    dorks: [
      {
        name: "Basic Name Search",
        query: '"{query}"',
        description: "Exact name search in quotes"
      },
      {
        name: "Name + Location",
        query: '"{query}" (lives OR resides OR located OR address OR city OR state)',
        description: "Name with location information"
      },
      {
        name: "Name + Professional Info",
        query: '"{query}" (works OR employed OR job OR career OR position OR title)',
        description: "Name with employment information"
      },
      {
        name: "Name + Social Media",
        query: '"{query}" (site:facebook.com OR site:linkedin.com OR site:twitter.com OR site:instagram.com)',
        description: "Name on social media platforms"
      },
      {
        name: "Name + Education",
        query: '"{query}" (school OR university OR college OR graduated OR studied OR education)',
        description: "Name with educational background"
      },
      {
        name: "Name + Family",
        query: '"{query}" (family OR relative OR spouse OR married OR children OR parents)',
        description: "Name with family information"
      },
      {
        name: "Name + Legal Issues",
        query: '"{query}" (court OR arrest OR charged OR lawsuit OR legal OR case)',
        description: "Name in legal proceedings"
      },
      {
        name: "Name + Public Records",
        query: '"{query}" (birth OR death OR marriage OR divorce OR property OR voting)',
        description: "Name in public records"
      },
      {
        name: "Name + News & Media",
        query: '"{query}" (news OR article OR mentioned OR featured OR interview)',
        description: "Name in news articles and media"
      },
      {
        name: "Name + Business",
        query: '"{query}" (business OR company OR owner OR founder OR CEO OR director)',
        description: "Name with business associations"
      }
    ]
  },

  username: {
    name: "🔍 Username Google Dorks",
    dorks: [
      {
        name: "Basic Username Search",
        query: '"{query}"',
        description: "Direct username search"
      },
      {
        name: "Username + Social Platforms",
        query: '"{query}" (site:facebook.com OR site:twitter.com OR site:instagram.com OR site:tiktok.com)',
        description: "Username on major social platforms"
      },
      {
        name: "Username + Gaming Platforms",
        query: '"{query}" (site:steam.com OR site:twitch.tv OR site:discord.com OR gaming OR gamer)',
        description: "Username on gaming platforms"
      },
      {
        name: "Username + Forums",
        query: '"{query}" (forum OR discussion OR reddit OR community OR post)',
        description: "Username on forums and discussion boards"
      },
      {
        name: "Username + Professional",
        query: '"{query}" (site:linkedin.com OR site:github.com OR portfolio OR professional)',
        description: "Username on professional platforms"
      },
      {
        name: "Username + Dating/Social",
        query: '"{query}" (dating OR profile OR bio OR about OR interests)',
        description: "Username on dating and social platforms"
      },
      {
        name: "Username + Reviews",
        query: '"{query}" (review OR rating OR comment OR feedback OR opinion)',
        description: "Username in reviews and ratings"
      }
    ]
  },

  domain: {
    name: "🌐 Domain Google Dorks",
    dorks: [
      {
        name: "Site Content Search",
        query: 'site:{query}',
        description: "All content indexed from this domain"
      },
      {
        name: "Domain Registration Info",
        query: '"{query}" (whois OR registration OR registrar OR registered)',
        description: "Domain registration information"
      },
      {
        name: "Domain + Security Issues",
        query: '"{query}" (malware OR virus OR phishing OR scam OR blacklist)',
        description: "Domain security and reputation issues"
      },
      {
        name: "Domain + Contact Info",
        query: 'site:{query} (contact OR email OR phone OR address)',
        description: "Contact information on the domain"
      },
      {
        name: "Domain + Social Media",
        query: '"{query}" (site:facebook.com OR site:twitter.com OR site:linkedin.com)',
        description: "Domain mentioned on social media"
      },
      {
        name: "Domain + News & Reviews",
        query: '"{query}" (news OR review OR article OR mentioned OR featured)',
        description: "Domain in news and reviews"
      },
      {
        name: "Domain + Technology Stack",
        query: 'site:{query} (powered by OR built with OR technology OR framework)',
        description: "Technology information about the domain"
      },
      {
        name: "Domain + Legal Issues",
        query: '"{query}" (lawsuit OR legal OR court OR trademark OR copyright)',
        description: "Domain in legal contexts"
      }
    ]
  },

  ip: {
    name: "🔌 IP Address Google Dorks",
    dorks: [
      {
        name: "Basic IP Search",
        query: '"{query}"',
        description: "Direct IP address search"
      },
      {
        name: "IP + Security Issues",
        query: '"{query}" (malware OR virus OR attack OR hack OR intrusion)',
        description: "IP address security incidents"
      },
      {
        name: "IP + Blacklist Check",
        query: '"{query}" (blacklist OR blocked OR spam OR abuse OR reputation)',
        description: "IP address reputation and blacklisting"
      },
      {
        name: "IP + Network Info",
        query: '"{query}" (ISP OR provider OR hosting OR datacenter OR server)',
        description: "IP address network and hosting information"
      },
      {
        name: "IP + Geolocation",
        query: '"{query}" (location OR country OR city OR geolocation OR address)',
        description: "IP address location information"
      },
      {
        name: "IP + Open Ports",
        query: '"{query}" (port OR service OR open OR scan OR nmap)',
        description: "IP address port and service information"
      },
      {
        name: "IP + Logs & Reports",
        query: '"{query}" (log OR report OR incident OR alert OR monitoring)',
        description: "IP address in logs and security reports"
      }
    ]
  },

  image: {
    name: "🖼️ Image Google Dorks",
    dorks: [
      {
        name: "Similar Images",
        query: 'imagesize:800x600 filetype:jpg',
        description: "Find similar sized images (modify dimensions as needed)"
      },
      {
        name: "Image Source Search",
        query: '"{query}" (source OR original OR photographer OR creator)',
        description: "Find the source or creator of an image"
      },
      {
        name: "Image + Social Media",
        query: '"{query}" (site:facebook.com OR site:instagram.com OR site:twitter.com)',
        description: "Image mentioned on social media"
      },
      {
        name: "Image + News Articles",
        query: '"{query}" (news OR article OR press OR media OR story)',
        description: "Image in news articles and media"
      },
      {
        name: "Image Metadata Search",
        query: '"{query}" (exif OR metadata OR camera OR location OR GPS)',
        description: "Information about image metadata"
      },
      {
        name: "Image + Copyright",
        query: '"{query}" (copyright OR license OR usage OR permission OR rights)',
        description: "Image copyright and licensing information"
      }
    ]
  },

  business: {
    name: "🏢 Business Google Dorks",
    dorks: [
      {
        name: "Basic Business Search",
        query: '"{query}"',
        description: "Direct business name search"
      },
      {
        name: "Business + Registration",
        query: '"{query}" (LLC OR corporation OR incorporated OR company OR business)',
        description: "Business registration and legal structure"
      },
      {
        name: "Business + Contact Info",
        query: '"{query}" (phone OR email OR address OR contact OR location)',
        description: "Business contact information"
      },
      {
        name: "Business + Financial Info",
        query: '"{query}" (revenue OR profit OR financial OR earnings OR SEC)',
        description: "Business financial information"
      },
      {
        name: "Business + Reviews",
        query: '"{query}" (review OR rating OR complaint OR feedback OR BBB)',
        description: "Business reviews and ratings"
      },
      {
        name: "Business + Legal Issues",
        query: '"{query}" (lawsuit OR court OR legal OR violation OR fine)',
        description: "Business legal proceedings"
      },
      {
        name: "Business + Personnel",
        query: '"{query}" (CEO OR president OR owner OR founder OR employee)',
        description: "Business key personnel"
      },
      {
        name: "Business + News",
        query: '"{query}" (news OR press OR announcement OR merger OR acquisition)',
        description: "Business in news and press releases"
      }
    ]
  },

  court: {
    name: "⚖️ Court Records Google Dorks",
    dorks: [
      {
        name: "Basic Court Search",
        query: '"{query}" (court OR case OR legal OR lawsuit)',
        description: "General court and legal proceedings"
      },
      {
        name: "Criminal Cases",
        query: '"{query}" (criminal OR felony OR misdemeanor OR arrest OR charges)',
        description: "Criminal court cases"
      },
      {
        name: "Civil Cases",
        query: '"{query}" (civil OR plaintiff OR defendant OR damages OR settlement)',
        description: "Civil court proceedings"
      },
      {
        name: "Federal Cases",
        query: '"{query}" (federal OR PACER OR district court OR appeals)',
        description: "Federal court cases"
      },
      {
        name: "State Cases",
        query: '"{query}" (state court OR county court OR municipal OR local)',
        description: "State and local court cases"
      },
      {
        name: "Bankruptcy",
        query: '"{query}" (bankruptcy OR chapter 7 OR chapter 11 OR debtor)',
        description: "Bankruptcy proceedings"
      },
      {
        name: "Family Court",
        query: '"{query}" (divorce OR custody OR marriage OR family court)',
        description: "Family court proceedings"
      }
    ]
  },

  property: {
    name: "🏠 Property Google Dorks",
    dorks: [
      {
        name: "Basic Property Search",
        query: '"{query}" (property OR real estate OR address)',
        description: "General property information"
      },
      {
        name: "Property Ownership",
        query: '"{query}" (owner OR owns OR purchased OR sold OR deed)',
        description: "Property ownership information"
      },
      {
        name: "Property Value",
        query: '"{query}" (value OR appraisal OR assessment OR tax OR worth)',
        description: "Property value and assessments"
      },
      {
        name: "Property Records",
        query: '"{query}" (record OR registry OR county OR assessor)',
        description: "Official property records"
      },
      {
        name: "Property Listings",
        query: '"{query}" (for sale OR listing OR MLS OR realtor OR broker)',
        description: "Property sales listings"
      },
      {
        name: "Property History",
        query: '"{query}" (history OR previous OR former OR past)',
        description: "Property ownership history"
      },
      {
        name: "Property Taxes",
        query: '"{query}" (tax OR taxes OR assessment OR levy OR bill)',
        description: "Property tax information"
      }
    ]
  }
};

// Function to add Google dork sources to existing multi-source modules
function enhanceMultiSourceWithGoogleDorks() {
  // Add Google dorks to existing MULTI_SOURCE_MODULES
  Object.keys(MODULE_GOOGLE_DORKS).forEach(moduleType => {
    if (window.MULTI_SOURCE_MODULES && window.MULTI_SOURCE_MODULES[moduleType]) {
      const dorkData = MODULE_GOOGLE_DORKS[moduleType];
      
      // Add Google dork sources to the module
      dorkData.dorks.forEach(dork => {
        window.MULTI_SOURCE_MODULES[moduleType].sources.push({
          name: `Google: ${dork.name}`,
          url: `https://www.google.com/search?q=${dork.query}`,
          description: dork.description,
          category: "google-dorks",
          dorkQuery: dork.query
        });
      });
    }
  });

  console.log('🔍 Google Dorks integrated into multi-source system');
}

// Function to create Google Dork-only modal for modules that don't have other sources
function createGoogleDorkModal(moduleType, searchTerm) {
  const dorkData = MODULE_GOOGLE_DORKS[moduleType];
  if (!dorkData) return null;

  const modal = document.createElement('div');
  modal.className = 'modal google-dork-modal';
  modal.style.display = 'block';

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 800px;">
      <div class="modal-header">
        <h3>${dorkData.name} - Targeted Google Search</h3>
        <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
      </div>
      <div class="modal-body">
        <div class="search-term-display" style="
          background: var(--accent-primary);
          color: var(--bg-primary);
          padding: 0.75rem;
          border-radius: 4px;
          margin-bottom: 1.5rem;
          text-align: center;
          font-weight: 600;
        ">
          🎯 Search Term: "${searchTerm}"
        </div>
        
        <div class="google-dork-controls" style="
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        ">
          <button onclick="openAllGoogleDorks('${moduleType}', '${searchTerm}')" class="google-dork-btn all-dorks">
            🚀 Run All Google Dorks (${dorkData.dorks.length})
          </button>
          <button onclick="openBasicGoogleDork('${moduleType}', '${searchTerm}')" class="google-dork-btn basic-dork">
            🔍 Basic Search Only
          </button>
        </div>

        <div class="dorks-list" style="
          display: grid;
          gap: 0.75rem;
        ">
          ${dorkData.dorks.map((dork, index) => `
            <div class="dork-item" style="
              display: flex;
              align-items: center;
              padding: 0.75rem;
              border: 1px solid var(--border-primary);
              border-radius: 4px;
              background: var(--bg-secondary);
              cursor: pointer;
              transition: all 0.2s ease;
            " onclick="openSingleGoogleDork('${moduleType}', '${searchTerm}', '${dork.name}', '${encodeURIComponent(dork.query)}')">
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
                  ${dork.query.replace('{query}', searchTerm)}
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
          <strong>💡 Google Dork Tips:</strong> These specialized searches help find information that regular searches might miss. 
          Each dork targets specific types of content or platforms. Use "Run All" for comprehensive coverage.
        </div>
      </div>
    </div>
  `;

  // Add hover effects
  modal.addEventListener('mouseover', (e) => {
    if (e.target.closest('.dork-item')) {
      const item = e.target.closest('.dork-item');
      item.style.borderColor = 'var(--accent-primary)';
      item.style.boxShadow = '0 2px 10px var(--shadow-primary)';
      item.style.transform = 'translateY(-1px)';
    }
  });

  modal.addEventListener('mouseout', (e) => {
    if (e.target.closest('.dork-item')) {
      const item = e.target.closest('.dork-item');
      item.style.borderColor = 'var(--border-primary)';
      item.style.boxShadow = '';
      item.style.transform = '';
    }
  });

  return modal;
}

// Functions to handle Google dork operations
function openAllGoogleDorks(moduleType, searchTerm) {
  const dorkData = MODULE_GOOGLE_DORKS[moduleType];
  if (!dorkData) return;

  const confirmed = confirm(`🚀 Run ${dorkData.dorks.length} Google dorks for ${dorkData.name}?\n\nSearch term: "${searchTerm}"\n\nThis will open multiple Google search tabs.`);
  if (!confirmed) return;

  dorkData.dorks.forEach((dork, index) => {
    setTimeout(() => {
      const query = dork.query.replace('{query}', encodeURIComponent(searchTerm));
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(url, '_blank');
      addToLog(`Google Dork: ${dork.name}`, searchTerm, url);
    }, index * 200); // Longer delay for Google searches
  });

  document.querySelector('.google-dork-modal').remove();
  setTimeout(() => {
    showNotification(`🔍 Opened ${dorkData.dorks.length} Google dork searches`, 'success');
  }, 1000);
}

function openBasicGoogleDork(moduleType, searchTerm) {
  const basicQuery = `"${searchTerm}"`;
  const url = `https://www.google.com/search?q=${encodeURIComponent(basicQuery)}`;
  window.open(url, '_blank');
  addToLog(`Google Search: Basic`, searchTerm, url);
  
  document.querySelector('.google-dork-modal').remove();
  showNotification(`🔍 Opened basic Google search`, 'info');
}

function openSingleGoogleDork(moduleType, searchTerm, dorkName, encodedQuery) {
  const query = decodeURIComponent(encodedQuery).replace('{query}', encodeURIComponent(searchTerm));
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  window.open(url, '_blank');
  addToLog(`Google Dork: ${dorkName}`, searchTerm, url);
  
  showNotification(`🔍 Opened: ${dorkName}`, 'info');
}

// Enhanced module handlers that include Google dork options
function enhanceModulesWithGoogleDorks() {
  // List of modules that should get Google dork integration
  const dorkModules = Object.keys(MODULE_GOOGLE_DORKS);
  
  dorkModules.forEach(moduleType => {
    const handlerName = getHandlerName(moduleType);
    const originalHandler = window[handlerName];
    
    if (originalHandler) {
      // Override handler to include Google dork option
      window[handlerName] = function(q, div) {
        showEnhancedSearchDialog(moduleType, q, originalHandler);
      };
    } else {
      // Create new handler for modules that only have Google dorks
      window[handlerName] = function(q, div) {
        showGoogleDorkDialog(moduleType, q);
      };
    }
  });
}

function getHandlerName(moduleType) {
  const handlerMap = {
    'phone': 'runPhoneSearch',
    'email': 'runEmailSearch', 
    'name': 'runNameSearch',
    'username': 'runUsernameSearch',
    'domain': 'runDomainSearch',
    'ip': 'runIPSearch',
    'image': 'runImageSearch',
    'business': 'runBusinessSearch',
    'court': 'runCourtSearch',
    'property': 'runPropertySearch'
  };
  
  return handlerMap[moduleType] || `run${moduleType.charAt(0).toUpperCase() + moduleType.slice(1)}Search`;
}

function showEnhancedSearchDialog(moduleType, searchTerm, originalHandler) {
  // Show choice between multi-source and Google dorks
  const choice = confirm(`🔍 Choose search method for "${searchTerm}":\n\nOK = Multi-Source Search (multiple databases)\nCancel = Google Dorks Only (targeted Google searches)`);
  
  if (choice) {
    // Show multi-source modal if available
    if (window.MULTI_SOURCE_MODULES && window.MULTI_SOURCE_MODULES[moduleType]) {
      window.showMultiSourceDialog(moduleType, searchTerm, originalHandler);
    } else {
      originalHandler(searchTerm);
    }
  } else {
    // Show Google dork modal
    showGoogleDorkDialog(moduleType, searchTerm);
  }
}

function showGoogleDorkDialog(moduleType, searchTerm) {
  const modal = createGoogleDorkModal(moduleType, searchTerm);
  if (modal) {
    document.body.appendChild(modal);
  } else {
    // Fallback to basic Google search
    const url = `https://www.google.com/search?q=${encodeURIComponent('"' + searchTerm + '"')}`;
    window.open(url, '_blank');
    addToLog("Google Search", searchTerm, url);
  }
}

// Add CSS for Google dork system
function addGoogleDorkStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .google-dork-btn {
      background: #4285f4;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s ease;
      font-family: var(--font-family);
    }

    .google-dork-btn:hover {
      background: #3367d6;
      transform: translateY(-1px);
      box-shadow: 0 4px 15px rgba(66, 133, 244, 0.3);
    }

    .google-dork-btn.all-dorks {
      background: #ea4335;
    }

    .google-dork-btn.all-dorks:hover {
      background: #d33b2c;
    }

    .google-dork-btn.basic-dork {
      background: #34a853;
    }

    .google-dork-btn.basic-dork:hover {
      background: #2d8f47;
    }

    .dork-item:hover {
      background: var(--shadow-secondary) !important;
    }

    [data-theme="professional"] .google-dork-btn {
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    [data-theme="professional"] .google-dork-btn:hover {
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

    @media (max-width: 768px) {
      .google-dork-controls {
        flex-direction: column;
      }
      
      .google-dork-btn {
        width: 100%;
      }
    }
  `;
  document.head.appendChild(style);
}

// Initialize Google dork integration
function initializeGoogleDorkIntegration() {
  addGoogleDorkStyles();
  
  // Wait for multi-source system to load, then enhance it
  setTimeout(() => {
    enhanceMultiSourceWithGoogleDorks();
    enhanceModulesWithGoogleDorks();
    
    console.log('🔍 Google Dork Integration initialized');
    console.log(`📊 Available Google Dork modules: ${Object.keys(MODULE_GOOGLE_DORKS).length}`);
    
    // Add info to live log
    addToLiveLog("Google Dork System", "System Initialized", `${Object.keys(MODULE_GOOGLE_DORKS).length} module types with Google dork capability`);
  }, 100);
}

// Make functions globally available
window.openAllGoogleDorks = openAllGoogleDorks;
window.openBasicGoogleDork = openBasicGoogleDork;
window.openSingleGoogleDork = openSingleGoogleDork;
window.showGoogleDorkDialog = showGoogleDorkDialog;
window.MODULE_GOOGLE_DORKS = MODULE_GOOGLE_DORKS;

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    initializeGoogleDorkIntegration();
  }, 2500); // Load after multi-source system
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MODULE_GOOGLE_DORKS,
    initializeGoogleDorkIntegration,
    enhanceMultiSourceWithGoogleDorks,
    enhanceModulesWithGoogleDorks
  };
}