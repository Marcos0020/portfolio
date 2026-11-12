import React, { useState } from 'react';
import { FolderGit2, ExternalLink, CheckCircle, Layers, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Full Stack', 'Banco de Dados', 'Automação Python', 'IA & Segurança'];

  const filteredProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter((p: Project) => p.category === activeFilter);

  return (
    <section id="projetos" className="py-20 relative bg-[#070b18]">
      <div className="divider-navy" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        {/* ── Cabeçalho + filtros ── */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="section-badge mb-4 mx-auto">
            <FolderGit2 className="w-3 h-3 text-blue-400" />
            <span>03 // Projetos &amp; Engenharia de Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Projetos Tecnológicos Independentes
          </h2>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Soluções autorais desenvolvidas para resolver desafios reais de automação corporativa,
            integração de sistemas e sustentação de banco de dados. Códigos abertos no GitHub.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs font-mono px-4 py-2 rounded-xl transition-all ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white font-semibold shadow-blue-sm'
                  : 'bg-[#0c1221] text-slate-400 border border-[#172042] hover:text-white hover:border-blue-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Grid de projetos ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project: Project, idx: number) => (
            <div
              key={idx}
              className="panel flex flex-col overflow-hidden hover:border-blue-500/20 transition-all hover-lift group"
            >
              {/* Header com categoria */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-[#172042] bg-[#0a0f1e]">
                <span className="font-mono text-[10px] text-blue-400 uppercase tracking-[0.14em]">
                  {project.category}
                </span>
                {project.highlightBadge && (
                  <span className="flex items-center gap-1 text-[10px] font-mono text-amber-400/80">
                    <Sparkles className="w-2.5 h-2.5" /> {project.highlightBadge}
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">{project.title}</h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">{project.description}</p>

                {/* Problema */}
                <div className="my-5 p-4 rounded-xl bg-[#0a0f1e] border border-[#172042]">
                  <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-blue-400/70 font-medium mb-1.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> Problema que Resolve:
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.problemSolved}</p>
                </div>

                {/* Features */}
                <div className="mb-5 flex-1">
                  <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-blue-400/70 mb-2.5">
                    Funcionalidades Implementadas:
                  </div>
                  <ul className="space-y-2">
                    {project.features.map((feat: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500/70 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: tech + GitHub */}
                <div className="pt-4 border-t border-[#172042]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech: string, tIdx: number) => (
                      <span key={tIdx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-[#0e1628] border border-[#172042] text-slate-200 text-xs font-semibold hover:border-blue-500/40 hover:bg-[#111a30] transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Ver no GitHub</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
