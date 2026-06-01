import React from 'react';
import { ArrowUp, Github, Linkedin, Award } from 'lucide-react';

export default function Footer({ darkMode }) {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Linkedin className="w-4 h-4" />, url: 'https://www.linkedin.com/in/mangal1910/', colorClass: 'hover:text-cyber-cyan hover:shadow-neon-cyan hover:border-cyber-cyan' },
    { icon: <Github className="w-4 h-4" />, url: 'https://github.com/mangal1910', colorClass: 'hover:text-violet-400 hover:shadow-neon-violet hover:border-violet-500' },
    { icon: <Award className="w-4 h-4" />, url: 'https://www.hackerrank.com/profile/mangal192004', colorClass: 'hover:text-emerald-400 hover:shadow-neon-green hover:border-emerald-500' }
  ];

  return (
    <footer className={`border-t py-12 px-6 lg:px-8 relative z-10 transition-colors duration-300 ${
      darkMode 
        ? 'bg-space-obsidian/85 border-white/5 text-slate-500' 
        : 'bg-slate-100 border-slate-200 text-slate-500'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and trademark */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <span className={`text-base font-bold tracking-wider ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            MANGAL<span className="text-neon-magenta font-extrabold">.DEV</span>
          </span>
          <p className="text-xs font-mono">
            © 2026 Mangal Kumar. All rights reserved.
          </p>
        </div>

        {/* Brand icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-all duration-300 ${
                darkMode 
                  ? 'border-white/5 bg-white/5 text-slate-400 hover:text-white' 
                  : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900'
              } ${link.colorClass}`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Scroll back to top */}
        <button
          onClick={scrollToTop}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl border text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
            darkMode 
              ? 'border-white/5 hover:border-cyber-cyan bg-white/5 text-slate-300 hover:text-cyber-cyan shadow-sm hover:shadow-neon-cyan' 
              : 'border-slate-200 hover:border-slate-900 bg-white text-slate-600 hover:text-slate-900'
          }`}
          aria-label="Scroll to top"
        >
          Back To Top
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
