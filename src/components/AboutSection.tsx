import React from 'react';
import { Database, ShieldCheck, Code, Sparkles, GraduationCap, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { education } = portfolioData;

  const pillars = [
    {
      icon: <Database className="w-4 h-4 text-zinc-400" />,
      title: 'Desenvolvimento Oracle & Banco de Dados',
      description:
        'Mais de 3 anos de vivência em ambientes corporativos de produção: desenvolvimento PL/SQL, gestão de usuários, tablespaces, monitoramento de espaço, backup e recovery operacional e movimentação de dados com Oracle Data Pump.',
      badge: 'Produção & Missão Crítica',
    },
    {
      icon: <Code className="w-4 h-4 text-zinc-400" />,
      title: 'Desenvolvimento SQL & PL/SQL',
      description:
        'Criação e manutenção de triggers, stored procedures e functions voltadas à automatização de regras de negócio corporativas e otimização de consultas (tuning) para redução de latência.',
      badge: 'Automação no Banco',
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-zinc-400" />,
      title: 'Service Desk N1/N2 & Infraestrutura',
      description:
        'Experiência em atendimentos presenciais e remotos, utilizando ferramentas como AnyDesk e TeamViewer, solucionando problemas de hardware, software e redes de computadores. Vivência com GLPI para abertura, registro e acompanhamento de chamados por e-mail e telefone, incluindo classificação de complexidade e definição de níveis de prioridade.',
      badge: 'Resolução de Incidentes',
    },
    {
      icon: <Sparkles className="w-4 h-4 text-zinc-400" />,
      title: 'Engenharia de Soluções & IA Aplicada',
      description:
        'Desenvolvimento de aplicações completas (NestJS, React, TypeScript e Python) e scripts de automação operacional, integrando ferramentas de ponta de IA generativa para acelerar entregas com alto padrão.',
      badge: 'Inovação Tecnológica',
    },
  ];

  return (
    <section id="sobre" className="py-24 relative bg-[#080910]">
      <div className="divider-fade mb-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">

        {/* ── Cabeçalho da seção — alinhado à esquerda, não centralizado ── */}
        <div className="max-w-2xl mb-16">
          <div className="section-badge mb-4">
            <Terminal className="w-3 h-3" />
            <span>01 // Sobre mim &amp; Trajetória</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight leading-tight">
            Visão Sistêmica: Da{' '}
            <span className="text-zinc-400 font-medium">Infraestrutura</span>{' '}
            ao Núcleo de Dados
          </h2>
          <p className="mt-4 text-zinc-500 text-sm leading-relaxed">
            Como minhas experiências práticas em suporte e banco de dados se conectam ao desenvolvimento moderno
            e à inteligência artificial para construir soluções de alto impacto.
          </p>
        </div>

        {/* ── Layout assimétrico: narrativa + módulos laterais ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">

          {/* Narrativa — 7 colunas */}
          <div className="lg:col-span-7 space-y-5 text-zinc-400 text-sm sm:text-[15px] leading-[1.8] font-light">
            <p>
              Sou graduado em{' '}
              <strong className="text-zinc-200 font-medium">Análise e Desenvolvimento de Sistemas</strong>{' '}
              pela Universidade Estácio de Sá (concluído em 2026), com atuação profissional centrada
              na sustentação de ambientes tecnológicos e desenvolvimento com banco de dados Oracle.
            </p>
            <p>
              Minha trajetória combina duas bases complementares: a atuação sólida como Analista
              de Banco de Dados na{' '}
              <strong className="text-zinc-200 font-medium">Inside Technology</strong>,
              gerenciando ambientes{' '}
              <strong className="text-zinc-200 font-medium">Oracle Database em produção</strong>{' '}
              por mais de 3 anos, e a trajetória profissional em{' '}
              <strong className="text-zinc-200 font-medium">
                Análise de Suporte N1/N2 e Service Desk na Defensoria Pública do Estado do Rio de Janeiro (DPRJ)
              </strong>.
              Nessa atuação, consolidei{' '}
              <strong className="text-zinc-200 font-medium">
                experiência em atendimentos presenciais e remotos, utilizando ferramentas como AnyDesk
                e TeamViewer, solucionando problemas de hardware, software e redes de computadores
              </strong>, somada a sólida{' '}
              <strong className="text-zinc-200 font-medium">
                vivência com GLPI para abertura, registro e acompanhamento de chamados por e-mail
                e telefone, incluindo classificação de complexidade e definição de níveis de prioridade
              </strong>.
            </p>
            <p>
              Esse histórico me concede um diferencial que poucos especialistas em banco possuem:
              a capacidade de entender a dor real do usuário final na ponta, rastrear o caminho
              do pacote pela rede e firewall, e solucionar gargalos complexos diretamente na
              procedure ou na consulta SQL dentro do banco de dados.
            </p>

            {/* Citação — estilo editorial, borda esquerda fina */}
            <blockquote className="pl-5 border-l border-zinc-700 py-1 my-4">
              <p className="text-zinc-500 text-sm italic leading-relaxed">
                "Acredito na tecnologia como instrumento de eficiência operacional. Onde existe uma tarefa
                manual repetitiva ou um gargalo de lentidão, existe a oportunidade de desenhar uma automação
                em PL/SQL ou um script em Python para elevar o padrão da equipe."
              </p>
            </blockquote>
          </div>

          {/* Módulos laterais — 5 colunas */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Formação acadêmica */}
            <div className="rounded-xl bg-[#0c0e18] border border-[#1c2030] p-5">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-4 h-4 text-zinc-500" />
                <h3 className="font-medium text-zinc-200 text-sm">Formação Acadêmica</h3>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-sm text-zinc-100">
                  {education.academic[0].course}
                </p>
                <p className="text-xs text-zinc-500 font-mono">
                  {education.academic[0].institution} · {education.academic[0].period}
                </p>
                <p className="text-xs text-zinc-500 pt-3 leading-relaxed">
                  {education.academic[0].description}
                </p>
              </div>
            </div>

            {/* Diferenciais */}
            <div className="rounded-xl bg-[#0c0e18] border border-[#1c2030] p-5">
              <h3 className="font-medium text-zinc-200 text-sm mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Diferenciais que Entrego à Equipe
              </h3>
              <ul className="space-y-3">
                {[
                  { n: '01', title: 'Prática real em produção:', desc: '3+ anos desenvolvendo Oracle sem receio de lidar com bases corporativas críticas.' },
                  { n: '02', title: 'Troubleshooting de ponta a ponta:', desc: 'Conhecimento prático de TNS, Listener, portas e regras de Firewall de rede.' },
                  { n: '03', title: 'Desenvolvedor e Analista de Banco de Dados:', desc: 'Capacidade de escrever APIs em NestJS e scripts Python para criar ferramentas sob medida.' },
                ].map((item) => (
                  <li key={item.n} className="flex items-start gap-3 text-xs">
                    <span className="font-mono text-zinc-600 text-[10px] pt-0.5 shrink-0">{item.n}</span>
                    <span className="text-zinc-400 leading-relaxed">
                      <strong className="text-zinc-200 font-medium">{item.title}</strong>{' '}{item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Quatro pilares: grid horizontal com divisores, não cards idênticos ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#1c2030] rounded-xl overflow-hidden">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-6 bg-[#0c0e18] hover:bg-[#0e1120] transition-colors ${
                idx < pillars.length - 1 ? 'border-r border-b md:border-b-0 border-[#1c2030]' : ''
              } ${idx === 1 ? 'md:border-b border-[#1c2030] lg:border-b-0' : ''} ${
                idx === 2 ? 'border-b md:border-b-0 md:border-r-0 lg:border-r border-[#1c2030]' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 rounded-md bg-[#0a0c16] border border-[#1c2030] flex items-center justify-center">
                  {pillar.icon}
                </div>
                <span className="font-mono text-[10px] text-zinc-600">0{idx + 1}</span>
              </div>
              <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">
                {pillar.badge}
              </div>
              <h3 className="font-semibold text-zinc-100 text-xs sm:text-sm leading-snug mb-2.5">
                {pillar.title}
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
