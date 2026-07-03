"use client";

import { useLanguage } from "@/lib/i18n/useLanguage";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Stack.module.css";

export function Stack() {
  const { t } = useLanguage();

  return (
    <Section id="stack" label={t.ui.nav.stack}>
      <div className={styles.groups}>
        {t.stack.map((group) => (
          <Reveal key={group.title} className={styles.group}>
            <h3 className={styles.title}>{group.title}</h3>
            <div className={styles.tags}>
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`${styles.tag} ${
                    group.keys?.includes(skill) ? styles.key : ""
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
