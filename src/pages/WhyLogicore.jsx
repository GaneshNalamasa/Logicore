// src/pages/WhyLogicore.jsx
import React from 'react';

export default function WhyLogicore({ darkMode }) {
  const advantages = [
    {
      icon: "⚡",
      title: "Rapid Talent Deployment",
      description: "We deliver pre-vetted, elite tech professionals within 48 to 72 hours, drastically reducing your time-to-hire for critical projects."
    },
    {
      icon: "🛡️",
      title: "Rigorous Technical Vetting",
      description: "Our multi-stage screening process evaluates candidates not just on code quality, but on system design, architectural thinking, and communication skills."
    },
    {
      icon: "🔄",
      title: "Flexible Engagement Models",
      description: "Scale up or down seamlessly with contract staffing, contract-to-hire, or dedicated remote development squads tailored to your roadmap."
    },
    {
      icon: "🎯",
      title: "Domain Expertise",
      description: "Specialized in high-demand stacks including Cloud & DevOps, Full-Stack Engineering, Data Engineering, AI/ML, and Enterprise Security."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirement Discovery",
      description: "We deep-dive into your tech stack, project goals, team culture, and specific milestone deliverables."
    },
    {
      step: "02",
      title: "Curated Matching",
      description: "Our proprietary talent network matches you with candidates who have exact domain experience and fit seamlessly."
    },
    {
      step: "03",
      title: "Seamless Onboarding",
      description: "We handle compliance, contracts, and technical provisioning so your new talent starts contributing on Day One."
    }
  ];

  const metrics = [
    { stat: "48 Hrs", label: "Average Placement Window" },
    { stat: "98%", label: "Client Retention Rate" },
    { stat: "500+", label: "Engineers Deployed Globally" },
    { stat: "15+", label: "Enterprise Sectors Served" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
          ⭐ The Logicore Advantage
        </span>
        <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Why Industry Leaders Choose LOGICORE
        </h1>
        <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          We bridge the tech talent gap by combining rigorous engineering assessments with ultra-fast global delivery.
        </p>
      </div>

      {/* Metrics Bar */}
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
        {metrics.map((item, index) => (
          <div key={index} className="text-center space-y-1">
            <div className={`text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}>
              {item.stat}
            </div>
            <div className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Core Advantages Grid */}
      <div className="space-y-10">
        <div className="text-center space-y-2">
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Built for High-Performance Tech Teams</h2>
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>What sets our staffing and augmentation framework apart from traditional agencies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((adv, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.01] ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/50' : 'bg-white border-slate-200 shadow-xl hover:border-blue-400'}`}
            >
              <div className="text-4xl mb-6 p-3 w-fit rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                {adv.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{adv.title}</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{adv.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3-Step Engagement Process */}
      <div className={`p-10 sm:p-14 rounded-3xl border space-y-12 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>How We Work With You</h2>
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>A streamlined 3-step workflow designed to scale your technical capacity seamlessly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {processSteps.map((step, index) => (
            <div key={index} className="space-y-4 relative">
              <span className="text-xs font-black tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                STEP {step.step}
              </span>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{step.title}</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-6 py-10">
        <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Ready to Scale Your Engineering Team?</h2>
        <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Let's discuss your project timelines and match you with world-class technical talent today.
        </p>
        <div>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-600/30 hover:scale-105 transition-all"
          >
            Partner With Us
          </a>
        </div>
      </div>

    </div>
  );
}