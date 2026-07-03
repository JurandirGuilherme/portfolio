import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  label: string;
  children: ReactNode;
}

/** Seção padrão: âncora, cabeçalho (label + régua) e container. */
export function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className="wrap">
        <Reveal className={styles.head}>
          <span className="label">{label}</span>
          <span className={styles.rule} />
        </Reveal>
        {children}
      </div>
    </section>
  );
}
