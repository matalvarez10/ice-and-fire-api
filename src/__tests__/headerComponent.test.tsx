import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeaderComponent from "../components/headerComponent";
import { MemoryRouter } from "react-router-dom";

describe("HeaderComponent", () => {
  it("Muestra logo y links de navegacion", () => {
    render(
      <MemoryRouter>
        <HeaderComponent />
      </MemoryRouter>
    );

    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();

    const allBooksLink = screen.getByRole("link", { name: /All Books/i });
    const favoritesLink = screen.getByRole("link", { name: /Favorites/i });
    const addBookLink = screen.getByRole("link", { name: /Add Book/i });
    expect(allBooksLink).toBeInTheDocument();
    expect(favoritesLink).toBeInTheDocument();
    expect(addBookLink).toBeInTheDocument();
  });
});
