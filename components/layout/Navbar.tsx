import { navLinks, profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import styles from "./Navbar.module.css";

const [brandName, brandTld] = profile.brand.split(".");

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`wrap ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          {brandName}
          <b>.{brandTld}</b>
        </a>
        <div className={styles.links}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={[
                link.hideable ? styles.hideable : "",
                link.highlight ? styles.contact : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
