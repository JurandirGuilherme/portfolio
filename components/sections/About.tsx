import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./About.module.css";

export function About() {
  return (
    <Section id="sobre" label="Sobre">
      <div className={styles.grid}>
        <Reveal className={styles.text}>
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>
        <Reveal as="div" className={styles.stats}>
          {profile.stats.map((stat) => (
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
