import React from 'react';
import { Database, ShieldCheck, Code, Sparkles, GraduationCap, CheckCircle, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { education } = portfolioData;

  const pillars = [
    {
      icon: <Database className="w-5 h-5 text-zinc-300" />,
      title: "Desenvolvimento Oracle & Banco de Dados",
      description:
        "Mais de 3 anos de vivência em ambientes corporativos de produção: desenvolvimento PL/SQL, gestão de usuários, tablespaces, monitoramento de espaço, backup e recovery operacional e movimentação de dados com Oracle Data Pump.",
      badge: "Produção & Missão Crítica",
      index: "01",
    },
    {
      icon: <Code className="w-5 h-5 text-zinc-300" />,
      title: "Desenvolvimento SQL & PL/SQL",
      description:
        "Criação e manutenção de triggers, stored procedures e functions voltadas à automatização de regras de negócio corporativas e otimização de consultas (tuning) para redução de latência.",
      badge: "Automação no Banco",
      index: "02",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-zinc-300" />,
      title: "Service Desk N1/N2 & Infraestrutura",
      description:
        "Experiência em atendimentos presenciais e remotos, utilizando ferramentas como AnyDesk e TeamViewer, solucionando problemas de hardware, software e redes de computadores. Vivência com GLPI para abertura, registro e acompanhamento de chamados por e-mail e telefone, incluindo classificação de complexidade e definição de níveis de prioridade.",
      badge: "Resolução de Incidentes",
      index: "03",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-zinc-300" />,
      title: "Engenharia de Soluções & IA Aplicada",
      description:
        "Desenvolvimento de aplicações completas (NestJS, React, TypeScript e Python) e scripts de automação operacional, integrando ferramentas de ponta de IA generativa para acelerar entregas com alto padrão.",
      badge: "Inovação Tecnológica",
      index: "04",
    },
  ];

  return (
    <section id="sobre" className="py-24 relative bg-[#090a0f] border-t border-[#1e2333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge mb-3.5">
            <Terminal className="w-3.5 h-3.5 text-zinc-400" />
            <span>01 // SOBRE MIM & TRAJETÓRIA</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Visão Sistêmica: Da Infraestrutura ao Núcleo de Dados
          </h2>
          
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Como minhas experiências práticas em suporte e banco de dados se conectam ao desenvolvimento moderno e à inteligência artificial para construir soluções de alto impacto.
          </p>
        </div>

        {/* Narrative & Side Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Authentic Technical Narrative */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 text-sm sm:text-[15px] leading-relaxed">
            <p>
              Sou graduado em <strong className="text-white font-medium">Análise e Desenvolvimento de Sistemas</strong> pela Universidade Estácio de Sá (concluído em 2026), com atuação profissional centrada na sustentação de ambientes tecnológicos e desenvolvimento com banco de dados Oracle.
            </p>
            <p>
              Minha trajetória combina duas bases complementares: a atuação sólida como Analista de Banco de Dados na <strong className="text-white font-medium">Inside Technology</strong>, gerenciando ambientes <strong className="text-white font-medium">Oracle Database em produção</strong> por mais de 3 anos, e a trajetória profissional em <strong className="text-white font-medium">Análise de Suporte N1/N2 e Service Desk na Defensoria Pública do Estado do Rio de Janeiro (DPRJ)</strong>. Nessa atuação, consolidei <strong className="text-white font-medium">experiência em atendimentos presenciais e remotos, utilizando ferramentas como AnyDesk e TeamViewer, solucionando problemas de hardware, software e redes de computadores</strong>, somada a sólida <strong className="text-white font-medium">vivência com GLPI para abertura, registro e acompanhamento de chamados por e-mail e telefone, incluindo classificação de complexidade e definição de níveis de prioridade</strong>.
            </p>
            <p>
              Esse histórico me concede um diferencial que poucos especialistas em banco possuem: a capacidade de entender a dor real do usuário final na ponta, rastrear o caminho do pacote pela rede e firewall, e solucionar gargalos complexos diretamente na procedure ou na consulta SQL dentro do banco de dados.
            </p>
            
            <div className="border-l-2 border-zinc-700 pl-4 py-2 my-2">
              <p className="text-zinc-400 text-xs sm:text-sm italic leading-relaxed">
                "Acredito na tecnologia como instrumento de eficiência operacional. Onde existe uma tarefa manual repetitiva ou um gargalo de lentidão, existe a oportunidade de desenhar uma automação em PL/SQL ou um script em Python para elevar o padrão da equipe."
              </p>
            </div>
          </div>

          {/* Right Column: Structured Educational & Operational Modules */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Profile Overview Card with Photo */}
            <div className="rounded-xl p-5 bg-[#0e1017] border border-[#232838] flex items-center gap-4">
              <img
                src="/marcos-sousa.jpg"
                alt="Marcos Sousa"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover object-top border border-[#282f42] shrink-0 shadow-sm"
              />
              <div>
                <h4 className="text-sm font-semibold text-white">Marcos Vinicius dos Santos Sousa</h4>
                <p className="text-xs text-zinc-400 font-mono">Analista de Banco de Dados & Suporte N1/N2</p>
                <p className="text-[11px] text-emerald-400 font-mono mt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Disponível para Oportunidades</span>
                </p>
              </div>
            </div>

            {/* Academic Module */}
            <div className="rounded-xl p-5 bg-[#0e1017] border border-[#232838]">
              <div className="flex items-center gap-2.5 mb-3 text-zinc-200">
                <GraduationCap className="w-5 h-5 text-zinc-400" />
                <h3 className="font-semibold text-white text-sm">Formação Acadêmica</h3>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-sm text-zinc-200">
                  {education.academic[0].course}
                </p>
                <p className="text-xs text-zinc-400 font-mono">
                  {education.academic[0].institution} · {education.academic[0].period}
                </p>
                <p className="text-xs text-zinc-400 pt-2 leading-relaxed">
                  {education.academic[0].description}
                </p>
              </div>
            </div>

            {/* Differential Strengths Module */}
            <div className="rounded-xl p-5 bg-[#0e1017] border border-[#232838]">
              <h3 className="font-semibold text-white text-sm mb-3.5 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Diferenciais que Entrego à Equipe
              </h3>
              <ul className="space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-zinc-500 text-[11px] pt-0.5">01</span>
                  <span><strong className="text-zinc-100 font-medium">Prática real em produção:</strong> 3+ anos desenvolvendo Oracle sem receio de lidar com bases corporativas críticas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-zinc-500 text-[11px] pt-0.5">02</span>
                  <span><strong className="text-zinc-100 font-medium">Troubleshooting de ponta a ponta:</strong> Conhecimento prático de TNS, Listener, portas e regras de Firewall de rede.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-zinc-500 text-[11px] pt-0.5">03</span>
                  <span><strong className="text-zinc-100 font-medium">Desenvolvedor e Analista de Banco de Dados:</strong> Capacidade de escrever APIs em NestJS e scripts Python para criar ferramentas sob medida.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* 4 Pillars Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5 bg-[#0e1017] border border-[#232838] hover:border-[#353d54] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1c2130]">
                  <div className="w-9 h-9 rounded-md bg-[#141722] border border-[#232838] flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-xs text-zinc-500">{pillar.index}</span>
                </div>
                
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  {pillar.badge}
                </div>
                
                <h3 className="font-semibold text-white text-sm mb-2 leading-snug">
                  {pillar.title}
                </h3>
                
                <p className="text-zinc-400 text-xs leading-relaxed">
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
