import type { Lang } from "@/types";

export const LANGS: Lang[] = ["pt", "en"];
export const DEFAULT_LANG: Lang = "pt";
export const STORAGE_KEY = "portfolio-lang";

/** Mapa Lang → atributo `lang` do HTML. */
export const HTML_LANG: Record<Lang, string> = {
  pt: "pt-BR",
  en: "en-US",
};
