import React from 'react';
import { Database, ShieldCheck, Code, Sparkles, GraduationCap, CheckCircle, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { education } = portfolioData;

  const pillars = [
    {
      icon: <Database className="w-6 h-6 text-sky-400" />,
      title: "Desenvolvimento Oracle & Banco de Dados",
      description:
        "Mais de 3 anos de vivência em ambientes corporativos de produção: desenvolvimento PL/SQL, gestão de usuários, tablespaces, monitoramento de espaço, backup e recovery operacional e movimentação de dados com Oracle Data Pump.",
      badge: "Produção & Missão Crítica",
    },
    {
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      title: "Desenvolvimento SQL & PL/SQL",
      description:
        "Criação e manutenção de triggers, stored procedures e functions voltadas à automatização de regras de negócio corporativas e otimização de consultas (tuning) para redução de latência.",
      badge: "Automação no Banco",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
      title: "Service Desk N1/N2 & Infraestrutura",
      description:
        "Histórico estruturado em suporte corporativo presencial e remoto: triagem e gestão de chamados com GLPI, diagnóstico de hardware, redes locais e troubleshooting avançado de conectividade (TNS, Listener e Firewall).",
      badge: "Resolução de Incidentes",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-300" />,
      title: "Engenharia de Soluções & IA Aplicada",
      description:
        "Desenvolvimento de aplicações completas (NestJS, React, TypeScript e Python) e scripts de automação operacional, integrando ferramentas de ponta de IA generativa para acelerar entregas com alto padrão.",
      badge: "Inovação Tecnológica",
    },
  ];

  return (
    <section id="sobre" className="py-24 relative bg-darkBg border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" /> SOBRE MIM & TRAJETÓRIA
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Visão Sistêmica: Da Infraestrutura ao Núcleo de Dados
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Como minhas experiências práticas em suporte e banco de dados se conectam ao desenvolvimento moderno e à inteligência artificial para construir soluções de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Sou graduado em <strong className="text-white font-semibold">Análise e Desenvolvimento de Sistemas</strong> pela Universidade Estácio de Sá (concluído em 2026), com atuação profissional centrada na sustentação de ambientes tecnológicos e desenvolvimento com banco de dados Oracle.
            </p>
            <p>
              Minha trajetória combina duas bases complementares: a vivência no suporte técnico corporativo e Service Desk na <strong className="text-white font-semibold">Defensoria Pública do Estado do Rio de Janeiro (DPRJ)</strong> — onde atuei em campo com GLPI, diagnóstico de hardware e redes — e a atuação sólida como Analista de Banco de Dados na <strong className="text-white font-semibold">Inside Technology</strong>, gerenciando ambientes <strong className="text-white font-semibold">Oracle Database em produção</strong> por mais de 3 anos.
            </p>
            <p>
              Esse histórico me concede um diferencial que poucos especialistas em banco possuem: a capacidade de entender a dor real do usuário final na ponta, rastrear o caminho do pacote pela rede e firewall, e solucionar gargalos complexos diretamente na procedure ou na consulta SQL dentro do banco de dados.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm italic border-l-2 border-cyan-400 pl-4 py-1">
              "Acredito na tecnologia como instrumento de eficiência operacional. Onde existe uma tarefa manual repetitiva ou um gargalo de lentidão, existe a oportunidade de desenhar uma automação em PL/SQL ou um script em Python para elevar o padrão da equipe."
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="glass-panel rounded-2xl p-6 border border-sky-500/20">
              <div className="flex items-center gap-3 mb-4 text-sky-400">
                <GraduationCap className="w-6 h-6" />
                <h3 className="font-bold text-white text-base">Formação Acadêmica</h3>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-sm text-slate-200">
                  {education.academic[0].course}
                </p>
                <p className="text-xs text-cyan-400 font-mono">
                  {education.academic[0].institution} · {education.academic[0].period}
                </p>
                <p className="text-xs text-slate-400 pt-2 leading-relaxed">
                  {education.academic[0].description}
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Diferenciais que Entrego à Equipe
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>Prática real em produção:</strong> 3+ anos desenvolvendo Oracle sem receio de lidar com bases corporativas críticas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>Troubleshooting de ponta a ponta:</strong> Conhecimento prático de TNS, Listener, portas e regras de Firewall de rede.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>Desenvolvedor e Analista de Banco de Dados:</strong> Capacidade de escrever APIs em NestJS e scripts Python para criar ferramentas sob medida.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-800/80"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 mb-1">
                  {pillar.badge}
                </div>
                <h3 className="font-bold text-white text-base mb-2">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
