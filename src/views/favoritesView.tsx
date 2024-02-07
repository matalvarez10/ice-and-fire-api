import { useContext } from "react";
import { BookContext } from "../hooks/bookContext";
import BookTable from "../components/tableComponent";


const FavoriteView = () => {
  const books = useContext(BookContext);
  return (
    <div className="main-container">
      <BookTable data={books.filter(book => book.favorite)}/>
    </div>
  );
};

export default FavoriteView;
