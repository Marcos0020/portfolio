import React from 'react';
import { Database, Server, Layout, ShieldCheck, Wrench, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { SkillCategory } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skillCategories } = portfolioData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-5 h-5 text-sky-400" />;
      case 'Server': return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-teal-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-amber-300" />;
      default: return <Database className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-darkBg border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Wrench className="w-3.5 h-3.5" /> COMPETÊNCIAS TÉCNICAS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tecnologias, Ferramentas & Ecossistema
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Habilidades práticas estruturadas por camadas funcionais. Os itens com destaque indicam forte vivência em produção e entregas corporativas reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category: SkillCategory, idx: number) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      {category.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">
                      {category.skills.length} competências mapeadas
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`text-xs px-3 py-1.5 rounded-lg font-mono flex items-center gap-1.5 transition-all ${
                        skill.isTop
                          ? 'bg-sky-500/15 border border-sky-500/40 text-sky-300 font-semibold shadow-sm shadow-sky-500/10'
                          : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-slate-700'
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

              <div className="mt-5 pt-3 border-t border-slate-800/60 text-[11px] text-slate-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                <span>Validadas em projetos e rotinas profissionais</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
