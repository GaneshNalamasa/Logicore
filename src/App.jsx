import React, { useState } from 'react';
import logo from './assets/your-logo.png';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // State for specific IT Staffing service detail view inside the services page
  const [selectedService, setSelectedService] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedService(null); // Reset detail view when changing main tabs
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Detailed data for IT Staffing & Professional Services
  const staffingServices = [
    {
      id: 'staff-augmentation',
      title: 'IT Staff Augmentation Services',
      tag: 'Flexible Staffing',
      icon: '👥',
      shortDesc: 'Scale your engineering and tech capabilities instantly by embedding pre-vetted, elite specialists directly into your existing teams.',
      overview: 'Our IT Staff Augmentation model gives your organization the agility to scale up or down based on current project demands without the overhead of traditional recruitment. Whether you need senior full-stack developers, AI architects, or QA specialists for a crunch period, our talent integrates seamlessly into your workflow.',
      benefits: [
        'Rapid deployment of pre-vetted, senior-level tech talent',
        'Full operational control over daily task management and workflows',
        'Significant reduction in hiring overhead and administrative burden',
        'Seamless scalability to match seasonal or milestone-driven project demands'
      ],
      idealFor: 'Companies with active development teams looking for specialized skill gaps or extra horsepower for imminent deadlines.'
    },
    {
      id: 'direct-hire',
      title: 'Direct Hire & Permanent Placement',
      tag: 'Talent Acquisition',
      icon: '🎯',
      shortDesc: 'End-to-end recruitment solutions to identify, vet, and secure permanent top-tier technology leadership and engineering personnel.',
      overview: 'Finding top-tier technical talent in a competitive market requires deep industry networks and rigorous evaluation. Our Direct Hire service handles the entire sourcing, technical vetting, and cultural alignment process, presenting you only with elite candidates ready to make a lasting impact.',
      benefits: [
        'Rigorous technical screening and behavioral assessment by expert engineers',
        'Access to an exclusive network of passive, high-caliber tech professionals',
        'Guaranteed retention commitment and smooth onboarding coordination',
        'Customized executive search for CTOs, VPs of Engineering, and Directors'
      ],
      idealFor: 'Enterprises looking to build stable, long-term internal core engineering teams with cultural longevity.'
    },
    {
      id: 'contract-to-hire',
      title: 'Contract-to-Hire Solutions',
      tag: 'Risk-Free Evaluation',
      icon: '🔄',
      shortDesc: 'Evaluate technical competence, work ethic, and cultural fit on-the-job before committing to a permanent full-time employment offer.',
      overview: 'Minimize hiring risks with our Contract-to-Hire model. Bring qualified technical professionals on a contract basis to evaluate their real-world output, team collaboration, and problem-solving abilities before transitioning them into permanent members of your staff.',
      benefits: [
        'Zero-risk "try-before-you-buy" evaluation period',
        'Immediate productivity on active sprints while assessing long-term fit',
        'Streamlined conversion process once mutual satisfaction is established',
        'Ideal solution for critical roles where hiring mistakes carry high costs'
      ],
      idealFor: 'Organizations wanting absolute confidence in a candidate’s day-to-day performance before making a permanent hire.'
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing & Infrastructure',
      tag: 'Infrastructure & DevOps',
      icon: '☁️',
      shortDesc: 'Architect, migrate, and optimize secure multi-cloud environments (AWS, Azure, GCP) with certified cloud and DevOps engineers.',
      overview: 'Modern enterprises require resilient, automated, and secure cloud ecosystems. We provide certified cloud architects and DevOps specialists who design robust infrastructure, implement CI/CD pipelines, and guarantee high availability for mission-critical software systems.',
      benefits: [
        'Multi-cloud strategy implementation (AWS, Microsoft Azure, Google Cloud)',
        'Automated CI/CD pipeline setup for continuous deployment and high velocity',
        'Enterprise-grade security audits, hardening, and compliance management',
        'Cost optimization strategies to minimize cloud expenditure'
      ],
      idealFor: 'Businesses transitioning legacy systems to the cloud or scaling infrastructure to handle heavy traffic loads.'
    },
    {
      id: 'it-project-management',
      title: 'IT Project Management & Delivery',
      tag: 'Agile Leadership',
      icon: '📊',
      shortDesc: 'Certified Scrum Masters and Technical Project Managers to lead complex software lifecycles from conception to successful launch.',
      overview: 'Even the most brilliant engineers need strong guidance to hit project milestones on time and within budget. Our seasoned IT Project Managers use Agile and Scrum methodologies to keep cross-functional teams aligned, manage stakeholder expectations, and eliminate roadblocks.',
      benefits: [
        'Certified Agile/Scrum leadership (CSM, PMP certified professionals)',
        'Transparent milestone tracking, sprint planning, and risk management',
        'Optimized cross-functional communication between tech and business units',
        'Guaranteed delivery adherence within strict budget constraints'
      ],
      idealFor: 'Enterprises managing complex software deployments requiring structured oversight and accountability.'
    }
  ];

  return (
    <div className={darkMode ? 'dark min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white' : 'min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white'}>
      <div className="min-h-screen transition-colors duration-300">
        
        {/* ================= NAVIGATION BAR ================= */}
        <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200 shadow-sm'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-24">
              
              {/* Logo & Tagline Section */}
              <div className="flex items-center gap-3.5 cursor-pointer group py-2" onClick={() => handlePageChange('home')}>
                <img 
                  src={logo} 
                  alt="LOGICORE LLC Logo" 
                  className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1.5">
                    <span className={`text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r bg-clip-text text-transparent ${darkMode ? 'from-cyan-400 via-blue-400 to-indigo-500' : 'from-blue-700 via-cyan-600 to-blue-900'}`}>
                      LOGICORE
                    </span>
                    <span className={`text-xl sm:text-2xl font-light tracking-wide ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      LLC
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="h-[1px] w-3 bg-cyan-500/80"></span>
                    <span className={`text-[8.5px] sm:text-[9.5px] font-medium tracking-[0.2em] ${darkMode ? 'text-cyan-400/90' : 'text-blue-700'}`}>
                      INTELLIGENCE FOR A BRIGHTER TOMORROW
                    </span>
                    <span className="h-[1px] w-3 bg-cyan-500/80"></span>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-1">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About Us' },
                  { id: 'services', label: 'Services' },
                  { id: 'careers', label: 'Current Openings' },
                  { id: 'contact', label: 'Contact' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handlePageChange(tab.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      currentPage === tab.id
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                        : darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800/60' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Desktop Theme Switcher Button */}
              <div className="hidden md:flex items-center">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-sm ${
                    darkMode 
                      ? 'bg-slate-900 border-slate-700 text-cyan-400 hover:bg-slate-800' 
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}</span>
                </button>
              </div>

              {/* Mobile Menu & Theme Button */}
              <div className="md:hidden flex items-center gap-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-lg border text-sm font-medium flex items-center gap-1 ${darkMode ? 'bg-slate-900 border-slate-800 text-cyan-400' : 'bg-slate-100 border-slate-200 text-slate-700'}`}
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`p-2 rounded-lg ${darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {mobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className={`md:hidden border-b px-4 pt-2 pb-4 space-y-2 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'careers', label: 'Current Openings' },
                { id: 'contact', label: 'Contact' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handlePageChange(tab.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    currentPage === tab.id
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                      : darkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* ================= MAIN CONTENT CONTAINER ================= */}
        <main>
          
          {/* ================= HOME PAGE ================= */}
          {currentPage === 'home' && (
            <div className="space-y-20 pb-20">
              <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                  <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
                    ⚡ Intelligence For A Brighter Tomorrow
                  </span>
                  <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Premier IT Staffing & Digital Solutions <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Built for Scale</span>
                  </h1>
                  <p className={`mt-6 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    LOGICORE LLC empowers enterprises with elite tech talent augmentation, direct hire recruiting, and next-gen software engineering.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                      onClick={() => handlePageChange('services')}
                      className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-600/30 transition-all duration-300 hover:scale-105"
                    >
                      Our IT Staffing Services
                    </button>
                    <button 
                      onClick={() => handlePageChange('careers')}
                      className={`px-8 py-4 rounded-xl font-semibold border transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700' : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-sm'}`}
                    >
                      Explore Openings
                    </button>
                  </div>
                </div>
              </section>

              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>Core Staffing & Tech Capabilities</h2>
                  <p className={`mt-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Connecting world-class enterprises with elite technology professionals.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: 'IT Staff Augmentation', desc: 'Embed pre-vetted senior engineers directly into your sprints for rapid scaling.', icon: '👥' },
                    { title: 'Direct Hire & Permanent', desc: 'Secure high-performing permanent technical talent and executive engineering leadership.', icon: '🎯' },
                    { title: 'Cloud & Project Management', desc: 'Certified cloud architects and Agile PMs to ensure on-time delivery.', icon: '🚀' },
                  ].map((feature, idx) => (
                    <div key={idx} className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 group shadow-lg ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/50' : 'bg-white border-slate-200 hover:border-cyan-500/50'}`}>
                      <div className="text-4xl mb-4 p-3 rounded-xl bg-cyan-500/10 w-fit group-hover:scale-110 transition-transform">{feature.icon}</div>
                      <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h3>
                      <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* ================= ABOUT US PAGE (REFINED & EFFECTIVE) ================= */}
          {currentPage === 'about' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
              
              {/* Header Section */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  🏢 About LOGICORE LLC
                </span>
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Engineering Success Through Elite Talent
                </h1>
                <p className={`text-lg sm:text-xl leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  Headquartered in Washington D.C., LOGICORE LLC is a premier IT staffing and technology solutions partner dedicated to accelerating enterprise growth through high-precision technical placement and agile engineering execution.
                </p>
              </div>

              {/* Mission & Vision Split Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className={`p-8 sm:p-10 rounded-3xl border shadow-xl relative overflow-hidden group ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/20 border-slate-800' : 'bg-gradient-to-br from-white via-slate-50 to-blue-50/50 border-slate-200'}`}>
                  <div className="text-4xl mb-4 p-3 rounded-2xl bg-cyan-500/15 w-fit">🎯</div>
                  <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Our Core Mission</h3>
                  <p className={`leading-relaxed text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    To bridge the widening technology talent gap by connecting forward-thinking enterprises with world-class engineers, architects, and leaders—ensuring every project achieves maximum velocity, security, and scalability.
                  </p>
                </div>

                <div className={`p-8 sm:p-10 rounded-3xl border shadow-xl relative overflow-hidden group ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/20 border-slate-800' : 'bg-gradient-to-br from-white via-slate-50 to-indigo-50/50 border-slate-200'}`}>
                  <div className="text-4xl mb-4 p-3 rounded-2xl bg-blue-500/15 w-fit">🔭</div>
                  <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Our Strategic Vision</h3>
                  <p className={`leading-relaxed text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    To set the benchmark for technical staffing excellence across North America by integrating rigorous cognitive vetting, transparent engagement models, and unmatched client responsiveness.
                  </p>
                </div>
              </div>

              {/* 4-Step Vetting Methodology Section */}
              <div className={`p-8 sm:p-12 rounded-3xl border shadow-xl space-y-10 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-cyan-400 font-semibold text-xs tracking-widest uppercase">The LOGICORE Standard</span>
                  <h2 className={`text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Our 4-Step Elite Vetting Methodology</h2>
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>We filter out the noise to deliver only the top 2% of technical talent to your organization.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { step: '01', title: 'Deep Technical Screening', desc: 'Comprehensive evaluations administered by senior technical architects in respective stacks.' },
                    { step: '02', title: 'Practical Code & Design Audits', desc: 'Real-world simulation tests examining system architecture capabilities, security, and speed.' },
                    { step: '03', title: 'Behavioral & Cultural Match', desc: 'Ensuring seamless communication, teamwork, and alignment with corporate workflows.' },
                    { step: '04', title: 'Continuous Performance Tracking', desc: 'Ongoing milestone reviews and feedback loops post-deployment to guarantee satisfaction.' },
                  ].map((m, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 ${darkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
                      <div>
                        <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{m.step}</span>
                        <h4 className={`text-lg font-bold mt-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{m.title}</h4>
                      </div>
                      <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Corporate Values */}
              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className={`text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Why Enterprises Choose LOGICORE</h2>
                  <p className={`mt-2 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Our foundational pillars dictate how we serve clients and candidates alike.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: 'Speed-to-Market', desc: 'We maintain a pre-vetted talent pool that enables us to present qualified candidate profiles within 48 hours.', icon: '⚡' },
                    { title: 'Uncompromising Quality', desc: 'Every placement goes through rigorous technical validation, eliminating hiring risks for your engineering leads.', icon: '🛡️' },
                    { title: 'Transparent Partnership', desc: 'Clear communication, flexible engagement models, and dedicated account management at every milestone.', icon: '🤝' },
                  ].map((val, idx) => (
                    <div key={idx} className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 shadow-lg ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/50' : 'bg-white border-slate-200 hover:border-cyan-500/50'}`}>
                      <div className="text-4xl mb-4 p-3 rounded-xl bg-cyan-500/10 w-fit">{val.icon}</div>
                      <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{val.title}</h3>
                      <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Bar */}
              <div className={`p-10 rounded-3xl border shadow-xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${darkMode ? 'bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border-slate-800' : 'bg-gradient-to-r from-blue-50 via-cyan-50 to-white border-slate-200'}`}>
                <div>
                  <h4 className={`text-4xl font-black text-cyan-400 mb-1`}>500+</h4>
                  <p className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Successful Placements</p>
                </div>
                <div>
                  <h4 className={`text-4xl font-black text-cyan-400 mb-1`}>98%</h4>
                  <p className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Vetting Match Accuracy</p>
                </div>
                <div>
                  <h4 className={`text-4xl font-black text-cyan-400 mb-1`}>48h</h4>
                  <p className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Average Match Turnaround</p>
                </div>
                <div>
                  <h4 className={`text-4xl font-black text-cyan-400 mb-1`}>99%</h4>
                  <p className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Client Retention Rate</p>
                </div>
              </div>

            </div>
          )}

          {/* ================= SERVICES & IT STAFFING PAGE ================= */}
          {currentPage === 'services' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
              
              {/* If a specific service is selected, show its dedicated sub-page view */}
              {selectedService ? (
                <div className="space-y-8 animate-fadeIn">
                  <button 
                    onClick={() => setSelectedService(null)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${darkMode ? 'bg-slate-900 border-slate-800 text-cyan-400 hover:bg-slate-800' : 'bg-white border-slate-200 text-blue-600 hover:bg-slate-50 shadow-sm'}`}
                  >
                    ← Back to All Services
                  </button>

                  <div className={`p-8 sm:p-12 rounded-3xl border shadow-xl space-y-8 ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6 border-slate-800/50">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl p-4 rounded-2xl bg-cyan-500/10">{selectedService.icon}</span>
                        <div>
                          <span className="px-3.5 py-1 text-xs font-semibold bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">{selectedService.tag}</span>
                          <h1 className={`text-2xl sm:text-4xl font-extrabold mt-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{selectedService.title}</h1>
                        </div>
                      </div>
                      <button 
                        onClick={() => handlePageChange('contact')}
                        className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-600/30 hover:scale-105 transition-all shrink-0"
                      >
                        Request This Service
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Service Overview</h3>
                          <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{selectedService.overview}</p>
                        </div>

                        <div>
                          <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Key Benefits & Deliverables</h3>
                          <div className="space-y-3">
                            {selectedService.benefits.map((benefit, idx) => (
                              <div key={idx} className={`flex items-start gap-3 p-4 rounded-xl border ${darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
                                <span className="text-cyan-400 font-bold">✓</span>
                                <span className={`text-sm sm:text-base font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className={`p-6 rounded-2xl border space-y-4 ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                          <h4 className={`text-sm font-semibold uppercase tracking-wider text-cyan-400`}>Ideal For</h4>
                          <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{selectedService.idealFor}</p>
                        </div>

                        <div className={`p-6 rounded-2xl border space-y-4 bg-gradient-to-br from-cyan-950/20 to-blue-950/20 border-cyan-500/30`}>
                          <h4 className={`text-sm font-semibold uppercase tracking-wider text-cyan-400`}>Ready to Hire?</h4>
                          <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            Connect with our talent acquisition team to receive pre-vetted candidate profiles within 48 hours.
                          </p>
                          <button 
                            onClick={() => handlePageChange('contact')}
                            className="w-full py-3 rounded-xl font-semibold bg-cyan-600 hover:bg-cyan-500 text-white text-sm transition-all"
                          >
                            Speak with Staffing Expert
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Default Services Grid */
                <div className="space-y-12">
                  <div className="text-center max-w-3xl mx-auto">
                    <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">LOGICORE LLC Services</span>
                    <h1 className={`mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>IT Staffing & Professional Solutions</h1>
                    <p className={`mt-4 text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Explore our tailored IT staffing models and professional engineering services designed to give your enterprise a competitive edge. Click any service to view a dedicated breakdown.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {staffingServices.map((service) => (
                      <div 
                        key={service.id} 
                        onClick={() => setSelectedService(service)}
                        className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 shadow-lg group cursor-pointer flex flex-col justify-between ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/50' : 'bg-white border-slate-200 hover:border-cyan-500/50'}`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <div className="text-4xl p-4 rounded-2xl bg-cyan-500/10 group-hover:scale-110 transition-transform">{service.icon}</div>
                            <span className="px-3.5 py-1 text-xs font-semibold bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">{service.tag}</span>
                          </div>
                          <h3 className={`text-xl font-bold mb-3 transition-colors ${darkMode ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-blue-600'}`}>{service.title}</h3>
                          <p className={`leading-relaxed text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{service.shortDesc}</p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-slate-800/50 flex items-center justify-between text-sm font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                          <span>View Full Service Details</span>
                          <span>→</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={`p-10 rounded-3xl border text-center space-y-6 ${darkMode ? 'bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border-slate-800' : 'bg-gradient-to-r from-blue-50 via-cyan-50 to-white border-slate-200'}`}>
                    <h3 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Need a customized staffing or project team?</h3>
                    <p className={`max-w-xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Tell us your exact technical stack and timeline requirements, and we will source the ideal professionals.</p>
                    <button 
                      onClick={() => handlePageChange('contact')}
                      className="px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-600/30 hover:scale-105 transition-all duration-300"
                    >
                      Request Custom Talent
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* ================= CURRENT OPENINGS PAGE ================= */}
          {currentPage === 'careers' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Careers at LOGICORE LLC</span>
                <h1 className={`mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Current Openings</h1>
                <p className={`mt-4 text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Join our brilliant engineering team and help shape intelligent systems for tomorrow.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                {[
                  { title: 'Senior AI & Full-Stack Engineer', type: 'Full-Time • Remote', dept: 'Engineering', desc: 'Build scalable cloud services and integrate advanced machine learning models into core products.' },
                  { title: 'UI/UX System Architect', type: 'Full-Time • Hybrid', dept: 'Design', desc: 'Design clean, futuristic, and responsive user interfaces aligned with enterprise tech workflows.' },
                  { title: 'Cloud DevOps Specialist', type: 'Full-Time • Remote', dept: 'Infrastructure', desc: 'Manage high-performance pipelines, security audits, and robust server deployments.' },
                ].map((job, idx) => (
                  <div key={idx} className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group shadow-md ${darkMode ? 'bg-slate-900/70 border-slate-800 hover:border-cyan-500/50' : 'bg-white border-slate-200 hover:border-cyan-500/50'}`}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">{job.dept}</span>
                        <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{job.type}</span>
                      </div>
                      <h3 className={`text-xl font-bold transition-colors ${darkMode ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-blue-600'}`}>{job.title}</h3>
                      <p className={`text-sm max-w-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{job.desc}</p>
                    </div>
                    <button 
                      onClick={() => alert(`Thank you for your interest in the ${job.title} role! Please send your resume to careers@logicorellc.com`)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all duration-300 shadow-md shrink-0"
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= CONTACT PAGE ================= */}
          {currentPage === 'contact' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
              
              <div className="text-center max-w-3xl mx-auto mb-4">
                <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Contact Us</h1>
                <p className={`mt-4 text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  Share your staffing requirements, questions, or project inquiries. We look forward to partnering with you!
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left Column: Headquarters Info & Contact Details */}
                <div className="lg:col-span-5 space-y-6">
                  <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 shadow-xl ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                    
                    <h3 className={`text-xl font-bold border-b pb-4 ${darkMode ? 'text-white border-slate-800' : 'text-slate-900 border-slate-200'}`}>
                      Get in Touch
                    </h3>

                    {/* Phone Numbers */}
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl shrink-0 ${darkMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-blue-50 text-blue-600'}`}>
                        📞
                      </div>
                      <div>
                        <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Phone Support</p>
                        <p className={`text-sm sm:text-base font-medium mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          202-869-8640 / 202-869-8670
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl shrink-0 ${darkMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-blue-50 text-blue-600'}`}>
                        ✉️
                      </div>
                      <div>
                        <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Email Address</p>
                        <p className={`text-sm sm:text-base font-medium mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          sled@nextgensc..com
                        </p>
                      </div>
                    </div>

                    {/* Headquarters Location */}
                    <div className="flex items-start gap-4 pt-4 border-t border-slate-800/50">
                      <div className={`p-3 rounded-xl shrink-0 ${darkMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-blue-50 text-blue-600'}`}>
                        📍
                      </div>
                      <div>
                        <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Headquarters Location</p>
                        <p className={`text-sm font-semibold mt-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          LOGICORE LLC.
                        </p>
                        <p className={`text-sm leading-relaxed mt-0.5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          1301 K Street NW, Suite 300W,<br />
                          Washington DC 20005
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className={`lg:col-span-7 p-8 sm:p-10 rounded-3xl border shadow-xl backdrop-blur-xl ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <h3 className={`text-xl font-bold border-b pb-4 mb-6 ${darkMode ? 'text-white border-slate-800' : 'text-slate-900 border-slate-200'}`}>
                    Send Us a Message
                  </h3>
                  <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully! We will get back to you soon.'); }} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Your name</label>
                        <input type="text" required placeholder="John Doe" className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-cyan-500 transition-colors ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Your email</label>
                        <input type="email" required placeholder="john@example.com" className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-cyan-500 transition-colors ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                      </div>
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Subject</label>
                      <input type="text" required placeholder="Inquiry about IT Staffing..." className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-cyan-500 transition-colors ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Your message (optional)</label>
                      <textarea rows="4" placeholder="Tell us about your staffing requirements..." className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-cyan-500 transition-colors ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}></textarea>
                    </div>
                    <button type="submit" className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-600/30 hover:scale-[1.01] transition-transform duration-300">
                      Send Message
                    </button>
                  </form>
                </div>

              </div>

              {/* Large Full-Width Google Map Section Below Both Columns */}
              <div className={`rounded-3xl border overflow-hidden shadow-2xl mt-12 ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
                <div className={`px-6 py-4 border-b flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm font-semibold ${darkMode ? 'border-slate-800 bg-slate-900/90 text-slate-200' : 'border-slate-200 bg-slate-50 text-slate-800'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📍</span>
                    <span>LOGICORE LLC Headquarters • 1301 K Street NW, Suite 300W, Washington DC 20005</span>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=1301+K+Street+NW+Suite+300W+Washington+DC+20005" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1 font-medium"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
                <div className="w-full h-96 sm:h-[480px] relative">
                  <iframe 
                    title="LOGICORE LLC Headquarters Map"
                    src="https://maps.google.com/maps?q=1301%20K%20Street%20NW,%20Suite%20300W,%20Washington%20DC%2020005&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                    className="w-full h-full border-0 filter contrast-110"
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>
          )}

        </main>

        {/* ================= FOOTER ================= */}
        <footer className={`border-t py-12 mt-20 transition-colors ${darkMode ? 'border-slate-800/80 bg-slate-950 text-slate-400' : 'border-slate-200 bg-white text-slate-600'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="LOGICORE LLC Logo" className="h-10 w-auto object-contain" />
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className={`font-extrabold text-sm ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>LOGICORE</span>
                  <span className={`font-light text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>LLC © {new Date().getFullYear()}</span>
                </div>
                <span className="text-[9px] text-cyan-400 font-semibold tracking-wider">INTELLIGENCE FOR A BRIGHTER TOMORROW</span>
              </div>
            </div>
            <div className="flex space-x-6 text-sm">
              <button onClick={() => handlePageChange('home')} className="hover:text-cyan-400 transition-colors">Home</button>
              <button onClick={() => handlePageChange('about')} className="hover:text-cyan-400 transition-colors">About Us</button>
              <button onClick={() => handlePageChange('services')} className="hover:text-cyan-400 transition-colors">Services</button>
              <button onClick={() => handlePageChange('careers')} className="hover:text-cyan-400 transition-colors">Careers</button>
              <button onClick={() => handlePageChange('contact')} className="hover:text-cyan-400 transition-colors">Contact</button>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}