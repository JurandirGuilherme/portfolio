import type { Content } from "@/types";

export const en: Content = {
  role: "Front-End React Developer",
  statusBadge: "Front-End React · Remote · Paulista, PE — Brazil",
  lede: "I build web and mobile interfaces with React, Next.js and TypeScript — from prototype to production, focused on reusable components, performance and great UX.",

  about: [
    "I'm a front-end developer with 4+ years in web development and 2+ years building production applications with React.js, Next.js, React Native (Expo) and TypeScript.",
    "I work closely with product, design and back-end teams to turn requirements into responsive, user-centered interfaces. I value clean code, active participation in code reviews and the routine of agile teams — I'm a fast learner and a problem solver.",
    "I'm currently pursuing a Computing degree at UFRPE and work fully remote, from Paulista/PE, Brazil.",
  ],

  stats: [
    { value: "4+", label: "years of web development" },
    { value: "2+", label: "years with React in production" },
    { value: "1st", label: "place — Maratonas de Ideias Hackathon 2023" },
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
      title: "UI & State",
      skills: [
        "Hooks",
        "Context API",
        "Zustand",
        "Tailwind CSS",
        "Ant Design",
        "Responsive UI",
      ],
    },
    {
      title: "APIs & Back-End",
      skills: ["REST APIs", "Node.js", "Express", "Sequelize", "PostgreSQL"],
    },
    {
      title: "Tools & Practices",
      skills: ["Git / GitHub", "Code Review", "Scrum", "Kanban", "AI tools"],
    },
  ],

  experience: [
    {
      period: "2025 — Present",
      role: "Front-End Developer",
      org: "Atlante Sistemas de Informática",
      current: true,
      bullets: [
        "I build web apps with **React and Next.js** and mobile apps with **React Native (Expo)**, creating reusable components and responsive interfaces.",
        "I integrate the front-end with **RESTful APIs**, defining API contracts and data structures together with product, design and back-end.",
        "I use modern JavaScript (ES6+), **TypeScript** and React Hooks for new features, bug fixes and legacy refactoring.",
      ],
    },
    {
      period: "2022 — 2025",
      role: "N1 Support & Development",
      org: "Montreal Informática",
      bullets: [
        "**Winner of the internal Maratonas de Ideias Hackathon 2023**, with a process-optimization solution.",
        "Contributed to a document-control system with React (Next.js), **TypeScript, Node.js and PostgreSQL**, plus Tailwind CSS and Ant Design.",
        "Helped build a corporate intranet to centralize information and improve team productivity.",
      ],
    },
    {
      period: "2020 — 2022",
      role: "Freelance Web Developer",
      org: "Self-employed",
      bullets: [
        "Built websites for startups, restaurants and local businesses with HTML, CSS, JavaScript and WordPress, focused on conversion and responsive design.",
        "Gathered requirements with clients, presented solutions and managed deadlines and deliveries.",
      ],
    },
  ],

  projects: [
    {
      badge: "★ 1st Place",
      title: "Maratonas de Ideias Hackathon 2023",
      description:
        "Winning solution focused on process optimization at Montreal Informática's internal hackathon, built as a team under time pressure — from idea to working prototype.",
      techs: ["Problem-solving", "Prototyping", "Teamwork"],
      highlight: true,
      links: [
        {
          label: "Livestream",
          href: "https://youtu.be/c-MxZ_-stpo?t=726",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7153102827358203904/",
        },
      ],
    },
    {
      badge: "Production app",
      title: "Document Control System",
      description:
        "Platform for managing and prioritizing demands, with a React/Next.js front-end and a Node.js + PostgreSQL back-end.",
      techs: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      badge: "Internal productivity",
      title: "Corporate Intranet",
      description:
        "Internal portal to centralize information and communication, boosting team productivity through a clear interface.",
      techs: ["React", "Next.js", "Responsive UI"],
    },
    {
      badge: "Education",
      title: "Computing Degree — UFRPE",
      description:
        "Degree in progress (expected 2027), pairing computer-science fundamentals with hands-on market experience.",
      techs: ["Algorithms", "Fundamentals", "2027"],
    },
  ],

  contact: {
    heading: "Let's build something together?",
    text: "Into front-end, React or have a project in mind? Let's talk — I always reply.",
  },

  footer:
    "© 2026 Jurandir Guilherme · Built with Next.js · open source on GitHub.",

  ui: {
    nav: {
      sobre: "about",
      stack: "stack",
      experiencia: "experience",
      projetos: "projects",
      contato: "contact",
    },
    getInTouch: "Get in touch",
    scrollCue: "about",
    sendEmail: "Send email",
    theme: { light: "light", dark: "dark", fallback: "theme" },
    language: "Switch language to Portuguese",
  },
};
