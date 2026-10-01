// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ darkMode }) {
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
      desc: "Accelerate deployment velocity with secure, scalable infrastructure on AWS, Microsoft Azure, and Google Cloud platform using automated CI/CD pipelines.",
      tags: ["AWS", "Azure", "GCP", "Kubernetes", "CI/CD"]
    },
    {
      code: "02",
      title: "Enterprise Full-Stack Engineering",
      desc: "Integrate senior software architects and developers proficient in React, Node.js, Python, and microservices directly into your agile squads.",
      tags: ["React", "Node.js", "Python", "Microservices"]
    },
    {
      code: "03",
      title: "AI & Data Analytics Solutions",
      desc: "Operationalize machine learning models, modern data warehouses, and scalable data pipelines to drive data-backed business decisions.",
      tags: ["Machine Learning", "LLMs", "Data Pipelines", "Snowflake"]
    },
    {
      code: "04",
      title: "Cybersecurity & Compliance",
      desc: "Safeguard critical corporate infrastructure, perform vulnerability assessments, and ensure rigorous industry compliance standards.",
      tags: ["SOC2", "Pen Testing", "Zero Trust", "IAM"]
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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#04060f] text-slate-100' : 'bg-[#F8FAFC] text-slate-950'}`}>
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Ambient Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 dark:bg-blue-500/10 blur-[140px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse"></span>
              Enterprise IT Staff Augmentation & Consulting
            </div>

            {/* Main Headline */}
            <h1 className={`text-4xl sm:text-6xl font-black tracking-tight leading-[1.08] ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Scale Your Engineering Capacity With <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">Elite Tech Talent</span>
            </h1>

            {/* Subtitle */}
            <p className={`text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              LOGICORE LLC connects ambitious technology enterprises with pre-vetted, top-tier software engineers and development squads ready to deliver results on Day One.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-xl shadow-blue-600/25 transition-all text-center transform hover:-translate-y-0.5"
              >
                Request Talent Consultation
              </Link>
              <Link 
                to="/services" 
                className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm tracking-wide border transition-all text-center backdrop-blur-md ${darkMode ? 'border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-200 shadow-lg' : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700 shadow-sm'}`}
              >
                Explore Services →
              </Link>
            </div>
          </div>

          {/* Professional Corporate Card Preview Box */}
          <div className="lg:col-span-5">
            <div className={`p-8 sm:p-10 rounded-3xl border relative transition-all backdrop-blur-2xl ${darkMode ? 'bg-slate-900/80 border-slate-800 shadow-2xl shadow-black/80' : 'bg-white/90 border-slate-200 shadow-2xl shadow-slate-200/50'}`}>
              
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-[10px] font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-lg">
                Verified Talent
              </div>

              <h3 className={`text-2xl font-black mb-6 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                The Logicore Standard
              </h3>

              <ul className={`space-y-4 text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                <li className="flex items-start gap-3.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xs mt-0.5">✓</span> 
                  Top 1% rigorously vetted software engineers & architects.
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xs mt-0.5">✓</span> 
                  Flexible engagement models (Staff Augmentation / Dedicated Squads).
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xs mt-0.5">✓</span> 
                  Complete IP protection and seamless NDA compliance.
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xs mt-0.5">✓</span> 
                  Direct alignment with your corporate timezone & workflow.
                </li>
              </ul>

              <div className={`mt-8 pt-6 border-t flex items-center justify-between text-xs ${darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'}`}>
                <span className="font-medium">Trusted by enterprise leaders</span>
                <span className="font-mono font-bold tracking-wider text-blue-600 dark:text-cyan-400">LOGICORE LLC</span>
              </div>

            </div>
          </div>

        </div>

        {/* Metrics Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl border mt-14 backdrop-blur-xl ${darkMode ? 'bg-slate-900/50 border-slate-800/80 shadow-2xl' : 'bg-white border-slate-200/80 shadow-xl'}`}>
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1 text-center md:text-left p-2">
              <div className="text-3xl sm:text-5xl font-black font-mono tracking-tight bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className={`text-xs font-mono font-semibold tracking-widest uppercase ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className={`py-24 border-y relative ${darkMode ? 'bg-slate-900/20 border-slate-800/60' : 'bg-slate-100/50 border-slate-200/80'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 bg-blue-500/10 px-3.5 py-1.5 rounded-lg border border-blue-500/20">
                Core Capabilities
              </span>
              <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Technical Domains We Specialize In
              </h2>
            </div>
            <p className={`text-base sm:text-lg max-w-md leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              We match your exact technical stack requirements with specialized domain experts who integrate smoothly into your existing development structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertises.map((item, idx) => (
              <div 
                key={idx} 
                className={`group p-8 sm:p-10 rounded-3xl border transition-all duration-300 relative overflow-hidden backdrop-blur-xl ${
                  darkMode 
                    ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10' 
                    : 'bg-white/90 border-slate-200 hover:border-blue-400 hover:shadow-2xl'
                }`}
              >
                {/* Ambient Hover Glow */}
                <div className="absolute -right-16 -top-16 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none"></div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-xl font-mono font-black text-blue-600 dark:text-cyan-400 bg-blue-500/10 px-3.5 py-1.5 rounded-xl border border-blue-500/20">
                    {item.code}
                  </span>
                  <span className={`text-xs font-mono tracking-widest uppercase ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Domain Specialized
                  </span>
                </div>

                <h3 className={`text-2xl font-bold mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h3>
                
                <p className={`text-base leading-relaxed mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.desc}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200/60 dark:border-slate-800/80">
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className={`text-xs font-mono font-medium px-3.5 py-1.5 rounded-lg ${
                        darkMode 
                          ? 'bg-slate-800/80 text-slate-300 border border-slate-700/60' 
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Engagement Workflow Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 bg-blue-500/10 px-3.5 py-1.5 rounded-lg border border-blue-500/20">
            Streamlined Engagement
          </span>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            How We Onboard Your Next Engineering Asset
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Eliminate traditional recruitment bottlenecks with our structured 3-phase deployment pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workflow.map((w, idx) => (
            <div 
              key={idx} 
              className={`p-8 sm:p-10 rounded-3xl border relative space-y-4 transition-all backdrop-blur-xl ${darkMode ? 'bg-slate-900/70 border-slate-800 shadow-xl' : 'bg-white/90 border-slate-200 shadow-lg'}`}
            >
              <div className="text-xs font-mono font-extrabold tracking-widest uppercase text-blue-600 dark:text-cyan-400 bg-blue-500/10 inline-block px-3.5 py-1.5 rounded-xl border border-blue-500/20">
                Phase {w.step}
              </div>
              <h3 className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>{w.title}</h3>
              <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise CTA Section */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-10 sm:p-20 rounded-3xl border text-center relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border-slate-800 shadow-2xl shadow-black/80' : 'bg-slate-900 text-white border-slate-900 shadow-2xl'}`}>
          
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/25 via-transparent to-transparent pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Accelerate Your Product Roadmap?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Speak with our talent architects today to discuss your project timelines and match with elite engineering professionals.
            </p>
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="inline-block px-9 py-4 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
              >
                Schedule an Executive Consultation
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}