import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookCardComponent } from "../components/bookCardComponent"; 
import { IBookAddedData } from "../interfaces/bookAddedData.interface"; 
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("BookCardComponent", () => {
  const mockBookData: IBookAddedData = {
    name: "Example Book",
    isbn: "1234567890",
    imgUrl:
      "https://m.media-amazon.com/images/I/71Jzezm8CBL._AC_UF1000,1000_QL80_.jpg",
    numberOfPages: 300,
    publisher: "Publisher Name",
    authors: ["Author 1", "Author 2"],
    country: "Country",
    povCharacters: ["Character 1", "Character 2"],
    characters: ["Character 3", "Character 4"],
    mediaType: "book",
    released: new Date(),
    favorite: false,
  };

  it("Muestra información importante correctamente", () => {
    render(
      <MemoryRouter>
        <BookCardComponent book={mockBookData} />
      </MemoryRouter>
    );

    const bookTitle = screen.getByText(/Example Book/i);
    expect(bookTitle).toBeInTheDocument();

    const bookIsbn = screen.getByText(/1234567890/i);
    expect(bookIsbn).toBeInTheDocument();
  });

  it("Muestra boton para volver atras", () => {
    render(
      <MemoryRouter>
        <BookCardComponent book={mockBookData} />
      </MemoryRouter>
    );

    const goBackLink = screen.getByText(/Go Back/i);
    expect(goBackLink).toBeInTheDocument();
  });

  it('Simulacion de volver  atras', () => {
    render(
      <MemoryRouter>
        <BookCardComponent book={mockBookData} />
      </MemoryRouter>
    );

    const goBackLink = screen.getByText(/Go Back/i);
    userEvent.click(goBackLink);
  });
});
