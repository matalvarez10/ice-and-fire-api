import { useParams } from "react-router-dom";
import { BookContext } from "../hooks/bookContext";
import { useContext } from "react";
import { BookCardComponent } from "../components/bookCardComponent";
import ErrorComponent from "../components/errorComponent";

const BookDetailView = () => {
  const { id } = useParams();
  const books = useContext(BookContext);
  const chosenBook = books.find((book) => book.isbn === id);

  return (
    <section className="main-container">
      {chosenBook ? (
        <BookCardComponent book={chosenBook} />
      ) : (
        <ErrorComponent />
      )}
    </section>
  );
};

export default BookDetailView;
