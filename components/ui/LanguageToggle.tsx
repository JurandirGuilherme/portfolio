"use client";

import type { Lang } from "@/types";
import { useLanguage } from "@/lib/i18n/useLanguage";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import styles from "./LanguageToggle.module.css";

const OPTIONS: Lang[] = ["pt", "en"];

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const mounted = useHasMounted();
  // Antes de hidratar mostra o padrão (pt) para evitar mismatch.
  const active = mounted ? lang : "pt";

  return (
    <div className={styles.group} role="group" aria-label="Idioma / Language">
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          className={active === option ? styles.active : styles.option}
          aria-pressed={active === option}
          onClick={() => setLang(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
