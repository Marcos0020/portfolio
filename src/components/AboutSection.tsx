import React from 'react';
import { Database, ShieldCheck, Code, Sparkles, GraduationCap, CheckCircle, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { education } = portfolioData;

  const pillars = [
    {
      icon: <Database className="w-5 h-5 text-blue-400" />,
      title: 'Desenvolvimento Oracle & Banco de Dados',
      description: 'Mais de 3 anos de vivência em ambientes corporativos de produção: desenvolvimento PL/SQL, gestão de usuários, tablespaces, monitoramento de espaço, backup e recovery operacional e movimentação de dados com Oracle Data Pump.',
      badge: 'Produção & Missão Crítica',
      index: '01',
    },
    {
      icon: <Code className="w-5 h-5 text-blue-400" />,
      title: 'Desenvolvimento SQL & PL/SQL',
      description: 'Criação e manutenção de triggers, stored procedures e functions voltadas à automatização de regras de negócio corporativas e otimização de consultas (tuning) para redução de latência.',
      badge: 'Automação no Banco',
      index: '02',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
      title: 'Service Desk N1/N2 & Infraestrutura',
      description: 'Experiência em atendimentos presenciais e remotos, utilizando ferramentas como AnyDesk e TeamViewer, solucionando problemas de hardware, software e redes de computadores. Vivência com GLPI para abertura, registro e acompanhamento de chamados por e-mail e telefone, incluindo classificação de complexidade e definição de níveis de prioridade.',
      badge: 'Resolução de Incidentes',
      index: '03',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-blue-400" />,
      title: 'Engenharia de Soluções & IA Aplicada',
      description: 'Desenvolvimento de aplicações completas (NestJS, React, TypeScript e Python) e scripts de automação operacional, integrando ferramentas de ponta de IA generativa para acelerar entregas com alto padrão.',
      badge: 'Inovação Tecnológica',
      index: '04',
    },
  ];

  return (
    <section id="sobre" className="py-20 relative bg-[#070b18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Cabeçalho ── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-badge mb-4 mx-auto">
            <Terminal className="w-3 h-3 text-blue-400" />
            <span>01 // Sobre mim &amp; Trajetória</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Visão Sistêmica: Da Infraestrutura ao Núcleo de Dados
          </h2>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Como minhas experiências práticas em suporte e banco de dados se conectam ao desenvolvimento moderno
            e à inteligência artificial para construir soluções de alto impacto.
          </p>
        </div>

        {/* ── Narrativa + módulos laterais ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">

          {/* Narrativa */}
          <div className="lg:col-span-7 panel p-6 sm:p-8 space-y-5 text-slate-300 text-sm sm:text-[15px] leading-relaxed">
            <p>
              Sou graduado em <strong className="text-white font-medium">Análise e Desenvolvimento de Sistemas</strong> pela Universidade Estácio de Sá (concluído em 2026), com atuação profissional centrada na sustentação de ambientes tecnológicos e desenvolvimento com banco de dados Oracle.
            </p>
            <p>
              Minha trajetória combina duas bases complementares: a vivência no suporte técnico corporativo e Service Desk na <strong className="text-white font-medium">Defensoria Pública do Estado do Rio de Janeiro (DPRJ)</strong> — onde atuei em campo com GLPI, diagnóstico de hardware e redes — e a atuação sólida como Analista de Banco de Dados na <strong className="text-white font-medium">Inside Technology</strong>, gerenciando ambientes <strong className="text-white font-medium">Oracle Database em produção</strong> por mais de 3 anos.
            </p>
            <p>
              Esse histórico me concede um diferencial que poucos especialistas em banco possuem: a capacidade de entender a dor real do usuário final na ponta, rastrear o caminho do pacote pela rede e firewall, e solucionar gargalos complexos diretamente na procedure ou na consulta SQL dentro do banco de dados.
            </p>
            <blockquote className="border-l-2 border-blue-500/40 pl-5 py-1 my-2">
              <p className="text-slate-500 text-sm italic leading-relaxed">
                "Acredito na tecnologia como instrumento de eficiência operacional. Onde existe uma tarefa manual repetitiva ou um gargalo de lentidão, existe a oportunidade de desenhar uma automação em PL/SQL ou um script em Python para elevar o padrão da equipe."
              </p>
            </blockquote>
          </div>

          {/* Módulos laterais */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Formação acadêmica */}
            <div className="panel p-5">
              <div className="flex items-center gap-2.5 mb-3">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white text-sm">Formação Acadêmica</h3>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-sm text-slate-200">{education.academic[0].course}</p>
                <p className="text-xs text-slate-500 font-mono">
                  {education.academic[0].institution} · {education.academic[0].period}
                </p>
                <p className="text-xs text-slate-400 pt-2 leading-relaxed">{education.academic[0].description}</p>
              </div>
            </div>

            {/* Diferenciais */}
            <div className="panel p-5">
              <h3 className="font-semibold text-white text-sm mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Diferenciais que Entrego à Equipe
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {[
                  { n: '01', title: 'Prática real em produção:', desc: '3+ anos desenvolvendo Oracle sem receio de lidar com bases corporativas críticas.' },
                  { n: '02', title: 'Troubleshooting de ponta a ponta:', desc: 'Conhecimento prático de TNS, Listener, portas e regras de Firewall de rede.' },
                  { n: '03', title: 'Desenvolvedor e Analista de Banco de Dados:', desc: 'Capacidade de escrever APIs em NestJS e scripts Python para criar ferramentas sob medida.' },
                ].map((item) => (
                  <li key={item.n} className="flex items-start gap-2.5">
                    <span className="font-mono text-blue-400/70 text-[11px] pt-0.5 shrink-0">{item.n}</span>
                    <span><strong className="text-white font-medium">{item.title}</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Pilares (referência: service cards em row + stats bar) ── */}
        <div className="panel overflow-hidden mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x-0 md:divide-x divide-[#172042] divide-y md:divide-y-0">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 hover:bg-[#0e1628] transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0e1628] border border-[#172042] flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-[11px] text-blue-400/50">{pillar.index}</span>
                </div>
                <div className="text-[10px] font-mono text-blue-400/70 uppercase tracking-[0.12em] mb-2">
                  {pillar.badge}
                </div>
                <h3 className="font-semibold text-white text-sm leading-snug mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar — referência: horizontal strip de métricas */}
        <div className="stats-strip">
          {[
            { value: '3+', label: 'Anos em Oracle' },
            { value: '4+', label: 'Trajetória em TI' },
            { value: 'N1/N2', label: 'Suporte Corporativo' },
            { value: 'ADS', label: 'Formação Estácio 2026' },
          ].map((stat) => (
            <div key={stat.label} className="px-4">
              <div className="text-xl font-bold text-white font-mono">{stat.value}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
