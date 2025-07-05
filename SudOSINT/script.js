function initializeApp() {
  console.log('🔍 Sudocop OSINT Terminal initializing...');
  
  // Load saved theme
  loadSavedTheme();
  
  // Show legal disclaimer
  showLegalDisclaimer();
  
  // Initialize accordion
  initializeAccordion();
  
  // Start session timer
  startSessionTimer();
  
  // Setup drag and drop
  setupDragAndDrop();
  
  // Setup keyboard shortcuts
  setupKeyboardShortcuts();
  
  // Initialize workspace log
  initializeWorkspaceLog();
  
  // Setup module search
  setupModuleSearch();
  
  // Update dashboard
  updateDashboard();
  
  console.log('💡 Drag modules from the left panel to begin investigation');
}

// Accordion Functions
function initializeAccordion() {
  // Set initial state - only Case Management and Person & Identity expanded by default
  const defaultExpanded = ['case-management', 'person-identity'];
  
  document.querySelectorAll('.group').forEach(group => {
    const groupId = group.dataset.group;
    if (defaultExpanded.includes(groupId)) {
      group.classList.add('expanded');
    } else {
      group.classList.add('collapsed');
    }
  });
}

function toggleGroup(groupId) {
  const group = document.querySelector(`[data-group="${groupId}"]`);
  if (group.classList.contains('collapsed')) {
    group.classList.remove('collapsed');
    group.classList.add('expanded');
  } else {
    group.classList.remove('expanded');
    group.classList.add('collapsed');
  }
}

let allGroupsExpanded = false;

function toggleAllGroups() {
  const groups = document.querySelectorAll('.group');
  const expandAllBtn = document.getElementById('expandAllBtn');
  
  if (allGroupsExpanded) {
    // Collapse all
    groups.forEach(group => {
      group.classList.remove('expanded');
      group.classList.add('collapsed');
    });
    expandAllBtn.textContent = '📁';
    expandAllBtn.title = 'Expand All';
    allGroupsExpanded = false;
  } else {
    // Expand all
    groups.forEach(group => {
      group.classList.remove('collapsed');
      group.classList.add('expanded');
    });
    expandAllBtn.textContent = '📂';
    expandAllBtn.title = 'Collapse All';
    allGroupsExpanded = true;
  }
}

// Module Search Functions
function setupModuleSearch() {
  const searchInput = document.getElementById('moduleSearch');
  
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    filterModules(searchTerm);
  });
  
  // Clear search on Escape
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.target.value = '';
      filterModules('');
    }
  });
}

function filterModules(searchTerm) {
  const groups = document.querySelectorAll('.group');
  const modules = document.querySelectorAll('.module-button');
  
  if (!searchTerm) {
    // Show all modules and reset groups
    modules.forEach(module => {
      module.classList.remove('hidden', 'highlighted');
    });
    
    groups.forEach(group => {
      group.style.display = 'block';
      // Reset to default state
      if (['case-management', 'person-identity'].includes(group.dataset.group)) {
        group.classList.remove('collapsed');
        group.classList.add('expanded');
      } else {
        group.classList.remove('expanded');
        group.classList.add('collapsed');
      }
    });
    return;
  }
  
  // Filter modules
  let hasVisibleModules = false;
  
  groups.forEach(group => {
    let groupHasMatches = false;
    const groupModules = group.querySelectorAll('.module-button');
    
    groupModules.forEach(module => {
      const moduleText = module.textContent.toLowerCase();
      const moduleType = module.dataset.type.toLowerCase();
      
      if (moduleText.includes(searchTerm) || moduleType.includes(searchTerm)) {
        module.classList.remove('hidden');
        module.classList.add('highlighted');
        groupHasMatches = true;
        hasVisibleModules = true;
      } else {
        module.classList.add('hidden');
        module.classList.remove('highlighted');
      }
    });
    
    if (groupHasMatches) {
      group.style.display = 'block';
      group.classList.remove('collapsed');
      group.classList.add('expanded');
    } else {
      group.style.display = 'none';
    }
  });
  
  // Show "no results" message if needed
  if (!hasVisibleModules) {
    showNoResultsMessage();
  } else {
    hideNoResultsMessage();
  }
}

function showNoResultsMessage() {
  let noResultsDiv = document.getElementById('noResultsMessage');
  if (!noResultsDiv) {
    noResultsDiv = document.createElement('div');
    noResultsDiv.id = 'noResultsMessage';
    noResultsDiv.style.cssText = `
      text-align: center;
      color: var(--text-secondary);
      padding: 2rem 1rem;
      font-style: italic;
    `;
    noResultsDiv.innerHTML = '🔍 No modules found<br><small>Try a different search term</small>';
    
    const palette = document.getElementById('modulePalette');
    const disclaimer = document.getElementById('disclaimer');
    palette.insertBefore(noResultsDiv, disclaimer);
  }
  noResultsDiv.style.display = 'block';
}

function hideNoResultsMessage() {
  const noResultsDiv = document.getElementById('noResultsMessage');
  if (noResultsDiv) {
    noResultsDiv.style.display = 'none';
  }
}

// Legal Disclaimer Functions
function hideLegalDisclaimer() {
  const disclaimer = document.getElementById('legalDisclaimer');
  if (disclaimer) {
    disclaimer.classList.add('hidden');
    // Save preference to not show again this session
    try {
      sessionStorage.setItem('disclaimer_dismissed', 'true');
    } catch (e) {
      // Ignore if sessionStorage is not available
    }
  }
}

function showLegalDisclaimer() {
  // Check if user has already dismissed this session
  try {
    if (sessionStorage.getItem('disclaimer_dismissed') === 'true') {
      return;
    }
  } catch (e) {
    // Ignore if sessionStorage is not available
  }
  
  const disclaimer = document.getElementById('legalDisclaimer');
  if (disclaimer) {
    disclaimer.classList.remove('hidden');
  }
}/**
 * Sudocop OSINT Terminal - JavaScript Functions
 * Main application logic and OSINT search handlers
 */

// Global application state
const SudocopApp = {
  searchLog: [],
  modules: {},
  totalSearches: 0,
  sessionStartTime: Date.now(),
  autoScroll: true,
  currentTheme: 'professional', // Default to professional theme
  
  // Configuration
  config: {
    maxLogEntries: 100,
    maxTimelineEntries: 50,
    sessionTimerInterval: 1000
  }
};

// Application initialization
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  console.log('🔍 Sudocop OSINT Terminal initializing...');
  
  // Load saved theme
  loadSavedTheme();
  
  // Start session timer
  startSessionTimer();
  
  // Setup drag and drop
  setupDragAndDrop();
  
  // Setup keyboard shortcuts
  setupKeyboardShortcuts();
  
  // Initialize workspace log
  initializeWorkspaceLog();
  
  // Update dashboard
  updateDashboard();
  
  console.log('💡 Drag modules from the left panel to begin investigation');
}

// Theme Management
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'professional' ? 'terminal' : 'professional';
  
  setTheme(newTheme);
}

function setTheme(theme) {
  SudocopApp.currentTheme = theme;
  
  if (theme === 'professional') {
    document.documentElement.setAttribute('data-theme', 'professional');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  
  updateThemeButton();
  saveThemePreference(theme);
}

function updateThemeButton() {
  const themeButton = document.getElementById('themeToggle');
  const themeText = themeButton.querySelector('.theme-text');
  const themeIcon = themeButton.querySelector('.theme-icon');
  
  if (SudocopApp.currentTheme === 'terminal') {
    themeText.textContent = 'Professional';
    themeIcon.textContent = '🎨';
    themeButton.title = 'Switch to Professional theme';
  } else {
    themeText.textContent = 'Terminal';
    themeIcon.textContent = '💻';
    themeButton.title = 'Switch to Terminal theme';
  }
}

function saveThemePreference(theme) {
  try {
    localStorage.setItem('sudocop_theme', theme);
  } catch (e) {
    console.log('Could not save theme preference');
  }
}

function loadSavedTheme() {
  try {
    const savedTheme = localStorage.getItem('sudocop_theme');
    if (savedTheme && (savedTheme === 'terminal' || savedTheme === 'professional')) {
      setTheme(savedTheme);
    } else {
      setTheme('professional'); // Default to professional theme
    }
  } catch (e) {
    setTheme('professional'); // Fallback to professional theme
  }
}

// Session Management
function startSessionTimer() {
  setInterval(() => {
    const elapsed = Math.floor((Date.now() - SudocopApp.sessionStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    const timeElement = document.getElementById('sessionTime');
    if (timeElement) {
      timeElement.textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }, SudocopApp.config.sessionTimerInterval);
}

function updateDashboard() {
  const moduleCountElement = document.getElementById("moduleCount");
  const searchCountElement = document.getElementById("searchCount");
  
  if (moduleCountElement) {
    moduleCountElement.innerText = Object.keys(SudocopApp.modules).length;
  }
  if (searchCountElement) {
    searchCountElement.innerText = SudocopApp.totalSearches;
  }
}

// Navigation Functions
function toggleNavigation() {
  const nav = document.getElementById('siteNavigation');
  nav.classList.toggle('nav-expanded');
}

// Workspace Log Management
function initializeWorkspaceLog() {
  const timestamp = new Date().toLocaleTimeString();
  const logContainer = document.getElementById('liveSearchLog');
  
  if (logContainer && !logContainer.querySelector('.log-entry')) {
    logContainer.innerHTML = `
      <div class="log-entry welcome">
        <span class="timestamp">[${timestamp}]</span>
        <span class="action">SYSTEM</span>
        <span class="details">Investigation workspace initialized. Ready for OSINT operations.</span>
      </div>
    `;
  }
}

function addToLiveLog(moduleLabel, searchTerm, url) {
  const logContainer = document.getElementById('liveSearchLog');
  if (!logContainer) return;
  
  const logEntry = document.createElement('div');
  logEntry.className = 'log-entry';
  
  const timestamp = new Date().toLocaleTimeString();
  const shortUrl = url.length > 50 ? url.substring(0, 47) + '...' : url;
  
  logEntry.innerHTML = `
    <span class="timestamp">[${timestamp}]</span>
    <span class="action">${moduleLabel.toUpperCase()}</span>
    <span class="details">"${searchTerm}" → <span class="url-link" onclick="window.open('${url}', '_blank')" title="${url}">${shortUrl}</span></span>
  `;
  
  logContainer.appendChild(logEntry);
  
  // Auto-scroll to bottom if enabled
  if (SudocopApp.autoScroll) {
    logContainer.scrollTop = logContainer.scrollHeight;
  }
  
  // Limit log entries to prevent memory issues
  const entries = logContainer.querySelectorAll('.log-entry');
  if (entries.length > SudocopApp.config.maxLogEntries) {
    entries[0].remove();
  }
}

function clearLiveLog() {
  if (confirm('Clear the live search log?')) {
    const logContainer = document.getElementById('liveSearchLog');
    if (logContainer) {
      logContainer.innerHTML = `
        <div class="log-entry welcome">
          <span class="timestamp">[${new Date().toLocaleTimeString()}]</span>
          <span class="action">SYSTEM</span>
          <span class="details">Search log cleared. Ready for new operations.</span>
        </div>
      `;
    }
  }
}

function exportLiveLog() {
  const entries = document.querySelectorAll('#liveSearchLog .log-entry');
  const content = Array.from(entries).map(entry => {
    const timestamp = entry.querySelector('.timestamp')?.textContent || '';
    const action = entry.querySelector('.action')?.textContent || '';
    const details = entry.querySelector('.details')?.textContent || '';
    return `${timestamp} ${action} ${details}`;
  }).join('\n');
  
  downloadFile(content, `sudocop_live_log_${Date.now()}.txt`, 'text/plain');
}

function toggleAutoScroll() {
  SudocopApp.autoScroll = !SudocopApp.autoScroll;
  const btn = document.getElementById('autoScrollBtn');
  if (btn) {
    btn.textContent = `📜 Auto-scroll: ${SudocopApp.autoScroll ? 'ON' : 'OFF'}`;
    btn.style.background = SudocopApp.autoScroll ? '#0f0' : '#666';
  }
}

// Main Logging Functions
function addToLog(moduleLabel, searchTerm, url) {
  const timestamp = new Date().toLocaleString();
  SudocopApp.searchLog.push(`[${timestamp}] ${moduleLabel} — ${searchTerm}\n→ ${url}`);
  
  // Also add to live workspace log
  addToLiveLog(moduleLabel, searchTerm, url);
}

function exportLog() {
  const content = [
    "=".repeat(60),
    "SUDOCOP OSINT INVESTIGATION LOG",
    "=".repeat(60),
    `Generated: ${new Date().toLocaleString()}`,
    `Session Duration: ${document.getElementById('sessionTime')?.textContent || '00:00'}`,
    `Total Searches: ${SudocopApp.totalSearches}`,
    `Active Modules: ${Object.keys(SudocopApp.modules).length}`,
    "",
    "SEARCH HISTORY:",
    "-".repeat(40),
    ...SudocopApp.searchLog,
    "",
    "=".repeat(60)
  ].join("\n");
  
  downloadFile(content, `sudocop_investigation_${Date.now()}.txt`, 'text/plain');
}

// Report Generation
function printStackReport() {
  const stackItems = document.querySelectorAll('.stack-item');
  let reportHTML = generateReportHTML(stackItems);

  const win = window.open('', '_blank');
  win.document.write(reportHTML);
  win.document.close();
  win.print();
}

function generateReportHTML(stackItems) {
  return `
    <html>
    <head>
      <title>Sudocop OSINT Investigation Report</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 2rem; line-height: 1.6; }
        h1, h2 { color: #333; border-bottom: 2px solid #0f0; padding-bottom: 0.5rem; }
        .meta { background: #f5f5f5; padding: 1rem; border-radius: 4px; margin: 1rem 0; border-left: 4px solid #0f0; }
        .module { border: 1px solid #ddd; margin: 1rem 0; padding: 1rem; border-radius: 4px; }
        .search-log { font-family: monospace; font-size: 12px; background: #f9f9f9; padding: 1rem; border-radius: 4px; max-height: 400px; overflow-y: auto; }
        ul { list-style-type: none; padding: 0; }
        li { margin: 0.5rem 0; padding: 0.5rem; background: #f9f9f9; border-radius: 2px; border-left: 3px solid #0f0; }
        @media print { body { margin: 1rem; font-size: 12px; } }
      </style>
    </head>
    <body>
      <h1>🔍 SUDOCOP OSINT Investigation Report</h1>
      
      <div class="meta">
        <strong>📊 Investigation Summary</strong><br/>
        <strong>Report Generated:</strong> ${new Date().toLocaleString()}<br/>
        <strong>Session Duration:</strong> ${document.getElementById('sessionTime')?.textContent || '00:00'}<br/>
        <strong>Total Searches Performed:</strong> ${SudocopApp.totalSearches}<br/>
        <strong>Active Investigation Modules:</strong> ${Object.keys(SudocopApp.modules).length}
      </div>

      <h2>📋 Complete Search History</h2>
      <div class="search-log">
        <ul>
          ${SudocopApp.searchLog.map(entry => `<li>${entry.replace('\n→ ', '<br/>🔗 ')}</li>`).join('')}
        </ul>
      </div>

      <h2>🗒️ Module Notes</h2>
      ${Array.from(stackItems).map(item => {
        const title = item.querySelector('strong')?.innerText || 'Untitled Module';
        const input = item.querySelector('input')?.value || '';
        const note = item.querySelector('textarea')?.value || '';
        
        return `
          <div class="module">
            <h3>${title}</h3>
            ${input ? `<p><strong>Search Term:</strong> ${input}</p>` : ''}
            ${note.trim() ? `<p><strong>Notes:</strong><br/>${note.replace(/\n/g, '<br/>')}</p>` : '<p><em>No notes recorded</em></p>'}
          </div>
        `;
      }).join('')}

      <div class="meta">
        <small>Report generated by Sudocop OSINT Terminal | Confidential Investigation Document</small>
      </div>
    </body>
    </html>
  `;
}

function clearStack() {
  if (confirm('Clear all active modules and search history?')) {
    const stackContent = document.getElementById("stackContent");
    if (stackContent) {
      stackContent.innerHTML = '';
    }
    
    Object.keys(SudocopApp.modules).forEach(k => delete SudocopApp.modules[k]);
    SudocopApp.searchLog.length = 0;
    SudocopApp.totalSearches = 0;
    updateDashboard();
  }
}

// Drag and Drop Functionality
function setupDragAndDrop() {
  // Setup draggable buttons
  document.querySelectorAll('.module-button').forEach(button => {
    button.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', button.dataset.type);
      button.style.opacity = '0.5';
    });
    
    button.addEventListener('dragend', e => {
      button.style.opacity = '1';
    });
  });

  // Setup drop zone
  const workspace = document.getElementById('workspaceDropZone');
  if (workspace) {
    workspace.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
      workspace.classList.add('drag-over');
    });

    workspace.addEventListener('dragleave', e => {
      workspace.classList.remove('drag-over');
    });

    workspace.addEventListener('drop', e => {
      e.preventDefault();
      workspace.classList.remove('drag-over');
      const moduleType = e.dataTransfer.getData('text/plain');
      if (!SudocopApp.modules[moduleType]) {
        createModule(moduleType);
      }
    });
  }
}

// Module Creation and Management
function createModule(moduleType) {
  const button = document.querySelector(`.module-button[data-type="${moduleType}"]`);
  if (!button) return;

  const div = document.createElement('div');
  div.className = 'stack-item';
  div.setAttribute('draggable', 'true');

  // Module title
  const label = document.createElement('strong');
  label.innerText = button.innerText;
  div.appendChild(label);

  // Info button
  const info = document.createElement('span');
  info.innerText = ' ℹ️';
  info.className = 'info-btn';
  info.title = 'Click for module information';
  
  const helpText = document.createElement('div');
  helpText.className = 'help-text';
  helpText.innerText = getModuleHelpText(moduleType);
  
  info.onclick = () => {
    helpText.style.display = helpText.style.display === 'none' ? 'block' : 'none';
  };
  
  div.appendChild(info);
  div.appendChild(helpText);

  // Add input field (except for notes and special modules)
  if (moduleType !== 'notes' && moduleType !== 'case-info' && moduleType !== 'investigator-info') {
    
    // Special handling for custom website module
    if (moduleType === 'custom-website') {
      const websiteInput = document.createElement('input');
      websiteInput.type = 'text';
      websiteInput.placeholder = 'https://example.com/search?q=';
      websiteInput.style.margin = '0.5rem 0';
      div.appendChild(websiteInput);
      
      const searchInput = document.createElement('input');
      searchInput.type = 'text';
      searchInput.placeholder = 'Search term';
      searchInput.style.margin = '0.5rem 0';
      div.appendChild(searchInput);
      
      const runBtn = document.createElement('button');
      runBtn.innerText = '🔍 Search';
      runBtn.onclick = () => {
        const websiteUrl = websiteInput.value.trim();
        const searchTerm = searchInput.value.trim();
        
        if (websiteUrl && searchTerm) {
          SudocopApp.totalSearches += 1;
          updateDashboard();
          
          // Add visual feedback
          div.classList.add('active-search');
          setTimeout(() => div.classList.remove('active-search'), 2000);
          
          runCustomWebsite(websiteUrl, searchTerm, div);
        } else {
          const focusInput = websiteUrl ? searchInput : websiteInput;
          focusInput.focus();
          focusInput.style.boxShadow = '0 0 15px #f00';
          setTimeout(() => focusInput.style.boxShadow = '', 1000);
        }
      };
      
      // Enter key support for both inputs
      [websiteInput, searchInput].forEach(inp => {
        inp.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            runBtn.click();
          }
        });
      });
      
      div.appendChild(runBtn);
      
    } else {
      // Regular modules
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = getPlaceholderText(moduleType);
      input.style.margin = '0.5rem 0';
      div.appendChild(input);

      const runBtn = document.createElement('button');
      runBtn.innerText = '🔍 Search';
      runBtn.onclick = () => {
        const val = input.value.trim();
        if (val) {
          SudocopApp.totalSearches += 1;
          updateDashboard();
          
          // Add visual feedback
          div.classList.add('active-search');
          setTimeout(() => div.classList.remove('active-search'), 2000);
          
          const handlerName = button.dataset.typeHandler;
          const fn = window[handlerName];
          if (typeof fn === 'function') {
            fn(val, div);
          } else {
            console.error('Handler not implemented: ' + handlerName);
            alert('Handler not implemented: ' + handlerName);
          }
        } else {
          input.focus();
          input.style.boxShadow = '0 0 15px #f00';
          setTimeout(() => input.style.boxShadow = '', 1000);
        }
      };
      
      // Enter key support
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          runBtn.click();
        }
      });
      
      div.appendChild(runBtn);
    }
  }

  // Special handling for case-info and investigator-info modules
  if (moduleType === 'case-info' || moduleType === 'investigator-info') {
    const fields = moduleType === 'case-info' ? 
      [
        { label: 'Case Number:', placeholder: 'CASE-2024-001', name: 'caseNumber' },
        { label: 'Case Type:', placeholder: 'Missing Person, Fraud, etc.', name: 'caseType' },
        { label: 'Priority:', placeholder: 'High, Medium, Low', name: 'priority' },
        { label: 'Jurisdiction:', placeholder: 'Local, State, Federal', name: 'jurisdiction' }
      ] :
      [
        { label: 'Investigator Name:', placeholder: 'Detective John Smith', name: 'investigatorName' },
        { label: 'Badge/ID:', placeholder: 'Badge #12345', name: 'badgeId' },
        { label: 'Department:', placeholder: 'Metro Police Department', name: 'department' },
        { label: 'Contact:', placeholder: 'john.smith@metro.gov', name: 'contact' }
      ];

    fields.forEach(field => {
      const label = document.createElement('label');
      label.textContent = field.label;
      label.style.display = 'block';
      label.style.margin = '0.5rem 0 0.25rem 0';
      label.style.fontSize = '11px';
      label.style.color = 'var(--text-secondary)';
      div.appendChild(label);

      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = field.placeholder;
      input.name = field.name;
      input.style.margin = '0 0 0.5rem 0';
      div.appendChild(input);
    });

    // Add Save/Update button for case and investigator info
    const saveBtn = document.createElement('button');
    saveBtn.innerText = moduleType === 'case-info' ? '💾 Save Case Info' : '💾 Save Investigator Info';
    saveBtn.style.marginTop = '0.5rem';
    saveBtn.onclick = () => {
      const data = {};
      fields.forEach(field => {
        const input = div.querySelector(`input[name="${field.name}"]`);
        data[field.name] = input ? input.value.trim() : '';
      });
      
      // Get notes
      const notesTextarea = div.querySelector('textarea');
      data.notes = notesTextarea ? notesTextarea.value.trim() : '';
      
      // Check if required fields are filled
      const requiredFields = moduleType === 'case-info' ? 
        ['caseNumber', 'caseType'] : ['investigatorName', 'department'];
      
      const missingFields = requiredFields.filter(field => !data[field]);
      
      if (missingFields.length > 0) {
        alert(`Please fill in required fields: ${missingFields.join(', ')}`);
        // Highlight first missing field
        const firstMissingInput = div.querySelector(`input[name="${missingFields[0]}"]`);
        if (firstMissingInput) {
          firstMissingInput.focus();
          firstMissingInput.style.boxShadow = '0 0 15px #f00';
          setTimeout(() => firstMissingInput.style.boxShadow = '', 2000);
        }
        return;
      }
      
      // Save the data
      if (moduleType === 'case-info') {
        saveCaseInfo(data);
      } else {
        saveInvestigatorInfo(data);
      }
      
      // Update button to show saved state
      saveBtn.innerText = moduleType === 'case-info' ? '✅ Case Info Saved' : '✅ Investigator Info Saved';
      saveBtn.style.background = 'var(--accent-primary)';
      
      // Add visual feedback
      div.classList.add('active-search');
      setTimeout(() => {
        div.classList.remove('active-search');
        saveBtn.innerText = moduleType === 'case-info' ? '💾 Update Case Info' : '💾 Update Investigator Info';
        saveBtn.style.background = '';
      }, 2000);
      
      // Log the save action
      const summary = moduleType === 'case-info' ? 
        `Case ${data.caseNumber} (${data.caseType})` :
        `${data.investigatorName} (${data.department})`;
      
      addToLog(moduleType === 'case-info' ? "Case Information" : "Investigator Information", 
               summary, "Internal documentation");
    };
    
    div.appendChild(saveBtn);
  }

  // Add notes area
  const note = document.createElement('textarea');
  if (moduleType === 'notes') {
    note.placeholder = 'Investigation notes, findings, leads...';
    note.rows = 6;
  } else if (moduleType === 'case-info') {
    note.placeholder = 'Case description, background, key details...';
    note.rows = 4;
  } else if (moduleType === 'investigator-info') {
    note.placeholder = 'Additional investigator information, specializations, notes...';
    note.rows = 3;
  } else {
    note.placeholder = 'Notes about this search...';
    note.rows = 3;
  }
  note.style.marginTop = '0.5rem';
  div.appendChild(note);

  // Add remove button
  const removeBtn = document.createElement('span');
  removeBtn.innerText = '✖';
  removeBtn.className = 'remove-btn';
  removeBtn.title = 'Remove module';
  removeBtn.onclick = () => {
    if (confirm('Remove this module?')) {
      const stackContent = document.getElementById('stackContent');
      if (stackContent) {
        stackContent.removeChild(div);
      }
      delete SudocopApp.modules[moduleType];
      updateDashboard();
    }
  };
  div.appendChild(removeBtn);

  const stackContent = document.getElementById('stackContent');
  if (stackContent) {
    stackContent.appendChild(div);
  }
  
  SudocopApp.modules[moduleType] = true;
  updateDashboard();
  
  // Focus on first input if it exists
  const firstInput = div.querySelector('input');
  if (firstInput) {
    setTimeout(() => firstInput.focus(), 100);
  }
}

// Helper Functions
function getModuleHelpText(moduleType) {
  const helpTexts = {
    'case-info': 'Document case details, case number, type, and description for proper investigation tracking.',
    'investigator-info': 'Record investigator credentials, contact information, and role for professional documentation.',
    'custom-website': 'Search any website not built into Sudocop by entering the URL and search parameters.',
    'name': 'Search for people using full names. Works best with first and last name.',
    'email': 'Check if email addresses appear in data breaches and find associated accounts.',
    'phone': 'Lookup phone number ownership and associated records.',
    'username': 'Find accounts across multiple platforms using the same username.',
    'license': 'Search for professional licenses and certifications.',
    'ip': 'Analyze IP addresses for geolocation and network information.',
    'court': 'Search court records and legal proceedings.',
    'property': 'Find property ownership and real estate records.',
    'business': 'Search business registrations and corporate filings.',
    'sec': 'Search SEC filings for publicly traded companies.',
    'vincheck': 'Check vehicle history using VIN numbers.',
    'repuve': 'Mexican vehicle registry system for checking stolen vehicles.',
    'placascheck': 'Mexican license plate lookup system.',
    'namus': 'US National Missing and Unidentified Persons System.',
    'missingkids': 'National Center for Missing & Exploited Children database.',
    'mexico-missing': 'Mexican missing persons registry.',
    'namus-unidentified': 'Search for unidentified remains in NAMUS.',
    'doenetwork': 'International network for missing and unidentified persons.',
    'findagrave': 'Cemetery records and burial information.',
    'legacyobits': 'Search obituaries and death notices.',
    'domain': 'WHOIS lookup and domain registration information.',
    'google-dork': 'Custom Google search with advanced operators and techniques.',
    'filetype-dork': 'Search for specific file types (PDF, DOC, XLS) containing keywords.',
    'site-dork': 'Search within specific websites or domains using Google.',
    'social-dork': 'Find social media profiles and posts using advanced Google techniques.',
    'cache-dork': 'Search Google cache and archived versions of websites.',
    'leak-dork': 'Search for potential data leaks and exposed information.',
    'vulnerability-dork': 'Search for security vulnerabilities and exposed systems.',
    'news': 'Search archived news articles and historical records.',
    'messaging': 'Search social media and messaging platforms.',
    'image': 'Reverse image search to find image sources and similar photos.',
    'imageforensics': 'Analyze images for manipulation and authenticity.',
    'metadata': 'Extract metadata from images including location and camera info.',
    'facial': 'Facial recognition search across public databases.',
    'educationverify': 'Verify educational credentials and degrees.',
    'geolocation': 'Geographic search and location intelligence.',
    'breachintel': 'Search data breaches and dark web intelligence.',
    'notes': 'Free-form notes for documenting investigation findings.'
  };
  
  return helpTexts[moduleType] || `Search module: ${moduleType}`;
}

function getPlaceholderText(moduleType) {
  const placeholders = {
    'case-info': 'Case #2024-001',
    'investigator-info': 'Detective John Smith',
    'custom-website': 'https://example.com',
    'name': 'John Smith',
    'email': 'example@domain.com',
    'phone': '555-123-4567',
    'username': 'username123',
    'license': 'License number or name',
    'ip': '192.168.1.1',
    'court': 'Name or case number',
    'property': 'Address or owner name',
    'business': 'Company name',
    'sec': 'Company name or ticker',
    'vincheck': 'VIN number',
    'repuve': 'License plate number',
    'placascheck': 'Mexican license plate',
    'namus': 'Name or location',
    'missingkids': 'Name or location',
    'mexico-missing': 'Nombre completo',
    'namus-unidentified': 'Location or case details',
    'doenetwork': 'Name or case number',
    'findagrave': 'Name or cemetery',
    'legacyobits': 'Full name',
    'domain': 'example.com',
    'google-dork': 'site:example.com filetype:pdf',
    'filetype-dork': 'confidential filetype:pdf',
    'site-dork': 'site:linkedin.com "John Smith"',
    'social-dork': 'site:twitter.com OR site:facebook.com',
    'cache-dork': 'cache:example.com/page',
    'leak-dork': 'site:pastebin.com "password"',
    'vulnerability-dork': 'intitle:"index of" "config.php"',
    'news': 'Person or event name',
    'messaging': 'Username or handle',
    'image': 'Image URL',
    'imageforensics': 'Image URL',
    'metadata': 'Image URL',
    'facial': 'Image URL or name',
    'educationverify': 'Name or institution',
    'geolocation': 'Address or coordinates',
    'breachintel': 'Email or username'
  };
  
  return placeholders[moduleType] || 'Search term';
}

function downloadFile(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Keyboard Shortcuts
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch(e.key) {
        case 's':
          e.preventDefault();
          exportLog();
          break;
        case 'p':
          e.preventDefault();
          printStackReport();
          break;
        case 'n':
          e.preventDefault();
          createModule('notes');
          break;
      }
    }
  });
}

// Case Management Functions
function runCaseInfo(q, div) {
  // Case info module doesn't open URLs, just for documentation
  addToLog("Case Information", "Case details documented", "Internal case management");
}

function runInvestigatorInfo(q, div) {
  // Investigator info module doesn't open URLs, just for documentation
  addToLog("Investigator Information", "Investigator details documented", "Internal investigator management");
}

function saveCaseInfo(data) {
  // Store case information globally
  SudocopApp.caseInfo = {
    ...data,
    savedAt: new Date().toISOString(),
    id: `case-${Date.now()}`
  };
  
  console.log('Case Information Saved:', SudocopApp.caseInfo);
  
  // Show confirmation
  showNotification(`Case Information Saved: ${data.caseNumber}`, 'success');
  
  // Update session with case context
  updateSessionContext();
}

function saveInvestigatorInfo(data) {
  // Store investigator information globally
  SudocopApp.investigatorInfo = {
    ...data,
    savedAt: new Date().toISOString(),
    id: `investigator-${Date.now()}`
  };
  
  console.log('Investigator Information Saved:', SudocopApp.investigatorInfo);
  
  // Show confirmation
  showNotification(`Investigator Information Saved: ${data.investigatorName}`, 'success');
  
  // Update session with investigator context
  updateSessionContext();
}

function updateSessionContext() {
  // Update the live log with context if both case and investigator info are available
  if (SudocopApp.caseInfo && SudocopApp.investigatorInfo) {
    const contextMessage = `Investigation Context: Case ${SudocopApp.caseInfo.caseNumber} assigned to ${SudocopApp.investigatorInfo.investigatorName}`;
    addToLiveLog("Session Context", contextMessage, "Internal session management");
  }
}

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--accent-primary);
    color: var(--bg-primary);
    padding: 1rem 1.5rem;
    border-radius: 4px;
    box-shadow: 0 4px 20px var(--shadow-primary);
    z-index: 3000;
    font-family: var(--font-family);
    font-size: 14px;
    animation: slideInRight 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

function runCustomWebsite(websiteUrl, searchTerm, div) {
  const fullUrl = websiteUrl.includes('?') ? 
    `${websiteUrl}${encodeURIComponent(searchTerm)}` : 
    `${websiteUrl}?q=${encodeURIComponent(searchTerm)}`;
  
  addToLog("Custom Website", searchTerm, fullUrl);
  window.open(fullUrl, '_blank');
}

// Enhanced Google Dorking Functions
function runFiletypeDork(q, div) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(q)} filetype:pdf OR filetype:doc OR filetype:xls OR filetype:ppt`;
  addToLog("Document Search", q, url);
  window.open(url, '_blank');
}

function runSiteDork(q, div) {
  const url = `https://www.google.com/search?q=site:${encodeURIComponent(q)}`;
  addToLog("Site-Specific Search", q, url);
  window.open(url, '_blank');
}

function runSocialDork(q, div) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(q)} site:facebook.com OR site:twitter.com OR site:linkedin.com OR site:instagram.com`;
  addToLog("Social Media Search", q, url);
  window.open(url, '_blank');
}

function runCacheDork(q, div) {
  const url = `https://www.google.com/search?q=cache:${encodeURIComponent(q)}`;
  addToLog("Cached Pages", q, url);
  window.open(url, '_blank');
}

function runLeakDork(q, div) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(q)} site:pastebin.com OR site:paste.org OR site:hastebin.com OR "leak" OR "dump"`;
  addToLog("Data Leak Search", q, url);
  window.open(url, '_blank');
}

function runVulnerabilityDork(q, div) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(q)} intitle:"index of" OR inurl:admin OR inurl:login OR "config.php" OR "database.sql"`;
  addToLog("Vulnerability Search", q, url);
  window.open(url, '_blank');
}

// OSINT Search Handler Functions
function runNameSearch(q, div) {
  const url = `https://www.truepeoplesearch.com/results?name=${encodeURIComponent(q)}`;
  addToLog("Name Search", q, url);
  window.open(url, '_blank');
}

function runEmailSearch(q, div) {
  const url = `https://haveibeenpwned.com/unifiedsearch/${encodeURIComponent(q)}`;
  addToLog("Email Intel", q, url);
  window.open(url, '_blank');
}

function runPhoneSearch(q, div) {
  const url = `https://www.whitepages.com/phone/1-${encodeURIComponent(q)}`;
  addToLog("Phone Search", q, url);
  window.open(url, '_blank');
}

function runUsernameSearch(q, div) {
  const url = `https://whatsmyname.app/?q=${encodeURIComponent(q)}`;
  addToLog("Username Pivot", q, url);
  window.open(url, '_blank');
}

function runLicenseSearch(q, div) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(q + ' professional license lookup site:.gov')}`;
  addToLog("License Search", q, url);
  window.open(url, '_blank');
}

function runIPSearch(q, div) {
  const url = `https://ipinfo.io/${encodeURIComponent(q)}`;
  addToLog("IP Lookup", q, url);
  window.open(url, '_blank');
}

function runCourtSearch(q, div) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(q + " site:courtlistener.com")}`;
  addToLog("Court Search", q, url);
  window.open(url, '_blank');
}

function runPropertySearch(q, div) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(q + " property records")}`;
  addToLog("Property Search", q, url);
  window.open(url, '_blank');
}

function runBusinessSearch(q, div) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(q + " site:sos.state.")}`;
  addToLog("Business Search", q, url);
  window.open(url, '_blank');
}

function runSecSearch(q, div) {
  const url = `https://www.sec.gov/edgar/search/#/q=${encodeURIComponent(q)}`;
  addToLog("SEC Filings", q, url);
  window.open(url, '_blank');
}

function runVinCheck(q, div) {
  const url = `https://www.nicb.org/vincheck?vin=${encodeURIComponent(q)}`;
  addToLog("VIN Check", q, url);
  window.open(url, '_blank');
}

function runRepuve(q, div) {
  const url = `https://www2.repuve.gob.mx:8443/ciudadania/consulta/placas?q=${encodeURIComponent(q)}`;
  addToLog("REPUVE", q, url);
  window.open(url, '_blank');
}

function runPlacasCheck(q, div) {
  const url = `https://www.google.com/search?q=placas+${encodeURIComponent(q)}+site:mx`;
  addToLog("Placas Check", q, url);
  window.open(url, '_blank');
}

function runNaMus(q, div) {
  const url = `https://www.namus.gov/MissingPersons/Search?query=${encodeURIComponent(q)}`;
  addToLog("NAMUS Missing", q, url);
  window.open(url, '_blank');
}

function runMissingKids(q, div) {
  const url = `https://www.missingkids.org/gethelpnow/search?search=${encodeURIComponent(q)}`;
  addToLog("MissingKids", q, url);
  window.open(url, '_blank');
}

function runMexicoMissing(q, div) {
  const url = `https://personasdesaparecidas.gob.mx/buscador?q=${encodeURIComponent(q)}`;
  addToLog("MX Missing", q, url);
  window.open(url, '_blank');
}

function runNaMusUnidentified(q, div) {
  const url = `https://www.namus.gov/UnidentifiedPersons/Search?query=${encodeURIComponent(q)}`;
  addToLog("Unidentified (NAMUS)", q, url);
  window.open(url, '_blank');
}

function runDoeNetwork(q, div) {
  const url = `https://www.doenetwork.org/cases.html?search=${encodeURIComponent(q)}`;
  addToLog("Doe Network", q, url);
  window.open(url, '_blank');
}

function runFindAGrave(q, div) {
  const url = `https://www.findagrave.com/memorial/search?q=${encodeURIComponent(q)}`;
  addToLog("FindAGrave", q, url);
  window.open(url, '_blank');
}

function runLegacyObits(q, div) {
  const url = `https://www.legacy.com/us/obituaries/search?query=${encodeURIComponent(q)}`;
  addToLog("Legacy Obituaries", q, url);
  window.open(url, '_blank');
}

function runDomainSearch(q, div) {
  const url = `https://who.is/whois/${encodeURIComponent(q)}`;
  addToLog("Domain Intel", q, url);
  window.open(url, '_blank');
}

function runDorkSearch(q, div) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(q)}`;
  addToLog("Google Dork", q, url);
  window.open(url, '_blank');
}

function runNewsSearch(q, div) {
  const url = `https://www.google.com/search?q=site:archive.org+OR+site:news.google.com+${encodeURIComponent(q)}`;
  addToLog("Archived News", q, url);
  window.open(url, '_blank');
}

function runMessagingSearch(q, div) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(q + " site:telegram.org OR site:discord.com")}`;
  addToLog("Messaging Platforms", q, url);
  window.open(url, '_blank');
}

function runImageSearch(q, div) {
  const url = `https://images.google.com/searchbyimage?image_url=${encodeURIComponent(q)}`;
  addToLog("Reverse Image", q, url);
  window.open(url, '_blank');
}

function runImageForensics(q, div) {
  const url = `https://fotoforensics.com/analysis.php?url=${encodeURIComponent(q)}`;
  addToLog("Image Forensics", q, url);
  window.open(url, '_blank');
}

function runMetadataViewer(q, div) {
  const url = `https://29a.ch/photo-forensics/#forensic-magnifier&imgurl=${encodeURIComponent(q)}`;
  addToLog("Metadata Viewer", q, url);
  window.open(url, '_blank');
}

function runFacialSearch(q, div) {
  const url = `https://pimeyes.com/en/search?q=${encodeURIComponent(q)}`;
  addToLog("Facial Recognition", q, url);
  window.open(url, '_blank');
}

function runEducationVerify(q, div) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(q + " degree verification site:.edu")}`;
  addToLog("Education Verification", q, url);
  window.open(url, '_blank');
}

function runGeoSearch(q, div) {
  const url = `https://www.google.com/maps/search/${encodeURIComponent(q)}`;
  addToLog("Geolocation Search", q, url);
  window.open(url, '_blank');
}

function runBreachIntel(q, div) {
  const url = `https://dehashed.com/search?query=${encodeURIComponent(q)}`;
  addToLog("Breach & Dark Web", q, url);
  window.open(url, '_blank');
}

function runNotes(q, div) {
  // Notes module doesn't open URLs, just for note-taking
  addToLog("Notes", "Note added", "Local investigation notes");
}

// Export Menu Functions
function showExportMenu() {
  document.getElementById('exportModal').style.display = 'block';
}

function closeExportMenu() {
  document.getElementById('exportModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('exportModal');
  if (event.target === modal) {
    closeExportMenu();
  }
}

// Export Functions for Different Tools
function exportToMaltego() {
  const data = generateInvestigationData();
  const maltegoCSV = convertToMaltegoCSV(data);
  downloadFile(maltegoCSV, `sudocop_maltego_${Date.now()}.csv`, 'text/csv');
  closeExportMenu();
}

function exportToGephi() {
  const data = generateInvestigationData();
  const gephiData = convertToGephiFormat(data);
  downloadFile(gephiData, `sudocop_gephi_${Date.now()}.gexf`, 'application/xml');
  closeExportMenu();
}

function exportToCSV() {
  const data = generateInvestigationData();
  const csvData = convertToCSV(data);
  downloadFile(csvData, `sudocop_investigation_${Date.now()}.csv`, 'text/csv');
  closeExportMenu();
}

function exportToJSON() {
  const data = generateInvestigationData();
  const jsonData = JSON.stringify(data, null, 2);
  downloadFile(jsonData, `sudocop_investigation_${Date.now()}.json`, 'application/json');
  closeExportMenu();
}

function exportToHunchly() {
  const data = generateInvestigationData();
  const hunchlyData = convertToHunchlyFormat(data);
  downloadFile(hunchlyData, `sudocop_hunchly_${Date.now()}.json`, 'application/json');
  closeExportMenu();
}

function exportToMITRE() {
  const data = generateInvestigationData();
  const mitreData = convertToMITREFormat(data);
  downloadFile(mitreData, `sudocop_mitre_${Date.now()}.json`, 'application/json');
  closeExportMenu();
}

function exportToMarkdown() {
  const data = generateInvestigationData();
  const markdownData = convertToMarkdown(data);
  downloadFile(markdownData, `sudocop_investigation_${Date.now()}.md`, 'text/markdown');
  closeExportMenu();
}

function exportToSTIX() {
  const data = generateInvestigationData();
  const stixData = convertToSTIXFormat(data);
  downloadFile(stixData, `sudocop_stix_${Date.now()}.json`, 'application/json');
  closeExportMenu();
}

// Data Generation and Conversion Functions
function generateInvestigationData() {
  const stackItems = document.querySelectorAll('.stack-item');
  
  return {
    metadata: {
      generatedAt: new Date().toISOString(),
      sessionDuration: document.getElementById('sessionTime')?.textContent || '00:00',
      totalSearches: SudocopApp.totalSearches,
      activeModules: Object.keys(SudocopApp.modules).length,
      tool: 'Sudocop OSINT Terminal',
      version: '1.0'
    },
    searches: SudocopApp.searchLog.map(entry => {
      const lines = entry.split('\n');
      const headerMatch = lines[0].match(/\[(.*?)\] (.*?) — (.*)/);
      return {
        timestamp: headerMatch ? headerMatch[1] : '',
        module: headerMatch ? headerMatch[2] : '',
        searchTerm: headerMatch ? headerMatch[3] : '',
        url: lines[1] ? lines[1].replace('→ ', '') : ''
      };
    }),
    modules: Array.from(stackItems).map(item => {
      const title = item.querySelector('strong')?.innerText || 'Untitled Module';
      const input = item.querySelector('input')?.value || '';
      const note = item.querySelector('textarea')?.value || '';
      
      return {
        type: title,
        searchTerm: input,
        notes: note,
        timestamp: new Date().toISOString()
      };
    }),
    entities: extractEntities(),
    relationships: extractRelationships()
  };
}

function extractEntities() {
  const entities = new Set();
  const stackItems = document.querySelectorAll('.stack-item');
  
  Array.from(stackItems).forEach(item => {
    const input = item.querySelector('input')?.value;
    const title = item.querySelector('strong')?.innerText;
    
    if (input && input.trim()) {
      entities.add({
        value: input.trim(),
        type: getEntityType(title),
        source: title
      });
    }
  });
  
  return Array.from(entities);
}

function extractRelationships() {
  // Basic relationship extraction based on search patterns
  const relationships = [];
  const entities = extractEntities();
  
  // Simple relationship: all entities are related to the investigation
  entities.forEach(entity => {
    relationships.push({
      source: 'Investigation',
      target: entity.value,
      type: 'investigates',
      weight: 1
    });
  });
  
  return relationships;
}

function getEntityType(moduleTitle) {
  const typeMap = {
    'Name Search': 'Person',
    'Email Intel': 'Email',
    'Phone Lookup': 'Phone',
    'Username Pivot': 'Username',
    'IP Analysis': 'IPAddress',
    'Domain Analysis': 'Domain',
    'VIN Check': 'Vehicle',
    'License Check': 'License',
    'Court Records': 'LegalEntity',
    'Property Records': 'Property',
    'Business Registry': 'Organization'
  };
  
  return typeMap[moduleTitle] || 'Entity';
}

// Format Conversion Functions
function convertToMaltegoCSV(data) {
  let csv = 'Entity Type,Entity Value,Notes,Source Module,Timestamp\n';
  
  data.entities.forEach(entity => {
    const notes = data.modules.find(m => m.searchTerm === entity.value)?.notes || '';
    csv += `"${entity.type}","${entity.value}","${notes.replace(/"/g, '""')}","${entity.source}","${new Date().toISOString()}"\n`;
  });
  
  return csv;
}

function convertToGephiFormat(data) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<gexf xmlns="http://www.gexf.net/1.2draft" version="1.2">
  <graph mode="static" defaultedgetype="directed">
    <nodes>
      ${data.entities.map((entity, index) => 
        `<node id="${index}" label="${entity.value}" type="${entity.type}"/>`
      ).join('\n      ')}
    </nodes>
    <edges>
      ${data.relationships.map((rel, index) => 
        `<edge id="${index}" source="0" target="${data.entities.findIndex(e => e.value === rel.target)}" type="${rel.type}"/>`
      ).join('\n      ')}
    </edges>
  </graph>
</gexf>`;
}

function convertToCSV(data) {
  let csv = 'Timestamp,Module,Search Term,URL,Notes\n';
  
  data.searches.forEach(search => {
    const module = data.modules.find(m => m.searchTerm === search.searchTerm);
    const notes = module?.notes || '';
    csv += `"${search.timestamp}","${search.module}","${search.searchTerm}","${search.url}","${notes.replace(/"/g, '""')}"\n`;
  });
  
  return csv;
}

function convertToHunchlyFormat(data) {
  return JSON.stringify({
    case: {
      name: `Sudocop Investigation ${new Date().toLocaleDateString()}`,
      created: data.metadata.generatedAt,
      description: `Investigation conducted using Sudocop OSINT Terminal`,
      tags: ['osint', 'investigation']
    },
    searches: data.searches.map(search => ({
      timestamp: search.timestamp,
      query: search.searchTerm,
      source: search.module,
      url: search.url,
      type: 'web_search'
    })),
    entities: data.entities.map(entity => ({
      value: entity.value,
      type: entity.type.toLowerCase(),
      source: 'sudocop',
      confidence: 0.8
    })),
    notes: data.modules.filter(m => m.notes).map(module => ({
      content: module.notes,
      type: module.type,
      timestamp: module.timestamp
    }))
  }, null, 2);
}

function convertToMITREFormat(data) {
  return JSON.stringify({
    framework: 'MITRE ATT&CK',
    version: '1.0',
    investigation: {
      id: `sudocop-${Date.now()}`,
      name: `Sudocop Investigation`,
      created: data.metadata.generatedAt,
      techniques: data.searches.map(search => ({
        technique_id: 'T1589', // Gather Victim Identity Information
        technique_name: 'Information Gathering',
        description: `${search.module}: ${search.searchTerm}`,
        timestamp: search.timestamp
      }))
    }
  }, null, 2);
}

function convertToMarkdown(data) {
  return `# Sudocop OSINT Investigation Report

**Generated:** ${new Date().toLocaleString()}  
**Session Duration:** ${data.metadata.sessionDuration}  
**Total Searches:** ${data.metadata.totalSearches}  
**Active Modules:** ${data.metadata.activeModules}  

## Executive Summary

Investigation conducted using Sudocop OSINT Terminal with ${data.metadata.totalSearches} searches across ${data.metadata.activeModules} different modules.

## Search History

| Timestamp | Module | Search Term | URL |
|-----------|--------|-------------|-----|
${data.searches.map(search => 
  `| ${search.timestamp} | ${search.module} | ${search.searchTerm} | ${search.url} |`
).join('\n')}

## Entities Identified

${data.entities.map(entity => 
  `- **${entity.type}:** ${entity.value} *(Source: ${entity.source})*`
).join('\n')}

## Investigation Notes

${data.modules.filter(m => m.notes).map(module => 
  `### ${module.type}\n**Search Term:** ${module.searchTerm}\n**Notes:** ${module.notes}\n`
).join('\n')}

---
*Report generated by Sudocop OSINT Terminal*`;
}

function convertToSTIXFormat(data) {
  return JSON.stringify({
    type: 'bundle',
    id: `bundle--${generateUUID()}`,
    objects: [
      {
        type: 'identity',
        id: `identity--${generateUUID()}`,
        created: data.metadata.generatedAt,
        modified: data.metadata.generatedAt,
        name: 'Sudocop OSINT Terminal',
        identity_class: 'system'
      },
      ...data.entities.map(entity => ({
        type: 'indicator',
        id: `indicator--${generateUUID()}`,
        created: data.metadata.generatedAt,
        modified: data.metadata.generatedAt,
        pattern: `[${entity.type.toLowerCase()}:value = '${entity.value}']`,
        labels: ['attribution'],
        description: `Entity identified through ${entity.source}`
      }))
    ]
  }, null, 2);
}

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}