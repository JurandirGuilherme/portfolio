"use client";

import { site } from "@/data/site";
import { useLanguage } from "@/lib/i18n/useLanguage";
import { CanvasField } from "@/components/ui/CanvasField";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useLanguage();

  return (
    <header id="top" className={styles.hero}>
      <CanvasField className={styles.fx} />
      <div className={`wrap ${styles.content}`}>
        <span className={styles.status}>
          <span className={styles.dot} />
          <span className={styles.badgeText}>{t.statusBadge}</span>
        </span>
        <h1 className={styles.name}>{site.name}</h1>
        <p className={styles.role}>
          <span className={styles.caret}>&lt;/&gt;</span> {t.role}
        </p>
        <p className={styles.lede}>{t.lede}</p>
        <div className={styles.ctas}>
          <a className={`${styles.btn} ${styles.primary}`} href="#contato">
            {t.ui.getInTouch}
          </a>
          <a
            className={`${styles.btn} ${styles.ghost}`}
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className={`${styles.btn} ${styles.ghost}`}
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
      <a className={styles.cue} href="#sobre" aria-label={t.ui.scrollCue}>
        <span>{t.ui.scrollCue}</span>
        <span className={styles.arrow}>↓</span>
      </a>
    </header>
  );
}
