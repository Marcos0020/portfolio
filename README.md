# Portfólio Profissional — Marcos Sousa

Aplicação web moderna, responsiva e de alta performance desenvolvida para apresentar a trajetória profissional, experiências com Oracle Database em produção, desenvolvimento SQL/PL-SQL, suporte corporativo N1/N2, projetos tecnológicos autorais e utilização de ferramentas de inteligência artificial.

## 🚀 Tecnologias Utilizadas

- **Framework:** React 19 com TypeScript
- **Bundler:** Vite
- **Estilização:** Tailwind CSS v3 com design system escuro (*dark theme*), paleta em azul-marinho profundo, ciano e efeitos de glassmorphism
- **Ícones:** Lucide React
- **SEO & Otimização:** Meta tags completas, Open Graph, Twitter Cards, Schema.org JSON-LD e dados estruturados
- **Deploy:** Configurado e preparado para deploy contínuo na Vercel (`vercel.json`)

---

## 📂 Arquitetura do Projeto

```text
portfolio-marcos/
├── index.html                   # SEO, Open Graph, Schema.org JSON-LD & fontes
├── package.json                 # Dependências e scripts
├── tailwind.config.js           # Cores e design tokens
├── vercel.json                  # Configuração de build e deploy na Vercel
├── src/
│   ├── main.tsx                 # Ponto de entrada React
│   ├── App.tsx                  # Estrutura principal da página
│   ├── index.css                # Diretivas Tailwind, glassmorphism e scrollbar
│   ├── data/
│   │   └── portfolioData.ts     # Dados profissionais centralizados (fácil manutenção)
│   └── components/
│       ├── Navbar.tsx           # Barra de navegação com menu mobile e CTA
│       ├── HeroSection.tsx      # Apresentação de impacto, terminal mockup e status
│       ├── AboutSection.tsx     # Sobre mim, 4 pilares de atuação e diferenciais
│       ├── ExperienceSection.tsx# Timeline Inside Technology + DPRJ com entregas
│       ├── ProjectsSection.tsx  # Cards dos 3 projetos autorais com filtros
│       ├── AISection.tsx        # Seção categorizada de Inteligência Artificial & LLMs
│       ├── SkillsSection.tsx    # Tecnologias por camadas (Banco, Back, Front, Infra)
│       ├── EducationSection.tsx # Formação na Estácio + Cursos complementares
│       ├── ContactSection.tsx   # Contato direto, cópia de dados e formulário
│       ├── Footer.tsx           # Rodapé profissional e créditos
│       └── ResumeModal.tsx      # Modal de currículo pronto para impressão/leitura
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js instalado (versão 18+)
- npm ou yarn

### Passo a Passo

1. Acesse o diretório do projeto:
```bash
cd portfolio-marcos
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra no seu navegador: `http://localhost:5173`

---

## 📦 Como Gerar Build de Produção

Para testar o build estático otimizado:
```bash
npm run build
npm run preview
```

---

## 🌐 Como Fazer Deploy na Vercel

1. Suba esta pasta para um repositório no seu GitHub (ex: `https://github.com/Marcos0020/portfolio`).
2. Acesse [vercel.com](https://vercel.com) e faça login com seu GitHub.
3. Clique em **"Add New Project"** e selecione o repositório do portfólio.
4. A Vercel detectará automaticamente o framework Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **"Deploy"**. Em menos de 1 minuto, seu portfólio estará online com certificado SSL gratuito e alta velocidade global.
