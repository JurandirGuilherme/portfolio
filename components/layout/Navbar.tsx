"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { NAV_SECTIONS } from "@/lib/i18n/sections";
import { useLanguage } from "@/lib/i18n/useLanguage";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import styles from "./Navbar.module.css";

const [brandName, brandTld] = site.brand.split(".");

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  // Fecha o menu mobile com Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className={styles.nav}>
      <div className={`wrap ${styles.inner}`}>
        <a href="#top" className={styles.brand} onClick={() => setOpen(false)}>
          {brandName}
          <b>.{brandTld}</b>
        </a>

        <div className={styles.right}>
          <div className={styles.desktopLinks}>
            {NAV_SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={section.highlight ? styles.contact : ""}
              >
                {t.ui.nav[section.id]}
              </a>
            ))}
          </div>

          <LanguageToggle />
          <ThemeToggle />

          <button
            type="button"
            className={`${styles.menuBtn} ${open ? styles.menuOpen : ""}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`${styles.mobilePanel} ${open ? styles.panelOpen : ""}`}
      >
        {NAV_SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`${styles.mobileLink} ${
              section.highlight ? styles.mobileContact : ""
            }`}
            onClick={() => setOpen(false)}
          >
            {t.ui.nav[section.id]}
          </a>
        ))}
      </div>
    </nav>
  );
}
