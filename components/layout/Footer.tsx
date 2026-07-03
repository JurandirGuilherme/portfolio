"use client";

import { useLanguage } from "@/lib/i18n/useLanguage";
import styles from "./Footer.module.css";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <p>{t.footer}</p>
      </div>
    </footer>
  );
}
