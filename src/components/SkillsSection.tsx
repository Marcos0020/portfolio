import React from 'react';
import { Database, Server, Layout, ShieldCheck, Wrench, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { SkillCategory } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skillCategories } = portfolioData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-4 h-4 text-zinc-300" />;
      case 'Server': return <Server className="w-4 h-4 text-zinc-300" />;
      case 'Layout': return <Layout className="w-4 h-4 text-zinc-300" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-zinc-300" />;
      case 'Wrench': return <Wrench className="w-4 h-4 text-zinc-300" />;
      default: return <Database className="w-4 h-4 text-zinc-300" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#090a0f] border-t border-[#1e2333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge mb-3.5">
            <Wrench className="w-3.5 h-3.5 text-zinc-400" />
            <span>05 // COMPETÊNCIAS TÉCNICAS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Tecnologias, Ferramentas & Ecossistema
          </h2>
          
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Habilidades práticas estruturadas por camadas funcionais. Os itens com destaque indicam forte vivência em produção e entregas corporativas reais.
          </p>
        </div>

        {/* Technical Specification Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category: SkillCategory, idx: number) => (
            <div
              key={idx}
              className="rounded-xl p-5 sm:p-6 bg-[#0e1017] border border-[#232838] hover:border-[#353d54] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#1d2230]">
                  <div className="w-9 h-9 rounded-md bg-[#141722] border border-[#232838] flex items-center justify-center text-zinc-300">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">
                      {category.title}
                    </h3>
                    <p className="text-[11px] font-mono text-zinc-400">
                      {category.skills.length} competências mapeadas
                    </p>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`text-xs px-2.5 py-1 rounded-md font-mono flex items-center gap-1.5 transition-all ${
                        skill.isTop
                          ? 'bg-[#181c28] border border-zinc-500/40 text-white font-medium shadow-sm'
                          : 'bg-[#131622] border border-[#202534] text-zinc-300 hover:border-zinc-500'
                      }`}
                    >
                      {skill.isTop && (
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Indicator Footer */}
              <div className="mt-5 pt-3 border-t border-[#1d2230] text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Validadas em projetos e rotinas profissionais</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
