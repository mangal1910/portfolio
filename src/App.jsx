import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProfiles from './components/SocialProfiles';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Initialize theme from user preference or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
      document.body.classList.add('light-mode');
    } else {
      setDarkMode(true);
      document.body.classList.remove('light-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-500 overflow-x-hidden ${
      darkMode ? 'bg-space-obsidian text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Dynamic Background Glowing Mesh (Cyberpunk visual detail) */}
      {darkMode && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-cyber-cyan/5 blur-[120px]"></div>
          <div className="absolute top-[35%] right-[5%] w-[45vw] h-[45vw] rounded-full bg-neon-magenta/5 blur-[150px]"></div>
          <div className="absolute bottom-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-electric-violet/5 blur-[120px]"></div>
        </div>
      )}

      {/* Primary Sticky Header */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* About & Hero Section */}
        <Hero darkMode={darkMode} />
        
        {/* Social branding shortcuts */}
        <SocialProfiles darkMode={darkMode} />
        
        {/* Skills Division */}
        <Skills darkMode={darkMode} />
        <SoftSkills darkMode={darkMode} />
        
        {/* Projects Grid */}
        <Projects darkMode={darkMode} />
        
        {/* Education Milestone Timeline */}
        <Education darkMode={darkMode} />
        
        {/* Certifications Showcases */}
        <Certifications darkMode={darkMode} />
        
        {/* Achievements holographic grids */}
        <Achievements darkMode={darkMode} />
        
        {/* Contact direct submission forms */}
        <Contact darkMode={darkMode} />
      </main>

      {/* Global page footer credits */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
