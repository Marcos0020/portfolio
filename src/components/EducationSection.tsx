import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { EducationItem, CourseItem } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="formacao" className="py-24 relative bg-darkBg/95 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" /> FORMAÇÃO & APRENDIZADO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Educação Superior & Capacitação Técnica
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Graduação formal em tecnologia somada a constante aprofundamento em bancos de dados relacionais, linguagens de programação e inteligência artificial moderna.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-5">
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Formação Acadêmica Formal
            </h3>

            {education.academic.map((item: EducationItem, idx: number) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 sm:p-7 border border-sky-500/25 relative overflow-hidden shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-5">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-3 font-semibold">
                  {item.status} · {item.period}
                </div>

                <h4 className="text-xl font-bold text-white leading-snug">
                  {item.course}
                </h4>

                <p className="text-sm font-semibold text-cyan-300 mt-1">
                  {item.institution}
                </p>

                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Grau: {item.degree}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed pt-4 border-t border-slate-800">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Ênfase em modelagem de dados, arquitetura e desenvolvimento</span>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Cursos Técnicos & Especializações
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {education.courses.map((course: CourseItem, cIdx: number) => (
                <div
                  key={cIdx}
                  className="glass-panel rounded-xl p-4 border border-slate-800 hover:border-sky-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-400 inline-block mb-2">
                      {course.category}
                    </span>
                    <h5 className="font-semibold text-white text-xs sm:text-sm leading-snug mb-2">
                      {course.title}
                    </h5>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1 text-slate-300">
                      <Award className="w-3.5 h-3.5 text-amber-400" /> {course.issuer}
                    </span>
                    <span className="text-emerald-400">Concluído</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 leading-relaxed flex items-center gap-3">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
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
