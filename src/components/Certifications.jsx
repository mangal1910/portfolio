import React from 'react';
import { Award, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Certifications({ darkMode }) {
  const certifications = [
    {
      title: 'Problem Solving (Intermediate)',
      issuer: 'HackerRank Academic Authority',
      date: 'Verified',
      skills: ['Data Structures', 'Algorithms', 'Time Complexities', 'C++'],
      credentialUrl: 'https://www.hackerrank.com/profile/mangal192004',
      glowColor: 'hover:border-cyber-cyan hover:shadow-neon-cyan border-cyan-500/20',
      badgeColor: 'bg-cyber-cyan/5 text-cyber-cyan border-cyber-cyan/30'
    },
    {
      title: 'Full-Stack Web Development',
      issuer: 'Advanced Engineering Division',
      date: 'Verified',
      skills: ['React.js', 'Redux', 'Node.js & Express', 'Tailwind CSS'],
      credentialUrl: 'https://github.com/mangal1910',
      glowColor: 'hover:border-neon-magenta hover:shadow-neon-magenta border-magenta-500/20',
      badgeColor: 'bg-neon-magenta/5 text-neon-magenta border-neon-magenta/30'
    },
    {
      title: 'Machine Learning & Analytics',
      issuer: 'Data Science Specialists Institute',
      date: 'Verified',
      skills: ['Scikit-Learn', 'Python Computing', 'Predictive Diagnostics', 'Streamlit'],
      credentialUrl: 'https://mangal1910-deploymodeltest-app-try4ws.streamlit.app/',
      glowColor: 'hover:border-violet-500 hover:shadow-neon-violet border-violet-500/20',
      badgeColor: 'bg-violet-500/5 text-violet-400 border-violet-500/30'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'World Web Standards Council',
      date: 'Verified',
      skills: ['HTML5 & CSS3', 'Media Queries', 'CSS Grid & Flexbox', 'UI Usability'],
      credentialUrl: 'https://velosecom.netlify.app/',
      glowColor: 'hover:border-emerald-500 hover:shadow-neon-green border-emerald-500/20',
      badgeColor: 'bg-emerald-500/5 text-emerald-400 border-emerald-500/30'
    }
  ];

  return (
    <section className="py-12 px-6 lg:px-8 relative z-10 max-w-7xl mx-auto w-full">
      {/* Sub-Title */}
      <div className="text-center mb-12">
        <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight m-0 mb-3 ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}>
          Professional{' '}
          <span className={`bg-gradient-to-r from-cyber-cyan to-neon-magenta bg-clip-text text-transparent ${
            darkMode ? 'neon-text-cyan' : ''
          }`}>
            Certifications
          </span>
        </h3>
        <p className={`text-sm sm:text-base max-w-lg mx-auto ${
          darkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Independently verified certifications demonstrating specialized proficiency in algorithmic solving, web architectures, and analytical diagnostics.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <a
            key={cert.title}
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-col p-6 rounded-2xl glass-card border text-left transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
              darkMode 
                ? 'bg-space-obsidian/30 border-white/5' 
                : 'bg-white border-slate-200 shadow-sm'
            } ${cert.glowColor}`}
          >
            {/* Header info */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-2.5">
                <div className={`p-2 rounded-lg border ${
                  darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                }`}>
                  <Award className="w-5.5 h-5.5 text-violet-400" />
                </div>
                <div>
                  <h4 className={`text-lg font-bold tracking-tight m-0 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {cert.title}
                  </h4>
                  <span className={`text-xs font-mono font-semibold ${
                    darkMode ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    {cert.issuer}
                  </span>
                </div>
              </div>

              <span className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold font-mono uppercase border ${cert.badgeColor}`}>
                <ShieldCheck className="w-3.5 h-3.5" />
                {cert.date}
              </span>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-dashed border-slate-700/10">
              {cert.skills.map((s) => (
                <span
                  key={s}
                  className={`px-2 py-0.5 rounded text-[11px] font-semibold font-mono ${
                    darkMode ? 'bg-white/5 text-slate-400' : 'bg-slate-50 text-slate-600'
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>

            <ExternalLink className="absolute bottom-4 right-4 w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </section>
  );
}
