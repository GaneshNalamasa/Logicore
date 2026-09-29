// src/pages/Contact.jsx
import React, { useState } from 'react';

export default function Contact({ darkMode }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          📬 Get in Touch
        </span>
        <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Contact LOGICORE LLC</h1>
        <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Whether you need elite tech talent augmentation or want to apply for a role, our team responds within 24 hours.
        </p>
      </div>

      {/* Main Grid for Info & Form with Equal Height Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">
        {/* Headquarters Information */}
        <div className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between space-y-8 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Headquarters</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl p-2.5 rounded-xl bg-cyan-500/10">📍</span>
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Location</h4>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    One Franklin Square<br />
                    1301 K St NW #300W<br />
                    Washington, DC 20005, USA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl p-2.5 rounded-xl bg-cyan-500/10">📞</span>
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Phone Number</h4>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>+1 (202) 555-0199</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl p-2.5 rounded-xl bg-cyan-500/10">✉️</span>
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Email Us</h4>
                  <p className={`text-sm mt-1 text-cyan-400`}>contact@logicorellc.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`text-xs p-4 rounded-2xl border ${darkMode ? 'bg-slate-950/50 border-slate-800/80 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
            💡 Our team of engagement managers and technical recruiters are available Monday through Friday to process inquiries.
          </div>
        </div>

        {/* Contact Form */}
        <div className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
          {submitted ? (
            <div className="text-center py-16 space-y-4 my-auto">
              <div className="text-5xl">🎉</div>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Message Sent Successfully!</h3>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Thank you for reaching out. One of our engagement managers or recruiters will contact you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 px-6 py-2.5 rounded-xl bg-cyan-600 text-white text-sm font-semibold">Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Send a Message</h3>
              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Your Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe" 
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-cyan-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600'}`}
                />
              </div>

              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@company.com" 
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-cyan-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600'}`}
                />
              </div>

              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Company / Organization</label>
                <input 
                  type="text" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder="Company Name LLC" 
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-cyan-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600'}`}
                />
              </div>

              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Message / Inquiry Details</label>
                <textarea 
                  rows={3} 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your staffing requirements..." 
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all resize-none ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-cyan-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600'}`}
                ></textarea>
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-600/30 hover:scale-[1.02] transition-all">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Full Width Map Section with Slightly Increased Height */}
      <div className={`max-w-7xl mx-auto p-6 sm:p-8 rounded-3xl border space-y-6 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Interactive Headquarters Map</h3>
            <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Visit our corporate offices at One Franklin Square, Washington, DC</p>
          </div>
          <a 
            href="https://maps.google.com/?q=1301+K+St+NW+#300W,+Washington,+DC+20005" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all"
          >
            Open in Google Maps ↗
          </a>
        </div>
        
        {/* Maximum Width, Slightly Increased Height Container */}
        <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-[340px] sm:h-[420px] w-full">
          <iframe 
            title="LOGICORE LLC Headquarters Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1504958043697!2d-77.03222382346985!3d38.90255597172346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcde3c87f1%3A0x808b8b8b8b8b8b8b!2s1301%20K%20St%20NW%20%23300w%2C%20Washington%2C%20DC%2020005!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
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