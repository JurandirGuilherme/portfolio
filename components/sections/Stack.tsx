import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Stack.module.css";

export function Stack() {
  return (
    <Section id="stack" label="Stack">
      <div className={styles.groups}>
        {profile.stack.map((group) => (
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
