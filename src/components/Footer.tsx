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
    <footer className="bg-[#07080b] border-t border-[#1a1e2c] py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1a1e2c]">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#141722] border border-[#232838] flex items-center justify-center text-zinc-300">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-white text-sm">Marcos Sousa</span>
              <p className="text-[11px] text-zinc-400 font-mono">
                Banco de Dados Oracle · SQL & PL/SQL · Suporte N2 · Automação
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#11131c] border border-[#232838] hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#11131c] border border-[#232838] hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg bg-[#11131c] border border-[#232838] hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors"
              title="E-mail"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 px-3 rounded-lg bg-[#11131c] hover:bg-[#171a26] text-zinc-300 hover:text-white border border-[#232838] hover:border-zinc-500 transition-all flex items-center gap-1.5 font-mono text-[11px]"
              title="Voltar ao Topo"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Topo
            </button>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400">
          <p>
            © 2026 Marcos Sousa. Todos os direitos reservados.
          </p>
          <p className="font-mono text-zinc-400">
            Desenvolvido com React, TypeScript & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};
