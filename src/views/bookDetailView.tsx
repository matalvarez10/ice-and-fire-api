import { useParams } from "react-router-dom";
import { BookContext } from "../hooks/bookContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookCardComponent } from "../components/bookCardComponent";

const BookDetailView = () => {
  const { id } = useParams();
  const books = useContext(BookContext);
  const chosenBook = books.find((book) => book.isbn === id);

  return (
    <section className="main-container">
      {chosenBook && <BookCardComponent book={chosenBook}/>}
        <Link to="/" className="py-3 px-10 rounded bg-blue-600 text-white font-raleway">Go Back</Link>
    </section>
  );
};

export default BookDetailView;
