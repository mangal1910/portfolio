import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Education({ darkMode }) {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'Gopal Narayan Singh University, Sasaram, Bihar',
      period: '2022 — 2026',
      location: 'India',
      gpa: '8.8 / 10.0',
      highlights: [
        'Advanced coursework in Algorithms, Data Structures, and Software Engineering',
        'Focused specialization in Machine Learning architectures and Python computing',
        'Designed interactive web prototypes, catalog solutions, and analytical engines',
        'Maintained high performance across core computational diagnostic modules'
      ],
      glowColor: 'bg-cyber-cyan shadow-neon-cyan',
      iconBorder: 'border-cyber-cyan/30'
    },
    {
      degree: 'Senior Secondary Education (XII — PCM)',
      institution: 'S.P.Jain College, Sasaram, Bihar',
      period: '2020 — 2022',
      location: 'India',
      gpa: '68.8% / First Division',
      highlights: [
        'Specialization in Physics, Chemistry, and Mathematics (PCM)',
        'Built a strong foundation in analytical methodologies and algebraic problems',
        'Participated in competitive programming challenges and mathematical olympiads',
        'Excelled in logical reasoning and statistical problem-solving models'
      ],
      glowColor: 'bg-neon-magenta shadow-neon-magenta',
      iconBorder: 'border-neon-magenta/30'
    },
    {
      degree: 'Matriculation (X — General)',
      institution: 'S D High School,Shivsagar,Rohtas, Bihar',
      period: '2020 — 2022',
      location: 'India',
      gpa: '81.0% / First Division',
      highlights: [
        'Specialization in Mathematics, Science,Socail Science ,Sanskrit , Hindi and English (General)',
        'Built a strong foundation in analytical methodologies and algebraic problems',
        'Excelled in logical reasoning and statistical problem-solving models',
        'Learning history and culture of India and world',
      ],
      glowColor: 'bg-neon-magenta shadow-neon-magenta',
      iconBorder: 'border-neon-magenta/30'
    }
  ];

  return (
    <section id="education" className="py-20 px-6 lg:px-8 relative z-10 max-w-5xl mx-auto w-full">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight m-0 mb-3">
          Education{' '}
          <span className={`bg-gradient-to-r from-electric-violet to-cyber-cyan bg-clip-text text-transparent ${
            darkMode ? 'neon-text-cyan' : ''
          }`}>
            & Milestones
          </span>
        </h2>
        <p className={`text-sm sm:text-base max-w-lg mx-auto ${
          darkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Academic foundations and engineering specializations that shaped my core analytical and development skills.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-slate-700/30 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-12">
        {/* Glow Line Indicator */}
        <div className={`absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-cyber-cyan via-electric-violet to-neon-magenta opacity-70`}></div>

        {educationData.map((edu, idx) => (
          <div key={idx} className="relative group text-left">
            {/* Pulsating timeline node */}
            <span className="absolute -left-[30px] sm:-left-[38px] top-1.5 flex h-7 sm:h-9 w-7 sm:w-9 items-center justify-center rounded-full bg-space-obsidian border border-slate-700 group-hover:scale-110 transition-all duration-300">
              <span className={`h-2.5 sm:h-3.5 w-2.5 sm:h-3.5 rounded-full ${edu.glowColor} transition-all duration-300`}></span>
            </span>

            {/* Glassmorphic card */}
            <div className={`p-6 sm:p-8 rounded-2xl glass-card border transition-all duration-500 hover:border-slate-500/30 ${
              darkMode 
                ? 'bg-space-obsidian/30 border-white/5 hover:bg-space-obsidian/40' 
                : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
            }`}>
              
              {/* Meta tags */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className={`text-xl sm:text-2xl font-bold tracking-tight m-0 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {edu.degree}
                </h3>
                
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider font-mono uppercase ${
                  darkMode 
                    ? 'bg-white/5 border border-white/10 text-slate-300' 
                    : 'bg-slate-100 border border-slate-200 text-slate-600'
                }`}>
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.period}
                </span>
              </div>

              {/* Institution / Location */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-sm font-semibold font-mono">
                <span className="flex items-center gap-1.5 text-violet-400">
                  <GraduationCap className="w-4.5 h-4.5" />
                  {edu.institution}
                </span>
                <span className={`flex items-center gap-1.5 ${
                  darkMode ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  <MapPin className="w-4 h-4" />
                  {edu.location}
                </span>
                <span className="text-emerald-400">
                  ★ Grade: {edu.gpa}
                </span>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3.5 pl-0 list-none m-0">
                {edu.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
