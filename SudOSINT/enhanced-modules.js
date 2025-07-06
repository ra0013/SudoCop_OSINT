/**
 * Enhanced OSINT Modules - Integration of current_resources.txt
 * Extends the existing module system with comprehensive resource collection
 */

// Enhanced module definitions based on current_resources.txt
const ENHANCED_MODULES = {
  // Phone Investigation Extended
  "truecaller": {
    name: "🌍 TrueCaller Global",
    url: "https://www.truecaller.com",
    description: "Global phone database with spam identification",
    category: "phone-intelligence"
  },
  "syncme": {
    name: "📞 Sync.me",
    url: "https://sync.me",
    description: "Reverse phone number lookup",
    category: "phone-intelligence"
  },
  "spydialer": {
    name: "🔍 SpyDialer",
    url: "https://www.spydialer.com",
    description: "Free reverse phone lookup with owner info",
    category: "phone-intelligence"
  },
  "osint-phone": {
    name: "📱 OSINT Phone Lookup",
    url: "https://osint.lolarchiver.com/reverse_phone",
    description: "OSINT reverse phone lookup tool",
    category: "phone-intelligence"
  },
  "phoneinfoga": {
    name: "🔬 PhoneInfoga",
    url: "https://github.com/sundowndev/PhoneInfoga",
    description: "Advanced phone number investigation framework",
    category: "phone-intelligence"
  },

  // Email Investigation Extended
  "emailrep": {
    name: "📧 EmailRep",
    url: "https://emailrep.io",
    description: "Email reputation and risk analysis",
    category: "email-intelligence"
  },
  "dehashed": {
    name: "💀 DeHashed",
    url: "https://dehashed.com",
    description: "Comprehensive breach data search",
    category: "email-intelligence"
  },
  "leakcheck": {
    name: "🚨 LeakCheck",
    url: "https://leakcheck.io",
    description: "Email breach analysis platform",
    category: "email-intelligence"
  },
  "snusbase": {
    name: "🔓 Snusbase",
    url: "https://snusbase.com",
    description: "Data breach search engine",
    category: "email-intelligence"
  },
  "epieos": {
    name: "🛠️ Epieos Tools",
    url: "https://epieos.com",
    description: "Email and phone OSINT toolkit",
    category: "email-intelligence"
  },

  // Social Media Intelligence Extended
  "social-searcher": {
    name: "🔍 Social Searcher",
    url: "https://www.social-searcher.com",
    description: "Real-time social media search",
    category: "social-media"
  },
  "mention": {
    name: "📢 Mention",
    url: "https://mention.com",
    description: "Brand and name monitoring across platforms",
    category: "social-media"
  },
  "sherlock-tool": {
    name: "🕵️ Sherlock",
    url: "https://github.com/sherlock-project/sherlock",
    description: "Hunt usernames across 400+ social platforms",
    category: "social-media"
  },
  "social-analyzer": {
    name: "📊 Social Analyzer",
    url: "https://github.com/qeeqbox/social-analyzer",
    description: "API and web app for analyzing social media profiles",
    category: "social-media"
  },
  "blackbird": {
    name: "🐦 Blackbird",
    url: "https://github.com/p1ngul1n0/blackbird",
    description: "Search for accounts by username across platforms",
    category: "social-media"
  },

  // Advanced People Search
  "pipl": {
    name: "🔍 Pipl",
    url: "https://pipl.com",
    description: "Deep web people search engine",
    category: "person-search"
  },
  "usersearch": {
    name: "👤 UserSearch",
    url: "https://usersearch.org",
    description: "Cross-platform profile discovery",
    category: "person-search"
  },
  "socialcatfish": {
    name: "🐟 Social Catfish",
    url: "https://socialcatfish.com",
    description: "Reverse search for people and images",
    category: "person-search"
  },
  "fastpeoplesearch": {
    name: "⚡ FastPeopleSearch",
    url: "https://www.fastpeoplesearch.com",
    description: "Free people search engine",
    category: "person-search"
  },
  "familytreenow": {
    name: "🌳 FamilyTreeNow",
    url: "https://www.familytreenow.com",
    description: "Family history and genealogy search",
    category: "person-search"
  },

  // Criminal & Legal Records
  "vinelink": {
    name: "🔗 VINELink",
    url: "https://www.vinelink.com",
    description: "Victim notification and offender information",
    category: "criminal-records"
  },
  "justmugshots": {
    name: "📷 JustMugshots",
    url: "https://www.justmugshots.com",
    description: "Arrest records and mugshot database",
    category: "criminal-records"
  },
  "pacer": {
    name: "⚖️ PACER",
    url: "https://www.pacer.gov",
    description: "Federal court records access",
    category: "criminal-records"
  },
  "finra-brokercheck": {
    name: "💼 FINRA BrokerCheck",
    url: "https://brokercheck.finra.org",
    description: "Financial advisor background check",
    category: "criminal-records"
  },

  // Property & Assets
  "propertyradar": {
    name: "🏠 PropertyRadar",
    url: "https://www.propertyradar.com",
    description: "Property intelligence and ownership data",
    category: "property-records"
  },
  "propertyshark": {
    name: "🦈 PropertyShark",
    url: "https://www.propertyshark.com",
    description: "Real estate records and property analysis",
    category: "property-records"
  },
  "blackbook-online": {
    name: "📚 BlackBook Online",
    url: "https://www.blackbookonline.info",
    description: "Public records directory by state",
    category: "property-records"
  },

  // Death & Obituary Records
  "legacy-obituaries": {
    name: "🕊️ Legacy.com",
    url: "https://www.legacy.com",
    description: "Obituaries and death notices",
    category: "death-records"
  },
  "obituaries-com": {
    name: "📰 Obituaries.com",
    url: "https://www.obituaries.com",
    description: "Death notices and memorial pages",
    category: "death-records"
  },
  "billiongraves": {
    name: "⚰️ BillionGraves",
    url: "https://billiongraves.com",
    description: "GPS cemetery and grave records",
    category: "death-records"
  },
  "interment": {
    name: "🪦 Interment.net",
    url: "https://www.interment.net",
    description: "Cemetery records and burial information",
    category: "death-records"
  },

  // Vehicle & Transportation
  "flightaware": {
    name: "✈️ FlightAware",
    url: "https://flightaware.com",
    description: "Flight tracking and aviation data",
    category: "transportation"
  },
  "flightradar24": {
    name: "📡 FlightRadar24",
    url: "https://www.flightradar24.com",
    description: "Live flight tracking worldwide",
    category: "transportation"
  },
  "marinetraffic": {
    name: "🚢 MarineTraffic",
    url: "https://www.marinetraffic.com",
    description: "Global ship tracking and maritime data",
    category: "transportation"
  },
  "vesselfinder": {
    name: "⚓ VesselFinder",
    url: "https://www.vesselfinder.com",
    description: "Ship tracking and vessel information",
    category: "transportation"
  },

  // Image & Media Analysis
  "tineye": {
    name: "👁️ TinEye",
    url: "https://tineye.com",
    description: "Reverse image search engine",
    category: "image-analysis"
  },
  "yandex-images": {
    name: "🔍 Yandex Images",
    url: "https://yandex.com/images/",
    description: "Russian reverse image search (excellent results)",
    category: "image-analysis"
  },
  "exiftool": {
    name: "📷 ExifTool",
    url: "https://exiftool.org",
    description: "Metadata extraction from images and files",
    category: "image-analysis"
  },
  "invid": {
    name: "🎥 InVID",
    url: "https://www.invid-project.eu",
    description: "Video verification and analysis tools",
    category: "image-analysis"
  },

  // Network & Technical Intelligence
  "shodan": {
    name: "🌐 Shodan",
    url: "https://www.shodan.io",
    description: "Internet-connected device search engine",
    category: "network-intelligence"
  },
  "censys": {
    name: "🔍 Censys",
    url: "https://censys.io",
    description: "Internet scanning and device discovery",
    category: "network-intelligence"
  },
  "robtex": {
    name: "🕸️ Robtex",
    url: "https://www.robtex.com",
    description: "DNS and IP address analysis",
    category: "network-intelligence"
  },
  "viewdns": {
    name: "🔬 ViewDNS",
    url: "https://viewdns.info",
    description: "DNS analysis and investigation tools",
    category: "network-intelligence"
  },

  // Cryptocurrency & Blockchain
  "oxt": {
    name: "₿ OXT",
    url: "https://oxt.me",
    description: "Advanced Bitcoin transaction analysis",
    category: "cryptocurrency"
  },
  "bitcoinwhoswho": {
    name: "🪙 BitcoinWhosWho",
    url: "https://bitcoinwhoswho.com",
    description: "Bitcoin address scam database",
    category: "cryptocurrency"
  },
  "walletexplorer": {
    name: "💰 WalletExplorer",
    url: "https://www.walletexplorer.com",
    description: "Bitcoin wallet identification service",
    category: "cryptocurrency"
  },
  "debank": {
    name: "🏦 DeBank",
    url: "https://debank.com",
    description: "DeFi portfolio tracker and analytics",
    category: "cryptocurrency"
  },

  // Business Intelligence
  "opencorporates": {
    name: "🏢 OpenCorporates",
    url: "https://opencorporates.com",
    description: "Global company database (200M+ companies)",
    category: "business-intelligence"
  },
  "crunchbase": {
    name: "🚀 Crunchbase",
    url: "https://www.crunchbase.com",
    description: "Startup and business intelligence platform",
    category: "business-intelligence"
  },
  "zoominfo": {
    name: "📊 ZoomInfo",
    url: "https://www.zoominfo.com",
    description: "B2B database and sales intelligence",
    category: "business-intelligence"
  },
  "builtwith": {
    name: "🔧 BuiltWith",
    url: "https://builtwith.com",
    description: "Website technology profiler",
    category: "business-intelligence"
  },

  // Mexico-Specific Resources
  "mexico-gob": {
    name: "🇲🇽 gob.mx Portal",
    url: "https://www.gob.mx",
    description: "Mexican government main portal",
    category: "mexico-specific"
  },
  "mexico-cnb": {
    name: "🔍 CNB México",
    url: "https://www.gob.mx/cnb",
    description: "National Search Commission (Missing Persons)",
    category: "mexico-specific"
  },
  "mexico-sat": {
    name: "💼 SAT México",
    url: "https://www.sat.gob.mx",
    description: "Tax administration service (RFC lookup)",
    category: "mexico-specific"
  },
  "mexico-renapo": {
    name: "🆔 RENAPO",
    url: "https://www.gob.mx/segob/renapo",
    description: "National Population Registry (CURP)",
    category: "mexico-specific"
  },
  "mexico-fgr": {
    name: "⚖️ FGR México",
    url: "https://www.gob.mx/fgr",
    description: "Attorney General's Office",
    category: "mexico-specific"
  },

  // Advanced OSINT Tools
  "maltego": {
    name: "🕸️ Maltego",
    url: "https://www.maltego.com",
    description: "Link analysis and investigation platform",
    category: "advanced-tools"
  },
  "spiderfoot": {
    name: "🕷️ SpiderFoot",
    url: "https://www.spiderfoot.net",
    description: "Automated OSINT collection tool",
    category: "advanced-tools"
  },
  "recon-ng": {
    name: "🔄 Recon-ng",
    url: "https://github.com/lanmaster53/recon-ng",
    description: "Web reconnaissance framework",
    category: "advanced-tools"
  },
  "theharvester": {
    name: "🌾 TheHarvester",
    url: "https://github.com/laramies/theHarvester",
    description: "E-mail, subdomain and people names harvester",
    category: "advanced-tools"
  },

  // Gaming & Digital Identity
  "steam-id-finder": {
    name: "🎮 Steam ID Finder",
    url: "https://steamidfinder.com",
    description: "Steam profile and ID lookup",
    category: "gaming-identity"
  },
  "social-blade": {
    name: "📈 Social Blade",
    url: "https://socialblade.com",
    description: "Social media statistics and analytics",
    category: "gaming-identity"
  },
  "twitch-tracker": {
    name: "📺 Twitch Tracker",
    url: "https://twitchtracker.com",
    description: "Twitch streamer analytics and data",
    category: "gaming-identity"
  },

  // Specialized Investigation
  "osint-framework": {
    name: "🎯 OSINT Framework",
    url: "https://osintframework.com",
    description: "Comprehensive OSINT tool directory",
    category: "frameworks"
  },
  "intel-techniques": {
    name: "🧠 Intel Techniques",
    url: "https://inteltechniques.com",
    description: "Professional OSINT training and tools",
    category: "frameworks"
  },
  "bellingcat-toolkit": {
    name: "📋 Bellingcat Toolkit",
    url: "https://docs.google.com/spreadsheets/d/18rtqh8EG2q1xBo2cLNyhIDuK9jrPGwYr9DI2UncoqJQ",
    description: "Online investigation toolkit spreadsheet",
    category: "frameworks"
  }
};

// Function to add enhanced modules to existing system
function integrateEnhancedModules() {
  // Add new module types to existing handlers
  const enhancedHandlers = {
    // Phone Intelligence Handlers
    runTrueCaller: (q, div) => {
      const url = `https://www.truecaller.com/search/${encodeURIComponent(q)}`;
      addToLog("TrueCaller Global", q, url);
      window.open(url, '_blank');
    },
    
    runSyncMe: (q, div) => {
      const url = `https://sync.me/#/search/result/number/${encodeURIComponent(q)}`;
      addToLog("Sync.me", q, url);
      window.open(url, '_blank');
    },
    
    runSpyDialer: (q, div) => {
      const url = `https://www.spydialer.com/default.aspx?s=${encodeURIComponent(q)}`;
      addToLog("SpyDialer", q, url);
      window.open(url, '_blank');
    },

    // Email Intelligence Handlers
    runEmailRep: (q, div) => {
      const url = `https://emailrep.io/${encodeURIComponent(q)}`;
      addToLog("EmailRep", q, url);
      window.open(url, '_blank');
    },
    
    runDeHashed: (q, div) => {
      const url = `https://dehashed.com/search?query=${encodeURIComponent(q)}`;
      addToLog("DeHashed", q, url);
      window.open(url, '_blank');
    },
    
    runLeakCheck: (q, div) => {
      const url = `https://leakcheck.io/search/${encodeURIComponent(q)}`;
      addToLog("LeakCheck", q, url);
      window.open(url, '_blank');
    },

    // Social Media Intelligence Handlers
    runSocialSearcher: (q, div) => {
      const url = `https://www.social-searcher.com/social-buzz/?q=${encodeURIComponent(q)}`;
      addToLog("Social Searcher", q, url);
      window.open(url, '_blank');
    },
    
    runMention: (q, div) => {
      const url = `https://mention.com/en/search/?query=${encodeURIComponent(q)}`;
      addToLog("Mention", q, url);
      window.open(url, '_blank');
    },

    // Advanced People Search Handlers
    runPipl: (q, div) => {
      const url = `https://pipl.com/search/?q=${encodeURIComponent(q)}`;
      addToLog("Pipl Deep Search", q, url);
      window.open(url, '_blank');
    },
    
    runUserSearch: (q, div) => {
      const url = `https://usersearch.org/results_normal.php?fname=&lname=${encodeURIComponent(q)}&state=All`;
      addToLog("UserSearch", q, url);
      window.open(url, '_blank');
    },
    
    runFastPeopleSearch: (q, div) => {
      const url = `https://www.fastpeoplesearch.com/name/${encodeURIComponent(q.replace(' ', '-'))}`;
      addToLog("FastPeopleSearch", q, url);
      window.open(url, '_blank');
    },

    // Criminal & Legal Records Handlers
    runVineLink: (q, div) => {
      const url = `https://www.vinelink.com/#/search/${encodeURIComponent(q)}`;
      addToLog("VINELink", q, url);
      window.open(url, '_blank');
    },
    
    runJustMugshots: (q, div) => {
      const url = `https://www.justmugshots.com/search?first_name=${encodeURIComponent(q.split(' ')[0])}&last_name=${encodeURIComponent(q.split(' ')[1] || '')}`;
      addToLog("JustMugshots", q, url);
      window.open(url, '_blank');
    },

    // Property Records Handlers
    runPropertyRadar: (q, div) => {
      const url = `https://www.propertyradar.com/search?query=${encodeURIComponent(q)}`;
      addToLog("PropertyRadar", q, url);
      window.open(url, '_blank');
    },
    
    runPropertyShark: (q, div) => {
      const url = `https://www.propertyshark.com/search/?searchtext=${encodeURIComponent(q)}`;
      addToLog("PropertyShark", q, url);
      window.open(url, '_blank');
    },

    // Death Records Handlers
    runLegacyObituaries: (q, div) => {
      const url = `https://www.legacy.com/obituaries/name/${encodeURIComponent(q.replace(' ', '-'))}`;
      addToLog("Legacy Obituaries", q, url);
      window.open(url, '_blank');
    },
    
    runBillionGraves: (q, div) => {
      const url = `https://billiongraves.com/search/results?given_names=${encodeURIComponent(q.split(' ')[0])}&family_names=${encodeURIComponent(q.split(' ')[1] || '')}`;
      addToLog("BillionGraves", q, url);
      window.open(url, '_blank');
    },

    // Transportation Handlers
    runFlightAware: (q, div) => {
      const url = `https://flightaware.com/live/flight/${encodeURIComponent(q)}`;
      addToLog("FlightAware", q, url);
      window.open(url, '_blank');
    },
    
    runMarineTraffic: (q, div) => {
      const url = `https://www.marinetraffic.com/en/ais/index/search/all?keyword=${encodeURIComponent(q)}`;
      addToLog("MarineTraffic", q, url);
      window.open(url, '_blank');
    },

    // Image Analysis Handlers
    runTinEye: (q, div) => {
      const url = `https://tineye.com/search?url=${encodeURIComponent(q)}`;
      addToLog("TinEye", q, url);
      window.open(url, '_blank');
    },
    
    runYandexImages: (q, div) => {
      const url = `https://yandex.com/images/search?rpt=imageview&url=${encodeURIComponent(q)}`;
      addToLog("Yandex Images", q, url);
      window.open(url, '_blank');
    },

    // Network Intelligence Handlers
    runShodan: (q, div) => {
      const url = `https://www.shodan.io/search?query=${encodeURIComponent(q)}`;
      addToLog("Shodan", q, url);
      window.open(url, '_blank');
    },
    
    runCensys: (q, div) => {
      const url = `https://search.censys.io/search?resource=hosts&q=${encodeURIComponent(q)}`;
      addToLog("Censys", q, url);
      window.open(url, '_blank');
    },

    // Cryptocurrency Handlers
    runOXT: (q, div) => {
      const url = `https://oxt.me/address/${encodeURIComponent(q)}`;
      addToLog("OXT Bitcoin Analysis", q, url);
      window.open(url, '_blank');
    },
    
    runBitcoinWhosWho: (q, div) => {
      const url = `https://bitcoinwhoswho.com/search?query=${encodeURIComponent(q)}`;
      addToLog("BitcoinWhosWho", q, url);
      window.open(url, '_blank');
    },

    // Business Intelligence Handlers
    runOpenCorporates: (q, div) => {
      const url = `https://opencorporates.com/companies?q=${encodeURIComponent(q)}`;
      addToLog("OpenCorporates", q, url);
      window.open(url, '_blank');
    },
    
    runCrunchbase: (q, div) => {
      const url = `https://www.crunchbase.com/search/organizations/${encodeURIComponent(q)}`;
      addToLog("Crunchbase", q, url);
      window.open(url, '_blank');
    },

    // Mexico-Specific Handlers
    runMexicoGob: (q, div) => {
      const url = `https://www.gob.mx/busqueda?utf8=%E2%9C%93&query=${encodeURIComponent(q)}`;
      addToLog("Mexico Government Search", q, url);
      window.open(url, '_blank');
    },
    
    runMexicoCNB: (q, div) => {
      const url = `https://www.gob.mx/cnb`;
      addToLog("CNB México (Manual Search)", q, url);
      window.open(url, '_blank');
    },
    
    runMexicoSAT: (q, div) => {
      const url = `https://www.sat.gob.mx/aplicacion/34650/consulta-tu-clave-de-rfc-con-homoclave`;
      addToLog("SAT México RFC", q, url);
      window.open(url, '_blank');
    },

    // Gaming Identity Handlers
    runSteamID: (q, div) => {
      const url = `https://steamidfinder.com/lookup/${encodeURIComponent(q)}`;
      addToLog("Steam ID Finder", q, url);
      window.open(url, '_blank');
    },
    
    runSocialBlade: (q, div) => {
      const url = `https://socialblade.com/search/search?query=${encodeURIComponent(q)}`;
      addToLog("Social Blade", q, url);
      window.open(url, '_blank');
    },

    // Framework Handlers
    runOSINTFramework: (q, div) => {
      const url = `https://osintframework.com/`;
      addToLog("OSINT Framework", "Resource Access", url);
      window.open(url, '_blank');
    },
    
    runIntelTechniques: (q, div) => {
      const url = `https://inteltechniques.com/tools/`;
      addToLog("Intel Techniques Tools", "Resource Access", url);
      window.open(url, '_blank');
    }
  };

  // Add handlers to global scope
  Object.assign(window, enhancedHandlers);
  
  console.log('🔧 Enhanced modules integrated:', Object.keys(enhancedHandlers).length, 'new handlers');
}

// Enhanced workflow templates that include new modules
const ENHANCED_WORKFLOW_TEMPLATES = {
  "comprehensive-person": {
    id: "comprehensive-person",
    name: "👤 Comprehensive Person Investigation",
    description: "Deep investigation using all available person search resources",
    category: "Enhanced Workflows",
    estimatedTime: "4-8 hours",
    phases: [
      {
        name: "Phase 1: Primary Identity Verification",
        description: "Multi-source identity confirmation using premium databases",
        modules: [
          { type: "case-info", priority: "required", notes: "Document comprehensive investigation scope" },
          { type: "name", priority: "required", notes: "Basic name search" },
          { type: "pipl", priority: "required", notes: "Deep web people search" },
          { type: "truepeoplesearch", priority: "required", notes: "Comprehensive background report" },
          { type: "fastpeoplesearch", priority: "recommended", notes: "Additional verification source" }
        ]
      },
      {
        name: "Phase 2: Contact & Communication Discovery", 
        description: "Comprehensive contact information and communication analysis",
        modules: [
          { type: "phone", priority: "required", notes: "Primary phone investigation" },
          { type: "truecaller", priority: "required", notes: "Global phone database check" },
          { type: "spydialer", priority: "recommended", notes: "Free reverse lookup verification" },
          { type: "email", priority: "required", notes: "Email discovery and analysis" },
          { type: "emailrep", priority: "recommended", notes: "Email reputation analysis" },
          { type: "dehashed", priority: "required", notes: "Comprehensive breach analysis" }
        ]
      },
      {
        name: "Phase 3: Digital Footprint Analysis",
        description: "Complete social media and online presence investigation",
        modules: [
          { type: "sherlock-tool", priority: "required", notes: "Username search across 400+ platforms" },
          { type: "social-searcher", priority: "required", notes: "Real-time social media monitoring" },
          { type: "usersearch", priority: "recommended", notes: "Cross-platform profile discovery" },
          { type: "social-blade", priority: "optional", notes: "Social media analytics" }
        ]
      },
      {
        name: "Phase 4: Legal & Financial Records",
        description: "Criminal history, court records, and asset investigation",
        modules: [
          { type: "court", priority: "required", notes: "Court records search" },
          { type: "pacer", priority: "recommended", notes: "Federal court access" },
          { type: "vinelink", priority: "recommended", notes: "Offender information system" },
          { type: "justmugshots", priority: "optional", notes: "Arrest records database" },
          { type: "propertyradar", priority: "recommended", notes: "Property ownership analysis" }
        ]
      },
      {
        name: "Phase 5: Comprehensive Documentation",
        description: "Final analysis and comprehensive reporting",
        modules: [
          { type: "notes", priority: "required", notes: "Complete investigation summary" }
        ]
      }
    ]
  },

  "mexico-comprehensive": {
    id: "mexico-comprehensive", 
    name: "🇲🇽 Mexico Comprehensive Investigation",
    description: "Complete Mexican investigation using all available resources",
    category: "Mexico-Specific",
    estimatedTime: "6-12 hours",
    phases: [
      {
        name: "Phase 1: Mexican Government Records",
        description: "Official Mexican database search and verification",
        modules: [
          { type: "case-info", priority: "required", notes: "Mexico-specific case documentation" },
          { type: "mexico-gob", priority: "required", notes: "Government portal search" },
          { type: "mexico-renapo", priority: "required", notes: "CURP validation and population registry" },
          { type: "mexico-sat", priority: "required", notes: "RFC tax ID verification" },
          { type: "custom-website", priority: "recommended", notes: "State-specific government portals" }
        ]
      },
      {
        name: "Phase 2: Missing Persons & Disappeared",
        description: "Mexican missing persons databases and search organizations", 
        modules: [
          { type: "mexico-missing", priority: "required", notes: "National missing persons registry" },
          { type: "mexico-cnb", priority: "required", notes: "National Search Commission" },
          { type: "namus", priority: "recommended", notes: "Cross-border US database check" },
          { type: "custom-website", priority: "recommended", notes: "State-level search commissions" }
        ]
      },
      {
        name: "Phase 3: Mexican Social Media & Communications",
        description: "Mexico-focused social media and communication investigation",
        modules: [
          { type: "social-searcher", priority: "required", notes: "Mexican social media monitoring" },
          { type: "google-dork", priority: "required", notes: "Mexico-specific Google dorking" },
          { type: "phone", priority: "recommended", notes: "Mexican phone number analysis" },
          { type: "truecaller", priority: "recommended", notes: "Mexican phone database" }
        ]
      },
      {
        name: "Phase 4: Mexican Legal & Criminal Records",
        description: "Mexican court system and legal proceedings",
        modules: [
          { type: "mexico-fgr", priority: "required", notes: "Attorney General's Office records" },
          { type: "google-dork", priority: "required", notes: "Legal proceedings search" },
          { type: "news", priority: "recommended", notes: "Mexican media coverage analysis" }
        ]
      },
      {
        name: "Phase 5: Cross-Border Analysis",
        description: "US-Mexico border and international connections",
        modules: [
          { type: "name", priority: "recommended", notes: "US database cross-reference" },
          { type: "court", priority: "recommended", notes: "US legal proceedings" },
          { type: "notes", priority: "required", notes: "Cross-border investigation summary" }
        ]
      }
    ]
  },

  "digital-identity-deep": {
    id: "digital-identity-deep",
    name: "🔍 Deep Digital Identity Investigation", 
    description: "Comprehensive digital footprint and online identity analysis",
    category: "Enhanced Workflows",
    estimatedTime: "3-6 hours",
    phases: [
      {
        name: "Phase 1: Username & Profile Discovery",
        description: "Comprehensive username enumeration across all platforms",
        modules: [
          { type: "case-info", priority: "required", notes: "Digital identity investigation scope" },
          { type: "sherlock-tool", priority: "required", notes: "400+ platform username search" },
          { type: "usersearch", priority: "required", notes: "Cross-platform profile mapping" },
          { type: "social-searcher", priority: "required", notes: "Real-time mention monitoring" }
        ]
      },
      {
        name: "Phase 2: Communication Channel Analysis",
        description: "Email, phone, and messaging platform investigation",
        modules: [
          { type: "email", priority: "required", notes: "Email account discovery" },
          { type: "emailrep", priority: "required", notes: "Email reputation and risk analysis" },
          { type: "dehashed", priority: "required", notes: "Breach and leak analysis" },
          { type: "phone", priority: "recommended", notes: "Associated phone numbers" },
          { type: "truecaller", priority: "recommended", notes: "Global phone verification" }
        ]
      },
      {
        name: "Phase 3: Social Media Deep Dive",
        description: "Comprehensive social media profile and content analysis",
        modules: [
          { type: "social-blade", priority: "recommended", notes: "Social media analytics and statistics" },
          { type: "mention", priority: "recommended", notes: "Brand and name monitoring" },
          { type: "image", priority: "recommended", notes: "Profile image reverse search" },
          { type: "yandex-images", priority: "recommended", notes: "Enhanced image search capabilities" }
        ]
      },
      {
        name: "Phase 4: Gaming & Digital Communities",
        description: "Gaming platforms and digital community investigation",
        modules: [
          { type: "steam-id", priority: "optional", notes: "Steam gaming profile analysis" },
          { type: "custom-website", priority: "optional", notes: "Discord, Twitch, other platforms" },
          { type: "google-dork", priority: "recommended", notes: "Gaming forum and community search" }
        ]
      },
      {
        name: "Phase 5: Digital Identity Correlation",
        description: "Cross-platform identity verification and analysis",
        modules: [
          { type: "notes", priority: "required", notes: "Digital identity correlation analysis" }
        ]
      }
    ]
  },

  "financial-crime-investigation": {
    id: "financial-crime-investigation",
    name: "💰 Financial Crime Investigation",
    description: "Comprehensive financial intelligence and crypto investigation",
    category: "Enhanced Workflows", 
    estimatedTime: "4-8 hours",
    phases: [
      {
        name: "Phase 1: Traditional Financial Intelligence",
        description: "Business records, corporate intelligence, and traditional finance",
        modules: [
          { type: "case-info", priority: "required", notes: "Financial crime investigation parameters" },
          { type: "business", priority: "required", notes: "Business registration search" },
          { type: "opencorporates", priority: "required", notes: "Global company database" },
          { type: "sec", priority: "required", notes: "SEC filings and securities data" },
          { type: "crunchbase", priority: "recommended", notes: "Startup and investment intelligence" }
        ]
      },
      {
        name: "Phase 2: Cryptocurrency & Blockchain Analysis",
        description: "Digital asset investigation and blockchain analysis",
        modules: [
          { type: "domain", priority: "required", notes: "Blockchain explorer analysis" },
          { type: "custom-website", priority: "required", notes: "Blockchain.info, Etherscan analysis" },
          { type: "oxt", priority: "required", notes: "Advanced Bitcoin transaction analysis" },
          { type: "bitcoinwhoswho", priority: "required", notes: "Bitcoin address reputation check" },
          { type: "custom-website", priority: "recommended", notes: "Multiple blockchain explorers" }
        ]
      },
      {
        name: "Phase 3: Network & Technical Intelligence",
        description: "IP analysis, domain investigation, and technical infrastructure",
        modules: [
          { type: "ip", priority: "required", notes: "IP address geolocation and ownership" },
          { type: "domain", priority: "required", notes: "Domain registration and WHOIS" },
          { type: "shodan", priority: "recommended", notes: "Internet-connected device search" },
          { type: "censys", priority: "recommended", notes: "Internet scanning and analysis" }
        ]
      },
      {
        name: "Phase 4: Communication & Identity Links",
        description: "Email, phone, and identity correlation with financial activity",
        modules: [
          { type: "email", priority: "required", notes: "Email accounts associated with financial activity" },
          { type: "dehashed", priority: "required", notes: "Breach data for financial accounts" },
          { type: "phone", priority: "recommended", notes: "Phone numbers linked to accounts" },
          { type: "name", priority: "recommended", notes: "Identity verification and background" }
        ]
      },
      {
        name: "Phase 5: Legal & Regulatory Analysis",
        description: "Court records, regulatory filings, and legal proceedings",
        modules: [
          { type: "court", priority: "required", notes: "Legal proceedings and judgments" },
          { type: "pacer", priority: "recommended", notes: "Federal court financial cases" },
          { type: "notes", priority: "required", notes: "Financial crime intelligence summary" }
        ]
      }
    ]
  }
};

// Function to create enhanced module buttons in the palette
function createEnhancedModuleButtons() {
  const enhancedModuleGroups = {
    "enhanced-phone": {
      name: "📞 Enhanced Phone Intelligence",
      modules: [
        { type: "truecaller", handler: "runTrueCaller", name: "🌍 TrueCaller Global" },
        { type: "syncme", handler: "runSyncMe", name: "📞 Sync.me Lookup" },
        { type: "spydialer", handler: "runSpyDialer", name: "🔍 SpyDialer" },
        { type: "osint-phone", handler: "runOSINTPhone", name: "📱 OSINT Phone Tools" }
      ]
    },
    "enhanced-email": {
      name: "📧 Enhanced Email Intelligence", 
      modules: [
        { type: "emailrep", handler: "runEmailRep", name: "📧 EmailRep" },
        { type: "dehashed", handler: "runDeHashed", name: "💀 DeHashed" },
        { type: "leakcheck", handler: "runLeakCheck", name: "🚨 LeakCheck" },
        { type: "snusbase", handler: "runSnusBase", name: "🔓 Snusbase" }
      ]
    },
    "enhanced-social": {
      name: "📱 Enhanced Social Intelligence",
      modules: [
        { type: "social-searcher", handler: "runSocialSearcher", name: "🔍 Social Searcher" },
        { type: "mention", handler: "runMention", name: "📢 Mention" },
        { type: "sherlock-tool", handler: "runSherlockTool", name: "🕵️ Sherlock" },
        { type: "social-blade", handler: "runSocialBlade", name: "📈 Social Blade" }
      ]
    },
    "enhanced-people": {
      name: "👤 Enhanced People Search",
      modules: [
        { type: "pipl", handler: "runPipl", name: "🔍 Pipl Deep Search" },
        { type: "usersearch", handler: "runUserSearch", name: "👤 UserSearch" },
        { type: "fastpeoplesearch", handler: "runFastPeopleSearch", name: "⚡ FastPeopleSearch" },
        { type: "socialcatfish", handler: "runSocialCatfish", name: "🐟 Social Catfish" }
      ]
    },
    "enhanced-records": {
      name: "📋 Enhanced Records Search",
      modules: [
        { type: "vinelink", handler: "runVineLink", name: "🔗 VINELink" },
        { type: "justmugshots", handler: "runJustMugshots", name: "📷 JustMugshots" },
        { type: "propertyradar", handler: "runPropertyRadar", name: "🏠 PropertyRadar" },
        { type: "legacy-obituaries", handler: "runLegacyObituaries", name: "🕊️ Legacy.com" }
      ]
    },
    "enhanced-technical": {
      name: "🌐 Enhanced Technical Intelligence",
      modules: [
        { type: "shodan", handler: "runShodan", name: "🌐 Shodan" },
        { type: "censys", handler: "runCensys", name: "🔍 Censys" },
        { type: "oxt", handler: "runOXT", name: "₿ OXT Bitcoin" },
        { type: "opencorporates", handler: "runOpenCorporates", name: "🏢 OpenCorporates" }
      ]
    },
    "enhanced-mexico": {
      name: "🇲🇽 Enhanced Mexico Resources",
      modules: [
        { type: "mexico-gob", handler: "runMexicoGob", name: "🇲🇽 gob.mx Portal" },
        { type: "mexico-cnb", handler: "runMexicoCNB", name: "🔍 CNB México" },
        { type: "mexico-sat", handler: "runMexicoSAT", name: "💼 SAT México" },
        { type: "mexico-fgr", handler: "runMexicoFGR", name: "⚖️ FGR México" }
      ]
    },
    "enhanced-frameworks": {
      name: "🎯 OSINT Frameworks & Tools",
      modules: [
        { type: "osint-framework", handler: "runOSINTFramework", name: "🎯 OSINT Framework" },
        { type: "intel-techniques", handler: "runIntelTechniques", name: "🧠 Intel Techniques" },
        { type: "maltego", handler: "runMaltego", name: "🕸️ Maltego" },
        { type: "spiderfoot", handler: "runSpiderfoot", name: "🕷️ SpiderFoot" }
      ]
    }
  };

  return enhancedModuleGroups;
}

// Function to add enhanced groups to the module palette
function addEnhancedModuleGroups() {
  const modulePalette = document.getElementById('modulePalette');
  const enhancedGroups = createEnhancedModuleButtons();
  
  // Add separator before enhanced modules
  const separator = document.createElement('div');
  separator.style.cssText = `
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
    margin: 1.5rem 0;
    position: relative;
  `;
  
  const separatorLabel = document.createElement('div');
  separatorLabel.textContent = '⚡ ENHANCED RESOURCES';
  separatorLabel.style.cssText = `
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-secondary);
    padding: 0 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--accent-primary);
  `;
  
  separator.appendChild(separatorLabel);
  
  // Insert before disclaimer
  const disclaimer = document.getElementById('disclaimer');
  disclaimer.parentNode.insertBefore(separator, disclaimer);

  // Add each enhanced group
  Object.entries(enhancedGroups).forEach(([groupId, groupData]) => {
    const groupElement = document.createElement('div');
    groupElement.className = 'group expanded';
    groupElement.dataset.group = groupId;
    
    groupElement.innerHTML = `
      <h3 onclick="toggleGroup('${groupId}')">
        <span class="group-icon">⚡</span>
        <span class="group-title">${groupData.name}</span>
        <span class="collapse-indicator">▼</span>
      </h3>
      <div class="group-content">
        ${groupData.modules.map(module => `
          <button draggable="true" class="module-button" 
                  data-type="${module.type}" 
                  data-type-handler="${module.handler}">
            ${module.name}
          </button>
        `).join('')}
      </div>
    `;
    
    // Setup drag and drop for new buttons
    groupElement.querySelectorAll('.module-button').forEach(button => {
      button.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', button.dataset.type);
        button.style.opacity = '0.5';
      });
      
      button.addEventListener('dragend', e => {
        button.style.opacity = '1';
      });
    });
    
    disclaimer.parentNode.insertBefore(groupElement, disclaimer);
  });
}

// Enhanced workflow integration
function integrateEnhancedWorkflows() {
  // Merge enhanced workflows with existing templates
  Object.assign(INVESTIGATION_TEMPLATES, ENHANCED_WORKFLOW_TEMPLATES);
  
  console.log('🎯 Enhanced workflows integrated:', Object.keys(ENHANCED_WORKFLOW_TEMPLATES).length, 'new templates');
}

// Google Dork templates based on current_resources.txt
const ENHANCED_GOOGLE_DORKS = {
  "mexico-person-search": {
    name: "🇲🇽 Mexico Person Search",
    dorks: [
      '"[NAME]" + "México" OR "Mexico"',
      '"[NAME]" + "CURP"', 
      '"[NAME]" + "RFC"',
      '"[NAME]" + site:gob.mx',
      '"[NAME]" + "desaparecido" OR "desaparecida"'
    ]
  },
  "mexico-missing-person": {
    name: "🔍 Mexico Missing Person",
    dorks: [
      '"[NAME]" + "desaparecido" + "fecha"',
      '"[NAME]" + "visto por última vez"',
      '"[NAME]" + "se busca" OR "búsqueda"',
      '"[NAME]" + "CNB" OR "Comisión Nacional de Búsqueda"',
      'site:movndmx.org "[NAME]"'
    ]
  },
  "advanced-criminal-search": {
    name: "⚖️ Advanced Criminal Search",
    dorks: [
      '"[NAME]" + "mugshot" OR "booking"',
      '"[NAME]" + "court records" OR "case"', 
      '"[NAME]" + "warrant" OR "wanted"',
      '"[NAME]" + "sex offender" OR "predator"',
      '"[NAME]" + "bankruptcy" OR "foreclosure"'
    ]
  },
  "death-records-advanced": {
    name: "🕊️ Death Records Advanced",
    dorks: [
      '"[NAME]" + "obituary" + "funeral home"',
      '"[NAME]" + "death certificate"',
      '"[NAME]" + "cemetery" + "burial"',
      '"[NAME]" + "remains" + "DNA"',
      '"[NAME]" + "died" + "age" + "location"'
    ]
  },
  "business-financial": {
    name: "💼 Business & Financial",
    dorks: [
      '"[NAME]" + "LLC" OR "corporation"',
      '"[NAME]" + "business" OR "company"',
      '"[NAME]" + "trademark" OR "patent"',
      '"[NAME]" + "SEC" + "filing"',
      '"[NAME]" + "bankruptcy" + "court"'
    ]
  }
};

// Function to add enhanced dork templates
function addEnhancedDorkTemplates() {
  // Add dork template selector to Google dork modules
  const originalCreateModule = window.createModule;
  
  window.createModule = function(moduleType) {
    const result = originalCreateModule.call(this, moduleType);
    
    // Add dork templates to Google dork modules
    if (moduleType === 'google-dork' || moduleType.includes('dork')) {
      setTimeout(() => {
        addDorkTemplateSelector(result);
      }, 100);
    }
    
    return result;
  };
}

function addDorkTemplateSelector(moduleElement) {
  const input = moduleElement.querySelector('input[type="text"]');
  if (!input) return;
  
  const templateSelector = document.createElement('select');
  templateSelector.style.cssText = `
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 0.4rem;
    border: 1px solid var(--border-primary);
    border-radius: 2px;
    background: var(--bg-primary);
    color: var(--text-primary);
    font-family: var(--font-family);
    font-size: 12px;
  `;
  
  templateSelector.innerHTML = `
    <option value="">Select Dork Template...</option>
    ${Object.entries(ENHANCED_GOOGLE_DORKS).map(([key, template]) => 
      `<option value="${key}">${template.name}</option>`
    ).join('')}
  `;
  
  templateSelector.addEventListener('change', (e) => {
    if (e.target.value) {
      const template = ENHANCED_GOOGLE_DORKS[e.target.value];
      const randomDork = template.dorks[Math.floor(Math.random() * template.dorks.length)];
      input.value = randomDork;
      input.focus();
    }
  });
  
  input.parentNode.insertBefore(templateSelector, input);
}

// Initialize enhanced modules system
function initializeEnhancedModules() {
  integrateEnhancedModules();
  integrateEnhancedWorkflows();
  addEnhancedModuleGroups();
  addEnhancedDorkTemplates();
  
  console.log('⚡ Enhanced OSINT Modules System Initialized');
  console.log('📊 Total Enhanced Resources:', Object.keys(ENHANCED_MODULES).length);
  console.log('🎯 Enhanced Workflows:', Object.keys(ENHANCED_WORKFLOW_TEMPLATES).length);
  console.log('🔍 Enhanced Dork Templates:', Object.keys(ENHANCED_GOOGLE_DORKS).length);
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    initializeEnhancedModules();
  }, 1500); // Load after main workflow system
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ENHANCED_MODULES,
    ENHANCED_WORKFLOW_TEMPLATES,
    ENHANCED_GOOGLE_DORKS,
    initializeEnhancedModules
  };
}