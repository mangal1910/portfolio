import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-card bg-opacity-75 py-3 shadow-lg' 
        : 'bg-transparent py-5'
    } ${
      darkMode 
        ? 'bg-space-obsidian/70 border-b border-white/5' 
        : 'bg-glass-light border-b border-slate-900/5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#about" className="flex items-center gap-2 group">
          <div className="p-1.5 rounded-lg bg-gradient-to-tr from-cyber-cyan to-neon-magenta shadow-neon-cyan transition-all duration-300 group-hover:scale-110">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className={`text-xl font-bold tracking-wider ${
            darkMode 
              ? 'text-white neon-text-cyan hover:text-cyber-cyan' 
              : 'text-slate-900 hover:text-cyan-600'
          } transition-all duration-300`}>
            MANGAL<span className="text-neon-magenta font-extrabold">.DEV</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyber-cyan after:to-neon-magenta after:transition-all after:duration-300 hover:after:w-full ${
                darkMode 
                  ? 'text-slate-300 hover:text-white hover:neon-text-cyan' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full border transition-all duration-500 cursor-pointer ${
              darkMode 
                ? 'border-white/10 hover:border-cyber-cyan bg-white/5 text-cyber-cyan shadow-neon-cyan' 
                : 'border-slate-200 hover:border-slate-900 bg-slate-100 text-slate-700'
            } hover:scale-110`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>
        </div>

        {/* Mobile Toggle & Menu Buttons */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full border transition-all duration-500 cursor-pointer ${
              darkMode 
                ? 'border-white/10 text-cyber-cyan shadow-neon-cyan bg-white/5' 
                : 'border-slate-200 text-slate-700 bg-slate-100'
            }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg border cursor-pointer transition-all duration-300 ${
              darkMode 
                ? 'border-white/10 text-slate-300 hover:text-white bg-white/5' 
                : 'border-slate-200 text-slate-700 hover:text-slate-900 bg-slate-100'
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] transition-all duration-500 transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } ${
          darkMode 
            ? 'bg-space-obsidian/95 border-t border-white/5' 
            : 'bg-slate-50/95 border-t border-slate-200'
        } backdrop-blur-lg flex flex-col justify-center px-8 pb-20`}
      >
        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-bold tracking-wider uppercase transition-all duration-300 ${
                darkMode 
                  ? 'text-slate-300 hover:text-cyber-cyan hover:neon-text-cyan' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
