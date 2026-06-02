import React from 'react';
import { ExternalLink, Github, ShoppingBag, Database, Globe } from 'lucide-react';

export default function Projects({ darkMode }) {
  const projects = [
    {
      id: 'velos',
      title: 'Velos',
      subtitle: 'Modern E-commerce Platform',
      description: 'A modern, high-performance e-commerce shopping experience featuring an ultra-clean responsive catalog interface, modular state management, and smooth cart interactions.',
      features: [
        'Interactive product catalogs with advanced sorting and search filtering',
        'State persistence and cart management utilizing Redux Toolkit',
        'Fully responsive and visually cohesive interface styled with Tailwind CSS',
        'Optimized page loads and smooth image assets caching configurations'
      ],
      tech: ['React.js', 'Redux', 'Tailwind CSS', 'Vite', 'Node.js & Express'],
      deployUrl: 'https://velosecom.netlify.app/',
      githubUrl: 'https://github.com/mangal1910/E-commerce-platform',
      icon: <ShoppingBag className="w-6 h-6 text-cyber-cyan" />,
      accentColor: 'cyber-cyan',
      glowShadow: 'hover:shadow-neon-cyan hover:border-cyber-cyan border-cyan-500/20',
      tagColor: 'bg-cyber-cyan/5 border-cyber-cyan/20 text-cyber-cyan'
    },
    {
      id: 'telecom-churn',
      title: 'Telecom Churn Prediction',
      subtitle: 'Machine Learning Diagnostic Tool',
      description: 'An interactive analytical dashboard that leverages machine learning models to predict the probability of customer churn in telecommunications portfolios and visualizes customer statistics.',
      features: [
        'Classification model trained on curated telecom customer datasets',
        'Interactive input fields allowing custom customer profiles diagnostics',
        'Visual reports, predictive metrics, and risk assessment charts',
        'Serverless cloud deployment for instantaneous public testing access'
      ],
      tech: ['Python', 'Streamlit', 'Scikit-Learn', 'Pandas & NumPy', 'Machine Learning'],
      deployUrl: 'https://mangal1910-deploymodeltest-app-try4ws.streamlit.app/',
      githubUrl: 'https://github.com/mangal1910/CustomerChurnPrediction',
      icon: <Database className="w-6 h-6 text-neon-magenta" />,
      accentColor: 'neon-magenta',
      glowShadow: 'hover:shadow-neon-magenta hover:border-neon-magenta border-magenta-500/20',
      tagColor: 'bg-neon-magenta/5 border-neon-magenta/20 text-neon-magenta'
    },
    {
      id: 'Photo-Gallery',
      title: 'Photo Gallery',
      subtitle: 'Modern Photo Album',
      description: 'A modern photo gallery application with a clean and intuitive interface for browsing and organizing images.',
      features: [
        'Interactive photo browsing with smooth transitions and responsive design',
        'Search and filter functionality to easily find specific photos',
        'Fully responsive and visually cohesive interface styled with Tailwind CSS',
        'Optimized page loads and smooth image assets caching configurations'
      ],
      tech: ['React.js', 'Tailwind CSS', 'Vite'],
      deployUrl: 'https://lustrous-cajeta-009029.netlify.app/',
      githubUrl: 'https://github.com/mangal1910/Photo_Gallery',
      icon: <ShoppingBag className="w-6 h-6 text-cyber-cyan" />,
      accentColor: 'cyber-cyan',
      glowShadow: 'hover:shadow-neon-cyan hover:border-cyber-cyan border-cyan-500/20',
      tagColor: 'bg-cyber-cyan/5 border-cyber-cyan/20 text-cyber-cyan'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 relative z-10 max-w-7xl mx-auto w-full">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight m-0 mb-3">
          Featured{' '}
          <span className={`bg-gradient-to-r from-cyber-cyan via-electric-violet to-neon-magenta bg-clip-text text-transparent ${
            darkMode ? 'neon-text-cyan' : ''
          }`}>
            Projects & Work
          </span>
        </h2>
        <p className={`text-sm sm:text-base max-w-lg mx-auto ${
          darkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          A look at the web applications and data platforms I have engineered, complete with live deployment and source details.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className={`group relative flex flex-col justify-between p-8 rounded-3xl glass-card border transition-all duration-500 hover:-translate-y-2 ${
              darkMode 
                ? 'bg-space-obsidian/40 bg-opacity-40' 
                : 'bg-white border-slate-200 shadow-lg'
            } ${proj.glowShadow}`}
          >
            {/* Header Area */}
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl border ${
                  darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                }`}>
                  {proj.icon}
                </div>
                
                {/* Actions */}
                <div className="flex gap-2">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl border transition-all duration-300 ${
                      darkMode 
                        ? 'border-white/5 hover:border-white/20 bg-white/5 text-slate-400 hover:text-white' 
                        : 'border-slate-200 hover:border-slate-400 bg-slate-50 text-slate-600 hover:text-slate-900'
                    }`}
                    title="View Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={proj.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl border transition-all duration-300 ${
                      darkMode 
                        ? 'border-white/5 hover:border-white/20 bg-white/5 text-slate-400 hover:text-white' 
                        : 'border-slate-200 hover:border-slate-400 bg-slate-50 text-slate-600 hover:text-slate-900'
                    }`}
                    title="Visit Live Site"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Title Content */}
              <h3 className={`text-2xl font-bold tracking-tight m-0 mb-1 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {proj.title}
              </h3>
              <p className="text-sm font-semibold text-violet-400 font-mono mb-4">
                {proj.subtitle}
              </p>
              
              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {proj.description}
              </p>

              {/* Features Bullet List */}
              <div className="mb-8">
                <h4 className={`text-xs font-bold font-mono tracking-widest uppercase mb-3 ${
                  darkMode ? 'text-slate-400' : 'text-slate-800'
                }`}>
                  Core Capabilities
                </h4>
                <ul className="space-y-2 pl-0 list-none m-0 text-left">
                  {proj.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <span className={`text-xs font-mono font-bold mt-1 ${
                        proj.accentColor === 'cyber-cyan' ? 'text-cyber-cyan' : 'text-neon-magenta'
                      }`}>
                        ▶
                      </span>
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Badges Footer */}
            <div className="border-t border-dashed pt-5 mt-auto flex flex-wrap gap-2 border-slate-700/20">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className={`px-2.5 py-1 rounded-md border text-xs font-mono font-semibold tracking-wide transition-colors ${proj.tagColor}`}
                >
                  {t}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
