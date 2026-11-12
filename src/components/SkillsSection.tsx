import React from 'react';
import { Database, Server, Layout, ShieldCheck, Wrench, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { SkillCategory } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skillCategories } = portfolioData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':   return <Database className="w-3.5 h-3.5 text-zinc-400" />;
      case 'Server':     return <Server className="w-3.5 h-3.5 text-zinc-400" />;
      case 'Layout':     return <Layout className="w-3.5 h-3.5 text-zinc-400" />;
      case 'ShieldCheck':return <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />;
      case 'Wrench':     return <Wrench className="w-3.5 h-3.5 text-zinc-400" />;
      default:           return <Database className="w-3.5 h-3.5 text-zinc-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#080910]">
      <div className="divider-fade" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">

        {/* ── Cabeçalho ── */}
        <div className="max-w-2xl mb-16">
          <div className="section-badge mb-4">
            <Wrench className="w-3 h-3" />
            <span>05 // Competências Técnicas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Tecnologias, Ferramentas{' '}
            <span className="text-zinc-400 font-medium">&amp; Ecossistema</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-sm leading-relaxed">
            Habilidades práticas estruturadas por camadas funcionais. Os itens com destaque indicam
            forte vivência em produção e entregas corporativas reais.
          </p>
        </div>

        {/* ── Inventário técnico: grid 3 colunas ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category: SkillCategory, idx: number) => (
            <div
              key={idx}
              className="rounded-xl bg-[#0c0e18] border border-[#1c2030] hover:border-[#2a3050] transition-all hover-lift overflow-hidden"
            >
              {/* Cabeçalho da categoria */}
              <div className="flex items-center gap-2.5 px-5 py-4 border-b border-[#1c2030] bg-[#0a0c16]">
                <div className="w-7 h-7 rounded-md bg-[#0c0e18] border border-[#1c2030] flex items-center justify-center">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-zinc-200 text-sm truncate">
                    {category.title}
                  </h3>
                  <p className="font-mono text-[10px] text-zinc-600">
                    {category.skills.length} competências mapeadas
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`text-xs px-2.5 py-1 rounded font-mono flex items-center gap-1.5 transition-all ${
                        skill.isTop
                          ? 'bg-[#111525] border border-zinc-500/30 text-zinc-100 font-medium'
                          : 'bg-[#0e1020] border border-[#1c2030] text-zinc-400 hover:border-[#2a3050] hover:text-zinc-200'
                      }`}
                    >
                      {skill.isTop && (
                        <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400 shrink-0" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rodapé */}
              <div className="px-5 pb-4 font-mono text-[10px] text-zinc-600 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                Validadas em projetos e rotinas profissionais
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
