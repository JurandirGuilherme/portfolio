"use client";

import { site } from "@/data/site";
import { useLanguage } from "@/lib/i18n/useLanguage";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Contact.module.css";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contato" className={styles.contact}>
      <div className="wrap">
        <Reveal>
          <span className={`label ${styles.label}`}>{t.ui.nav.contato}</span>
          <h2 className={styles.heading}>{t.contact.heading}</h2>
          <p className={styles.text}>{t.contact.text}</p>
          <a className={styles.mail} href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <div className={styles.links}>
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
            <a
              className={`${styles.btn} ${styles.primary}`}
              href={`mailto:${site.email}`}
            >
              {t.ui.sendEmail}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
