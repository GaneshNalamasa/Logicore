// src/pages/Contact.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact({ darkMode }) {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const SERVICE_ID = 'service_ecxcmbg';
    const TEMPLATE_ID = 'template_90se3mh';
    const PUBLIC_KEY = 'tZz8mpHRFQRZqz3ly';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
          setStatus('SUCCESS');
          setLoading(false);
          e.target.reset();
      })
      .catch((error) => {
          console.error('EmailJS Error:', error);
          setStatus('ERROR');
          setLoading(false);
      });
  };

  return (
    <div className={`relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 transition-colors duration-300 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
      
      {/* Precision Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-blue-600/10 dark:bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-12 w-[350px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Header Section with Virginia Outline Background */}
      <div className="relative space-y-4 mb-20 text-center max-w-3xl mx-auto overflow-hidden py-10">
        
        {/* Virginia Background Map/Silhouette Layer */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80" // Replace with your actual Virginia outline image URL or local asset path
            alt="Virginia Outline" 
            className={`w-full max-w-lg object-contain transition-opacity duration-300 select-none ${
              darkMode 
                ? 'opacity-10 invert brightness-200' 
                : 'opacity-15 grayscale'
            } [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]`}
          />
        </div>

        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest shadow-sm backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse"></span>
          <span>Secure Executive Intake</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08]">
          Initiate Contact With <span className="bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 bg-clip-text text-transparent">Our Architects</span>
        </h1>
        <p className={`text-lg sm:text-xl font-normal leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          Direct lines to our engineering leadership. Experience guaranteed response parameters within 24 hours.
        </p>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
        
        {/* Left Box: Company Headquarters Info (5 Cols) */}
        <div className={`lg:col-span-5 p-8 sm:p-10 rounded-3xl border transition-all flex flex-col justify-between backdrop-blur-2xl relative overflow-hidden ${
          darkMode 
            ? 'bg-slate-900/80 border-slate-800/80 shadow-2xl shadow-black/90' 
            : 'bg-white/90 border-slate-200/90 shadow-2xl shadow-slate-200/50'
        }`}>
          {/* Subtle Corner Light Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />

          <div className="space-y-8 relative z-10">
            <div>
              <div className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20 mb-3">
                Global Operations
              </div>
              <h3 className="text-3xl font-black tracking-tight">LOGICORE LLC</h3>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex items-start space-x-4 group">
                <div className={`p-3 rounded-2xl font-bold shrink-0 mt-0.5 border transition-all group-hover:scale-105 ${darkMode ? 'bg-slate-800/80 border-slate-700 text-cyan-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
                  📍
                </div>
                <div>
                  <strong className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-0.5">Headquarters</strong>
                  <span className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} leading-relaxed block font-medium`}>
                    One Franklin Square, 1301 K St NW #300W<br />
                    Washington, DC 20005, USA
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className={`p-3 rounded-2xl font-bold shrink-0 mt-0.5 border transition-all group-hover:scale-105 ${darkMode ? 'bg-slate-800/80 border-slate-700 text-cyan-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
                  📞
                </div>
                <div>
                  <strong className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-0.5">Secure Voice</strong>
                  <span className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} font-semibold tracking-wide font-mono`}>+1 (800) 555-LOGICORE</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className={`p-3 rounded-2xl font-bold shrink-0 mt-0.5 border transition-all group-hover:scale-105 ${darkMode ? 'bg-slate-800/80 border-slate-700 text-cyan-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
                  ✉️
                </div>
                <div>
                  <strong className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-0.5">Electronic Mail</strong>
                  <span className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} font-semibold tracking-wide font-mono`}>contact@logicorell.com</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className={`p-3 rounded-2xl font-bold shrink-0 mt-0.5 border transition-all group-hover:scale-105 ${darkMode ? 'bg-slate-800/80 border-slate-700 text-cyan-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
                  ⏰
                </div>
                <div>
                  <strong className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-0.5">Availability</strong>
                  <span className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} font-medium`}>Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`mt-10 pt-6 border-t relative z-10 ${darkMode ? 'border-slate-800/80' : 'border-slate-100'}`}>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className={`font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>ENCRYPTION SECURED</span>
              <span className="font-bold text-blue-600 dark:text-cyan-400 tracking-wider">TLS 1.3</span>
            </div>
          </div>
        </div>

        {/* Right Box: Contact Form (7 Cols) */}
        <div className={`lg:col-span-7 p-8 sm:p-10 rounded-3xl border transition-all backdrop-blur-2xl relative overflow-hidden ${
          darkMode 
            ? 'bg-slate-900/80 border-slate-800/80 shadow-2xl shadow-black/90' 
            : 'bg-white/90 border-slate-200/90 shadow-2xl shadow-slate-200/50'
        }`}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black tracking-tight">Project Consultation Form</h3>
            <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
              Direct Route
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider mb-2 text-slate-400">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="John Doe"
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-none ${
                    darkMode 
                      ? 'bg-slate-950/60 border-slate-800 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 text-white placeholder-slate-600' 
                      : 'bg-slate-50/80 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider mb-2 text-slate-400">Corporate Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="john@enterprise.com"
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-none ${
                    darkMode 
                      ? 'bg-slate-950/60 border-slate-800 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 text-white placeholder-slate-600' 
                      : 'bg-slate-50/80 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider mb-2 text-slate-400">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                placeholder="+1 (555) 000-0000"
                className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-none ${
                  darkMode 
                    ? 'bg-slate-950/60 border-slate-800 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 text-white placeholder-slate-600' 
                    : 'bg-slate-50/80 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 text-slate-900 placeholder-slate-400'
                }`}
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider mb-2 text-slate-400">Technical Scope & Requirements</label>
              <textarea 
                name="message" 
                rows="4" 
                required 
                placeholder="Detail your engineering team size, stack specs, and timeline goals..."
                className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-none resize-none ${
                  darkMode 
                    ? 'bg-slate-950/60 border-slate-800 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 text-white placeholder-slate-600' 
                    : 'bg-slate-50/80 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 text-slate-900 placeholder-slate-400'
                }`}
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-xl shadow-blue-600/25 transition-all disabled:opacity-50 active:scale-[0.99] transform hover:-translate-y-0.5 cursor-pointer"
            >
              {loading ? (
                <span className="inline-flex items-center space-x-2 font-mono">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Transmitting Payload...</span>
                </span>
              ) : 'Submit Consultation Request'}
            </button>

            {status === 'SUCCESS' && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium text-center animate-fade-in font-mono">
                ✨ Verified: Transmission successfully routed to Washington, DC leadership.
              </div>
            )}
            
            {status === 'ERROR' && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm font-medium text-center animate-fade-in font-mono">
                ⚠️ Transmission interruption. Please email contact@logicorell.com directly.
              </div>
            )}
          </form>
        </div>

      </div>

      {/* Live Map Section */}
      <div className={`p-6 sm:p-10 rounded-3xl border transition-all backdrop-blur-2xl ${
        darkMode 
          ? 'bg-slate-900/80 border-slate-800/80 shadow-2xl shadow-black/90' 
          : 'bg-white/90 border-slate-200/90 shadow-2xl shadow-slate-200/50'
      }`}>
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20 inline-block mb-1">
              Geographic Coordinates
            </span>
            <h3 className="text-2xl font-bold tracking-tight">Washington, DC Headquarters</h3>
          </div>
          <a 
            href="https://maps.google.com/?q=1301+K+St+NW+Washington+DC+20005" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold font-mono bg-blue-500/10 text-blue-600 dark:text-cyan-400 hover:bg-blue-500/20 border border-blue-500/20 transition-all"
          >
            Open in Google Maps ↗
          </a>
        </div>

        <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-inner">
          <iframe
            title="LOGICORE LLC Headquarters Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1500342217643!2d-77.0322449234698!3d38.90264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7be5a73e6a7%3A0x8670bfa3f80c6553!2s1301%20K%20St%20NW%2C%20Washington%2C%20DC%2020005%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  );
}