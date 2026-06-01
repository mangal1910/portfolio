import React from 'react';
import { Code2, Monitor, Server, Cpu } from 'lucide-react';

export default function Skills({ darkMode }) {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="w-6 h-6 text-cyber-cyan" />,
      borderColor: 'border-cyber-cyan/20 hover:border-cyber-cyan',
      glowShadow: 'hover:shadow-neon-cyan shadow-cyan-500/10',
      badgeColor: 'bg-cyber-cyan/5 border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/10',
      skills: ['C++', 'Python', 'JavaScript (ES6+)', 'SQL', 'HTML5 & CSS3']
    },
    {
      title: 'Frontend Stacks',
      icon: <Monitor className="w-6 h-6 text-neon-magenta" />,
      borderColor: 'border-neon-magenta/20 hover:border-neon-magenta',
      glowShadow: 'hover:shadow-neon-magenta shadow-magenta-500/10',
      badgeColor: 'bg-neon-magenta/5 border-neon-magenta/30 text-neon-magenta hover:bg-neon-magenta/10',
      skills: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Next.js', 'Responsive Web Design']
    },
    {
      title: 'Backend & ML',
      icon: <Cpu className="w-6 h-6 text-violet-400" />,
      borderColor: 'border-violet-500/20 hover:border-violet-500',
      glowShadow: 'hover:shadow-neon-violet shadow-violet-500/10',
      badgeColor: 'bg-violet-500/5 border-violet-500/30 text-violet-400 hover:bg-violet-500/10',
      skills: ['Node.js', 'Express.js', 'Streamlit', 'Scikit-Learn', 'Pandas & NumPy', 'Model Deployment']
    },
    {
      title: 'Tools & Platforms',
      icon: <Server className="w-6 h-6 text-amber-400" />,
      borderColor: 'border-amber-500/20 hover:border-amber-500',
      glowShadow: 'hover:shadow-neon-yellow shadow-amber-500/10',
      badgeColor: 'bg-amber-500/5 border-amber-500/30 text-amber-400 hover:bg-amber-500/10',
      skills: ['Git & GitHub', 'VS Code', 'Netlify', 'Streamlit Cloud', 'HackerRank (5-Star C++)', 'REST APIs']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 relative z-10 max-w-7xl mx-auto w-full">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight m-0 mb-3">
          My{' '}
          <span className={`bg-gradient-to-r from-cyber-cyan to-electric-violet bg-clip-text text-transparent ${
            darkMode ? 'neon-text-cyan' : ''
          }`}>
            Technical Skills
          </span>
        </h2>
        <p className={`text-sm sm:text-base max-w-lg mx-auto ${
          darkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          A curated collection of languages, frameworks, backend technologies, and deployment tools I utilize to craft solid architectures.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className={`p-6 rounded-2xl glass-card border transition-all duration-500 hover:-translate-y-1 ${
              darkMode 
                ? 'bg-space-obsidian/40' 
                : 'bg-white border-slate-200 shadow-sm'
            } ${cat.borderColor} ${cat.glowShadow}`}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-xl border ${
                darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                {cat.icon}
              </div>
              <h3 className={`text-xl font-bold tracking-tight m-0 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {cat.title}
              </h3>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 rounded-lg border text-sm font-semibold tracking-wide transition-all duration-300 ${cat.badgeColor}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
