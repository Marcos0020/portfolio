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
    <section id="projetos" className="py-24 relative bg-darkBg border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" /> PROJETOS & ENGENHARIA DE SOFTWARE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projetos Tecnológicos Independentes
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Soluções autorais desenvolvidas para resolver desafios reais de automação corporativa, integração de sistemas e sustentação de banco de dados. Códigos abertos no GitHub.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project, idx: number) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl flex flex-col justify-between border border-slate-800 hover:border-sky-500/40 transition-all duration-300 overflow-hidden group shadow-xl"
            >
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold">
                    {project.category}
                  </span>
                  {project.highlightBadge && (
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> {project.highlightBadge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="my-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="text-[11px] font-mono text-cyan-400 font-semibold mb-1 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" /> Problema que Resolve:
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Funcionalidades Implementadas:
                  </div>
                  <ul className="space-y-1.5">
                    {project.features.map((feat: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech: string, tIdx: number) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
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
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 border border-sky-500/30 text-sky-300 text-xs font-semibold hover:bg-sky-500/10 hover:border-sky-400 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Ver no GitHub</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 ml-0.5" />
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
