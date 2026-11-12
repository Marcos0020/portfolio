import React from 'react';
import { Database, ShieldCheck, Code2, Sparkles, ArrowRight, MapPin, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const { personal } = portfolioData;

  return (
    <section id="inicio" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-subtle-grid">
      {/* Ambient glow — topo centralizado, muito sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-sky-500/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-start">

          {/* ── Coluna esquerda: conteúdo editorial principal ── */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7">

            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0f1a] border border-[#1c2030]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono text-zinc-400 tracking-wide">
                Disponível para Oportunidades · Rio de Janeiro &amp; Remoto
              </span>
            </div>

            {/* Headline editorial */}
            <div className="space-y-3">
              <p className="font-mono text-[11px] text-zinc-500 tracking-[0.18em] uppercase flex items-center gap-2.5">
                <span className="h-px w-5 bg-zinc-700" />
                Olá, meu nome é
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold tracking-[-0.03em] text-white leading-[0.95]">
                {personal.name}
              </h1>

              <h2 className="text-lg sm:text-xl font-medium text-zinc-400 tracking-tight leading-snug">
                Analista de Banco de Dados &amp; Desenvolvedor PL/SQL
                <span className="text-zinc-600 mx-2">·</span>
                <span className="text-zinc-300">Suporte N1/N2</span>
              </h2>
            </div>

            {/* Parágrafo narrativo */}
            <p className="text-zinc-400 text-sm sm:text-[15px] leading-[1.75] max-w-xl font-light">
              Profissional de TI com mais de{' '}
              <span className="text-zinc-200 font-normal">3 anos de experiência prática em Oracle Database em ambiente corporativo de produção</span>{' '}
              e trajetória em{' '}
              <span className="text-zinc-200 font-normal">Análise de Suporte N1/N2 e sustentação de sistemas</span>.{' '}
              Experiência em atendimentos presenciais e remotos, utilizando ferramentas como AnyDesk e TeamViewer,
              solucionando problemas de hardware, software e redes de computadores. Vivência com GLPI para abertura,
              registro e acompanhamento de chamados por e-mail e telefone, incluindo classificação de complexidade
              e definição de níveis de prioridade. Especialista em resolução de problemas, integrando conhecimentos
              em bancos de dados relacionais, rotinas PL/SQL, automação com Python e inteligência artificial aplicada
              ao desenvolvimento de software.
            </p>

            {/* Tech pills — compactos, sem excesso */}
            <div className="flex flex-wrap gap-1.5">
              <span className="tech-tag"><Database className="w-3 h-3 text-zinc-500" /> Oracle Database 19c</span>
              <span className="tech-tag"><Code2 className="w-3 h-3 text-zinc-500" /> SQL &amp; PL/SQL</span>
              <span className="tech-tag"><ShieldCheck className="w-3 h-3 text-zinc-500" /> Suporte N2 &amp; GLPI</span>
              <span className="tech-tag"><Sparkles className="w-3 h-3 text-zinc-500" /> Python &amp; IA</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
              <a
                href="#projetos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-100 transition-colors shadow-sm"
              >
                Conhecer Projetos
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-transparent border border-[#1c2030] text-zinc-300 font-medium text-sm hover:border-[#2e3447] hover:text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-zinc-500" />
                Currículo Profissional
              </button>
            </div>

            {/* Links secundários */}
            <div className="flex items-center gap-5 text-zinc-500 text-xs font-mono">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" /> GitHub
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <span className="text-zinc-700">·</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-zinc-600" /> Rio de Janeiro, RJ
              </div>
            </div>
          </div>

          {/* ── Coluna direita: painel de identidade ── */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl bg-[#0c0e18] border border-[#1c2030] overflow-hidden">

              {/* Cabeçalho do painel */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#1c2030] bg-[#0a0c16]">
                <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-sm bg-sky-500/70" />
                  System Dossier
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  online / prod
                </div>
              </div>

              {/* Identidade */}
              <div className="px-5 py-5 flex items-center gap-4 border-b border-[#1c2030]">
                <div className="w-12 h-12 rounded-lg bg-[#111525] border border-[#1c2030] flex items-center justify-center font-mono font-bold text-base text-zinc-300 tracking-tight shrink-0">
                  MS
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-zinc-100">Marcos Sousa</h3>
                  <p className="text-[11px] text-zinc-500 font-mono mt-0.5">@Marcos0020 · GitHub</p>
                  <p className="text-[11px] text-zinc-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-zinc-600" /> Rio de Janeiro, Brasil
                  </p>
                </div>
              </div>

              {/* Métricas — grid 2×2 sem arredondamento excessivo */}
              <div className="p-5">
                <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.14em] mb-3">
                  Métricas Validadas em Produção:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: '3+ anos', label: 'Oracle em Produção' },
                    { value: '4+ anos', label: 'Trajetória em TI' },
                    { value: 'Service Desk', label: 'GLPI & N1/N2 Campo' },
                    { value: 'Full Stack', label: 'NestJS, React & Python' },
                  ].map((m) => (
                    <div key={m.label} className="p-3 bg-[#0a0c16] rounded-lg border border-[#1a1f30]">
                      <div className="text-sm font-bold text-zinc-200 font-mono leading-tight">{m.value}</div>
                      <div className="text-[10px] text-zinc-500 mt-0.5 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rodapé do painel */}
              <div className="px-5 pb-4 pt-0 flex items-center justify-between text-[11px]">
                <span className="font-mono text-zinc-500 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  Formado em ADS (2026)
                </span>
                <a
                  href="#experiencia"
                  className="font-mono text-zinc-400 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400 transition-all"
                >
                  Ver carreira →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
