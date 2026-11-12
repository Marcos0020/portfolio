import React from 'react';
import { Database, ShieldCheck, Code2, Sparkles, ArrowRight, MapPin, Download, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const { personal } = portfolioData;

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-subtle-grid">
      {/* Subtle architectural ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#141724]/40 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Main Editorial Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-[#0e1628] border border-[#172042] shadow-subtle">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-zinc-300">
                Disponível para Oportunidades · Rio de Janeiro & Remoto
              </span>
            </div>

            {/* Typography & Headline */}
            <div>
              <p className="font-mono text-zinc-400 text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
                <span>Olá, meu nome é</span>
                <span className="h-px w-6 bg-[#1e3a6e]"></span>
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                {personal.name}
              </h1>
              
              <h2 className="mt-3.5 text-xl sm:text-2xl font-semibold text-zinc-300 tracking-tight">
                Analista de Banco de Dados & Desenvolvedor PL/SQL | Suporte N1/N2
              </h2>
            </div>

            {/* Complete Professional Narrative (100% Content Preserved) */}
            <p className="text-zinc-300 text-sm sm:text-[15px] leading-relaxed max-w-2xl font-normal">
              Profissional de TI com mais de <strong className="text-white font-medium">3 anos de experiência prática em Oracle Database em ambiente corporativo de produção</strong> e trajetória profissional em <strong className="text-white font-medium">Análise de Suporte N1/N2 e sustentação de sistemas</strong>. Experiência em atendimentos presenciais e remotos, utilizando ferramentas como AnyDesk e TeamViewer, solucionando problemas de hardware, software e redes de computadores. Vivência com GLPI para abertura, registro e acompanhamento de chamados por e-mail e telefone, incluindo classificação de complexidade e definição de níveis de prioridade. Especialista em resolução de problemas, integrando conhecimentos em bancos de dados relacionais, rotinas PL/SQL, automação com Python e inteligência artificial aplicada ao desenvolvimento de software.
            </p>

            {/* Technology Core Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="tech-tag">
                <Database className="w-3.5 h-3.5 text-zinc-400" /> Oracle Database 19c
              </span>
              <span className="tech-tag">
                <Code2 className="w-3.5 h-3.5 text-zinc-400" /> SQL & PL/SQL (Procedures & Tuning)
              </span>
              <span className="tech-tag">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" /> Suporte N2 & GLPI
              </span>
              <span className="tech-tag">
                <Sparkles className="w-3.5 h-3.5 text-zinc-400" /> Automação Python & IA
              </span>
            </div>

            {/* Tactile High-End Action Controls */}
            <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
              <a
                href="#projetos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-white transition-all shadow-subtle"
              >
                <span>Conhecer Projetos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0e1628] border border-[#172042] text-zinc-200 font-medium text-xs sm:text-sm hover:bg-[#162040] hover:border-[#1e3a6e] transition-all"
              >
                <Download className="w-4 h-4 text-zinc-400" />
                <span>Currículo Profissional</span>
              </button>
            </div>

            {/* Metadata Footer */}
            <div className="flex items-center gap-4 pt-2 text-zinc-400 text-xs font-mono">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" /> GitHub
              </a>
              <span className="text-zinc-600">•</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-1.5 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" /> Rio de Janeiro, RJ
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Systems Dossier */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-md rounded-xl bg-[#0c1221] border border-[#172042] p-6 shadow-card">
              
              {/* Dossier Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#172042] text-[11px] font-mono">
                <div className="flex items-center gap-2 text-zinc-400">
                  <span className="w-2 h-2 rounded-sm bg-sky-500/80"></span>
                  <span className="uppercase tracking-wider">SYSTEM DOSSIER</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>ONLINE / PROD</span>
                </div>
              </div>

              {/* Identity Row */}
              <div className="py-5 flex items-center gap-4 border-b border-[#172042]">
                <div className="w-13 h-13 rounded-lg bg-[#111a30] border border-[#1a274e] flex items-center justify-center font-mono font-bold text-lg text-zinc-200">
                  MS
                </div>
                <div>
                  <h3 className="font-semibold text-base text-zinc-100">Marcos Sousa</h3>
                  <p className="text-xs text-zinc-400 font-mono">@Marcos0020 · GitHub</p>
                  <p className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-zinc-500" /> Rio de Janeiro, Brasil
                  </p>
                </div>
              </div>

              {/* Verified Metrics Matrix */}
              <div className="py-5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-3">
                  Métricas Validadas em Produção:
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-lg bg-[#111a30] border border-[#172042]">
                    <div className="text-xl font-bold text-zinc-100 font-mono">3+ anos</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">Oracle em Produção</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111a30] border border-[#172042]">
                    <div className="text-xl font-bold text-zinc-100 font-mono">4+ anos</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">Trajetória em TI</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111a30] border border-[#172042]">
                    <div className="text-sm font-bold text-zinc-200 font-mono pt-1">Service Desk</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">GLPI & N1/N2 Campo</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111a30] border border-[#172042]">
                    <div className="text-sm font-bold text-zinc-200 font-mono pt-1">Full Stack</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">NestJS, React & Python</div>
                  </div>
                </div>
              </div>

              {/* Status Verification Footer */}
              <div className="pt-4 border-t border-[#172042] flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-zinc-300 font-mono text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Formado em ADS (2026)
                </span>
                <a
                  href="#experiencia"
                  className="text-zinc-300 hover:text-white font-mono text-[11px] underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-all flex items-center gap-1"
                >
                  Ver carreira &rarr;
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
