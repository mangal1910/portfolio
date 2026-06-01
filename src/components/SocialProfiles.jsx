import React from 'react';
import { Github, Linkedin, Award, ExternalLink } from 'lucide-react';

export default function SocialProfiles({ darkMode }) {
  const profiles = [
    {
      name: 'LinkedIn',
      username: '@mangal1910',
      url: 'https://www.linkedin.com/in/mangal1910/',
      description: 'Professional networking, articles, and corporate updates.',
      icon: <Linkedin className="w-8 h-8 text-sky-400 group-hover:text-sky-300" />,
      colorClass: 'hover:border-sky-500 hover:shadow-neon-cyan shadow-cyan-500/20',
      glowColor: 'rgba(0, 240, 255, 0.4)',
      borderColor: 'border-sky-500/20'
    },
    {
      name: 'GitHub',
      username: '@mangal1910',
      url: 'https://github.com/mangal1910',
      description: 'Repositories, open-source contributions, and experimental scripts.',
      icon: <Github className="w-8 h-8 text-violet-400 group-hover:text-violet-300" />,
      colorClass: 'hover:border-violet-500 hover:shadow-neon-violet shadow-violet-500/20',
      glowColor: 'rgba(139, 92, 246, 0.4)',
      borderColor: 'border-violet-500/20'
    },
    {
      name: 'HackerRank',
      username: '@mangal192004',
      url: 'https://www.hackerrank.com/profile/mangal192004',
      description: 'Problem-solving certificates, algorithms practice, and star badges.',
      icon: <Award className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300" />,
      colorClass: 'hover:border-emerald-500 hover:shadow-neon-green shadow-emerald-500/20',
      glowColor: 'rgba(34, 197, 94, 0.4)',
      borderColor: 'border-emerald-500/20'
    }
  ];

  return (
    <section className="py-12 px-6 lg:px-8 relative z-10 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-col items-start text-left p-6 rounded-2xl glass-card border transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
              darkMode 
                ? `${profile.borderColor} bg-space-obsidian/40` 
                : 'border-slate-200 bg-white'
            } ${profile.colorClass}`}
          >
            {/* Corner Decorative Glowing Dot */}
            <span className="absolute top-4 right-4 text-slate-500 group-hover:text-slate-200 transition-colors">
              <ExternalLink className="w-4 h-4" />
            </span>

            {/* Icon Circle */}
            <div className={`p-3.5 rounded-xl mb-4 transition-all duration-300 ${
              darkMode 
                ? 'bg-white/5 border border-white/10 group-hover:bg-white/10' 
                : 'bg-slate-50 border border-slate-200 group-hover:bg-slate-100'
            }`}>
              {profile.icon}
            </div>

            {/* Content */}
            <h3 className={`text-xl font-bold tracking-tight mb-1 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {profile.name}
            </h3>
            
            <span className={`text-xs font-mono font-semibold mb-3 tracking-wider uppercase ${
              darkMode ? 'text-slate-500 group-hover:text-cyber-cyan' : 'text-slate-400 group-hover:text-cyan-600'
            }`}>
              {profile.username}
            </span>

            <p className={`text-sm leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {profile.description}
            </p>

            {/* Glow Background Accent */}
            <div 
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-[2px] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"
              style={{ backgroundColor: profile.glowColor, boxShadow: `0 0 10px ${profile.glowColor}` }}
            ></div>
          </a>
        ))}
      </div>
    </section>
  );
}
