import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { renderBold } from "@/lib/richText";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <Section id="experiencia" label="Experiência">
      <div className={styles.timeline}>
        {profile.experience.map((job) => (
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
