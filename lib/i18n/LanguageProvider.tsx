"use client";

import {
  createContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Content, Lang } from "@/types";
import { content } from "@/data/content";
import { HTML_LANG } from "./config";
import { getServerSnapshot, getSnapshot, setLang, subscribe } from "./store";

export interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Content;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Mantém o atributo lang do documento em sincronia (acessibilidade/SEO).
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}
