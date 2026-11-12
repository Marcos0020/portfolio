import React from 'react';
import { Database, Server, Layout, ShieldCheck, Wrench, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { SkillCategory } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skillCategories } = portfolioData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':    return <Database className="w-4 h-4 text-blue-400" />;
      case 'Server':      return <Server className="w-4 h-4 text-blue-400" />;
      case 'Layout':      return <Layout className="w-4 h-4 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-blue-400" />;
      case 'Wrench':      return <Wrench className="w-4 h-4 text-blue-400" />;
      default:            return <Database className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-[#070b18]">
      <div className="divider-navy" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        {/* ── Cabeçalho ── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-badge mb-4 mx-auto">
            <Wrench className="w-3 h-3 text-blue-400" />
            <span>05 // Competências Técnicas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tecnologias, Ferramentas &amp; Ecossistema
          </h2>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Habilidades práticas estruturadas por camadas funcionais. Os itens com destaque indicam forte vivência em produção e entregas corporativas reais.
          </p>
        </div>

        {/* ── Grid de categorias ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category: SkillCategory, idx: number) => (
            <div
              key={idx}
              className="panel overflow-hidden hover:border-blue-500/20 transition-all hover-lift"
            >
              {/* Cabeçalho da categoria */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-[#172042] bg-[#0a0f1e]">
                <div className="w-9 h-9 rounded-xl bg-[#0e1628] border border-[#172042] flex items-center justify-center">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">{category.title}</h3>
                  <p className="text-[11px] font-mono text-slate-500">
                    {category.skills.length} competências mapeadas
                  </p>
                </div>
              </div>

              {/* Skills tags */}
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`text-xs px-2.5 py-1.5 rounded-lg font-mono flex items-center gap-1.5 transition-all ${
                        skill.isTop
                          ? 'bg-blue-500/10 border border-blue-500/25 text-blue-200 font-medium'
                          : 'bg-[#0e1628] border border-[#172042] text-slate-300 hover:border-blue-500/20 hover:text-white'
                      }`}
                    >
                      {skill.isTop && <Star className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rodapé */}
              <div className="px-5 pb-4 font-mono text-[10px] text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Validadas em projetos e rotinas profissionais
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
