export interface NavLink {
  href: string;
  label: string;
  /** Realça o link (ex.: contato) */
  highlight?: boolean;
  /** Esconde em telas pequenas */
  hideable?: boolean;
}

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
  /** Link opcional (repositório ou deploy) */
  href?: string;
}

export interface Profile {
  name: string;
  brand: string;
  role: string;
  statusBadge: string;
  lede: string;
  email: string;
  github: string;
  linkedin: string;
  about: string[];
  stats: Stat[];
  stack: SkillGroup[];
  experience: Job[];
  projects: Project[];
  contact: {
    heading: string;
    text: string;
  };
  footer: string;
}
