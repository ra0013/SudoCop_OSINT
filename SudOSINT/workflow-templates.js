/**
 * Sudocop OSINT Terminal - Investigation Workflow Templates
 * Based on comprehensive criminal investigation OSINT workflows
 */

// Investigation Workflow Templates
const INVESTIGATION_TEMPLATES = {
  "person-investigation": {
    id: "person-investigation",
    name: "👤 Person Investigation",
    description: "Complete background investigation starting from a name",
    category: "Primary Workflows",
    estimatedTime: "2-4 hours",
    phases: [
      {
        name: "Phase 1: Identity Verification",
        description: "Name → Basic Demographics → Address History → Family Connections",
        modules: [
          { type: "case-info", priority: "required", notes: "Document case details and investigation scope" },
          { type: "investigator-info", priority: "required", notes: "Record investigator credentials" },
          { type: "name", priority: "required", notes: "Primary subject identification" },
          { type: "property", priority: "recommended", notes: "Address history and property records" }
        ]
      },
      {
        name: "Phase 2: Contact Discovery",
        description: "Verified Identity → Phone Numbers → Email Addresses → Social Media",
        modules: [
          { type: "phone", priority: "required", notes: "Phone number identification and verification" },
          { type: "email", priority: "required", notes: "Email discovery and breach analysis" },
          { type: "username", priority: "recommended", notes: "Social media and online presence" }
        ]
      },
      {
        name: "Phase 3: Criminal History",
        description: "Identity + Location → Court Records → Criminal Background → Sex Offender Check",
        modules: [
          { type: "court", priority: "required", notes: "Court records and legal proceedings" },
          { type: "license", priority: "recommended", notes: "Professional licenses and certifications" }
        ]
      },
      {
        name: "Phase 4: Digital Footprint",
        description: "Contact Info → Social Media Profiles → Online Presence → Digital Behavior",
        modules: [
          { type: "social-dork", priority: "recommended", notes: "Social media investigation" },
          { type: "image", priority: "optional", notes: "Profile image analysis" },
          { type: "notes", priority: "required", notes: "Investigation findings and analysis" }
        ]
      }
    ]
  },

  "phone-investigation": {
    id: "phone-investigation",
    name: "📞 Phone Intelligence",
    description: "Complete phone number investigation workflow",
    category: "Primary Workflows",
    estimatedTime: "1-2 hours",
    phases: [
      {
        name: "Phase 1: Basic Identification",
        description: "Phone Number → Carrier Info → Location → Number Type",
        modules: [
          { type: "case-info", priority: "required", notes: "Document investigation parameters" },
          { type: "phone", priority: "required", notes: "Primary phone analysis" }
        ]
      },
      {
        name: "Phase 2: Owner Investigation", 
        description: "Verified Number → Reverse Lookup → Owner Identity → Associated Records",
        modules: [
          { type: "name", priority: "recommended", notes: "Identified owner background check" },
          { type: "property", priority: "optional", notes: "Address verification" }
        ]
      },
      {
        name: "Phase 3: Associated Accounts",
        description: "Phone Number → Social Media → Email Accounts → Online Services",
        modules: [
          { type: "email", priority: "recommended", notes: "Associated email accounts" },
          { type: "username", priority: "recommended", notes: "Social media profiles" },
          { type: "notes", priority: "required", notes: "Investigation summary" }
        ]
      }
    ]
  },

  "email-investigation": {
    id: "email-investigation", 
    name: "📧 Email Intelligence",
    description: "Email-based investigation workflow",
    category: "Primary Workflows",
    estimatedTime: "1-3 hours",
    phases: [
      {
        name: "Phase 1: Email Validation & Analysis",
        description: "Email Address → Validity Check → Domain Analysis → Provider Info",
        modules: [
          { type: "case-info", priority: "required", notes: "Investigation scope documentation" },
          { type: "email", priority: "required", notes: "Primary email analysis" },
          { type: "domain", priority: "recommended", notes: "Domain registration analysis" }
        ]
      },
      {
        name: "Phase 2: Breach & Exposure Analysis",
        description: "Validated Email → Data Breaches → Leaked Credentials → Dark Web Exposure",
        modules: [
          { type: "breachintel", priority: "required", notes: "Data breach and dark web analysis" },
          { type: "leak-dork", priority: "recommended", notes: "Public leak investigation" }
        ]
      },
      {
        name: "Phase 3: Account Discovery",
        description: "Email → Social Media → Online Services → Professional Profiles",
        modules: [
          { type: "username", priority: "required", notes: "Username enumeration" },
          { type: "name", priority: "recommended", notes: "Owner identification" },
          { type: "phone", priority: "optional", notes: "Associated phone numbers" },
          { type: "notes", priority: "required", notes: "Findings documentation" }
        ]
      }
    ]
  },

  "cryptocurrency-investigation": {
    id: "cryptocurrency-investigation",
    name: "💰 Financial Intelligence",
    description: "Cryptocurrency and financial investigation",
    category: "Specialized Workflows",
    estimatedTime: "3-6 hours",
    phases: [
      {
        name: "Phase 1: Address Analysis",
        description: "Crypto Address → Blockchain → Transaction History → Pattern Analysis",
        modules: [
          { type: "case-info", priority: "required", notes: "Financial crime case documentation" },
          { type: "custom-website", priority: "required", notes: "Blockchain explorer analysis" }
        ]
      },
      {
        name: "Phase 2: Advanced Analysis", 
        description: "Transaction Data → Clustering → Exchange Identification → Risk Assessment",
        modules: [
          { type: "google-dork", priority: "recommended", notes: "Exchange and service identification" },
          { type: "breach-intel", priority: "recommended", notes: "Associated account breaches" }
        ]
      },
      {
        name: "Phase 3: Real-World Connections",
        description: "Exchange Data → KYC Information → Identity Links → Traditional Finance",
        modules: [
          { type: "email", priority: "recommended", notes: "Exchange account emails" },
          { type: "name", priority: "recommended", notes: "KYC identity verification" },
          { type: "notes", priority: "required", notes: "Financial intelligence summary" }
        ]
      }
    ]
  },

  "business-investigation": {
    id: "business-investigation",
    name: "🏢 Corporate Intelligence",
    description: "Business and organization investigation",
    category: "Specialized Workflows", 
    estimatedTime: "2-4 hours",
    phases: [
      {
        name: "Phase 1: Corporate Structure",
        description: "Company Name → Registration → Officers → Ownership Structure",
        modules: [
          { type: "case-info", priority: "required", notes: "Corporate investigation scope" },
          { type: "business", priority: "required", notes: "Business registration search" },
          { type: "sec", priority: "recommended", notes: "SEC filings analysis" }
        ]
      },
      {
        name: "Phase 2: Financial Analysis",
        description: "Corporate Data → Financial Records → Risk Assessment → Regulatory Issues", 
        modules: [
          { type: "court", priority: "recommended", notes: "Legal proceedings" },
          { type: "news", priority: "recommended", notes: "Media coverage analysis" }
        ]
      },
      {
        name: "Phase 3: Key Personnel",
        description: "Corporate Officers → Individual Investigation → Background Checks → Connections",
        modules: [
          { type: "name", priority: "required", notes: "Officer background investigation" },
          { type: "email", priority: "recommended", notes: "Professional email accounts" },
          { type: "notes", priority: "required", notes: "Corporate intelligence summary" }
        ]
      }
    ]
  },

  "missing-person-mexico": {
    id: "missing-person-mexico",
    name: "🇲🇽 Missing Person (Mexico)",
    description: "Specialized Mexico missing person investigation",
    category: "Mexico-Specific",
    estimatedTime: "4-8 hours",
    phases: [
      {
        name: "Phase 1: Mexican Government Records",
        description: "Subject Info → CURP Validation → Official Records → Government Databases",
        modules: [
          { type: "case-info", priority: "required", notes: "Missing person case details" },
          { type: "name", priority: "required", notes: "Subject identification" },
          { type: "custom-website", priority: "required", notes: "CURP validation system" }
        ]
      },
      {
        name: "Phase 2: Missing Persons Mexico",
        description: "Missing Person → RNPED Search → Search Commissions → Cross-Border Alerts",
        modules: [
          { type: "mexico-missing", priority: "required", notes: "RNPED database search" },
          { type: "namus", priority: "required", notes: "US missing persons database" },
          { type: "missingkids", priority: "recommended", notes: "If minor involved" }
        ]
      },
      {
        name: "Phase 3: Cross-Border Intelligence",
        description: "Mexico Intel → US Systems → Border Activity → International Cooperation",
        modules: [
          { type: "image", priority: "recommended", notes: "Photo analysis and distribution" },
          { type: "social-dork", priority: "recommended", notes: "Social media investigation" },
          { type: "notes", priority: "required", notes: "Cross-border case summary" }
        ]
      }
    ]
  },

  "threat-assessment": {
    id: "threat-assessment",
    name: "🚨 Threat Assessment",
    description: "Advanced investigation for criminal activity",
    category: "Advanced Workflows",
    estimatedTime: "6-12 hours",
    phases: [
      {
        name: "Phase 1: Dark Web Intelligence",
        description: "Subject Identity → Dark Web Search → Criminal Forums → Threat Indicators",
        modules: [
          { type: "case-info", priority: "required", notes: "Threat assessment parameters" },
          { type: "breachintel", priority: "required", notes: "Dark web presence analysis" },
          { type: "leak-dork", priority: "required", notes: "Criminal forum search" }
        ]
      },
      {
        name: "Phase 2: Criminal Network Analysis",
        description: "Individual Threats → Network Mapping → Associate Identification → Pattern Analysis",
        modules: [
          { type: "name", priority: "required", notes: "Associate identification" },
          { type: "email", priority: "required", notes: "Communication analysis" },
          { type: "phone", priority: "required", notes: "Contact network mapping" },
          { type: "username", priority: "required", notes: "Digital identity correlation" }
        ]
      },
      {
        name: "Phase 3: Intelligence Reporting",
        description: "All Gathered Intel → Risk Assessment → Report Generation → Action Recommendations",
        modules: [
          { type: "vulnerability-dork", priority: "recommended", notes: "Technical capability assessment" },
          { type: "image", priority: "recommended", notes: "Photo intelligence" },
          { type: "notes", priority: "required", notes: "Comprehensive threat assessment" }
        ]
      }
    ]
  }
};

// Workflow Management Functions
class WorkflowManager {
  constructor() {
    this.currentWorkflow = null;
    this.currentPhase = 0;
    this.completedModules = new Set();
    this.workflowStartTime = null;
  }

  // Load workflow template
  loadWorkflow(templateId) {
    const template = INVESTIGATION_TEMPLATES[templateId];
    if (!template) {
      console.error('Workflow template not found:', templateId);
      return false;
    }

    this.currentWorkflow = { ...template };
    this.currentPhase = 0;
    this.completedModules.clear();
    this.workflowStartTime = Date.now();

    // Log workflow start
    addToLiveLog("Workflow System", `Started: ${template.name}`, "Investigation workflow initialized");
    
    // Update UI
    this.updateWorkflowDisplay();
    this.showWorkflowGuidance();
    
    return true;
  }

  // Add all modules from current phase
  addPhaseModules(phaseIndex = this.currentPhase) {
    if (!this.currentWorkflow || !this.currentWorkflow.phases[phaseIndex]) return;

    const phase = this.currentWorkflow.phases[phaseIndex];
    let modulesAdded = 0;

    phase.modules.forEach(moduleConfig => {
      // Check if module already exists
      if (!SudocopApp.modules[moduleConfig.type]) {
        createModule(moduleConfig.type);
        modulesAdded++;
        
        // Add phase context to the module
        setTimeout(() => {
          const stackItems = document.querySelectorAll('.stack-item');
          const lastItem = stackItems[stackItems.length - 1];
          if (lastItem) {
            this.addWorkflowContext(lastItem, phase.name, moduleConfig);
          }
        }, 100);
      }
    });

    if (modulesAdded > 0) {
      addToLiveLog("Workflow System", `Added ${modulesAdded} modules for: ${phase.name}`, "Phase modules loaded");
      this.showPhaseGuidance(phase);
    }
  }

  // Add workflow context to module
  addWorkflowContext(moduleElement, phaseName, moduleConfig) {
    // Add phase indicator
    const phaseIndicator = document.createElement('div');
    phaseIndicator.className = 'workflow-phase-indicator';
    phaseIndicator.style.cssText = `
      background: var(--accent-primary);
      color: var(--bg-primary);
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
      border-radius: 2px;
      margin-bottom: 0.5rem;
      font-weight: 600;
    `;
    phaseIndicator.textContent = phaseName;

    // Add priority indicator
    const priorityBadge = document.createElement('span');
    priorityBadge.className = 'workflow-priority';
    priorityBadge.style.cssText = `
      float: right;
      font-size: 0.7rem;
      padding: 0.1rem 0.3rem;
      border-radius: 2px;
      font-weight: 500;
    `;
    
    const priorityColors = {
      required: 'background: #dc3545; color: white;',
      recommended: 'background: #ffc107; color: black;',
      optional: 'background: #6c757d; color: white;'
    };
    
    priorityBadge.style.cssText += priorityColors[moduleConfig.priority] || priorityColors.optional;
    priorityBadge.textContent = moduleConfig.priority.toUpperCase();
    
    phaseIndicator.appendChild(priorityBadge);

    // Add workflow notes
    if (moduleConfig.notes) {
      const workflowNotes = document.createElement('div');
      workflowNotes.className = 'workflow-notes';
      workflowNotes.style.cssText = `
        background: var(--shadow-secondary);
        border: 1px solid var(--border-secondary);
        padding: 0.5rem;
        font-size: 0.8rem;
        color: var(--text-secondary);
        border-radius: 2px;
        margin-bottom: 0.5rem;
        font-style: italic;
      `;
      workflowNotes.innerHTML = `💡 <strong>Workflow Guidance:</strong> ${moduleConfig.notes}`;
      
      moduleElement.insertBefore(workflowNotes, moduleElement.querySelector('textarea') || moduleElement.lastChild);
    }

    moduleElement.insertBefore(phaseIndicator, moduleElement.firstChild);
  }

  // Show workflow guidance
  showWorkflowGuidance() {
    if (!this.currentWorkflow) return;

    const guidanceElement = document.getElementById('workflowGuidance') || this.createWorkflowGuidanceElement();
    
    guidanceElement.innerHTML = `
      <div class="workflow-header">
        <h3>🎯 ${this.currentWorkflow.name}</h3>
        <div class="workflow-meta">
          <span>📋 ${this.currentWorkflow.category}</span>
          <span>⏱️ ${this.currentWorkflow.estimatedTime}</span>
          <span>📊 Phase ${this.currentPhase + 1} of ${this.currentWorkflow.phases.length}</span>
        </div>
      </div>
      <div class="workflow-description">
        ${this.currentWorkflow.description}
      </div>
      <div class="workflow-progress">
        ${this.generateProgressBar()}
      </div>
      <div class="workflow-actions">
        <button onclick="workflowManager.addPhaseModules()" class="workflow-btn">
          📥 Add Current Phase Modules
        </button>
        <button onclick="workflowManager.nextPhase()" class="workflow-btn">
          ➡️ Next Phase
        </button>
        <button onclick="workflowManager.showAllPhases()" class="workflow-btn">
          📋 View All Phases
        </button>
        <button onclick="workflowManager.clearWorkflow()" class="workflow-btn workflow-btn-secondary">
          🗑️ End Workflow
        </button>
      </div>
    `;

    guidanceElement.style.display = 'block';
  }

  // Create workflow guidance element
  createWorkflowGuidanceElement() {
    const element = document.createElement('div');
    element.id = 'workflowGuidance';
    element.className = 'workflow-guidance';
    element.style.cssText = `
      background: var(--bg-secondary);
      border: 2px solid var(--accent-primary);
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1rem;
      box-shadow: 0 4px 20px var(--shadow-primary);
    `;

    const workspace = document.getElementById('workspace');
    const dropZone = document.getElementById('workspaceDropZone');
    workspace.insertBefore(element, dropZone);

    return element;
  }

  // Generate progress bar
  generateProgressBar() {
    const totalPhases = this.currentWorkflow.phases.length;
    const progress = ((this.currentPhase) / totalPhases) * 100;
    
    return `
      <div class="progress-bar-container" style="background: var(--border-secondary); height: 8px; border-radius: 4px; overflow: hidden;">
        <div class="progress-bar" style="background: var(--accent-primary); height: 100%; width: ${progress}%; transition: width 0.3s ease;"></div>
      </div>
      <div class="phase-indicators" style="display: flex; justify-content: space-between; margin-top: 0.5rem; font-size: 0.8rem;">
        ${this.currentWorkflow.phases.map((phase, index) => `
          <span style="color: ${index <= this.currentPhase ? 'var(--accent-primary)' : 'var(--text-secondary)'};">
            ${index + 1}. ${phase.name.split(':')[0]}
          </span>
        `).join('')}
      </div>
    `;
  }

  // Show phase guidance
  showPhaseGuidance(phase) {
    const guidance = `
      <div class="phase-guidance" style="
        background: var(--shadow-secondary);
        border-left: 4px solid var(--accent-primary);
        padding: 0.75rem;
        margin: 0.5rem 0;
        border-radius: 0 4px 4px 0;
      ">
        <strong>📋 ${phase.name}</strong><br/>
        <small style="color: var(--text-secondary);">${phase.description}</small>
        <div style="margin-top: 0.5rem;">
          <strong>Expected modules:</strong>
          ${phase.modules.map(m => `
            <span style="
              display: inline-block;
              background: var(--accent-primary);
              color: var(--bg-primary);
              padding: 0.1rem 0.3rem;
              border-radius: 2px;
              font-size: 0.7rem;
              margin: 0.1rem;
            ">${m.type}</span>
          `).join('')}
        </div>
      </div>
    `;

    // Add to live log
    addToLiveLog("Phase Guidance", phase.name, phase.description);
  }

  // Move to next phase
  nextPhase() {
    if (!this.currentWorkflow) return;

    if (this.currentPhase < this.currentWorkflow.phases.length - 1) {
      this.currentPhase++;
      this.updateWorkflowDisplay();
      this.showWorkflowGuidance();
      addToLiveLog("Workflow System", `Advanced to Phase ${this.currentPhase + 1}`, `${this.currentWorkflow.phases[this.currentPhase].name}`);
    } else {
      this.completeWorkflow();
    }
  }

  // Complete workflow
  completeWorkflow() {
    if (!this.currentWorkflow) return;

    const duration = Math.floor((Date.now() - this.workflowStartTime) / 1000 / 60);
    addToLiveLog("Workflow System", `Completed: ${this.currentWorkflow.name}`, `Duration: ${duration} minutes`);
    
    // Show completion dialog
    const completion = confirm(`🎉 Workflow completed!\n\n${this.currentWorkflow.name}\nDuration: ${duration} minutes\n\nGenerate investigation report?`);
    
    if (completion) {
      this.generateWorkflowReport();
    }
    
    this.clearWorkflow();
  }

  // Clear workflow
  clearWorkflow() {
    this.currentWorkflow = null;
    this.currentPhase = 0;
    this.completedModules.clear();
    
    const guidanceElement = document.getElementById('workflowGuidance');
    if (guidanceElement) {
      guidanceElement.style.display = 'none';
    }
  }

  // Show all phases
  showAllPhases() {
    if (!this.currentWorkflow) return;

    const modal = this.createPhasesModal();
    document.body.appendChild(modal);
  }

  // Create phases modal
  createPhasesModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>📋 ${this.currentWorkflow.name} - All Phases</h3>
          <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
        </div>
        <div class="modal-body">
          ${this.currentWorkflow.phases.map((phase, index) => `
            <div class="phase-detail" style="
              border: 1px solid var(--border-primary);
              border-radius: 4px;
              padding: 1rem;
              margin-bottom: 1rem;
              background: ${index === this.currentPhase ? 'var(--shadow-primary)' : 'var(--bg-secondary)'};
            ">
              <h4 style="color: var(--accent-primary); margin-bottom: 0.5rem;">
                ${phase.name} ${index === this.currentPhase ? '(Current)' : ''}
              </h4>
              <p style="color: var(--text-secondary); margin-bottom: 1rem;">${phase.description}</p>
              <div class="phase-modules">
                <strong>Modules:</strong>
                <div style="margin-top: 0.5rem;">
                  ${phase.modules.map(module => `
                    <div style="
                      display: flex;
                      justify-content: space-between;
                      padding: 0.25rem 0;
                      border-bottom: 1px solid var(--border-secondary);
                    ">
                      <span>${module.type}</span>
                      <span style="
                        background: ${module.priority === 'required' ? '#dc3545' : module.priority === 'recommended' ? '#ffc107' : '#6c757d'};
                        color: ${module.priority === 'recommended' ? 'black' : 'white'};
                        padding: 0.1rem 0.3rem;
                        border-radius: 2px;
                        font-size: 0.7rem;
                      ">${module.priority}</span>
                    </div>
                    ${module.notes ? `<div style="font-size: 0.8rem; color: var(--text-secondary); font-style: italic; margin-bottom: 0.5rem;">💡 ${module.notes}</div>` : ''}
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    return modal;
  }

  // Generate workflow report
  generateWorkflowReport() {
    const reportData = {
      workflow: this.currentWorkflow.name,
      category: this.currentWorkflow.category,
      startTime: new Date(this.workflowStartTime).toISOString(),
      endTime: new Date().toISOString(),
      duration: Math.floor((Date.now() - this.workflowStartTime) / 1000 / 60),
      phasesCompleted: this.currentPhase + 1,
      totalPhases: this.currentWorkflow.phases.length,
      modulesUsed: Object.keys(SudocopApp.modules).length,
      searchesPerformed: SudocopApp.totalSearches
    };

    const report = `
# 🔍 OSINT Investigation Report
**Generated by Sudocop OSINT Terminal**

## Investigation Overview
- **Workflow:** ${reportData.workflow}
- **Category:** ${reportData.category}
- **Start Time:** ${new Date(reportData.startTime).toLocaleString()}
- **End Time:** ${new Date(reportData.endTime).toLocaleString()}
- **Duration:** ${reportData.duration} minutes
- **Phases Completed:** ${reportData.phasesCompleted}/${reportData.totalPhases}
- **Modules Used:** ${reportData.modulesUsed}
- **Searches Performed:** ${reportData.searchesPerformed}

## Workflow Progress
${this.currentWorkflow.phases.map((phase, index) => `
### ${phase.name} ${index <= this.currentPhase ? '✅' : '⏸️'}
${phase.description}

**Modules:**
${phase.modules.map(m => `- **${m.type}** (${m.priority}) - ${m.notes}`).join('\n')}
`).join('\n')}

## Investigation Log
${SudocopApp.searchLog.join('\n')}

---
*Report generated by Sudocop OSINT Terminal Workflow System*
    `.trim();

    downloadFile(report, `sudocop_workflow_report_${Date.now()}.md`, 'text/markdown');
  }

  // Update workflow display
  updateWorkflowDisplay() {
    // Update progress indicators, etc.
    this.showWorkflowGuidance();
  }
}

// Initialize workflow manager
const workflowManager = new WorkflowManager();

// Show workflow selection modal
function showWorkflowTemplates() {
  const modal = createWorkflowSelectionModal();
  document.body.appendChild(modal);
}

// Create workflow selection modal
function createWorkflowSelectionModal() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.style.display = 'block';
  
  // Group templates by category
  const categories = {};
  Object.values(INVESTIGATION_TEMPLATES).forEach(template => {
    if (!categories[template.category]) {
      categories[template.category] = [];
    }
    categories[template.category].push(template);
  });

  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>🎯 Investigation Workflow Templates</h3>
        <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
      </div>
      <div class="modal-body">
        <p style="color: var(--text-tertiary); margin-bottom: 1.5rem;">
          Choose a structured investigation workflow based on your starting point and case type. 
          These templates follow professional OSINT methodology and will guide you through each phase.
        </p>
        
        ${Object.entries(categories).map(([category, templates]) => `
          <div class="workflow-category" style="margin-bottom: 2rem;">
            <h4 style="color: var(--accent-primary); border-bottom: 1px solid var(--border-secondary); padding-bottom: 0.5rem;">
              ${category}
            </h4>
            <div class="template-grid" style="display: grid; gap: 1rem; margin-top: 1rem;">
              ${templates.map(template => `
                <div class="workflow-template" style="
                  border: 1px solid var(--border-primary);
                  border-radius: 6px;
                  padding: 1rem;
                  cursor: pointer;
                  transition: all 0.2s ease;
                  background: var(--bg-secondary);
                " onclick="selectWorkflowTemplate('${template.id}')">
                  <div class="template-header" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                    <h5 style="margin: 0; color: var(--accent-primary);">${template.name}</h5>
                    <span style="
                      background: var(--accent-primary);
                      color: var(--bg-primary);
                      padding: 0.1rem 0.3rem;
                      border-radius: 2px;
                      font-size: 0.7rem;
                    ">${template.estimatedTime}</span>
                  </div>
                  <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.75rem;">
                    ${template.description}
                  </p>
                  <div class="template-phases" style="font-size: 0.8rem; color: var(--text-tertiary);">
                    <strong>${template.phases.length} Phases:</strong>
                    ${template.phases.map(phase => phase.name.split(':')[0]).join(' → ')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Add hover effects
  modal.addEventListener('mouseover', (e) => {
    if (e.target.closest('.workflow-template')) {
      const template = e.target.closest('.workflow-template');
      template.style.borderColor = 'var(--accent-primary)';
      template.style.boxShadow = '0 2px 10px var(--shadow-primary)';
      template.style.transform = 'translateY(-1px)';
    }
  });

  modal.addEventListener('mouseout', (e) => {
    if (e.target.closest('.workflow-template')) {
      const template = e.target.closest('.workflow-template');
      template.style.borderColor = 'var(--border-primary)';
      template.style.boxShadow = '';
      template.style.transform = '';
    }
  });

  return modal;
}

// Select workflow template
function selectWorkflowTemplate(templateId) {
  // Close modal
  const modal = document.querySelector('.modal');
  if (modal) modal.remove();

  // Load workflow
  if (workflowManager.loadWorkflow(templateId)) {
    // Show confirmation and options
    const template = INVESTIGATION_TEMPLATES[templateId];
    const confirmed = confirm(`🎯 Load "${template.name}" workflow?\n\n${template.description}\n\nEstimated time: ${template.estimatedTime}\nPhases: ${template.phases.length}\n\nThis will guide you through the investigation step-by-step.`);
    
    if (confirmed) {
      // Optionally auto-add first phase modules
      const autoAdd = confirm(`📥 Automatically add modules for Phase 1: "${template.phases[0].name}"?\n\nYou can always add them manually later.`);
      if (autoAdd) {
        workflowManager.addPhaseModules(0);
      }
    } else {
      workflowManager.clearWorkflow();
    }
  }
}

// Add workflow templates button to module palette
function addWorkflowTemplatesButton() {
  const modulePalette = document.getElementById('modulePalette');
  const templatesButton = document.createElement('button');
  templatesButton.id = 'workflowTemplatesBtn';
  templatesButton.className = 'workflow-templates-btn';
  templatesButton.innerHTML = '🎯 Investigation Templates';
  templatesButton.onclick = showWorkflowTemplates;
  templatesButton.style.cssText = `
    width: 100%;
    background: var(--accent-primary);
    color: var(--bg-primary);
    border: 2px solid var(--accent-primary);
    padding: 0.75rem;
    margin-bottom: 1rem;
    cursor: pointer;
    font-family: var(--font-family);
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 6px;
    transition: all 0.2s ease;
    box-shadow: 0 2px 10px var(--shadow-primary);
  `;

  // Add hover effect
  templatesButton.addEventListener('mouseenter', () => {
    templatesButton.style.background = 'var(--text-primary)';
    templatesButton.style.transform = 'translateY(-1px)';
    templatesButton.style.boxShadow = '0 4px 20px var(--shadow-primary)';
  });

  templatesButton.addEventListener('mouseleave', () => {
    templatesButton.style.background = 'var(--accent-primary)';
    templatesButton.style.transform = '';
    templatesButton.style.boxShadow = '0 2px 10px var(--shadow-primary)';
  });

  // Insert after the search filter
  const searchFilter = modulePalette.querySelector('.search-filter');
  searchFilter.parentNode.insertBefore(templatesButton, searchFilter.nextSibling);
}

// Quick workflow shortcuts
function addQuickWorkflowShortcuts() {
  const shortcuts = [
    { id: 'person-investigation', emoji: '👤', name: 'Person' },
    { id: 'phone-investigation', emoji: '📞', name: 'Phone' },
    { id: 'email-investigation', emoji: '📧', name: 'Email' },
    { id: 'business-investigation', emoji: '🏢', name: 'Business' }
  ];

  const shortcutContainer = document.createElement('div');
  shortcutContainer.className = 'workflow-shortcuts';
  shortcutContainer.style.cssText = `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin-bottom: 1rem;
  `;

  shortcuts.forEach(shortcut => {
    const btn = document.createElement('button');
    btn.className = 'workflow-shortcut';
    btn.innerHTML = `${shortcut.emoji}<br/><small>${shortcut.name}</small>`;
    btn.onclick = () => selectWorkflowTemplate(shortcut.id);
    btn.style.cssText = `
      background: var(--bg-secondary);
      color: var(--text-primary);
      border: 1px solid var(--border-primary);
      padding: 0.5rem;
      cursor: pointer;
      border-radius: 4px;
      font-size: 0.8rem;
      transition: all 0.2s ease;
      text-align: center;
    `;

    btn.addEventListener('mouseenter', () => {
      btn.style.background = 'var(--accent-primary)';
      btn.style.color = 'var(--bg-primary)';
      btn.style.transform = 'scale(1.05)';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.background = 'var(--bg-secondary)';
      btn.style.color = 'var(--text-primary)';
      btn.style.transform = '';
    });

    shortcutContainer.appendChild(btn);
  });

  // Add shortcuts after templates button
  const templatesBtn = document.getElementById('workflowTemplatesBtn');
  templatesBtn.parentNode.insertBefore(shortcutContainer, templatesBtn.nextSibling);

  // Add separator
  const separator = document.createElement('div');
  separator.style.cssText = `
    height: 1px;
    background: var(--border-secondary);
    margin: 1rem 0;
  `;
  shortcutContainer.parentNode.insertBefore(separator, shortcutContainer.nextSibling);
}

// Enhanced stack controls with workflow features
function addWorkflowStackControls() {
  const stackControls = document.querySelector('.stack-controls');
  
  // Add workflow status button
  const workflowStatusBtn = document.createElement('button');
  workflowStatusBtn.innerHTML = '📊 Workflow Status';
  workflowStatusBtn.onclick = showWorkflowStatus;
  stackControls.appendChild(workflowStatusBtn);

  // Add workflow report button
  const workflowReportBtn = document.createElement('button');
  workflowReportBtn.innerHTML = '📋 Workflow Report';
  workflowReportBtn.onclick = () => {
    if (workflowManager.currentWorkflow) {
      workflowManager.generateWorkflowReport();
    } else {
      alert('No active workflow. Start a workflow template to generate workflow-specific reports.');
    }
  };
  stackControls.appendChild(workflowReportBtn);
}

// Show workflow status
function showWorkflowStatus() {
  if (!workflowManager.currentWorkflow) {
    alert('No active workflow. Click "🎯 Investigation Templates" to start a structured investigation.');
    return;
  }

  const status = `
🎯 Active Workflow: ${workflowManager.currentWorkflow.name}
📋 Category: ${workflowManager.currentWorkflow.category}
📊 Current Phase: ${workflowManager.currentPhase + 1} of ${workflowManager.currentWorkflow.phases.length}
⏱️ Estimated Time: ${workflowManager.currentWorkflow.estimatedTime}
🔍 Searches Performed: ${SudocopApp.totalSearches}
📱 Active Modules: ${Object.keys(SudocopApp.modules).length}

Current Phase: ${workflowManager.currentWorkflow.phases[workflowManager.currentPhase].name}
${workflowManager.currentWorkflow.phases[workflowManager.currentPhase].description}
  `;

  alert(status);
}

// Initialize workflow system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Wait for main app to initialize
  setTimeout(() => {
    addWorkflowTemplatesButton();
    addQuickWorkflowShortcuts();
    addWorkflowStackControls();
    
    console.log('🎯 Workflow Template System initialized');
    console.log(`📋 Available templates: ${Object.keys(INVESTIGATION_TEMPLATES).length}`);
  }, 1000);
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    INVESTIGATION_TEMPLATES,
    WorkflowManager,
    workflowManager
  };
}
                