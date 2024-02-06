import { useParams } from "react-router-dom";
import { BookContext } from "../hooks/bookContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const BookDetailView = () => {
  const { id } = useParams();
  const books = useContext(BookContext);
  const chosenBook = books.find((book) => book.isbn === id);

  return (
    <section>
        <Link to="/">Go Back</Link>
      {chosenBook && <h1>{chosenBook.name}</h1>}
    </section>
  );
};

export default BookDetailView;
