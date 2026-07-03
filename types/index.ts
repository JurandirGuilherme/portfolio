export type Lang = "pt" | "en";

/** Âncoras estáveis das seções (não mudam com o idioma). */
export type SectionId =
  "sobre" | "stack" | "experiencia" | "projetos" | "contato";

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
  /** Skills que recebem destaque visual */
  keys?: string[];
}

export interface Job {
  period: string;
  role: string;
  org: string;
  current?: boolean;
  bullets: string[];
}

export interface Project {
  badge: string;
  title: string;
  description: string;
  techs: string[];
  /** Destaca o badge como conquista */
  highlight?: boolean;
}

/** Dados fixos, independentes de idioma. */
export interface Site {
  name: string;
  brand: string;
  email: string;
  github: string;
  linkedin: string;
}

/** Textos de interface (rótulos) por idioma. */
export interface UiStrings {
  /** Rótulos dos links / cabeçalhos de seção */
  nav: Record<SectionId, string>;
  getInTouch: string;
  scrollCue: string;
  sendEmail: string;
  theme: { light: string; dark: string; fallback: string };
  language: string;
}

/** Todo o conteúdo traduzível de um idioma. */
export interface Content {
  role: string;
  statusBadge: string;
  lede: string;
  about: string[];
  stats: Stat[];
  stack: SkillGroup[];
  experience: Job[];
  projects: Project[];
  contact: { heading: string; text: string };
  footer: string;
  ui: UiStrings;
}
