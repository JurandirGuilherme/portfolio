import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { renderBold } from "./richText";

describe("renderBold", () => {
  it("converte **texto** em <strong>", () => {
    render(<p>{renderBold("Sou **desenvolvedor** front-end")}</p>);
    const bold = screen.getByText("desenvolvedor");
    expect(bold.tagName).toBe("STRONG");
  });

  it("mantém texto sem marcação intacto", () => {
    render(<p>{renderBold("texto simples")}</p>);
    expect(screen.getByText("texto simples")).toBeInTheDocument();
  });

  it("suporta múltiplos trechos em negrito", () => {
    const { container } = render(<p>{renderBold("**A** e **B**")}</p>);
    expect(container.querySelectorAll("strong")).toHaveLength(2);
  });
});
