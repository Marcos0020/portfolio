import React, { useState } from 'react';
import { Sparkles, Bot, Code, Cpu, Terminal, Zap, Monitor, Cloud, CheckCircle2, Info } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { AITool } from '../data/portfolioData';

export const AISection: React.FC = () => {
  const { aiTools } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = [
    'Todos',
    'Modelos de Linguagem & Assistentes',
    'IDEs & Ambientes com IA',
    'Hospedagem & Deploy',
  ];

  const filteredTools = selectedCategory === 'Todos'
    ? aiTools
    : aiTools.filter((t: AITool) => t.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-300" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-rose-400" />;
      case 'Code': return <Code className="w-5 h-5 text-sky-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-purple-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="ia-tools" className="py-24 relative bg-darkBg/95 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" /> ECOSSISTEMA MODERNO DE TI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Inteligência Artificial e Ferramentas que Utilizo
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Utilizo IA de forma pragmática e categorizada como acelerador de produtividade, revisão de código e prototipação de soluções tecnológicas em TI.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3.5 text-xs text-slate-300 leading-relaxed">
          <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-semibold">Organização Técnica e Responsabilidade:</strong> Nem toda ferramenta é um modelo de linguagem (LLM). Abaixo, as soluções estão estruturadas por suas naturezas funcionais — diferenciando assistentes de IA, ambientes de desenvolvimento inteligente (IDEs), protocolos de contexto (MCP) e plataformas de publicação contínua.
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool: AITool, idx: number) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {getIcon(tool.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base leading-snug">
                        {tool.name}
                      </h3>
                      <p className="text-[11px] font-mono text-cyan-400">
                        {tool.provider}
                      </p>
                    </div>
                  </div>
                </div>

                <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 mb-3">
                  {tool.category}
                </span>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {tool.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <div className="text-[10px] font-mono uppercase tracking-wider text-amber-300/90 mb-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-amber-400" /> Como Utilizo na Prática:
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {tool.howIUse}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
