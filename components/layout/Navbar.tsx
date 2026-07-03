"use client";

import { site } from "@/data/site";
import { NAV_SECTIONS } from "@/lib/i18n/sections";
import { useLanguage } from "@/lib/i18n/useLanguage";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import styles from "./Navbar.module.css";

const [brandName, brandTld] = site.brand.split(".");

export function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className={styles.nav}>
      <div className={`wrap ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          {brandName}
          <b>.{brandTld}</b>
        </a>
        <div className={styles.links}>
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={[
                section.hideable ? styles.hideable : "",
                section.highlight ? styles.contact : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {t.ui.nav[section.id]}
            </a>
          ))}
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
