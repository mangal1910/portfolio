import React from 'react';
import { Brain, Users, Sparkles, Zap } from 'lucide-react';

export default function SoftSkills({ darkMode }) {
  const softSkills = [
    {
      name: 'Problem Solving',
      icon: <Brain className="w-5 h-5 text-cyber-cyan" />,
      percentage: 95,
      color: 'from-cyan-400 to-blue-500',
      glowClass: 'shadow-neon-cyan',
      description: 'Ability to dissect algorithmic challenges and discover optimized, clean solutions.'
    },
    {
      name: 'Collaboration & Teamwork',
      icon: <Users className="w-5 h-5 text-neon-magenta" />,
      percentage: 90,
      color: 'from-magenta-400 to-pink-500',
      glowClass: 'shadow-neon-magenta',
      description: 'Active contributor in standups, code reviews, and pair-programming sessions.'
    },
    {
      name: 'Analytical Thinking',
      icon: <Sparkles className="w-5 h-5 text-violet-400" />,
      percentage: 92,
      color: 'from-violet-400 to-purple-500',
      glowClass: 'shadow-neon-violet',
      description: 'Applying data-driven insights and diagnostic thinking to optimize machine learning systems.'
    },
    {
      name: 'Adaptability & Learning',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      percentage: 95,
      color: 'from-amber-400 to-yellow-500',
      glowClass: 'shadow-neon-yellow',
      description: 'Rapidly absorbing new tech stacks, tools, and methodologies with infinite curiosity.'
    }
  ];

  return (
    <section className="py-12 px-6 lg:px-8 relative z-10 max-w-7xl mx-auto w-full">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight m-0 mb-3">
          Core{' '}
          <span className={`bg-gradient-to-r from-neon-magenta to-electric-violet bg-clip-text text-transparent ${
            darkMode ? 'neon-text-magenta' : ''
          }`}>
            Professional Strengths
          </span>
        </h2>
        <p className={`text-sm sm:text-base max-w-lg mx-auto ${
          darkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Interpersonal qualities and mental frameworks that ensure seamless integration within fast-paced engineering teams.
        </p>
      </div>

      {/* Grid of Soft Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {softSkills.map((skill) => (
          <div
            key={skill.name}
            className={`p-6 rounded-2xl glass-card border transition-all duration-300 ${
              darkMode 
                ? 'bg-space-obsidian/30 border-white/5' 
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            {/* Header info */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2.5">
                <div className={`p-2 rounded-lg border ${
                  darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                }`}>
                  {skill.icon}
                </div>
                <h3 className={`text-lg font-bold tracking-tight m-0 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {skill.name}
                </h3>
              </div>
              <span className={`text-sm font-mono font-bold ${
                darkMode ? 'text-slate-400' : 'text-slate-700'
              }`}>
                {skill.percentage}%
              </span>
            </div>

            {/* Glowing Progress bar */}
            <div className={`h-2.5 w-full rounded-full overflow-hidden mb-4 ${
              darkMode ? 'bg-white/5' : 'bg-slate-100'
            }`}>
              <div
                className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>

            {/* Description */}
            <p className={`text-sm leading-relaxed m-0 text-left ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
