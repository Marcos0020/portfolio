import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { EducationItem, CourseItem } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="formacao" className="py-24 relative bg-[#080910]">
      <div className="divider-fade" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">

        {/* ── Cabeçalho ── */}
        <div className="max-w-2xl mb-16">
          <div className="section-badge mb-4">
            <GraduationCap className="w-3 h-3" />
            <span>06 // Formação &amp; Aprendizado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Educação Superior{' '}
            <span className="text-zinc-400 font-medium">&amp; Capacitação Técnica</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-sm leading-relaxed">
            Graduação formal em tecnologia somada a constante aprofundamento em bancos de dados relacionais,
            linguagens de programação e inteligência artificial moderna.
          </p>
        </div>

        {/* ── Layout assimétrico: graduação (5) + cursos (7) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Graduação — destaque editorial */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-5 font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
              <GraduationCap className="w-3.5 h-3.5" />
              Formação Acadêmica Formal
            </div>

            {education.academic.map((item: EducationItem, idx: number) => (
              <div
                key={idx}
                className="rounded-xl bg-[#0c0e18] border border-[#1c2030] overflow-hidden"
              >
                {/* Faixa de status */}
                <div className="px-5 py-3 bg-[#0a0c16] border-b border-[#1c2030] flex items-center justify-between">
                  <span className="font-mono text-[10px] text-emerald-400/80 tracking-wider uppercase">
                    {item.status}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">{item.period}</span>
                </div>

                <div className="p-6">
                  {/* Ícone */}
                  <div className="w-10 h-10 rounded-lg bg-[#0a0c16] border border-[#1c2030] flex items-center justify-center mb-5">
                    <GraduationCap className="w-5 h-5 text-zinc-400" />
                  </div>

                  <h4 className="text-xl font-bold text-white tracking-tight leading-snug mb-1">
                    {item.course}
                  </h4>
                  <p className="text-sm font-medium text-zinc-300">{item.institution}</p>
                  <p className="font-mono text-[11px] text-zinc-500 mt-1">Grau: {item.degree}</p>

                  <p className="mt-5 text-xs text-zinc-400 leading-relaxed pt-5 border-t border-[#1c2030]">
                    {item.description}
                  </p>

                  <p className="mt-4 font-mono text-[11px] text-zinc-500 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />
                    Ênfase em modelagem de dados, arquitetura e desenvolvimento
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Cursos e especializações */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-5 font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5" />
              Cursos Técnicos &amp; Especializações
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {education.courses.map((course: CourseItem, cIdx: number) => (
                <div
                  key={cIdx}
                  className="rounded-xl p-4 bg-[#0c0e18] border border-[#1c2030] hover:border-[#2a3050] transition-all hover-lift flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[10px] text-zinc-600 border border-[#1c2030] px-2 py-0.5 rounded inline-block mb-3">
                      {course.category}
                    </span>
                    <h5 className="font-medium text-zinc-200 text-xs sm:text-sm leading-snug">
                      {course.title}
                    </h5>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#1c2030] flex items-center justify-between text-[11px] font-mono">
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <Award className="w-3 h-3 text-zinc-500" />
                      {course.issuer}
                    </span>
                    <span className="text-emerald-400/80">Concluído</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Nota de rodapé */}
            <div className="mt-5 flex items-start gap-3 text-xs text-zinc-500 leading-relaxed border-l-2 border-[#1c2030] pl-4">
              <Award className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
              <span>
                Cursos complementares focados em capacitação contínua, cobrindo o ecossistema Oracle,
                SGBDs relacionais múltiplos, lógica de programação em Python e novas abordagens com agentes de IA.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
