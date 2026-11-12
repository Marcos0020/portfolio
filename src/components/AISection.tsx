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
      case 'Bot': return <Bot className="w-4 h-4 text-zinc-300" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-zinc-300" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-zinc-300" />;
      case 'Terminal': return <Terminal className="w-4 h-4 text-zinc-300" />;
      case 'Code': return <Code className="w-4 h-4 text-zinc-300" />;
      case 'Zap': return <Zap className="w-4 h-4 text-zinc-300" />;
      case 'Monitor': return <Monitor className="w-4 h-4 text-zinc-300" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-zinc-300" />;
      default: return <Sparkles className="w-4 h-4 text-zinc-300" />;
    }
  };

  return (
    <section id="ia-tools" className="py-24 relative bg-[#090a0f] border-t border-[#1e2333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="section-badge mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span>04 // ECOSSISTEMA MODERNO DE TI</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Inteligência Artificial e Ferramentas que Utilizo
          </h2>
          
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Utilizo IA de forma pragmática e categorizada como acelerador de produtividade, revisão de código e prototipação de soluções tecnológicas em TI.
          </p>
        </div>

        {/* Technical Notice Banner */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-lg bg-[#0e1017] border border-[#232838] flex items-start gap-3.5 text-xs text-zinc-300 leading-relaxed">
          <Info className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-medium">Organização Técnica e Responsabilidade:</strong> Nem toda ferramenta é um modelo de linguagem (LLM). Abaixo, as soluções estão estruturadas por suas naturezas funcionais — diferenciando assistentes de IA, ambientes de desenvolvimento inteligente (IDEs), protocolos de contexto (MCP) e plataformas de publicação contínua.
          </div>
        </div>

        {/* Category Controls */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-mono px-3.5 py-1.5 rounded-md transition-all ${
                selectedCategory === cat
                  ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-subtle'
                  : 'bg-[#0f1118] text-zinc-400 border border-[#232838] hover:text-white hover:border-[#353d54]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tool Cards Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool: AITool, idx: number) => (
            <div
              key={idx}
              className="rounded-xl p-5 bg-[#0e1017] border border-[#232838] hover:border-[#353d54] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-[#141722] border border-[#232838] flex items-center justify-center">
                      {getIcon(tool.iconName)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm leading-snug">
                        {tool.name}
                      </h3>
                      <p className="text-[11px] font-mono text-zinc-400">
                        {tool.provider}
                      </p>
                    </div>
                  </div>
                </div>

                <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[#131622] border border-[#202534] text-zinc-400 mb-3">
                  {tool.category}
                </span>

                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  {tool.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1d2230]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500/80" />
                  <span>Como Utilizo na Prática:</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
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
