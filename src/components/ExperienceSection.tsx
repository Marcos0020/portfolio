import React from 'react';
import { Calendar, MapPin, CheckCircle2, ChevronRight, Database, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Experience } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experiencia" className="py-24 relative bg-darkBg/95 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> EXPERIÊNCIA PROFISSIONAL
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trajetória Comprovada em Produção e Suporte
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Duas passagens formais que se complementam: o desenvolvimento e sustentação com Oracle Database na Inside Technology e o suporte corporativo de campo e Service Desk na DPRJ.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp: Experience, index: number) => {
            const isInside = exp.company.includes('Inside');

            return (
              <div
                key={index}
                className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 relative overflow-hidden group shadow-xl"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    isInside
                      ? 'from-sky-500 via-cyan-400 to-blue-600'
                      : 'from-teal-500 via-emerald-400 to-cyan-500'
                  }`}
                ></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-md ${
                        isInside
                          ? 'bg-sky-950/60 border-sky-500/30 text-sky-400'
                          : 'bg-teal-950/60 border-teal-500/30 text-teal-400'
                      }`}
                    >
                      {isInside ? (
                        <Database className="w-6 h-6" />
                      ) : (
                        <ShieldCheck className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>
                        <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${exp.badgeColor}`}>
                          {exp.employmentType}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-slate-300 mt-1">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-1 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                      <span className="text-slate-600">({exp.duration})</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {exp.summary}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                    Responsabilidades e Entregas Técnicas:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.achievements.map((item: string, itemIdx: number) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400 mr-2">Competências:</span>
                  {exp.skills.map((skill: string, skillIdx: number) => (
                    <span
                      key={skillIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/60 text-slate-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
