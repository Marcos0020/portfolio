import React from 'react';
import { MapPin, Calendar, Database, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Experience } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experiencia" className="py-24 relative bg-[#080910]">
      <div className="divider-fade" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">

        {/* ── Cabeçalho à esquerda ── */}
        <div className="max-w-2xl mb-16">
          <div className="section-badge mb-4">
            <ShieldCheck className="w-3 h-3" />
            <span>02 // Experiência Profissional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Trajetória Comprovada em{' '}
            <span className="text-zinc-400 font-medium">Produção e Suporte</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-sm leading-relaxed">
            Duas passagens formais que se complementam: o desenvolvimento e sustentação com Oracle Database
            na Inside Technology e o suporte corporativo de campo e Service Desk na DPRJ.
          </p>
        </div>

        {/* ── Timeline vertical ── */}
        <div className="max-w-4xl">
          {experiences.map((exp: Experience, index: number) => {
            const isInside = exp.company.includes('Inside');

            return (
              <div key={index} className="relative flex gap-8 pb-16 last:pb-0">
                {/* Linha de tempo vertical */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[1.4rem] top-10 bottom-0 w-px bg-gradient-to-b from-[#1c2030] to-transparent" />
                )}

                {/* Ícone da timeline */}
                <div className="shrink-0 mt-1">
                  <div className="w-11 h-11 rounded-xl bg-[#0c0e18] border border-[#1c2030] flex items-center justify-center text-zinc-400 z-10 relative">
                    {isInside
                      ? <Database className="w-4.5 h-4.5 w-[18px] h-[18px]" />
                      : <ShieldCheck className="w-[18px] h-[18px]" />
                    }
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 min-w-0">
                  {/* Header: cargo + período */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#0c0e18] border border-[#1c2030] text-zinc-400">
                          {exp.employmentType}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-xs text-zinc-500 font-mono shrink-0">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-zinc-600" />
                        {exp.period}
                        <span className="text-zinc-600">·</span>
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-zinc-600" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Resumo */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                    {exp.summary}
                  </p>

                  {/* Entregas técnicas — lista sem ícone repetitivo */}
                  <div className="mb-6">
                    <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.14em] mb-3">
                      Responsabilidades e Entregas Técnicas:
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((item: string, itemIdx: number) => (
                        <li key={itemIdx} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                          <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-zinc-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills row */}
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="font-mono text-[10px] text-zinc-600 mr-1">stack:</span>
                    {exp.skills.map((skill: string, skillIdx: number) => (
                      <span key={skillIdx} className="tech-tag">{skill}</span>
                    ))}
                  </div>

                  {/* Separador inferior (exceto último) */}
                  {index < experiences.length - 1 && (
                    <div className="mt-10 h-px bg-[#1c2030]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
