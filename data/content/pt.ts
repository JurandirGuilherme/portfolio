import type { Content } from "@/types";

export const pt: Content = {
  role: "Desenvolvedor Front-End React",
  statusBadge: "Front-End React · Remoto · Paulista, PE — Brasil",
  lede: "Construo interfaces web e mobile com React, Next.js e TypeScript — do protótipo à produção, com foco em componentes reutilizáveis, performance e boa experiência de uso.",

  about: [
    "Sou desenvolvedor front-end com mais de 4 anos em desenvolvimento web e mais de 2 anos construindo aplicações em produção com React.js, Next.js, React Native (Expo) e TypeScript.",
    "Trabalho perto dos times de produto, design e back-end para transformar requisitos em interfaces responsivas e centradas no usuário. Gosto de código limpo, participação ativa em code reviews e da rotina de times ágeis — sou aprendiz rápido e resolvedor de problemas.",
    "Atualmente curso Licenciatura em Computação na UFRPE e atuo 100% remoto, de Paulista/PE.",
  ],

  stats: [
    { value: "4+", label: "anos de desenvolvimento web" },
    { value: "2+", label: "anos com React em produção" },
    { value: "1º", label: "lugar — Hackathon Maratonas de Ideias 2023" },
  ],

  stack: [
    {
      title: "Front-End",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript ES6+",
        "React Native (Expo)",
        "HTML5",
        "CSS3",
      ],
      keys: ["React.js", "Next.js", "TypeScript"],
    },
    {
      title: "UI & Estado",
      skills: [
        "Hooks",
        "Context API",
        "Zustand",
        "Tailwind CSS",
        "Ant Design",
        "UI responsiva",
      ],
    },
    {
      title: "APIs & Back-End",
      skills: ["APIs REST", "Node.js", "Express", "Sequelize", "PostgreSQL"],
    },
    {
      title: "Ferramentas & Práticas",
      skills: [
        "Git / GitHub",
        "Code Review",
        "Scrum",
        "Kanban",
        "Ferramentas de IA",
      ],
    },
  ],

  experience: [
    {
      period: "2025 — Presente",
      role: "Desenvolvedor Front-End",
      org: "Atlante Sistemas de Informática",
      current: true,
      bullets: [
        "Desenvolvo aplicações web com **React e Next.js** e mobile com **React Native (Expo)**, criando componentes reutilizáveis e interfaces responsivas.",
        "Integro o front-end a **APIs RESTful**, definindo contratos de API e estruturas de dados junto a produto, design e back-end.",
        "Uso JavaScript moderno (ES6+), **TypeScript** e React Hooks para novas features, correção de bugs e refatoração de legado.",
      ],
    },
    {
      period: "2022 — 2025",
      role: "Suporte N1 & Desenvolvimento",
      org: "M. I. Montreal Informática",
      bullets: [
        "**Vencedor do hackathon interno Maratonas de Ideias 2023**, com uma solução de otimização de processos.",
        "Colaborei em um sistema de controle de documentos com React (Next.js), **TypeScript, Node.js e PostgreSQL**, além de Tailwind CSS e Ant Design.",
        "Ajudei a construir uma intranet corporativa para centralizar informações e aumentar a produtividade do time.",
      ],
    },
    {
      period: "2020 — 2022",
      role: "Desenvolvedor Web Freelancer",
      org: "Autônomo",
      bullets: [
        "Construí sites para startups, restaurantes e negócios locais com HTML, CSS, JavaScript e WordPress, com foco em conversão e design responsivo.",
        "Levantei requisitos com clientes, apresentei soluções e gerenciei prazos e entregas.",
      ],
    },
  ],

  projects: [
    {
      badge: "★ 1º Lugar",
      title: "Hackathon Maratonas de Ideias 2023",
      description:
        "Solução vencedora focada em otimização de processos, desenvolvida em equipe sob pressão de tempo — da ideia ao protótipo funcional.",
      techs: ["Resolução de problemas", "Prototipagem", "Trabalho em equipe"],
      highlight: true,
    },
    {
      badge: "Aplicação em produção",
      title: "Sistema de Controle de Documentos",
      description:
        "Plataforma para gestão e priorização de demandas, com front-end em React/Next.js e back-end em Node.js e PostgreSQL.",
      techs: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      badge: "Produtividade interna",
      title: "Intranet Corporativa",
      description:
        "Portal interno para centralizar informações e comunicação, aumentando a produtividade do time através de uma interface clara.",
      techs: ["React", "Next.js", "UI responsiva"],
    },
    {
      badge: "Formação",
      title: "Licenciatura em Computação — UFRPE",
      description:
        "Graduação em andamento (conclusão prevista para 2027), somando fundamentos de computação à prática de mercado.",
      techs: ["Algoritmos", "Fundamentos", "2027"],
    },
  ],

  contact: {
    heading: "Vamos construir algo juntos?",
    text: "Curte front-end, React ou tem um projeto em mente? Vamos trocar uma ideia — respondo sempre.",
  },

  footer:
    "© 2026 Jurandir Guilherme · Desenvolvido com React na cabeça e HTML no capricho.",

  ui: {
    nav: {
      sobre: "sobre",
      stack: "stack",
      experiencia: "experiência",
      projetos: "projetos",
      contato: "contato",
    },
    getInTouch: "Entrar em contato",
    scrollCue: "sobre",
    sendEmail: "Enviar e-mail",
    theme: { light: "claro", dark: "escuro", fallback: "tema" },
    language: "Mudar idioma para inglês",
  },
};
