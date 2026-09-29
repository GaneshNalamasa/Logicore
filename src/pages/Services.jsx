// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Services({ darkMode }) {
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
    },
    {
      code: "03",
      category: "INFRASTRUCTURE & OPS",
      title: "Cloud Architecture & DevOps Engineering",
      description: "Future-proof your IT infrastructure with resilient cloud-native architectures, automated CI/CD deployment pipelines, and maximum operational uptime.",
      features: [
        "Infrastructure as Code (IaC) implementation",
        "Automated continuous testing and deployment workflows",
        "Cost optimization and robust cloud security governance"
      ],
      techStack: "AWS, Microsoft Azure, Google Cloud, Docker, Kubernetes"
    },
    {
      code: "04",
      category: "INTELLIGENT SYSTEMS",
      title: "AI & Data Engineering Solutions",
      description: "Unlock actionable business intelligence by operationalizing modern data warehouses, scalable analytics pipelines, and customized machine learning systems.",
      features: [
        "Custom LLM integration and workflow automation",
        "Scalable ETL pipeline architecture and modern data lakes",
        "Advanced predictive analytics modeling"
      ],
      techStack: "Python, PyTorch, Snowflake, Databricks, BigQuery"
    }
  ];

  return (
    <div className={`space-y-24 pb-24 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Header Section */}
      <section className="pt-20 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          Enterprise Capabilities
        </div>
        <h1 className={`text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1] ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Engineered for Scale, <span className="text-blue-600 dark:text-blue-400">Built for Impact</span>
        </h1>
        <p className={`text-lg sm:text-xl max-w-3xl mx-auto font-normal leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          LOGICORE LLC delivers high-performance technical staffing and specialized software engineering solutions designed to accelerate your corporate vision.
        </p>
      </section>

      {/* Detailed Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coreServices.map((service, index) => (
            <div 
              key={index}
              className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-slate-900/80 border-slate-800 hover:border-blue-500/50 shadow-xl' : 'bg-white border-slate-200 shadow-xl hover:shadow-2xl'}`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    {service.category}
                  </span>
                  <span className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">
                    {service.code}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className={`text-2xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {service.description}
                  </p>
                </div>

                {/* Key Features List */}
                <div className={`space-y-2 pt-4 border-t ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    Key Deliverables:
                  </span>
                  <ul className="space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className={`text-xs sm:text-sm flex items-start gap-2.5 font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className={`mt-8 pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs ${darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'}`}>
                <span className="font-semibold uppercase tracking-wider text-[10px]">Core Stack / Focus:</span>
                <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold">{service.techStack}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-10 sm:p-16 rounded-3xl border text-center space-y-6 ${darkMode ? 'bg-slate-900 border-slate-800 shadow-2xl' : 'bg-slate-900 text-white border-slate-900 shadow-2xl'}`}>
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Unsure Which Engagement Model Fits Best?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Consult with our principal talent architects to evaluate your technical scope and design a custom deployment strategy.
            </p>
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="inline-block px-8 py-4 rounded-xl font-bold text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all"
              >
                Schedule an Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}