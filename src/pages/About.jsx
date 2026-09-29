// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function About({ darkMode }) {
  const values = [
    {
      code: "01",
      title: "Rigorously Vetted Talent",
      desc: "We screen hundreds of applicants to bring you the top 1% of software architects, engineers, and DevOps specialists with verified enterprise experience."
    },
    {
      code: "02",
      title: "Agile Speed to Market",
      desc: "Eliminate lengthy hiring pipelines. Our streamlined talent matching process deploys expert squads into your active sprints within 48 hours."
    },
    {
      code: "03",
      title: "Complete Cultural Alignment",
      desc: "We evaluate candidates not only on technical stacks but on communication, teamwork, and alignment with your corporate workflow."
    },
    {
      code: "04",
      title: "Long-Term Partnership",
      desc: "We stand behind every deployment with ongoing account management, performance reviews, and flexible contract scaling."
    }
  ];

  return (
    <div className={`space-y-24 pb-24 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          About LOGICORE LLC
        </div>
        <h1 className={`text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1] ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Empowering Enterprises Through <span className="text-blue-600 dark:text-blue-400">Elite Tech Augmentation</span>
        </h1>
        <p className={`text-lg sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          LOGICORE LLC is a premier technology staffing and consulting partner dedicated to helping high-growth enterprises bridge engineering gaps and accelerate their product roadmaps.
        </p>
      </section>

      {/* Mission & Vision Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className={`p-8 sm:p-12 rounded-2xl border space-y-4 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono">Our Mission</span>
            <h2 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Accelerating Global Engineering Velocity
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Our mission is to remove the friction of traditional recruitment by connecting ambitious tech companies with pre-vetted, world-class engineering talent capable of delivering high-impact code from day one.
            </p>
          </div>

          <div className={`p-8 sm:p-12 rounded-2xl border space-y-4 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono">Our Vision</span>
            <h2 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              The Gold Standard in IT Staffing
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              We aim to redefine how enterprises scale their development teams by maintaining uncompromising standards of technical excellence, transparency, and dependable long-term partnerships.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values / Why Choose Us Section */}
      <section className={`py-20 border-y ${darkMode ? 'bg-slate-900/30 border-slate-900' : 'bg-slate-100/50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Our Core Standards</span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              What Drives Our Engineering Placements
            </h2>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Every engineer we deploy is backed by our strict vetting methodology and structured operational framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900 border-slate-800 hover:border-blue-500/50' : 'bg-white border-slate-200 shadow-md hover:shadow-xl'}`}
              >
                <div className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono mb-4">{val.code}</div>
                <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{val.title}</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-10 sm:p-16 rounded-3xl border text-center space-y-6 ${darkMode ? 'bg-slate-900 border-slate-800 shadow-2xl' : 'bg-slate-900 text-white border-slate-900 shadow-2xl'}`}>
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready to Partner With Logicore LLC?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Let's discuss your technical staffing requirements and integrate elite engineering talent into your teams.
            </p>
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="inline-block px-8 py-4 rounded-xl font-bold text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all"
              >
                Get in Touch With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}