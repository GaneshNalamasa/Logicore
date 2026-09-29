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

    // TODO: Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_ecxcmbg';
    const TEMPLATE_ID = '__ejs-test-mail-service_'; // e.g. template_xxxxx
    const PUBLIC_KEY = '77Z8JlrU2zgAasHJg';

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
    <div className={`max-w-4xl mx-auto px-4 py-20 transition-colors duration-300 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
      <div className={`p-8 sm:p-12 rounded-2xl border transition-all ${darkMode ? 'bg-[#111827] border-slate-800/80 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'}`}>
        
        <div className="space-y-2 mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Get in Touch
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight">Request Talent Consultation</h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Fill out the details below and our talent architects will connect with you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2">Your Name</label>
            <input 
              type="text" 
              name="name" // Matches {{name}} in your EmailJS template
              required 
              placeholder="John Doe"
              className={`w-full p-4 rounded-xl border text-sm transition-all outline-none ${darkMode ? 'bg-slate-900 border-slate-800 focus:border-blue-500 text-white' : 'bg-slate-50 border-slate-300 focus:border-blue-600 text-slate-900'}`}
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2">Email Address</label>
            <input 
              type="email" 
              name="email" // Matches {{email}} in your EmailJS template
              required 
              placeholder="john@company.com"
              className={`w-full p-4 rounded-xl border text-sm transition-all outline-none ${darkMode ? 'bg-slate-900 border-slate-800 focus:border-blue-500 text-white' : 'bg-slate-50 border-slate-300 focus:border-blue-600 text-slate-900'}`}
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2">Project Requirements / Message</label>
            <textarea 
              name="message" // Matches {{message}} in your EmailJS template
              rows="5" 
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
  );
}