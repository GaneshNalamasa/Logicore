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

  return (
    <div className={`space-y-28 pb-32 transition-colors duration-300 ${darkMode ? 'bg-[#090D16] text-slate-100' : 'bg-[#F9FAFB] text-slate-900'}`}>
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full text-xs font-medium tracking-wide bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
              Enterprise IT Staff Augmentation & Consulting
            </div>

            <h1 className={`text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.12] ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Scale Your Engineering Capacity With <span className="text-blue-600 dark:text-blue-400">Elite Tech Talent</span>
            </h1>

            <p className={`text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              LOGICORE LLC connects ambitious technology enterprises with pre-vetted, top-tier software engineers and development squads ready to deliver results on Day One.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm tracking-wide bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 transition-all text-center"
              >
                Request Talent Consultation
              </Link>
              <Link 
                to="/services" 
                className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm tracking-wide border transition-all text-center ${darkMode ? 'border-slate-800 bg-[#111827] hover:bg-[#1F2937] text-slate-200' : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700 shadow-xs'}`}
              >
                Explore Services →
              </Link>
            </div>
          </div>

          {/* Professional Corporate Card Preview Box */}
          <div className="lg:col-span-5">
            <div className={`p-8 sm:p-9 rounded-2xl border relative transition-all ${darkMode ? 'bg-[#111827]/90 border-slate-800/80 shadow-2xl shadow-black/40' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'}`}>
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-xs">
                Verified Talent
              </div>
              <h3 className={`text-xl font-bold mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                The Logicore Standard
              </h3>
              <ul className={`space-y-4 text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span> Top 1% rigorously vetted software engineers & architects.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span> Flexible engagement models (Staff Augmentation / Dedicated Squads).
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span> Complete IP protection and seamless NDA compliance.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span> Direct alignment with your corporate timezone & workflow.
                </li>
              </ul>
              <div className={`mt-8 pt-6 border-t flex items-center justify-between text-xs ${darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'}`}>
                <span>Trusted by enterprise leaders</span>
                <span className="font-mono font-bold tracking-wider text-blue-600 dark:text-blue-400">LOGICORE LLC</span>
              </div>
            </div>
          </div>

        </div>

        {/* Metrics Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border mt-20 ${darkMode ? 'bg-[#111827]/50 border-slate-800/80 shadow-lg' : 'bg-white border-slate-200 shadow-md'}`}>
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1.5 text-center md:text-left">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-blue-600 dark:text-blue-400">
                {stat.value}
              </div>
              <div className={`text-xs font-semibold tracking-wider uppercase ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className={`py-20 border-y ${darkMode ? 'bg-[#0D1322] border-slate-800/80' : 'bg-[#F1F5F9] border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Core Capabilities
              </span>
              <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Technical Domains We Specialize In
              </h2>
            </div>
            <p className={`text-sm sm:text-base max-w-md ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              We match your exact technical stack requirements with specialized domain experts who integrate smoothly into your existing development structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertises.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-8 sm:p-9 rounded-2xl border transition-all ${darkMode ? 'bg-[#111827] border-slate-800/80 hover:border-slate-700 shadow-lg' : 'bg-white border-slate-200 shadow-md hover:shadow-xl'}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xl font-mono font-black text-blue-600 dark:text-blue-400">{item.code}</span>
                  <div className={`w-2.5 h-2.5 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
                </div>
                <h3 className={`text-xl font-bold mb-3 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Workflow Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Streamlined Engagement
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            How We Onboard Your Next Engineering Asset
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Eliminate traditional recruitment bottlenecks with our structured 3-phase deployment pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workflow.map((w, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-2xl border relative space-y-4 ${darkMode ? 'bg-[#111827]/60 border-slate-800/80 shadow-lg' : 'bg-white border-slate-200 shadow-md'}`}
            >
              <div className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                Phase {w.step}
              </div>
              <h3 className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>{w.title}</h3>
              <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-10 sm:p-16 rounded-3xl border text-center space-y-6 ${darkMode ? 'bg-[#111827] border-slate-800/80 shadow-2xl shadow-black/50' : 'bg-slate-900 text-white border-slate-900 shadow-2xl'}`}>
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready to Accelerate Your Product Roadmap?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Speak with our talent architects today to discuss your project timelines and match with elite engineering professionals.
            </p>
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="inline-block px-8 py-4 rounded-xl font-semibold text-sm tracking-wide bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all"
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