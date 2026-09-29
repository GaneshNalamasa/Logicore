// src/pages/AllInOne.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function AllInOne({ darkMode }) {
  const stats = [
    { value: "48 hrs", label: "Average Deployment Time" },
    { value: "98.5%", label: "Client Retention Rate" },
    { value: "500+", label: "Engineers Deployed" },
    { value: "15+", label: "Global Markets Served" }
  ];

  const expertises = [
    {
      code: "01",
      title: "Cloud Architecture & DevOps",
      desc: "Accelerate deployment velocity with secure, scalable infrastructure on AWS, Microsoft Azure, and Google Cloud platform using automated CI/CD pipelines."
    },
    {
      code: "02",
      title: "Enterprise Full-Stack Engineering",
      desc: "Integrate senior software architects and developers proficient in React, Node.js, Python, and microservices directly into your agile squads."
    },
    {
      code: "03",
      title: "AI & Data Analytics Solutions",
      desc: "Operationalize machine learning models, modern data warehouses, and scalable data pipelines to drive data-backed business decisions."
    },
    {
      code: "04",
      title: "Cybersecurity & Compliance",
      desc: "Safeguard critical corporate infrastructure, perform vulnerability assessments, and ensure rigorous industry compliance standards."
    }
  ];

  const workflow = [
    { 
      step: "01", 
      title: "Technical Discovery", 
      desc: "We collaborate with your engineering leads to map out stack requirements, scalability metrics, and culture-fit criteria." 
    },
    { 
      step: "02", 
      title: "Curated Talent Matching", 
      desc: "Our vetting network selects pre-screened, elite engineers tailored precisely to your milestone deliverables." 
    },
    { 
      step: "03", 
      title: "Seamless Integration", 
      desc: "Engineers plug straight into your sprint cycles on Day One with fully managed compliance and contract flexibility." 
    }
  ];

  const coreServices = [
    {
      code: "01",
      category: "TALENT AUGMENTATION",
      title: "Elite IT Staff Augmentation",
      description: "Instantly scale your engineering capacity by embedding pre-vetted, top 1% software architects, senior developers, and DevOps specialists directly into your existing agile pods.",
      features: [
        "Rigorous multi-stage technical & behavioral vetting",
        "Zero recruitment overhead & rapid 48-hour matching",
        "Seamless timezone alignment & full IP protection"
      ],
      techStack: "React, Node.js, Python, Java, Go, AWS, Azure"
    },
    {
      code: "02",
      category: "DEDICATED SQUADS",
      title: "Managed Software Development Teams",
      description: "Accelerate complex product roadmaps with autonomous, end-to-end managed engineering squads tailored specifically to your milestone deliverables and architecture requirements.",
      features: [
        "Dedicated technical leads and agile project managers",
        "Complete ownership from system design to production deployment",
        "Flexible scaling as project demands evolve"
      ],
      techStack: "Full-Stack Web, Mobile (iOS/Android), Microservices"
    }
  ];

  const values = [
    { code: "01", title: "Rigorously Vetted Talent", desc: "We screen hundreds of applicants to bring you the top 1% of software architects, engineers, and DevOps specialists." },
    { code: "02", title: "Agile Speed to Market", desc: "Eliminate lengthy hiring pipelines and deploy expert squads into active sprints within 48 hours." },
    { code: "03", title: "Complete Cultural Alignment", desc: "Evaluated on technical stacks, communication, teamwork, and corporate workflow fit." },
    { code: "04", title: "Long-Term Partnership", desc: "Backed by ongoing account management, performance reviews, and flexible contract scaling." }
  ];

  return (
    <div className={`space-y-32 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
              Enterprise IT Staff Augmentation & Consulting
            </div>

            <h1 className={`text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Scale Your Engineering Capacity With <span className="text-blue-600 dark:text-blue-400">Elite Tech Talent</span>
            </h1>

            <p className={`text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              LOGICORE LLC connects ambitious technology enterprises with pre-vetted, top-tier software engineers and development squads ready to deliver results on Day One.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all transform hover:-translate-y-0.5 text-center"
              >
                Request Talent Consultation
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className={`p-8 sm:p-10 rounded-2xl border shadow-2xl relative transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/10 ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-blue-600 text-white text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                Verified Talent
              </div>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                The Logicore Standard
              </h3>
              <ul className={`space-y-4 text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span> Top 1% rigorously vetted engineers & architects.</li>
                <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span> Flexible engagement models & dedicated squads.</li>
                <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span> Complete IP protection and seamless NDA compliance.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border mt-20 ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-lg'}`}>
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1 text-center md:text-left transition-all duration-300 hover:scale-105">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400">{stat.value}</div>
              <div className={`text-xs font-semibold tracking-wider uppercase ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ABOUT & CORE VALUES SECTION */}
      <section className={`py-20 border-y ${darkMode ? 'bg-slate-900/30 border-slate-900' : 'bg-slate-100/50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Our Core Standards</span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              What Drives Our Engineering Placements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-slate-900 border-slate-800 hover:border-blue-500/50' : 'bg-white border-slate-200 shadow-md'}`}>
                <div className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono mb-4">{val.code}</div>
                <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{val.title}</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES & SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Enterprise Solutions</span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Technical Domains & Services We Specialize In
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertises.map((item, idx) => (
            <div key={idx} className={`p-8 sm:p-10 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-slate-900 border-slate-800 hover:border-blue-500/50' : 'bg-white border-slate-200 shadow-md'}`}>
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">{item.code}</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WORKFLOW SECTION */}
      <section className={`py-20 border-y ${darkMode ? 'bg-slate-900/30 border-slate-900' : 'bg-slate-100/50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Streamlined Engagement</span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              How We Onboard Your Next Engineering Asset
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflow.map((w, idx) => (
              <div key={idx} className={`p-8 rounded-2xl border relative space-y-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-blue-500/50' : 'bg-white border-slate-200 shadow-md'}`}>
                <div className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 font-mono">Phase {w.step}</div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{w.title}</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROFESSIONAL FOOTER SECTION */}
      <footer className={`border-t transition-colors duration-300 ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-slate-900 border-slate-900 text-slate-400'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            <div className="space-y-4">
              <div className="text-white text-xl font-black tracking-wider flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span> LOGICORE LLC
              </div>
              <p className="text-sm leading-relaxed">
                Premier IT staff augmentation and consulting partner connecting enterprises with elite tech talent.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">Solutions</h4>
              <ul className="space-y-2.5 text-sm">
                <li><span className="hover:text-blue-400 transition-colors cursor-pointer">Staff Augmentation</span></li>
                <li><span className="hover:text-blue-400 transition-colors cursor-pointer">Dedicated Teams</span></li>
                <li><span className="hover:text-blue-400 transition-colors cursor-pointer">Cloud & DevOps</span></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">Global HQ</h4>
              <p className="text-sm">Enterprise Technology Consulting & Talent Acquisition</p>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <div>© {new Date().getFullYear()} LOGICORE LLC. All rights reserved.</div>
            <div>Engineered for Elite Performance</div>
          </div>
        </div>
      </footer>

    </div>
  );
}