import React from 'react';
import { X, Printer, Download, Database, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal } = portfolioData;

  // Abre o PDF oficial em uma nova aba. O browser do usuário exibe
  // o diálogo nativo de impressão do PDF, gerando sempre 1-2 páginas
  // limpas — sem capturar o fundo escuro do site (que causava 16 páginas).
  const handlePrint = () => {
    window.open('/Curriculo_Marcos_Sousa.pdf', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div className="bg-slate-900 border border-sky-500/30 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="p-3.5 sm:p-4 px-4 sm:px-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/90 no-print">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
            <Database className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="font-bold text-white text-xs sm:text-sm">Currículo Profissional</span>
            <span className="hidden md:inline text-slate-500">| Versão Completa Impressa</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Official PDF Download Button */}
            <a
              href="/Curriculo_Marcos_Sousa.pdf"
              download="Curriculo_Marcos_Sousa.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 hover:brightness-110 text-slate-950 text-xs font-bold shadow-md shadow-sky-500/20 transition-all"
              title="Baixar arquivo PDF original do currículo"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar PDF Oficial</span>
            </a>

            {/* Print / Save as PDF Button — opens the official PDF in a new tab */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              title="Abrir PDF oficial para impressão"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimir PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 bg-slate-950/40">
          
          <div
            id="resume-printable"
            className="bg-white text-slate-900 rounded-xl p-6 sm:p-10 shadow-lg font-sans max-w-3xl mx-auto text-xs sm:text-[13px] leading-relaxed"
          >
            {/* 1. Header do Currículo Oficial */}
            <div className="border-b-2 border-sky-600 pb-4 mb-5 resume-header">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight uppercase">
                Marcos Vinicius dos Santos Sousa
              </h1>
              <p className="text-sm font-bold text-sky-700 mt-0.5">
                Analista de Banco de Dados Oracle | Desenvolvedor PL/SQL | Suporte e Infraestrutura de TI
              </p>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-600 mt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-sky-600 shrink-0" /> Rio de Janeiro, RJ
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-sky-600 shrink-0" /> {personal.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-sky-600 shrink-0" /> {personal.phone}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-sky-700 font-mono mt-1 font-semibold">
                <a href={personal.portfolioUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-0.5 text-cyan-600 font-bold">
                  portfolio-mu-nine-dtfoagovym.vercel.app <ExternalLink className="w-2.5 h-2.5 text-slate-400 no-print" />
                </a>
                <span>•</span>
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-0.5">
                  github.com/Marcos0020 <ExternalLink className="w-2.5 h-2.5 text-slate-400 no-print" />
                </a>
                <span>•</span>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-0.5">
                  linkedin.com/in/marcossousa150929226 <ExternalLink className="w-2.5 h-2.5 text-slate-400 no-print" />
                </a>
              </div>
            </div>

            {/* 2. Resumo Profissional */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-sky-800 border-b border-slate-300 pb-1 mb-2 section-title">
                Resumo Profissional
              </h2>
              <p className="text-slate-800 leading-normal text-justify">
                Analista de Banco de Dados Oracle com mais de 3 anos de experiência em desenvolvimento PL/SQL, sustentação de bancos de dados em produção e suporte técnico. Experiência prática em gestão de usuários e tablespaces, backup e recovery, Oracle Data Pump e troubleshooting de conectividade (TNS, listener e firewall). Formado em Análise e Desenvolvimento de Sistemas, com projetos práticos envolvendo desenvolvimento de sistemas, Python e integração com bancos de dados.
              </p>
            </div>

            {/* 3. Competências Técnicas */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-sky-800 border-b border-slate-300 pb-1 mb-2 section-title">
                Competências Técnicas
              </h2>
              <div className="space-y-1.5 text-slate-800 text-[11.5px]">
                <p>
                  <strong className="text-slate-950 font-bold">Banco de Dados:</strong> Oracle Database, SQL, PL/SQL, modelagem de dados, MySQL, SQL Server e PostgreSQL.
                </p>
                <p>
                  <strong className="text-slate-950 font-bold">Desenvolvimento Oracle:</strong> Gestão de usuários e tablespaces, backup e recovery, Oracle Data Pump, monitoramento de espaço, TNS, listener e tuning de consultas SQL.
                </p>
                <p>
                  <strong className="text-slate-950 font-bold">Desenvolvimento PL/SQL:</strong> Triggers, procedures, functions e automação de regras de negócio.
                </p>
                <p>
                  <strong className="text-slate-950 font-bold">Desenvolvimento de Software:</strong> Python, Node.js, NestJS, TypeScript, JavaScript, React, Vite, Tailwind CSS, Zustand, APIs REST, JWT e IMAP.
                </p>
                <p>
                  <strong className="text-slate-950 font-bold">Suporte e Infraestrutura:</strong> Service Desk, suporte técnico N2, gestão de chamados com GLPI, troubleshooting de conectividade, Docker, Linux e Ubuntu Linux.
                </p>
                <p>
                  <strong className="text-slate-950 font-bold">Ferramentas:</strong> Git, GitHub, PL/SQL Developer e DBeaver.
                </p>
              </div>
            </div>

            {/* 4. Experiência Profissional */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-sky-800 border-b border-slate-300 pb-1 mb-3 section-title">
                Experiência Profissional
              </h2>

              {/* Inside Technology */}
              <div className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                  <h3 className="font-bold text-slate-950 text-[13px]">
                    Inside Technology
                  </h3>
                  <span className="text-[11px] font-mono text-slate-600">
                    11/2022 – 11/2026 (4 anos)
                  </span>
                </div>
                <p className="text-xs font-semibold text-sky-800 mb-1.5">
                  Analista de Banco de Dados
                </p>
                <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700 text-[11.5px]">
                  <li>
                    Administro bancos de dados Oracle em ambiente de produção, incluindo gestão de usuários, tablespaces, backups operacionais e monitoramento de espaço.
                  </li>
                  <li>
                    Desenvolvo triggers, procedures e functions em PL/SQL para automatizar regras de negócio e gerar compromissos automaticamente, reduzindo atividades manuais.
                  </li>
                  <li>
                    Executo movimentação e exportação/importação de dados utilizando Oracle Data Pump (expdp/impdp) com validação técnica de integridade.
                  </li>
                  <li>
                    Realizo troubleshooting de conectividade, incluindo TNS, listener e firewall, prestando suporte técnico a usuários e clientes internos, investigando a causa raiz dos incidentes.
                  </li>
                </ul>
              </div>

              {/* DPRJ */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                  <h3 className="font-bold text-slate-950 text-[13px]">
                    Defensoria Pública do Estado do Rio de Janeiro (DPRJ)
                  </h3>
                  <span className="text-[11px] font-mono text-slate-600">
                    05/2022 – 11/2022 (7 meses)
                  </span>
                </div>
                <p className="text-xs font-semibold text-sky-800 mb-1.5">
                  Analista de Suporte N1 e N2 (Estágio)
                </p>
                <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700 text-[11.5px]">
                  <li>
                    Atuei como suporte N1 e N2 em campo, realizando montagem de computadores e solucionando problemas de hardware, software e redes.
                  </li>
                  <li>
                    Realizei triagem e abertura de chamados no GLPI como suporte N1, diagnosticando prioridade, complexidade e direcionando aos responsáveis.
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. Projetos */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-sky-800 border-b border-slate-300 pb-1 mb-2.5 section-title">
                Projetos
              </h2>

              <div className="space-y-3 text-[11.5px] text-slate-800">
                <div>
                  <h3 className="font-bold text-slate-950">
                    Sistema interno de Service Desk | NestJS, React, TypeScript e Oracle
                  </h3>
                  <p className="text-slate-700">
                    Desenvolvi um sistema interno de Service Desk com autenticação JWT, abertura manual e automática de chamados por e-mail (IMAP), atribuição de responsáveis, anexos, relatórios em Excel, tuning de consultas SQL e backup agendado.
                  </p>
                  <p className="text-[10.5px] font-mono text-sky-700">
                    Código: github.com/Marcos0020/servicedesk
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">
                    Aplicações desktop executáveis (.EXE) com Python e banco de dados
                  </h3>
                  <p className="text-slate-700">
                    Criação de aplicações executáveis desenvolvidas em Python e integradas a bancos de dados para uso operacional em ambiente Windows.
                  </p>
                  <p className="text-[10.5px] font-mono text-sky-700">
                    Código: github.com/Marcos0020/automacoes-processos-python
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">
                    Scripts SQL e Python para bancos de dados Oracle
                  </h3>
                  <p className="text-slate-700">
                    Scripts voltados ao desenvolvimento e à automação de tarefas em bancos de dados Oracle.
                  </p>
                  <p className="text-[10.5px] font-mono text-sky-700">
                    Código: github.com/Marcos0020/MEUS_CODIGOS_BD_ORACLE
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">
                    AgentCS-cybersecurity | IA Autônoma, Engenharia de Prompts e DevSecOps
                  </h3>
                  <p className="text-slate-700">
                    Agente autônomo profissional para auditorias completas de segurança ofensiva e defensiva (SAST, SCA, APIs, infraestrutura), com blindagem anti-prompt injection, governança human-in-the-loop e relatórios técnicos automatizados.
                  </p>
                  <p className="text-[10.5px] font-mono text-sky-700">
                    Código: github.com/Marcos0020/AgentCS-cybersecurity
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Formação Acadêmica */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-sky-800 border-b border-slate-300 pb-1 mb-2 section-title">
                Formação Acadêmica
              </h2>
              <p className="text-[11.5px] text-slate-800">
                <strong className="text-slate-950 font-bold">Análise e Desenvolvimento de Sistemas</strong> — Universidade Estácio de Sá | Concluído em 2026
              </p>
            </div>

            {/* 7. Cursos Complementares */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-sky-800 border-b border-slate-300 pb-1 mb-2 section-title">
                Cursos Complementares
              </h2>
              <div className="space-y-1 text-[11px] text-slate-700">
                <p>
                  <strong className="text-slate-900 font-semibold">Udemy:</strong> Banco de Dados Oracle Completo: SQL, PL/SQL e Modelagem; Banco de Dados (MySQL, SQL Server e PostgreSQL); Python; Desenvolvimento Orientado a Objetos.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">Fundação Bradesco:</strong> HTML, CSS e JavaScript; Fundamentos de TI e Informática.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">DIO:</strong> Segurança e Boas Práticas em Projetos Criados com Vibe Code; Fundamentos da IA Moderna: Machine Learning, LLMs, IA Generativa e Agentes; Introdução à Engenharia de Prompts; Potencializando Seus Estudos e Carreira com IA (Chatbots, Copilotos e Agentes).
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">Anthropic:</strong> Claude Code 101; Claude 101.
                </p>
              </div>
            </div>

            {/* Document Footer Note */}
            <div className="mt-6 pt-3 border-t border-slate-300 text-center text-[10px] text-slate-500 font-mono">
              MARCOS VINICIUS DOS SANTOS SOUSA • CURRÍCULO PROFISSIONAL
            </div>

          </div>

        </div>

        {/* Modal Bottom Bar (Hidden on print) */}
        <div className="p-3 sm:p-4 px-6 border-t border-slate-800 flex items-center justify-between bg-slate-950/90 no-print">
          <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
            Use "Baixar PDF Oficial" para salvar ou "Imprimir PDF" para imprimir.
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
