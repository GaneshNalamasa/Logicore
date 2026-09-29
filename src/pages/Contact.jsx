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
    <div className={`max-w-7xl mx-auto px-4 py-20 transition-colors duration-300 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
      
      {/* Header */}
      <div className="space-y-2 mb-12 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Get in Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Request Talent Consultation</h2>
        <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Connect with our talent architects or visit our global headquarters. We respond within 24 hours.
        </p>
      </div>

      {/* Two Column Grid: Left Headquarters Box & Right Contact Form Box */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        
        {/* Left Box: Company Headquarters Info */}
        <div className={`p-8 sm:p-12 rounded-2xl border transition-all flex flex-col justify-between ${darkMode ? 'bg-[#111827] border-slate-800/80 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'}`}>
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Global Headquarters
              </span>
              <h3 className="text-2xl font-bold mt-1">LOGICORE LLC</h3>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 font-bold mt-0.5">📍</span>
                <div>
                  <strong className="block font-semibold">Address:</strong>
                  <span className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    One Franklin Square, 1301 K St NW #300W<br />
                    Washington, DC 20005, USA
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-blue-500 font-bold mt-0.5">📞</span>
                <div>
                  <strong className="block font-semibold">Phone:</strong>
                  <span className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>+1 (800) 555-LOGICORE</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-blue-500 font-bold mt-0.5">✉️</span>
                <div>
                  <strong className="block font-semibold">Email:</strong>
                  <span className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>contact@logicore.com</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-blue-500 font-bold mt-0.5">⏰</span>
                <div>
                  <strong className="block font-semibold">Business Hours:</strong>
                  <span className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
            <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              LOGICORE LLC is a premier IT staffing and enterprise consulting firm delivering elite engineering talent globally.
            </p>
          </div>
        </div>

        {/* Right Box: Contact Form */}
        <div className={`p-8 sm:p-12 rounded-2xl border transition-all ${darkMode ? 'bg-[#111827] border-slate-800/80 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'}`}>
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2">Your Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="John Doe"
                className={`w-full p-4 rounded-xl border text-sm transition-all outline-none ${darkMode ? 'bg-slate-900 border-slate-800 focus:border-blue-500 text-white' : 'bg-slate-50 border-slate-300 focus:border-blue-600 text-slate-900'}`}
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2">Email Address</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="john@company.com"
                className={`w-full p-4 rounded-xl border text-sm transition-all outline-none ${darkMode ? 'bg-slate-900 border-slate-800 focus:border-blue-500 text-white' : 'bg-slate-50 border-slate-300 focus:border-blue-600 text-slate-900'}`}
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                placeholder="+1 (555) 000-0000"
                className={`w-full p-4 rounded-xl border text-sm transition-all outline-none ${darkMode ? 'bg-slate-900 border-slate-800 focus:border-blue-500 text-white' : 'bg-slate-50 border-slate-300 focus:border-blue-600 text-slate-900'}`}
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2">Project Requirements / Message</label>
              <textarea 
                name="message" 
                rows="4" 
                required 
                placeholder="Tell us about your tech stack and hiring goals..."
                className={`w-full p-4 rounded-xl border text-sm transition-all outline-none ${darkMode ? 'bg-slate-900 border-slate-800 focus:border-blue-500 text-white' : 'bg-slate-50 border-slate-300 focus:border-blue-600 text-slate-900'}`}
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 rounded-xl font-semibold text-sm tracking-wide bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all disabled:opacity-50"
            >
              {loading ? 'Sending Request...' : 'Send Message'}
            </button>

            {status === 'SUCCESS' && (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/25 text-green-500 text-sm font-medium text-center">
                Thank you! Your message has been sent directly to our team.
              </div>
            )}
            
            {status === 'ERROR' && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-500 text-sm font-medium text-center">
                Oops! Something went wrong. Please try again or email us directly.
              </div>
            )}
          </form>
        </div>

      </div>

      {/* Live Tracking Map Section */}
      <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${darkMode ? 'bg-[#111827] border-slate-800/80 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'}`}>
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Live Location Tracking
            </span>
            <h3 className="text-2xl font-bold mt-1">Our Washington, DC Headquarters Map</h3>
          </div>
          <a 
            href="https://maps.google.com/?q=1301+K+St+NW+Washington+DC+20005" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600/10 text-blue-600 dark:text-blue-400 hover:bg-blue-600/20 transition-all"
          >
            Open in Google Maps ↗
          </a>
        </div>

        <div className="w-full h-[400px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
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