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
      case 'Bot':      return <Bot className="w-4 h-4 text-blue-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-blue-400" />;
      case 'Cpu':      return <Cpu className="w-4 h-4 text-blue-400" />;
      case 'Terminal': return <Terminal className="w-4 h-4 text-blue-400" />;
      case 'Code':     return <Code className="w-4 h-4 text-blue-400" />;
      case 'Zap':      return <Zap className="w-4 h-4 text-blue-400" />;
      case 'Monitor':  return <Monitor className="w-4 h-4 text-blue-400" />;
      case 'Cloud':    return <Cloud className="w-4 h-4 text-blue-400" />;
      default:         return <Sparkles className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="ia-tools" className="py-20 relative bg-[#070b18]">
      <div className="divider-navy" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        {/* ── Cabeçalho ── */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="section-badge mb-4 mx-auto">
            <Sparkles className="w-3 h-3 text-blue-400" />
            <span>04 // Ecossistema Moderno de TI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Inteligência Artificial e Ferramentas que Utilizo
          </h2>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Utilizo IA de forma pragmática e categorizada como acelerador de produtividade, revisão de código e prototipação de soluções tecnológicas em TI.
          </p>
        </div>

        {/* Nota técnica */}
        <div className="max-w-4xl mx-auto mb-10 panel p-4 flex items-start gap-3.5 text-xs text-slate-300 leading-relaxed">
          <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-medium">Organização Técnica e Responsabilidade:</strong>{' '}
            Nem toda ferramenta é um modelo de linguagem (LLM). Abaixo, as soluções estão estruturadas
            por suas naturezas funcionais — diferenciando assistentes de IA, ambientes de desenvolvimento
            inteligente (IDEs), protocolos de contexto (MCP) e plataformas de publicação contínua.
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-mono px-4 py-2 rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-semibold shadow-blue-sm'
                  : 'bg-[#0c1221] text-slate-400 border border-[#172042] hover:text-white hover:border-blue-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Grid de ferramentas ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool: AITool, idx: number) => (
            <div
              key={idx}
              className="panel p-5 hover:border-blue-500/20 transition-all hover-lift flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#0e1628] border border-[#172042] flex items-center justify-center shrink-0">
                  {getIcon(tool.iconName)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-white text-sm leading-snug">{tool.name}</h3>
                  <p className="text-[11px] font-mono text-slate-500">{tool.provider}</p>
                </div>
              </div>

              <span className="inline-block font-mono text-[10px] text-blue-400/70 border border-[#172042] bg-[#0e1628] px-2 py-0.5 rounded-md mb-3 w-fit">
                {tool.category}
              </span>

              <p className="text-xs text-slate-300 leading-relaxed mb-4 flex-1">{tool.description}</p>

              <div className="pt-3 border-t border-[#172042]">
                <div className="text-[10px] font-mono text-blue-400/70 uppercase tracking-[0.12em] mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-blue-500/70" />
                  Como Utilizo na Prática:
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{tool.howIUse}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
