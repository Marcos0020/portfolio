export interface Experience {
  company: string;
  role: string;
  employmentType: string;
  period: string;
  duration: string;
  location: string;
  summary: string;
  achievements: string[];
  skills: string[];
  badgeColor?: string;
}

export interface Project {
  title: string;
  category: "Full Stack" | "Banco de Dados" | "Automação Python";
  description: string;
  problemSolved: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
  highlightBadge?: string;
}

export interface AITool {
  name: string;
  category: 
    | "Modelos de Linguagem & Assistentes" 
    | "IDEs & Ambientes com IA" 
    | "Hospedagem & Deploy";
  provider: string;
  description: string;
  howIUse: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; isTop?: boolean }[];
}

export interface EducationItem {
  institution: string;
  course: string;
  degree: string;
  period: string;
  status: string;
  description: string;
}

export interface CourseItem {
  title: string;
  issuer: string;
  category: string;
}

export const portfolioData = {
  personal: {
    name: "Marcos Sousa",
    fullName: "Marcos Vinicius dos Santos Sousa",
    title: "Analista de Banco de Dados & Desenvolvedor SQL / PL/SQL",
    subtitles: [
      "Especialista em Oracle Database em Produção",
      "Desenvolvedor SQL / PL/SQL & Automação",
      "Analista de Suporte Técnico N2 & Sustentação",
      "Desenvolvimento de Soluções & IA Aplicada",
    ],
    location: "Rio de Janeiro, RJ · Brasil",
    availability: "Disponível para Oportunidades (CLT / PJ · Presencial, Híbrido ou Remoto)",
    email: "mmarcosssousa@gmail.com",
    phone: "(21) 97697-5370",
    phoneClean: "5521976975370",
    linkedin: "https://linkedin.com/in/marcos-sousa-150929226",
    github: "https://github.com/Marcos0020",
    bio: "Analista de Tecnologia com mais de 3 anos de experiência prática e comprovada em desenvolvimento, sustentação e operação em ambientes Oracle Database de missão crítica, somados a sólida vivência em Service Desk e suporte técnico N1/N2. Perfil analítico e resolutivo, com capacidade de transitar da camada de infraestrutura e redes até o núcleo de regras de negócio em PL/SQL e automações com Python e IA.",
    metrics: [
      { label: "Anos de Experiência em TI", value: "4+" },
      { label: "Anos com Oracle em Produção", value: "3+" },
      { label: "SGBDs Relacionais", value: "4" },
      { label: "Projetos no GitHub", value: "3" },
    ],
  },

  experiences: [
    {
      company: "Inside Technology",
      role: "Analista de Banco de Dados",
      employmentType: "Tempo integral",
      period: "11/2022 – 11/2026",
      duration: "4 anos",
      location: "Rio de Janeiro, RJ · Presencial / Híbrido",
      summary: "Atuação direta no desenvolvimento, sustentação e operação em ambiente de produção Oracle Database, assegurando disponibilidade e integridade das rotinas corporativas de missão crítica.",
      achievements: [
        "Desenvolvimento Oracle: Gestão de usuários, privilégios e tablespaces, com monitoramento contínuo de espaço em disco para prevenir indisponibilidades operacionais.",
        "Desenvolvimento PL/SQL: Criação e manutenção de triggers, stored procedures e functions em PL/SQL para automatização de regras de negócio corporativas e geração de compromissos operacionais.",
        "Backup e Sustentação: Execução de rotinas de backup, recuperação e movimentação de dados utilizando Oracle Data Pump (expdp/impdp) com validação técnica de consistência.",
        "Tuning & Performance: Análise e otimização de consultas SQL em ambiente produtivo, aplicando ajustes de índices e refatoração de código para redução no tempo de resposta.",
        "Troubleshooting de Conectividade: Diagnóstico e resolução de incidentes críticos de conexão entre aplicações e o banco, envolvendo arquivos TNS, serviço Listener e regras de Firewall de rede.",
        "Atendimento a Aplicações: Investigação de causa raiz de incidentes e suporte aos usuários internos e sistemas integrados à base Oracle.",
      ],
      skills: [
        "Oracle Database",
        "PL/SQL",
        "SQL",
        "Oracle Data Pump",
        "Gestão de Tablespaces",
        "Tuning de Consultas",
        "Troubleshooting TNS/Listener",
        "PL/SQL Developer",
        "DBeaver",
      ],
      badgeColor: "border-sky-500/30 text-sky-400 bg-sky-500/10",
    },
    {
      company: "Defensoria Pública do Estado do Rio de Janeiro (DPRJ)",
      role: "Analista de Suporte Técnico N1 / N2",
      employmentType: "Estágio em TI",
      period: "05/2022 – 11/2022",
      duration: "7 meses",
      location: "Rio de Janeiro, RJ · Presencial",
      summary: "Atuação no suporte técnico presencial e remoto às demandas operacionais de tecnologia dos órgãos, servidores e defensores públicos no ambiente corporativo da DPRJ.",
      achievements: [
        "Gestão de Chamados e Service Desk: Abertura, triagem técnica, categorização de complexidade e direcionamento de chamados através da plataforma GLPI conforme SLA e criticidade.",
        "Suporte Técnico de Campo (N1 e N2): Diagnóstico, montagem, manutenção corretiva e preventiva de computadores, periféricos e estações de trabalho de usuários corporativos.",
        "Troubleshooting de Redes e Conectividade: Resolução de incidentes de rede local (cabeamento estruturado, configuração de IP, DNS e conexão em estações de trabalho).",
        "Atendimento e Suporte ao Usuário: Restauração da operacionalidade de sistemas operacionais Windows e ferramentas corporativas de produtividade.",
      ],
      skills: [
        "GLPI",
        "Service Desk",
        "Suporte N1/N2",
        "Manutenção de Hardware",
        "Redes de Computadores",
        "Troubleshooting",
        "Atendimento ao Usuário",
      ],
      badgeColor: "border-teal-500/30 text-teal-400 bg-teal-500/10",
    },
  ] as Experience[],

  projects: [
    {
      title: "Sistema Integrado de Service Desk & Gestão de Chamados",
      category: "Full Stack",
      description: "Plataforma completa de central de atendimento desenvolvida para gerenciar chamados técnicos, automação de fluxo de suporte e controle de níveis de serviço, unindo a vivência em Service Desk à engenharia de software moderna.",
      problemSolved: "Eliminação da dependência de ferramentas proprietárias de alto custo, centralizando o atendimento com ingestão automática de tickets via e-mail e persistência relacional corporativa.",
      technologies: ["NestJS", "React", "TypeScript", "Oracle Database", "Tailwind CSS", "Zustand", "JWT", "Protocolo IMAP", "Excel Export"],
      features: [
        "Ingestão automatizada de tickets por leitura periódica de caixas de e-mail corporativo (protocolo IMAP)",
        "Autenticação e controle de níveis de acesso com tokens JWT seguros",
        "Otimização de consultas SQL para geração de relatórios de métricas exportáveis em Excel",
        "Rotinas agendadas de backup e integridade diretamente integradas ao Oracle Database",
        "Interface moderna, rápida e totalmente responsiva desenvolvida com React e Tailwind CSS",
      ],
      githubUrl: "https://github.com/Marcos0020/servicedesk",
      highlightBadge: "Full Stack + Oracle",
    },
    {
      title: "Scripts Utilitários SQL e Python para Desenvolvimento Oracle",
      category: "Banco de Dados",
      description: "Repositório centralizado de rotinas, scripts SQL e automações em Python voltadas à sustentação, monitoramento e operação ágil de bancos de dados Oracle em produção.",
      problemSolved: "Redução do tempo de intervenção manual da equipe de infraestrutura de dados em rotinas repetitivas de checagem e manutenção de storage.",
      technologies: ["Oracle Database", "PL/SQL", "SQL", "Python", "Oracle Data Pump", "Shell Script"],
      features: [
        "Monitoramento automatizado de alocação e crescimento de tablespaces e datafiles",
        "Automação e parametrização de chamadas para expdp e impdp (Oracle Data Pump)",
        "Diagnóstico de status de listeners e validação de configurações de conexão TNS",
        "Extração estruturada de metadados e scripts de integridade de objetos de banco",
      ],
      githubUrl: "https://github.com/Marcos0020/MEUS_CODIGOS_BD_ORACLE",
      highlightBadge: "Banco de Dados & Automação",
    },
    {
      title: "Aplicações Desktop Operacionais (.EXE) com Integração a Banco",
      category: "Automação Python",
      description: "Conjunto de utilitários desktop executáveis voltados à automação de tarefas corporativas, manipulação e processamento batch de dados para ambiente operacional Windows.",
      problemSolved: "Viabilização de rotinas de extração de dados e processamento batch para operadores e usuários finais sem exigir instalação prévia de interpretadores Python ou configurações manuais de ambiente.",
      technologies: ["Python", "PyInstaller (.EXE)", "Conectores de Banco Relacional", "Windows OS", "Batch Processing"],
      features: [
        "Empacotamento autônomo em executável (.EXE) sem dependências externas locais",
        "Conexão direta a bancos relacionais para consultas e atualizações controladas",
        "Automação de rotinas de processamento de arquivos e relatórios locais",
        "Interface simplificada e focada em produtividade operacional",
      ],
      githubUrl: "https://github.com/Marcos0020/automacoes-processos-python",
      highlightBadge: "Desktop & Scripts",
    },
  ] as Project[],

  aiTools: [
    {
      name: "ChatGPT (OpenAI)",
      category: "Modelos de Linguagem & Assistentes",
      provider: "OpenAI",
      description: "Modelos de linguagem para apoio na estruturação de lógica, testes conceituais e síntese de documentações técnicas.",
      howIUse: "Apoio no rascunho de queries SQL complexas, documentação de rotinas e exploração de abordagens arquiteturais.",
      iconName: "Bot",
    },
    {
      name: "Claude (Anthropic)",
      category: "Modelos de Linguagem & Assistentes",
      provider: "Anthropic",
      description: "Assistente avançado com certificação oficial Anthropic (Claude Code 101 e Claude 101), focado em análise e refatoração de código.",
      howIUse: "Revisão e tuning de scripts PL/SQL, análise de planos de execução e produção de documentações operacionais de TI.",
      iconName: "Sparkles",
    },
    {
      name: "Gemini (Google)",
      category: "Modelos de Linguagem & Assistentes",
      provider: "Google",
      description: "Assistente multimodal para validação de padrões de desenvolvimento e suporte técnico em engenharia de software.",
      howIUse: "Pesquisas técnicas aprofundadas, validação de documentação oficial e resolução de dúvidas em integrações.",
      iconName: "Cpu",
    },
    {
      name: "Grok (xAI)",
      category: "Modelos de Linguagem & Assistentes",
      provider: "xAI",
      description: "Assistente de raciocínio dinâmico e processamento analítico para exploração de tendências e soluções técnicas.",
      howIUse: "Consultas analíticas rápidas de tendências de mercado, brainstorming técnico e resolução de dúvidas de engenharia de software.",
      iconName: "Terminal",
    },
    {
      name: "Cursor",
      category: "IDEs & Ambientes com IA",
      provider: "Anysphere",
      description: "Editor de código inteligente baseado em VS Code com assistência contextual profunda e auto-complete inteligente.",
      howIUse: "Desenvolvimento ágil de aplicações em TypeScript, React e Python com auto-complete inteligente e refatoração contextual.",
      iconName: "Code",
    },
    {
      name: "Google Antigravity",
      category: "IDEs & Ambientes com IA",
      provider: "Google",
      description: "Ambiente agentic de desenvolvimento com IA para engenharia de software, automação de tarefas e análise técnica.",
      howIUse: "Engenharia de software assistida por agentes para criação modular de portfólios, scripts e auditorias técnicas completas.",
      iconName: "Zap",
    },
    {
      name: "Claude Desktop",
      category: "IDEs & Ambientes com IA",
      provider: "Anthropic",
      description: "Aplicação desktop nativa para interação com modelos de linguagem e análise de bases de código locais.",
      howIUse: "Análise de repositórios locais, auditorias de scripts e apoio na escrita de automações em Python.",
      iconName: "Monitor",
    },
    {
      name: "Vercel",
      category: "Hospedagem & Deploy",
      provider: "Vercel Inc.",
      description: "Plataforma líder em deploy contínuo, CDN global de borda e hospedagem de aplicações web modernas com integração ao GitHub.",
      howIUse: "Hospedagem ágil e CI/CD automatizado para aplicações web front-end e portfólio profissional.",
      iconName: "Cloud",
    },
  ] as AITool[],

  skillCategories: [
    {
      title: "Banco de Dados Relacional",
      iconName: "Database",
      skills: [
        { name: "Oracle Database (Produção)", isTop: true },
        { name: "SQL & PL/SQL Avançado", isTop: true },
        { name: "Stored Procedures & Functions", isTop: true },
        { name: "Triggers & Regras de Negócio", isTop: true },
        { name: "Oracle Data Pump (expdp/impdp)", isTop: true },
        { name: "Gestão de Tablespaces & Storage" },
        { name: "Backup & Recovery Operacional" },
        { name: "Tuning e Otimização de Consultas" },
        { name: "Troubleshooting TNS e Listener" },
        { name: "MySQL, PostgreSQL e SQL Server" },
      ],
    },
    {
      title: "Back-End & Automação",
      iconName: "Server",
      skills: [
        { name: "Python para Automação", isTop: true },
        { name: "NestJS (Node.js)", isTop: true },
        { name: "TypeScript & JavaScript" },
        { name: "APIs RESTful & JWT" },
        { name: "Integração IMAP / E-mail" },
        { name: "Manipulação de Arquivos e Excel" },
        { name: "PyInstaller (.EXE)" },
      ],
    },
    {
      title: "Front-End & UI",
      iconName: "Layout",
      skills: [
        { name: "React.js" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Zustand (State Management)" },
        { name: "HTML5 & CSS3 Semântico" },
        { name: "UI/UX Responsivo" },
      ],
    },
    {
      title: "Suporte, Infra & Redes",
      iconName: "ShieldCheck",
      skills: [
        { name: "Service Desk N1 / N2", isTop: true },
        { name: "GLPI (Gestão de Chamados)", isTop: true },
        { name: "Troubleshooting de Conectividade", isTop: true },
        { name: "Linux & Ubuntu Linux", isTop: true },
        { name: "Redes & Cabeamento Estruturado" },
        { name: "Diagnóstico de Hardware & Software" },
        { name: "Regras de Firewall & Portas" },
        { name: "Docker & Máquinas Virtuais (VMs)" },
      ],
    },
    {
      title: "Ferramentas & Metodologia",
      iconName: "Wrench",
      skills: [
        { name: "Git & GitHub", isTop: true },
        { name: "Linux (Terminal & Shell)", isTop: true },
        { name: "Ubuntu Linux", isTop: true },
        { name: "PL/SQL Developer" },
        { name: "DBeaver" },
        { name: "VS Code & Cursor" },
        { name: "Windows Corporativo" },
        { name: "Engenharia de Prompts (IA)" },
      ],
    },
  ] as SkillCategory[],

  education: {
    academic: [
      {
        institution: "Universidade Estácio de Sá",
        course: "Análise e Desenvolvimento de Sistemas (ADS)",
        degree: "Tecnólogo / Graduação Superior",
        period: "2023 – 2026",
        status: "Concluído",
        description: "Formação focada em engenharia de software, modelagem de banco de dados relacionais, arquitetura de sistemas, estruturas de dados e desenvolvimento de aplicações corporativas.",
      },
    ] as EducationItem[],
    courses: [
      {
        title: "Banco de Dados Oracle Completo: SQL, PL/SQL e Modelagem",
        issuer: "Udemy",
        category: "Banco de Dados",
      },
      {
        title: "Banco de Dados: MySQL, SQL Server e PostgreSQL",
        issuer: "Udemy",
        category: "Banco de Dados",
      },
      {
        title: "Python: Desenvolvimento Orientado a Objetos e Automação",
        issuer: "Udemy / Fundação Bradesco",
        category: "Programação",
      },
      {
        title: "Fundamentos da IA Moderna, LLMs e Engenharia de Prompts",
        issuer: "DIO (Digital Innovation One)",
        category: "Inteligência Artificial",
      },
      {
        title: "Claude Code 101 / Claude 101",
        issuer: "Anthropic",
        category: "Inteligência Artificial",
      },
      {
        title: "HTML, CSS e JavaScript / Fundamentos de TI",
        issuer: "Fundação Bradesco",
        category: "Web & Infraestrutura",
      },
    ] as CourseItem[],
  },
};
