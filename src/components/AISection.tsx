import React, { useState } from 'react';
import { Sparkles, Bot, Code, Cpu, Terminal, Zap, Monitor, Cloud, Info } from 'lucide-react';
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
      case 'Bot':      return <Bot className="w-4 h-4 text-zinc-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-zinc-400" />;
      case 'Cpu':      return <Cpu className="w-4 h-4 text-zinc-400" />;
      case 'Terminal': return <Terminal className="w-4 h-4 text-zinc-400" />;
      case 'Code':     return <Code className="w-4 h-4 text-zinc-400" />;
      case 'Zap':      return <Zap className="w-4 h-4 text-zinc-400" />;
      case 'Monitor':  return <Monitor className="w-4 h-4 text-zinc-400" />;
      case 'Cloud':    return <Cloud className="w-4 h-4 text-zinc-400" />;
      default:         return <Sparkles className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <section id="ia-tools" className="py-24 relative bg-[#080910]">
      <div className="divider-fade" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">

        {/* ── Cabeçalho ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="section-badge mb-4">
              <Sparkles className="w-3 h-3" />
              <span>04 // Ecossistema Moderno de TI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
              Inteligência Artificial e{' '}
              <span className="text-zinc-400 font-medium">Ferramentas que Utilizo</span>
            </h2>
            <p className="mt-3 text-zinc-500 text-sm leading-relaxed">
              Utilizo IA de forma pragmática e categorizada como acelerador de produtividade,
              revisão de código e prototipação de soluções tecnológicas em TI.
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-1.5 sm:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-mono px-3 py-1.5 rounded-md transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-zinc-950 font-semibold'
                    : 'bg-transparent text-zinc-500 border border-[#1c2030] hover:text-zinc-200 hover:border-[#2e3447]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Nota técnica — faixa fina, não card boxado ── */}
        <div className="mb-10 flex items-start gap-3 text-xs text-zinc-500 leading-relaxed border-l-2 border-[#1c2030] pl-4">
          <Info className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-zinc-400">Organização Técnica e Responsabilidade:</strong>{' '}
            Nem toda ferramenta é um modelo de linguagem (LLM). Abaixo, as soluções estão estruturadas
            por suas naturezas funcionais — diferenciando assistentes de IA, ambientes de desenvolvimento
            inteligente (IDEs), protocolos de contexto (MCP) e plataformas de publicação contínua.
          </div>
        </div>

        {/* ── Grid de ferramentas ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool: AITool, idx: number) => (
            <div
              key={idx}
              className="rounded-xl bg-[#0c0e18] border border-[#1c2030] hover:border-[#2a3050] transition-all p-5 flex flex-col hover-lift"
            >
              {/* Header com ícone e nome */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#0a0c16] border border-[#1c2030] flex items-center justify-center shrink-0">
                  {getIcon(tool.iconName)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-zinc-100 text-sm leading-snug">{tool.name}</h3>
                  <p className="text-[11px] font-mono text-zinc-500">{tool.provider}</p>
                </div>
              </div>

              {/* Categoria */}
              <span className="inline-block font-mono text-[10px] text-zinc-600 border border-[#1c2030] px-2 py-0.5 rounded mb-3 w-fit">
                {tool.category}
              </span>

              {/* Descrição */}
              <p className="text-xs text-zinc-400 leading-relaxed mb-4 flex-1 font-light">
                {tool.description}
              </p>

              {/* Como uso */}
              <div className="pt-3 border-t border-[#1c2030]">
                <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-1.5">
                  Como Utilizo na Prática:
                </p>
                <p className="text-xs text-zinc-500 leading-relaxed">{tool.howIUse}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
