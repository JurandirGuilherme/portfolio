"use client";

import { useLanguage } from "@/lib/i18n/useLanguage";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Projects.module.css";

export function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projetos" label={t.ui.nav.projetos}>
      <div className={styles.grid}>
        {t.projects.map((project) => (
          <Reveal key={project.title} as="article" className={styles.card}>
            <span
              className={`${styles.badge} ${project.highlight ? styles.win : ""}`}
            >
              {project.badge}
            </span>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.desc}>{project.description}</p>
            <div className={styles.techs}>
              {project.techs.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
