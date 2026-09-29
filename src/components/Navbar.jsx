// src/components/Navbar.jsx
import React from 'react';
import logo from '../assets/your-logo.png';

export default function Navbar({ 
  currentPage, 
  handlePageChange, 
  darkMode, 
  setDarkMode, 
  mobileMenuOpen, 
  setMobileMenuOpen 
}) {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'careers', label: 'Current Openings' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3.5 cursor-pointer group py-2" onClick={() => handlePageChange('home')}>
            <img src={logo} alt="LOGICORE LLC Logo" className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className={`text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r bg-clip-text text-transparent ${darkMode ? 'from-cyan-400 via-blue-400 to-indigo-500' : 'from-blue-700 via-cyan-600 to-blue-900'}`}>
                  LOGICORE
                </span>
                <span className={`text-xl sm:text-2xl font-light tracking-wide ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  LLC
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="h-[1px] w-3 bg-cyan-500/80"></span>
                <span className={`text-[8.5px] sm:text-[9.5px] font-medium tracking-[0.2em] ${darkMode ? 'text-cyan-400/90' : 'text-blue-700'}`}>
                  INTELLIGENCE FOR A BRIGHTER TOMORROW
                </span>
                <span className="h-[1px] w-3 bg-cyan-500/80"></span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handlePageChange(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  currentPage === tab.id
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800/60' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dark Mode Switcher */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-sm ${
                darkMode 
                  ? 'bg-slate-900 border-slate-700 text-cyan-400 hover:bg-slate-800' 
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>{darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}</span>
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg border text-sm font-medium ${darkMode ? 'bg-slate-900 border-slate-800 text-cyan-400' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-lg ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-4 pt-2 pb-4 space-y-2 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          {navLinks.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handlePageChange(tab.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                currentPage === tab.id ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white' : darkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}