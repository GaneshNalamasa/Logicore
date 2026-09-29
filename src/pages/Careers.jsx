// src/pages/Careers.jsx
import React, { useState } from 'react';

export default function Careers({ darkMode, handlePageChange }) {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobOpenings = [
    {
      id: 'senior-fullstack',
      title: 'Senior Full-Stack Engineer (React / Node.js)',
      department: 'Engineering',
      location: 'Remote (US / Washington D.C.)',
      type: 'Full-Time / Contract-to-Hire',
      description: 'We are seeking an elite Senior Full-Stack Engineer to embed with our enterprise clients. You will architect and build scalable cloud-native web applications using modern React, TypeScript, and Node.js microservices.',
      requirements: [
        '5+ years of professional software engineering experience',
        'Expert proficiency in React, TypeScript, Tailwind CSS, and Node.js',
        'Demonstrated experience with AWS or Azure cloud environments',
        'Strong understanding of CI/CD pipelines, containerization (Docker/Kubernetes)',
        'Excellent communication skills and experience working in Agile/Scrum teams'
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud DevOps & Infrastructure Architect',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-Time',
      description: 'Looking for a certified Cloud DevOps expert to design, automate, and secure multi-cloud architectures for high-growth tech companies.',
      requirements: [
        'AWS Certified Solutions Architect or DevOps Professional certification',
        'Deep expertise in Terraform, Infrastructure as Code (IaC), and Kubernetes',
        'Extensive experience setting up automated CI/CD workflows',
        'Strong background in security compliance, monitoring, and cloud cost optimization'
      ]
    },
    {
      id: 'agile-pm',
      title: 'Technical Project Manager (Scrum Master)',
      department: 'Delivery',
      location: 'Washington D.C. / Hybrid',
      type: 'Full-Time',
      description: 'Lead cross-functional engineering sprints, manage client stakeholder expectations, and drive mission-critical software deployments to success.',
      requirements: [
        'PMP or Certified Scrum Master (CSM) credentials',
        '3+ years managing software development life cycles (SDLC)',
        'Exceptional problem-solving abilities and risk management acumen',
        'Technical background with basic coding or architecture literacy'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
      {selectedJob ? (
        <div className="space-y-8 animate-fadeIn">
          <button 
            onClick={() => setSelectedJob(null)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${darkMode ? 'bg-slate-900 border-slate-800 text-cyan-400 hover:bg-slate-800' : 'bg-white border-slate-200 text-blue-600 hover:bg-slate-50 shadow-sm'}`}
          >
            ← Back to All Openings
          </button>

          <div className={`p-8 sm:p-12 rounded-3xl border shadow-xl space-y-8 ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6 border-slate-800/50">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3.5 py-1 text-xs font-semibold bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">{selectedJob.department}</span>
                  <span className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>• {selectedJob.location} • {selectedJob.type}</span>
                </div>
                <h1 className={`text-2xl sm:text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{selectedJob.title}</h1>
              </div>
              <button 
                onClick={() => handlePageChange('contact')}
                className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-600/30 hover:scale-105 transition-all shrink-0"
              >
                Apply for This Role
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Role Overview</h3>
                <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{selectedJob.description}</p>
              </div>

              <div>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Requirements & Qualifications</h3>
                <div className="space-y-3">
                  {selectedJob.requirements.map((req, idx) => (
                    <div key={idx} className={`flex items-start gap-3 p-4 rounded-xl border ${darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span className={`text-sm sm:text-base font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              🚀 Join Our Network
            </span>
            <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Current Career Openings</h1>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Are you an elite engineer, architect, or technical specialist looking for high-impact projects? Explore our active placements below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jobOpenings.map((job) => (
              <div 
                key={job.id} 
                onClick={() => setSelectedJob(job)}
                className={`p-8 rounded-2xl border cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 flex flex-col justify-between space-y-6 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">{job.department}</span>
                    <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{job.type}</span>
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{job.title}</h3>
                  <p className={`text-xs ${darkMode ? 'text-cyan-400/90' : 'text-blue-600'}`}>📍 {job.location}</p>
                  <p className={`text-sm leading-relaxed line-clamp-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{job.description}</p>
                </div>
                <span className="text-xs font-semibold text-cyan-400 hover:underline pt-2 border-t border-slate-800/50 block">View Full Details →</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}