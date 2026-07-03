"use client";

import { useTheme } from "next-themes";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import { useLanguage } from "@/lib/i18n/useLanguage";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();
  const mounted = useHasMounted();

  const isDark = resolvedTheme === "dark";
  const label = !mounted
    ? t.ui.theme.fallback
    : isDark
      ? t.ui.theme.light
      : t.ui.theme.dark;

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
    >
      {label}
    </button>
  );
}
