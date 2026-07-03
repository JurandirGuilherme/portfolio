"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

type RGB = [number, number, number];

const GAP = 30;
const FALLBACK_ACCENT: RGB = [228, 87, 46];
const FALLBACK_SUPPORT: RGB = [31, 122, 140];

function hexToRgb(hex: string): RGB | null {
  let h = hex.trim().replace("#", "");
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  if (h.length !== 6) return null;
  const n = parseInt(h, 16);
  if (Number.isNaN(n)) return null;
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

interface CanvasFieldProps {
  className?: string;
}

/**
 * Campo de pontos ondulante (dot wave) renderizado em <canvas>.
 * Reage ao mouse (pontos próximos acendem em accent) e lê as cores
 * das CSS custom properties, reagindo à troca de tema. Fica estático
 * sob prefers-reduced-motion.
 */
export function CanvasField({ className }: CanvasFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -999, y: -999 };
    let width = 0;
    let height = 0;
    let t = 0;
    let raf = 0;

    const root = document.documentElement;
    const styles = getComputedStyle(root);
    const accent =
      hexToRgb(styles.getPropertyValue("--accent")) ?? FALLBACK_ACCENT;
    const support =
      hexToRgb(styles.getPropertyValue("--support")) ?? FALLBACK_SUPPORT;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / GAP) + 1;
      const rows = Math.ceil(height / GAP) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * GAP;
          const y = j * GAP;
          const wave = Math.sin(x * 0.018 + t) + Math.cos(y * 0.02 + t * 0.9);
          const off = wave * 3.2;
          const px = x + off;
          const py = y + off;
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const near = Math.max(0, 1 - dist / 150);
          const base = 0.1 + 0.14 * (0.5 + 0.5 * wave);
          const alpha = base + near * 0.6;
          const radius = 1.15 + near * 2.6 + (0.5 + 0.5 * wave) * 0.35;
          const c = near > 0.15 ? accent : support;
          ctx.beginPath();
          ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha.toFixed(3)})`;
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = () => {
      t += 0.012;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onResize = () => {
      resize();
      if (reduced) draw();
    };
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };

    resize();
    draw();
    if (!reduced) raf = requestAnimationFrame(loop);

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
    // Reconstrói ao trocar o tema (relê cores) ou a preferência de motion.
  }, [resolvedTheme, reduced]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
