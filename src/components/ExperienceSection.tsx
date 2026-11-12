import React from 'react';
import { Calendar, MapPin, CheckCircle2, ChevronRight, Database, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Experience } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experiencia" className="py-20 relative bg-[#070b18]">
      <div className="divider-navy" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        {/* ── Cabeçalho ── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-badge mb-4 mx-auto">
            <ShieldCheck className="w-3 h-3 text-blue-400" />
            <span>02 // Experiência Profissional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Trajetória Comprovada em Produção e Suporte
          </h2>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Duas passagens formais que se complementam: o desenvolvimento e sustentação com Oracle Database na Inside Technology e o suporte corporativo de campo e Service Desk na DPRJ.
          </p>
        </div>

        {/* ── Experience cards — painéis individuais ── */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {experiences.map((exp: Experience, index: number) => {
            const isInside = exp.company.includes('Inside');

            return (
              <div key={index} className="panel p-6 sm:p-8 hover:border-blue-500/20 transition-all">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-5 border-b border-[#172042]">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0e1628] border border-[#172042] flex items-center justify-center shrink-0 mt-0.5">
                      {isInside
                        ? <Database className="w-5 h-5 text-blue-400" />
                        : <ShieldCheck className="w-5 h-5 text-blue-400" />
                      }
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300">
                          {exp.employmentType}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-slate-300 mt-1">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-1 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5 text-slate-200 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-blue-400/60" />
                      {exp.period} <span className="text-slate-500">({exp.duration})</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-600" /> {exp.location}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-5 text-sm text-slate-300 leading-relaxed">{exp.summary}</p>

                {/* Achievements */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-[0.12em] text-blue-400/70 mb-3 flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5" />
                    Responsabilidades e Entregas Técnicas:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.achievements.map((item: string, itemIdx: number) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-blue-500/70 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="mt-6 pt-5 border-t border-[#172042] flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-blue-400/60 mr-1">Competências:</span>
                  {exp.skills.map((skill: string, skillIdx: number) => (
                    <span key={skillIdx} className="tech-tag">{skill}</span>
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
