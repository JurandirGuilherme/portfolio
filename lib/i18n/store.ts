import type { Lang } from "@/types";
import { DEFAULT_LANG, STORAGE_KEY } from "./config";
import { detectLang } from "./detect";

/**
 * Store externo do idioma (padrão useSyncExternalStore).
 * Evita setState-em-effect: o idioma é uma fonte externa que o React lê.
 */
let current: Lang | null = null;
const listeners = new Set<() => void>();

function resolve(): Lang {
  if (current === null) current = detectLang();
  return current;
}

export function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function getSnapshot(): Lang {
  return resolve();
}

/** No servidor, sempre o padrão — o cliente reconcilia após hidratar. */
export function getServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

export function setLang(lang: Lang): void {
  current = lang;
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // localStorage indisponível — mantém apenas em memória.
  }
  listeners.forEach((listener) => listener());
}
