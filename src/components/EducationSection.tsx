import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { EducationItem, CourseItem } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="formacao" className="py-20 relative bg-[#070b18]">
      <div className="divider-navy" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        {/* ── Cabeçalho ── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-badge mb-4 mx-auto">
            <GraduationCap className="w-3 h-3 text-blue-400" />
            <span>06 // Formação &amp; Aprendizado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Educação Superior &amp; Capacitação Técnica
          </h2>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Graduação formal em tecnologia somada a constante aprofundamento em bancos de dados relacionais, linguagens de programação e inteligência artificial moderna.
          </p>
        </div>

        {/* ── Layout: graduação (5) + cursos (7) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Graduação */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-mono uppercase tracking-[0.12em] text-blue-400/70 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Formação Acadêmica Formal
            </h3>

            {education.academic.map((item: EducationItem, idx: number) => (
              <div key={idx} className="panel overflow-hidden">
                {/* Faixa de status */}
                <div className="px-5 py-3 bg-[#0a0f1e] border-b border-[#172042] flex items-center justify-between">
                  <span className="font-mono text-[10px] text-emerald-400 tracking-wider uppercase">{item.status}</span>
                  <span className="font-mono text-[10px] text-slate-500">{item.period}</span>
                </div>

                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0e1628] border border-[#172042] flex items-center justify-center mb-4">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-3 font-medium">
                    {item.status} · {item.period}
                  </div>

                  <h4 className="text-xl font-bold text-white tracking-tight leading-snug">{item.course}</h4>
                  <p className="text-sm font-semibold text-slate-200 mt-1">{item.institution}</p>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">Grau: {item.degree}</p>

                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed pt-4 border-t border-[#172042]">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Ênfase em modelagem de dados, arquitetura e desenvolvimento
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cursos */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-mono uppercase tracking-[0.12em] text-blue-400/70 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Cursos Técnicos &amp; Especializações
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {education.courses.map((course: CourseItem, cIdx: number) => (
                <div
                  key={cIdx}
                  className="panel-sm p-4 hover:border-blue-500/20 transition-all hover-lift flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-blue-400/60 border border-[#172042] bg-[#0e1628] px-2 py-0.5 rounded-md inline-block mb-2.5">
                      {course.category}
                    </span>
                    <h5 className="font-medium text-slate-200 text-xs sm:text-sm leading-snug mb-3">
                      {course.title}
                    </h5>
                  </div>

                  <div className="pt-2.5 border-t border-[#172042] flex items-center justify-between text-[11px] font-mono">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Award className="w-3.5 h-3.5 text-slate-500" /> {course.issuer}
                    </span>
                    <span className="text-emerald-400/90">Concluído</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Nota */}
            <div className="mt-5 panel-sm p-4 flex items-center gap-3 text-xs text-slate-400 leading-relaxed">
              <Award className="w-4 h-4 text-blue-400/60 shrink-0" />
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
