
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AuthorButtonComponent from "../components/authorButtonComponent";
import "@testing-library/jest-dom";


describe("AuthorButtonComponent", () => {
  const mockOnClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Muestra el nombre del author", () => {
    const { getByText } = render(
      <MemoryRouter>
          <AuthorButtonComponent
            author="Nombre Apellido"
            selectedAuthor={null}
            onClick={mockOnClick}
          />
      </MemoryRouter>
    );
    expect(getByText("Nombre Apellido")).toBeInTheDocument();
  });

  it("Aplica estilo correcto tailwind", () => {
    const { getByText } = render(
      <MemoryRouter>
          <AuthorButtonComponent
            author="Nombre Apellido"
            selectedAuthor="Nombre Apellido"
            onClick={mockOnClick}
          />
      </MemoryRouter>
    );
    const button = getByText("Nombre Apellido");
    expect(button).toHaveClass("bg-blue-700");
  });

  it("Realiza funcion Onclick", () => {
    const { getByText } = render(
      <MemoryRouter>
          <AuthorButtonComponent
            author="Nombre Apellido"
            selectedAuthor={null}
            onClick={mockOnClick}
          />
      </MemoryRouter>
    );
    const button = getByText("Nombre Apellido");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledWith("Nombre Apellido");
  });
});