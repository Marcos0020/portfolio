import React from 'react';
import { Database, ArrowUp, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06070c] border-t border-[#1c2030] py-10 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1c2030]">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0c0e18] border border-[#1c2030] flex items-center justify-center text-zinc-400">
              <Database className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-semibold text-zinc-200 text-sm">Marcos Sousa</span>
              <p className="text-[11px] font-mono text-zinc-600 mt-0.5">
                Banco de Dados Oracle · SQL &amp; PL/SQL · Suporte N2 · Automação
              </p>
            </div>
          </div>

          {/* Links sociais + topo */}
          <div className="flex items-center gap-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0c0e18] border border-[#1c2030] hover:border-[#2a3050] hover:text-zinc-200 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0c0e18] border border-[#1c2030] hover:border-[#2a3050] hover:text-zinc-200 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg bg-[#0c0e18] border border-[#1c2030] hover:border-[#2a3050] hover:text-zinc-200 transition-colors"
              title="E-mail"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 px-3 rounded-lg bg-[#0c0e18] border border-[#1c2030] hover:border-[#2a3050] hover:text-zinc-200 transition-colors flex items-center gap-1.5 font-mono"
              title="Voltar ao Topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Topo</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-zinc-600">
          <p>© 2026 Marcos Sousa. Todos os direitos reservados.</p>
          <p>Desenvolvido com React, TypeScript &amp; Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
};
