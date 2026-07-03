import type { Lang } from "@/types";

export const LANGS: Lang[] = ["en", "pt"];
export const DEFAULT_LANG: Lang = "en";
export const STORAGE_KEY = "portfolio-lang";

/** Mapa Lang → atributo `lang` do HTML. */
export const HTML_LANG: Record<Lang, string> = {
  pt: "pt-BR",
  en: "en-US",
};
