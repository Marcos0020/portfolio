import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
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
    <section id="projetos" className="py-24 relative bg-[#080910]">
      <div className="divider-fade" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">

        {/* ── Cabeçalho à esquerda com filtros inline ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="section-badge mb-4">
              <FolderGit2 className="w-3 h-3" />
              <span>03 // Projetos &amp; Engenharia de Software</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
              Projetos Tecnológicos{' '}
              <span className="text-zinc-400 font-medium">Independentes</span>
            </h2>
            <p className="mt-3 text-zinc-500 text-sm leading-relaxed">
              Soluções autorais desenvolvidas para resolver desafios reais de automação corporativa,
              integração de sistemas e sustentação de banco de dados. Códigos abertos no GitHub.
            </p>
          </div>

          {/* Filtros — compactos, alinhados à direita */}
          <div className="flex flex-wrap gap-1.5 sm:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-mono px-3 py-1.5 rounded-md transition-all ${
                  activeFilter === cat
                    ? 'bg-white text-zinc-950 font-semibold'
                    : 'bg-transparent text-zinc-500 border border-[#1c2030] hover:text-zinc-200 hover:border-[#2e3447]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Grid editorial assimétrico ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project: Project, idx: number) => (
            <div
              key={idx}
              className="group relative rounded-xl bg-[#0c0e18] border border-[#1c2030] hover:border-[#2a3050] transition-all duration-200 overflow-hidden flex flex-col hover-lift"
            >
              {/* Faixa superior de categoria */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#1c2030] bg-[#0a0c16]">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  {project.category}
                </span>
                {project.highlightBadge && (
                  <span className="flex items-center gap-1 text-[10px] font-mono text-amber-400/80">
                    <Sparkles className="w-2.5 h-2.5" />
                    {project.highlightBadge}
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Título */}
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug mb-3">
                  {project.title}
                </h3>

                {/* Descrição */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-5 font-light">
                  {project.description}
                </p>

                {/* Problema que resolve — sem box extra */}
                <div className="mb-5">
                  <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-2">
                    Problema que Resolve:
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                {/* Features — lista minimalista */}
                <div className="mb-6 flex-1">
                  <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-2.5">
                    Funcionalidades Implementadas:
                  </p>
                  <ul className="space-y-1.5">
                    {project.features.map((feat: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed">
                        <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-zinc-600" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: tags + link */}
                <div className="pt-4 border-t border-[#1c2030]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech: string, tIdx: number) => (
                      <span key={tIdx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group/link"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Ver no GitHub</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 -translate-x-1 group-hover/link:translate-x-0 transition-all" />
                    <ExternalLink className="w-3 h-3 text-zinc-600" />
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
