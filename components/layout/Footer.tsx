import { profile } from "@/data/profile";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <p>{profile.footer}</p>
      </div>
    </footer>
  );
}
