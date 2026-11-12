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
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-subtle-grid">
      {/* Ambient blue glow — referência: glow centralizado azul */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-500/[0.06] rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-blue-600/[0.04] rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Painel principal do Hero (referência: painel bordered) ── */}
        <div className="panel p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

            {/* ── Esquerda: apresentação editorial ── */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">

              {/* Status pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e1628] border border-[#172042]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[11px] font-mono text-slate-300">
                  Disponível para Oportunidades · Rio de Janeiro &amp; Remoto
                </span>
              </div>

              {/* Headline */}
              <div>
                <p className="font-mono text-[11px] text-blue-400/80 tracking-[0.16em] uppercase mb-3 flex items-center gap-2">
                  <span className="h-px w-5 bg-blue-500/40" />
                  Olá, meu nome é
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-[4.2rem] font-extrabold tracking-[-0.03em] text-white leading-[1.0]">
                  {personal.name}
                </h1>
                <h2 className="mt-4 text-lg sm:text-xl font-semibold text-slate-300 tracking-tight">
                  Analista de Banco de Dados &amp; Desenvolvedor PL/SQL
                  <span className="text-blue-500 mx-2">|</span>
                  <span className="text-blue-400">Suporte N1/N2</span>
                </h2>
              </div>

              {/* Narrativa */}
              <p className="text-slate-400 text-sm sm:text-[15px] leading-[1.75] max-w-2xl">
                Profissional de TI com mais de{' '}
                <strong className="text-white font-medium">3 anos de experiência prática em Oracle Database em ambiente corporativo de produção</strong>{' '}
                e trajetória profissional em{' '}
                <strong className="text-white font-medium">Análise de Suporte N1/N2 e sustentação de sistemas</strong>.{' '}
                Experiência em atendimentos presenciais e remotos, utilizando ferramentas como AnyDesk e TeamViewer,
                solucionando problemas de hardware, software e redes de computadores. Vivência com GLPI para abertura,
                registro e acompanhamento de chamados por e-mail e telefone, incluindo classificação de complexidade
                e definição de níveis de prioridade. Especialista em resolução de problemas, integrando conhecimentos
                em bancos de dados relacionais, rotinas PL/SQL, automação com Python e inteligência artificial aplicada
                ao desenvolvimento de software.
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                <span className="tech-tag"><Database className="w-3 h-3 text-blue-400" /> Oracle Database 19c</span>
                <span className="tech-tag"><Code2 className="w-3 h-3 text-blue-400" /> SQL &amp; PL/SQL (Procedures &amp; Tuning)</span>
                <span className="tech-tag"><ShieldCheck className="w-3 h-3 text-blue-400" /> Suporte N2 &amp; GLPI</span>
                <span className="tech-tag"><Sparkles className="w-3 h-3 text-blue-400" /> Automação Python &amp; IA</span>
              </div>

              {/* CTAs — referência: botão preenchido azul + outlined */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#projetos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition-all shadow-blue-sm"
                >
                  <span>Conhecer Projetos</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={onOpenResumeModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#172042] bg-[#0e1628] text-slate-200 font-medium text-sm hover:border-blue-500/40 hover:bg-[#111a30] transition-all"
                >
                  <Download className="w-4 h-4 text-blue-400" />
                  <span>Currículo Profissional</span>
                </button>
              </div>

              {/* Meta links */}
              <div className="flex items-center gap-5 text-slate-500 text-xs font-mono">
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <GithubIcon className="w-3.5 h-3.5" /> GitHub
                </a>
                <span className="text-slate-700">·</span>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
                </a>
                <span className="text-slate-700">·</span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-slate-600" /> Rio de Janeiro, RJ
                </div>
              </div>
            </div>

            {/* ── Direita: dossier panel (referência: painel lateral com métricas) ── */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl bg-[#0a0f1e] border border-[#172042] overflow-hidden blue-glow">

                {/* Cabeçalho do painel */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-[#172042] bg-[#080d1a]">
                  <div className="flex items-center gap-2 font-mono text-[10px] text-blue-400 tracking-[0.14em] uppercase">
                    <span className="w-2 h-2 rounded-sm bg-blue-500" />
                    System Dossier
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ONLINE / PROD
                  </div>
                </div>

                {/* Identidade */}
                <div className="px-5 py-5 flex items-center gap-4 border-b border-[#172042]">
                  <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-900/10 border border-blue-500/30 flex items-center justify-center font-mono font-bold text-lg text-blue-300">
                    MS
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-white">Marcos Sousa</h3>
                    <p className="text-xs text-slate-500 font-mono">@Marcos0020 · GitHub</p>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-600" /> Rio de Janeiro, Brasil
                    </p>
                  </div>
                </div>

                {/* Métricas — referência: large bold numbers */}
                <div className="p-5">
                  <div className="font-mono text-[10px] text-blue-400/70 uppercase tracking-[0.14em] mb-3">
                    Métricas Validadas em Produção:
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { value: '3+ anos', label: 'Oracle em Produção', big: true },
                      { value: '4+ anos', label: 'Trajetória em TI', big: true },
                      { value: 'Service Desk', label: 'GLPI & N1/N2 Campo', big: false },
                      { value: 'Full Stack', label: 'NestJS, React & Python', big: false },
                    ].map((m) => (
                      <div key={m.label} className="metric-box">
                        <div className={`font-bold font-mono leading-tight ${m.big ? 'text-xl text-white' : 'text-sm text-blue-200'}`}>
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rodapé do painel */}
                <div className="px-5 pb-4 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Formado em ADS (2026)
                  </span>
                  <a
                    href="#experiencia"
                    className="font-mono text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-500/30 hover:decoration-blue-400 transition-all"
                  >
                    Ver carreira →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
