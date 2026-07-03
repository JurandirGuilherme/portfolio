"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * `false` durante o SSR e o primeiro render; `true` após a hidratação.
 * Evita mismatch sem precisar de setState dentro de um effect.
 */
export function useHasMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
