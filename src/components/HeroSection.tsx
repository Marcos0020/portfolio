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
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-glow">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 -right-20 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-400">
                Disponível para Oportunidades · Rio de Janeiro & Remoto
              </span>
            </div>

            <div>
              <p className="font-mono text-cyan-400 text-sm tracking-wide mb-2 flex items-center gap-2">
                <span>Olá, meu nome é</span>
                <span className="h-[1px] w-8 bg-cyan-400/40"></span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {personal.name}
              </h1>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Analista de Banco de Dados & Desenvolvedor PL/SQL | Suporte N1/N2
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Profissional de TI com mais de <strong className="text-white font-semibold">3 anos de experiência prática em Oracle Database corporativo em produção</strong> e histórico estruturado em <strong className="text-white font-semibold">Service Desk N1/N2 e sustentação</strong>. Especialista em resolução de problemas, unindo banco relacional, rotinas PL/SQL, automação em Python e IA aplicada ao desenvolvimento de software.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="tech-tag">
                <Database className="w-3.5 h-3.5 text-sky-400" /> Oracle Database 19c
              </span>
              <span className="tech-tag">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" /> SQL & PL/SQL (Procedures & Tuning)
              </span>
              <span className="tech-tag">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> Suporte N2 & GLPI
              </span>
              <span className="tech-tag">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Automação Python & IA
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 w-full sm:w-auto">
              <a
                href="#projetos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/25 hover:shadow-cyan-400/40 hover:brightness-110 transition-all duration-200"
              >
                <span>Conhecer Projetos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 border border-sky-500/30 text-sky-300 font-semibold text-sm hover:bg-slate-800 hover:border-sky-400 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Currículo Profissional</span>
              </button>
            </div>

            <div className="flex items-center gap-4 pt-3 text-slate-400 text-xs font-mono">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400" /> Rio de Janeiro, RJ
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-500 rounded-3xl blur-md opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative rounded-2xl glass-panel p-6 shadow-2xl overflow-hidden border border-sky-500/20">
                <div className="flex items-center gap-4 pb-5 border-b border-slate-800">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 p-[2px] shadow-lg shadow-sky-500/30">
                      <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center font-bold text-2xl text-cyan-300">
                        MS
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-darkBg flex items-center justify-center" title="Online / Disponível">
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-white">Marcos Sousa</h3>
                    <p className="text-xs text-cyan-400 font-mono">@Marcos0020 · GitHub</p>
                    <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-500" /> Rio de Janeiro, Brasil
                    </p>
                  </div>
                </div>

                <div className="my-5 bg-slate-950/80 rounded-xl p-4 border border-slate-800/90 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/80 text-[11px] text-slate-400">
                    <span className="text-sky-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-sky-500"></span> oracle_profile.sql
                    </span>
                    <span className="text-slate-600">UTF-8</span>
                  </div>

                  <div className="space-y-1 text-slate-300">
                    <p><span className="text-cyan-400">SELECT</span> name, role, experience_years</p>
                    <p><span className="text-cyan-400">FROM</span> it_professionals</p>
                    <p><span className="text-cyan-400">WHERE</span> sgbd = <span className="text-emerald-400">'Oracle Database'</span></p>
                    <p className="pl-4 text-slate-400"><span className="text-cyan-400">AND</span> status = <span className="text-emerald-400">'Ready for Impact'</span>;</p>
                    <div className="pt-2 text-slate-500 text-[10px]">
                      -- Output: 1 row retrieved [3+ years in PRD]
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-2xl font-extrabold text-cyan-300 font-mono">3+ anos</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Oracle em Produção</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-2xl font-extrabold text-sky-400 font-mono">4+ anos</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Trajetória em TI</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-2xl font-extrabold text-teal-300 font-mono">Service Desk</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">GLPI & N1/N2 Campo</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-2xl font-extrabold text-amber-300 font-mono">Full Stack</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">NestJS, React & Python</div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300 font-medium">
                    Formado em ADS (2026)
                  </span>
                  <a href="#experiencia" className="text-cyan-400 hover:underline flex items-center gap-0.5">
                    Ver carreira &rarr;
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
