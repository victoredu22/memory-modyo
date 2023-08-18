import React from "react";

import userEvent from "@testing-library/user-event"; // Aún necesitas esta importación para el evento click

import { render, screen } from "@testing-library/react";
import { FinalScore } from "../../src/components/FinalScore";
import "@testing-library/jest-dom";

describe("FinalScore Component", () => {
  it("verifies the href of the LinkedIn link", () => {
    render(<FinalScore close={() => {}} />);

    // Busca el enlace por su atributo data-test-id
    const linkedInLink = screen.getByTestId("linkedin-link");

    // Verifica la propiedad href del enlace
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/victorcurilao"
    );
  });
});
