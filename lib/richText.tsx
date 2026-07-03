import { Fragment, type ReactNode } from "react";

/**
 * Converte marcações `**negrito**` de uma string em <strong>.
 * Mantém o restante como texto puro — sem HTML arbitrário.
 */
export function renderBold(text: string): ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    // Índices ímpares são o conteúdo capturado entre os asteriscos.
    i % 2 === 1 ? (
      <strong key={i}>{part}</strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
