import { describe, it, expect, beforeEach } from "vitest";
import { detectLang } from "./detect";
import { STORAGE_KEY } from "./config";

function setNavigatorLanguage(language: string) {
  Object.defineProperty(window.navigator, "language", {
    value: language,
    configurable: true,
  });
}

describe("detectLang", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("usa a preferência salva quando existe (pt)", () => {
    localStorage.setItem(STORAGE_KEY, "pt");
    setNavigatorLanguage("en-US");
    expect(detectLang()).toBe("pt");
  });

  it("usa a preferência salva quando existe (en)", () => {
    localStorage.setItem(STORAGE_KEY, "en");
    setNavigatorLanguage("pt-BR");
    expect(detectLang()).toBe("en");
  });

  it("detecta pt pelo idioma do navegador quando não há preferência", () => {
    setNavigatorLanguage("pt-BR");
    expect(detectLang()).toBe("pt");
  });

  it("cai no padrão (en) para navegador en-*", () => {
    setNavigatorLanguage("en-US");
    expect(detectLang()).toBe("en");
  });

  it("cai no padrão (en) para idioma não suportado", () => {
    setNavigatorLanguage("es-ES");
    expect(detectLang()).toBe("en");
  });

  it("ignora um valor salvo inválido e usa o navegador", () => {
    localStorage.setItem(STORAGE_KEY, "de");
    setNavigatorLanguage("pt-BR");
    expect(detectLang()).toBe("pt");
  });
});
