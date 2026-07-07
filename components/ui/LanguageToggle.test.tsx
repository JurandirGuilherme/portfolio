import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

beforeEach(() => {
  localStorage.clear();
});

function setup() {
  return render(
    <LanguageProvider>
      <LanguageToggle />
    </LanguageProvider>,
  );
}

describe("LanguageToggle", () => {
  it("renderiza os dois idiomas como botões", () => {
    setup();
    expect(screen.getByRole("button", { name: "PT" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "EN" })).toBeInTheDocument();
  });

  it("marca o idioma escolhido no aria-pressed e atualiza o lang do documento", async () => {
    const user = userEvent.setup();
    setup();

    const pt = screen.getByRole("button", { name: "PT" });
    await user.click(pt);

    expect(pt).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "EN" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    expect(document.documentElement.lang).toBe("pt-BR");
  });
});
