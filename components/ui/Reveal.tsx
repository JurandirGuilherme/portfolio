"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import styles from "./Reveal.module.css";

interface RevealProps {
  children: ReactNode;
  /** Elemento HTML renderizado (padrão: div) */
  as?: "div" | "li" | "article" | "section";
  className?: string;
}

/**
 * Revela o conteúdo com fade-up quando entra na viewport.
 * Usa IntersectionObserver; sob prefers-reduced-motion revela de imediato.
 */
export function Reveal({ children, as = "div", className }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  const visible = reduced || inView;
  const Tag = as;
  const cls = [styles.reveal, visible ? styles.in : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref as React.Ref<never>} className={cls}>
      {children}
    </Tag>
  );
}
