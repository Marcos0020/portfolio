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
    <section id="projetos" className="py-24 relative bg-[#070b18] border-t border-[#172042]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="section-badge mb-3.5">
            <FolderGit2 className="w-3.5 h-3.5 text-zinc-400" />
            <span>03 // PROJETOS & ENGENHARIA DE SOFTWARE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Projetos Tecnológicos Independentes
          </h2>
          
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Soluções autorais desenvolvidas para resolver desafios reais de automação corporativa, integração de sistemas e sustentação de banco de dados. Códigos abertos no GitHub.
          </p>
        </div>

        {/* Minimalist Filter Controls */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs font-mono px-3.5 py-1.5 rounded-md transition-all ${
                activeFilter === cat
                  ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-subtle'
                  : 'bg-[#0c1221] text-zinc-400 border border-[#172042] hover:text-white hover:border-[#1e3a6e]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project: Project, idx: number) => (
            <div
              key={idx}
              className="rounded-xl flex flex-col justify-between bg-[#0c1221] border border-[#172042] hover:border-[#1e3a6e] transition-all shadow-subtle overflow-hidden group"
            >
              <div className="p-6 sm:p-7">
                
                {/* Meta Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#111a30] border border-[#172042] text-zinc-300">
                    {project.category}
                  </span>
                  
                  {project.highlightBadge && (
                    <span className="text-[10px] font-mono text-zinc-400 bg-[#111a30] border border-[#172042] px-2 py-0.5 rounded flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400/90" /> {project.highlightBadge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Problem Solved Callout */}
                <div className="my-5 p-4 rounded-lg bg-[#0e1628] border border-[#172042]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium mb-1.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Problema que Resolve:</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                {/* Features List */}
                <div className="mt-4">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                    Funcionalidades Implementadas:
                  </div>
                  <ul className="space-y-2">
                    {project.features.map((feat: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500/80 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Card Footer: Tech Tags & GitHub Link */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#172042] flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech: string, tIdx: number) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0e1628] border border-[#172042] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#111a30] border border-[#1a274e] text-zinc-200 text-xs font-semibold hover:bg-[#162040] hover:border-zinc-400 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Ver no GitHub</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400 ml-0.5" />
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
