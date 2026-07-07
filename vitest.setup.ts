import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Desmonta a árvore renderizada após cada teste (evita vazamento entre casos).
afterEach(() => {
  cleanup();
});
