"use client";

import { useTheme } from "next-themes";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useHasMounted();

  const isDark = resolvedTheme === "dark";
  const label = !mounted ? "tema" : isDark ? "claro" : "escuro";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        !mounted
          ? "Alternar tema"
          : `Mudar para tema ${isDark ? "claro" : "escuro"}`
      }
    >
      {label}
    </button>
  );
}
