"use client";

import { useLanguage } from "@/lib/i18n/useLanguage";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { renderBold } from "@/lib/richText";
import styles from "./Experience.module.css";

export function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experiencia" label={t.ui.nav.experiencia}>
      <div className={styles.timeline}>
        {t.experience.map((job) => (
          <Reveal key={`${job.org}-${job.period}`} className={styles.job}>
            <div className={`${styles.when} ${job.current ? styles.now : ""}`}>
              {job.period}
            </div>
            <div>
              <h3 className={styles.title}>
                {job.role} · <span className={styles.org}>{job.org}</span>
              </h3>
              <ul className={styles.bullets}>
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{renderBold(bullet)}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
