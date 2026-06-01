import React from 'react';
import { Star, Trophy, Target, GitPullRequest, Award } from 'lucide-react';

export default function Achievements({ darkMode }) {
  const achievements = [
    {
      title: 'HackerRank 5-Star C++',
      category: 'Competitive Programming',
      description: 'Achieved the maximum gold badge tier (5-Star) in C++ algorithms, data structures, and mathematical diagnostics on HackerRank.',
      icon: <Star className="w-6 h-6 text-amber-400 fill-amber-400" />,
      colorClass: 'hover:border-amber-400 hover:shadow-neon-yellow border-amber-500/20',
      badgeText: '5-STAR GOLD'
    },
    {
      title: '500+ Algorithmic Solved',
      category: 'Problem Solving Mastery',
      description: 'Solved over 500 computational and logic puzzles across core data structures, graph systems, and custom algorithms.',
      icon: <Trophy className="w-6 h-6 text-cyber-cyan" />,
      colorClass: 'hover:border-cyber-cyan hover:shadow-neon-cyan border-cyan-500/20',
      badgeText: 'MASTER SOLVER'
    },
    {
      title: 'Industrial ML & Web Deployments',
      category: 'Full-Stack Integration',
      description: 'Successfully architected and deployed interactive models (Telecom Churn Prediction) and fully responsive commerce designs (Velos) to active public servers.',
      icon: <Target className="w-6 h-6 text-neon-magenta" />,
      colorClass: 'hover:border-neon-magenta hover:shadow-neon-magenta border-magenta-500/20',
      badgeText: 'LIVE RELEASES'
    },
    {
      title: 'Open Source Maintenance',
      category: 'GitHub Contributions',
      description: 'Regularly maintain robust repository configurations, automation scripts, and reusable web elements for public developers utility.',
      icon: <GitPullRequest className="w-6 h-6 text-violet-400" />,
      colorClass: 'hover:border-violet-500 hover:shadow-neon-violet border-violet-500/20',
      badgeText: 'ACTIVE CONTRIBUTOR'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 lg:px-8 relative z-10 max-w-7xl mx-auto w-full">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight m-0 mb-3">
          Key{' '}
          <span className={`bg-gradient-to-r from-neon-magenta via-electric-violet to-cyber-cyan bg-clip-text text-transparent ${
            darkMode ? 'neon-text-magenta' : ''
          }`}>
            Achievements & Badges
          </span>
        </h2>
        <p className={`text-sm sm:text-base max-w-lg mx-auto ${
          darkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          A demonstration of my problem-solving skills, competitive rankings, and successfully launched software systems.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((ach) => (
          <div
            key={ach.title}
            className={`group relative flex flex-col p-6 rounded-2xl glass-card border text-left transition-all duration-500 hover:-translate-y-1.5 ${
              darkMode 
                ? 'bg-space-obsidian/30 border-white/5' 
                : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
            } ${ach.colorClass}`}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className={`p-2.5 rounded-xl border ${
                  darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                }`}>
                  {ach.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-bold tracking-tight m-0 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {ach.title}
                  </h3>
                  <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider">
                    {ach.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className={`text-sm leading-relaxed mb-4 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {ach.description}
            </p>

            {/* Badge Indicator tag */}
            <div className="mt-auto pt-3 border-t border-dashed border-slate-700/10 flex justify-between items-center">
              <span className={`text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-md border ${
                darkMode ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-600'
              }`}>
                {ach.badgeText}
              </span>
              <Award className="w-5 h-5 text-slate-500/30 group-hover:text-slate-500 transition-colors" />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
