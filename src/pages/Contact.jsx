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
          e.target.reset(); // Clear the form inputs
      })
      .catch((error) => {
          console.error('EmailJS Error:', error);
          setStatus('ERROR');
          setLoading(false);
      });
  };

  return (
    <div className={`relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 transition-colors duration-300 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
      
      {/* Refined Ambient Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold uppercase tracking-widest shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span>Enterprise Consultation</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-sans">Get in Touch With Our Team</h2>
        <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Connect directly with our talent architects or visit our global headquarters. We guarantee a response within 24 hours.
        </p>
      </div>

      {/* Two Column Grid: Left Headquarters Box & Right Contact Form Box */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12">
        
        {/* Left Box: Company Headquarters Info */}
        <div className={`p-8 sm:p-10 rounded-3xl border transition-all flex flex-col justify-between ${darkMode ? 'bg-[#0b1329] border-slate-800 shadow-2xl shadow-black/50' : 'bg-white border-slate-200/90 shadow-xl shadow-slate-200/50'}`}>
          <div className="space-y-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Global Headquarters
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight mt-1">LOGICORE LLC</h3>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-600 dark:text-blue-400 font-bold shrink-0 mt-0.5 border border-blue-500/20 group-hover:scale-105 transition-transform">
                  📍
                </div>
                <div>
                  <strong className="block font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-0.5">Address</strong>
                  <span className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} leading-relaxed block font-medium`}>
                    One Franklin Square, 1301 K St NW #300W<br />
                    Washington, DC 20005, USA
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-600 dark:text-blue-400 font-bold shrink-0 mt-0.5 border border-blue-500/20 group-hover:scale-105 transition-transform">
                  📞
                </div>
                <div>
                  <strong className="block font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-0.5">Phone</strong>
                  <span className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} font-semibold tracking-wide`}>+1 (800) 555-LOGICORE</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-600 dark:text-blue-400 font-bold shrink-0 mt-0.5 border border-blue-500/20 group-hover:scale-105 transition-transform">
                  ✉️
                </div>
                <div>
                  <strong className="block font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-0.5">Email</strong>
                  <span className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} font-semibold tracking-wide`}>contact@logicore.com</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-600 dark:text-blue-400 font-bold shrink-0 mt-0.5 border border-blue-500/20 group-hover:scale-105 transition-transform">
                  ⏰
                </div>
                <div>
                  <strong className="block font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-0.5">Business Hours</strong>
                  <span className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} font-medium`}>Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800">
            <p className={`text-xs leading-relaxed font-normal ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              LOGICORE LLC is a premier IT staffing and enterprise consulting firm delivering elite engineering talent globally.
            </p>
          </div>
        </div>

        {/* Right Box: Contact Form */}
        <div className={`p-8 sm:p-10 rounded-3xl border transition-all ${darkMode ? 'bg-[#0b1329] border-slate-800 shadow-2xl shadow-black/50' : 'bg-white border-slate-200/90 shadow-xl shadow-slate-200/50'}`}>
          <h3 className="text-2xl font-bold mb-6 tracking-tight">Send Us a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2 text-slate-500 dark:text-slate-400">Your Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="John Doe"
                className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-none ${darkMode ? 'bg-[#070d1e] border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-600' : 'bg-slate-50/80 border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-slate-900 placeholder-slate-400'}`}
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2 text-slate-500 dark:text-slate-400">Email Address</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="john@company.com"
                className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-none ${darkMode ? 'bg-[#070d1e] border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-600' : 'bg-slate-50/80 border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-slate-900 placeholder-slate-400'}`}
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2 text-slate-500 dark:text-slate-400">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                placeholder="+1 (555) 000-0000"
                className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-none ${darkMode ? 'bg-[#070d1e] border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-600' : 'bg-slate-50/80 border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-slate-900 placeholder-slate-400'}`}
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2 text-slate-500 dark:text-slate-400">Project Requirements / Message</label>
              <textarea 
                name="message" 
                rows="4" 
                required 
                placeholder="Tell us about your tech stack and hiring goals..."
                className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-none resize-none ${darkMode ? 'bg-[#070d1e] border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-600' : 'bg-slate-50/80 border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-slate-900 placeholder-slate-400'}`}
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold text-sm tracking-wide bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all disabled:opacity-50 active:scale-[0.99]"
            >
              {loading ? (
                <span className="inline-flex items-center space-x-2">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending Request...</span>
                </span>
              ) : 'Send Message'}
            </button>

            {status === 'SUCCESS' && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-sm font-medium text-center animate-fade-in">
                ✨ Thank you! Your message has been sent directly to our team.
              </div>
            )}
            
            {status === 'ERROR' && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-sm font-medium text-center animate-fade-in">
                ⚠️ Oops! Something went wrong. Please try again or email us directly.
              </div>
            )}
          </form>
        </div>

      </div>

      {/* Live Tracking Map Section */}
      <div className={`p-6 sm:p-10 rounded-3xl border transition-all ${darkMode ? 'bg-[#0b1329] border-slate-800 shadow-2xl shadow-black/50' : 'bg-white border-slate-200/90 shadow-xl shadow-slate-200/50'}`}>
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Live Location Tracking
            </span>
            <h3 className="text-2xl font-bold mt-1 tracking-tight">Our Washington, DC Headquarters Map</h3>
          </div>
          <a 
            href="https://maps.google.com/?q=1301+K+St+NW+Washington+DC+20005" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600/10 text-blue-600 dark:text-blue-400 hover:bg-blue-600/20 border border-blue-500/20 transition-all"
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