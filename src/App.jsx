// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WhyLogicore from './pages/WhyLogicore';
import Contact from './pages/Contact';

// Import your custom logo from the assets folder (Update filename if different, e.g., logo.svg, logo.jpg)
import logoImage from './assets/your-logo.png';

// Scroll to top on route change helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
        
        {/* Navigation Bar */}
        <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${darkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-white/80 border-slate-200'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            
            {/* Logo & Description */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={logoImage} 
                alt="LOGICORE LLC Logo" 
                className="w-10 h-10 object-contain rounded-2xl group-hover:scale-105 transition-transform" 
              />
              <div className="flex flex-col">
                <span className={`text-lg font-extrabold tracking-wider ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  LOGICORE <span className="text-cyan-500">LLC</span>
                </span>
                {/* Updated small description under company name */}
                <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-400">
                  IT Staffing & Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
              <Link to="/" className="hover:text-cyan-500 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-cyan-500 transition-colors">About Us</Link>
              <Link to="/services" className="hover:text-cyan-500 transition-colors">Services</Link>
              <Link to="/why-logicore" className="hover:text-cyan-500 transition-colors">Why Logicore</Link>
              <Link to="/contact" className="hover:text-cyan-500 transition-colors">Contact</Link>
            </nav>

            {/* Right Side Action (Dark/Light Mode Toggle Only) */}
            <div className="hidden md:flex items-center">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-xl border text-sm transition-all ${darkMode ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
                title="Toggle Theme"
              >
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-xl border text-xs ${darkMode ? 'bg-slate-900 border-slate-800 text-amber-400' : 'bg-slate-100 border-slate-200 text-slate-700'}`}
                title="Toggle Theme"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-100 border-slate-200 text-slate-900'}`}
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>

          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className={`md:hidden border-b px-6 py-6 space-y-4 ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="flex flex-col space-y-3 font-semibold">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-500">Home</Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-500">About Us</Link>
                <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-500">Services</Link>
                <Link to="/why-logicore" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-500">Why Logicore</Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-500">Contact</Link>
              </div>
            </div>
          )}
        </header>

        {/* Main Route Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/services" element={<Services darkMode={darkMode} />} />
            <Route path="/why-logicore" element={<WhyLogicore darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className={`border-t mt-20 transition-colors ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-white border-slate-200 text-slate-600'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="LOGICORE LLC Logo" 
                className="w-8 h-8 object-contain rounded-xl" 
              />
              <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                LOGICORE LLC
              </span>
            </div>
            <p className="text-xs text-center">
              © {new Date().getFullYear()} LOGICORE LLC. All rights reserved. IT Staffing & Solutions.
            </p>
            <div className="flex items-center gap-6 text-xs">
              <Link to="/about" className="hover:text-cyan-500">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-cyan-500">Terms of Service</Link>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}