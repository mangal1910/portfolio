import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, HelpCircle } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

export default function Hero({ darkMode }) {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'Machine Learning Enthusiast',
    'Creative Problem Solver'
  ];
  
  const typingSpeed = isDeleting ? 30 : 80;
  const delayBetweenRoles = 2000;

  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];

    if (!isDeleting && text === currentFullText) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), delayBetweenRoles);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setText(
          isDeleting
            ? currentFullText.substring(0, text.length - 1)
            : currentFullText.substring(0, text.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Decorative Neon Spheres */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-cyber-cyan/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-neon-magenta/10 blur-[150px] pointer-events-none"></div>
      
      {/* Abstract Grid lines (Neon visual effect) */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
        darkMode ? 'opacity-100' : 'opacity-20'
      }`}></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left: Bio & CTAs */}
        <div className="md:col-span-7 flex flex-col items-start text-left space-y-6">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold tracking-wider uppercase ${
            darkMode 
              ? 'bg-cyber-cyan/5 border-cyber-cyan/30 text-cyber-cyan shadow-neon-cyan' 
              : 'bg-cyan-50 border-cyan-200 text-cyan-600'
          }`}>
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
            Available for Opportunities
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none m-0">
            Hi, I'm{' '}
            <span className={`bg-gradient-to-r from-cyber-cyan via-electric-violet to-neon-magenta bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(0,240,255,0.15)] ${
              darkMode ? 'neon-text-cyan' : ''
            }`}>
              Mangal Kumar
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold h-[40px] m-0 flex items-center">
            <span className={darkMode ? 'text-slate-200' : 'text-slate-800'}>
              I'm a{' '}
            </span>
            <span className="text-neon-magenta font-mono ml-2 border-r-2 border-neon-magenta animate-flicker pr-1">
              {text}
            </span>
          </h2>

          <p className={`text-base sm:text-lg max-w-xl leading-relaxed m-0 ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A passionate software engineer specializing in building modern web-native architectures and machine learning systems. I love turning complex data algorithms and business requirements into beautiful, elegant, and highly scalable user experiences.
          </p>

          {/* Social Profiles Grid */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyber-cyan to-electric-violet hover:from-cyan-400 hover:to-violet-600 shadow-neon-cyan hover:shadow-neon-violet hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Explore Work
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-all duration-300 hover:scale-105 cursor-pointer ${
                darkMode 
                  ? 'border-white/10 hover:border-neon-magenta hover:bg-neon-magenta/5 text-slate-200 hover:text-white shadow-sm hover:shadow-neon-magenta' 
                  : 'border-slate-300 hover:border-slate-800 hover:bg-slate-50 text-slate-700 hover:text-slate-900'
              }`}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right: Portrait Image with glowing ring */}
        <div className="md:col-span-5 flex justify-center items-center relative">
          
          {/* Glowing Aura Spheres */}
          <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-cyber-cyan to-neon-magenta opacity-30 blur-[40px] animate-pulse"></div>
          
          {/* Main Visual Container */}
          <div className="relative group">
            {/* Pulsating Neon Border Rings */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyber-cyan via-electric-violet to-neon-magenta opacity-75 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-700 animate-pulse-glow pointer-events-none"></div>
            
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-neon-magenta to-cyber-cyan opacity-40 blur-lg group-hover:opacity-75 transition-all duration-700 pointer-events-none"></div>
            
            {/* Image Wrap */}
            <div className={`relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 p-1.5 transition-all duration-500 bg-space-obsidian ${
              darkMode ? 'border-white/10' : 'border-slate-200 bg-white'
            }`}>
              <img 
                src={profileImg} 
                alt="Mangal Kumar" 
                className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 contrast-110 hover:contrast-100 transition-all duration-700 hover:scale-105"
              />
            </div>
            
            {/* Tech Float Icons (Slight ambient float decoration) */}
            <div className="absolute -top-3 -right-3 p-3 rounded-xl glass-card bg-opacity-70 border border-cyber-cyan/30 shadow-neon-cyan animate-float">
              <span className="text-xl font-bold text-cyber-cyan">💻</span>
            </div>
            <div className="absolute -bottom-3 -left-3 p-3 rounded-xl glass-card bg-opacity-70 border border-neon-magenta/30 shadow-neon-magenta animate-float" style={{ animationDelay: '-3s' }}>
              <span className="text-xl font-bold text-neon-magenta">📊</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
