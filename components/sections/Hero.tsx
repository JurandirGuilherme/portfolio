import { profile } from "@/data/profile";
import { CanvasField } from "@/components/ui/CanvasField";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <header id="top" className={styles.hero}>
      <CanvasField className={styles.fx} />
      <div className={`wrap ${styles.content}`}>
        <span className={styles.status}>
          <span className={styles.dot} />
          {profile.statusBadge}
        </span>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.role}>
          <span className={styles.caret}>&lt;/&gt;</span> {profile.role}
        </p>
        <p className={styles.lede}>{profile.lede}</p>
        <div className={styles.ctas}>
          <a className={`${styles.btn} ${styles.primary}`} href="#contato">
            Entrar em contato
          </a>
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
        </div>
      </div>
      <a
        className={styles.cue}
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
      >
        <span>sobre</span>
        <span className={styles.arrow}>↓</span>
      </a>
    </header>
  );
}
