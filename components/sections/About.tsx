"use client";

import { useLanguage } from "@/lib/i18n/useLanguage";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./About.module.css";

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="sobre" label={t.ui.nav.sobre}>
      <div className={styles.grid}>
        <Reveal className={styles.text}>
          {t.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>
        <Reveal as="div" className={styles.stats}>
          {t.stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
