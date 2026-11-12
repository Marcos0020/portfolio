import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { EducationItem, CourseItem } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="formacao" className="py-24 relative bg-[#070b18] border-t border-[#172042]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge mb-3.5">
            <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
            <span>06 // FORMAÇÃO & APRENDIZADO</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Educação Superior & Capacitação Técnica
          </h2>
          
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Graduação formal em tecnologia somada a constante aprofundamento em bancos de dados relacionais, linguagens de programação e inteligência artificial moderna.
          </p>
        </div>

        {/* Dual Layout: Formal Degree vs. Technical Specializations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Formal University Education */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-zinc-400" />
              <span>Formação Acadêmica Formal</span>
            </h3>

            {education.academic.map((item: EducationItem, idx: number) => (
              <div
                key={idx}
                className="rounded-xl p-6 sm:p-7 bg-[#0c1221] border border-[#172042] shadow-subtle relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-lg bg-[#111a30] border border-[#172042] flex items-center justify-center text-zinc-300 mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <div className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#111a30] border border-[#1a274e] text-emerald-400 mb-3 font-medium">
                  {item.status} · {item.period}
                </div>

                <h4 className="text-xl font-bold text-white tracking-tight leading-snug">
                  {item.course}
                </h4>

                <p className="text-sm font-semibold text-zinc-200 mt-1">
                  {item.institution}
                </p>

                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  Grau: {item.degree}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed pt-4 border-t border-[#172042]">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 flex items-center gap-2 text-xs text-zinc-400 font-mono text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Ênfase em modelagem de dados, arquitetura e desenvolvimento</span>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Specializations & Courses */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-zinc-400" />
              <span>Cursos Técnicos & Especializações</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {education.courses.map((course: CourseItem, cIdx: number) => (
                <div
                  key={cIdx}
                  className="rounded-xl p-4 bg-[#0c1221] border border-[#172042] hover:border-[#1e3a6e] transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0e1628] border border-[#172042] text-zinc-400 inline-block mb-2.5">
                      {course.category}
                    </span>
                    <h5 className="font-medium text-zinc-100 text-xs sm:text-sm leading-snug mb-3">
                      {course.title}
                    </h5>
                  </div>
                  
                  <div className="pt-2.5 border-t border-[#172042] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Award className="w-3.5 h-3.5 text-zinc-400" /> {course.issuer}
                    </span>
                    <span className="text-emerald-400/90">Concluído</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Note banner */}
            <div className="mt-5 p-4 rounded-xl bg-[#0c1221] border border-[#172042] text-xs text-zinc-400 leading-relaxed flex items-center gap-3">
              <Award className="w-4 h-4 text-zinc-400 shrink-0" />
              <span>
                Cursos complementares focados em capacitação contínua, cobrindo o ecossistema Oracle, SGBDs relacionais múltiplos, lógica de programação em Python e novas abordagens com agentes de IA.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
