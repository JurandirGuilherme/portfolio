import type { SectionId } from "@/types";

export interface NavSection {
  id: SectionId;
  /** Realça o link (ex.: contato) */
  highlight?: boolean;
  /** Esconde o link em telas pequenas */
  hideable?: boolean;
}

/**
 * Âncoras estáveis da navegação. Os `id` nunca mudam com o idioma —
 * apenas os rótulos (em `content.ui.nav[id]`) são traduzidos.
 */
export const NAV_SECTIONS: NavSection[] = [
  { id: "sobre", hideable: true },
  { id: "stack", hideable: true },
  { id: "experiencia", hideable: true },
  { id: "projetos", hideable: true },
  { id: "contato", highlight: true },
];
