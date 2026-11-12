import React from 'react';
import { Calendar, MapPin, CheckCircle2, ChevronRight, Database, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Experience } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experiencia" className="py-24 relative bg-[#090a0f] border-t border-[#1e2333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge mb-3.5">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
            <span>02 // EXPERIÊNCIA PROFISSIONAL</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Trajetória Comprovada em Produção e Suporte
          </h2>
          
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Duas passagens formais que se complementam: o desenvolvimento e sustentação com Oracle Database na Inside Technology e o suporte corporativo de campo e Service Desk na DPRJ.
          </p>
        </div>

        {/* Experience Dossier Cards */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {experiences.map((exp: Experience, index: number) => {
            const isInside = exp.company.includes('Inside');

            return (
              <div
                key={index}
                className="rounded-xl p-6 sm:p-8 bg-[#0e1017] border border-[#232838] hover:border-[#353d54] transition-all shadow-subtle relative"
              >
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-5 border-b border-[#1d2230]">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#141722] border border-[#232838] flex items-center justify-center text-zinc-300 shrink-0 mt-0.5">
                      {isInside ? (
                        <Database className="w-5 h-5 text-zinc-300" />
                      ) : (
                        <ShieldCheck className="w-5 h-5 text-zinc-300" />
                      )}
                    </div>
                    
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161a26] border border-[#272f44] text-zinc-300">
                          {exp.employmentType}
                        </span>
                      </div>
                      
                      <p className="text-sm font-medium text-zinc-300 mt-1">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-1 text-xs text-zinc-400 font-mono">
                    <div className="flex items-center gap-1.5 text-zinc-200 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{exp.period}</span>
                      <span className="text-zinc-500">({exp.duration})</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-5 text-sm sm:text-[15px] text-zinc-300 leading-relaxed font-normal">
                  {exp.summary}
                </p>

                {/* Achievements & Technical Deliveries */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                    Responsabilidades e Entregas Técnicas:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.achievements.map((item: string, itemIdx: number) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500/80 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Row */}
                <div className="mt-6 pt-5 border-t border-[#1d2230] flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-zinc-400 mr-1">Competências:</span>
                  {exp.skills.map((skill: string, skillIdx: number) => (
                    <span
                      key={skillIdx}
                      className="tech-tag"
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
