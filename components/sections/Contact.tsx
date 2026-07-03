import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contato" className={styles.contact}>
      <div className="wrap">
        <Reveal>
          <span className={`label ${styles.label}`}>Contato</span>
          <h2 className={styles.heading}>{profile.contact.heading}</h2>
          <p className={styles.text}>{profile.contact.text}</p>
          <a className={styles.mail} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className={styles.links}>
            <a
              className={`${styles.btn} ${styles.ghost}`}
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              className={`${styles.btn} ${styles.ghost}`}
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className={`${styles.btn} ${styles.primary}`}
              href={`mailto:${profile.email}`}
            >
              Enviar e-mail
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
