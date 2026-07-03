import type { Lang } from "@/types";
import { DEFAULT_LANG, LANGS, STORAGE_KEY } from "./config";

function isLang(value: string | null): value is Lang {
  return value !== null && (LANGS as string[]).includes(value);
}

/**
 * Idioma inicial: preferência salva → idioma do navegador → padrão (pt).
 * `en-*` vira "en"; qualquer outro cai no padrão.
 */
export function detectLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // localStorage indisponível (modo privado, etc.) — segue para detecção.
  }

  const nav = window.navigator.language?.toLowerCase() ?? "";
  if (nav.startsWith("en")) return "en";
  return DEFAULT_LANG;
}
