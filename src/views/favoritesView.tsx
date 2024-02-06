import { useContext } from "react";
import { BookContext } from "../hooks/bookContext";
import BookTable from "../components/tableComponent";


const FavoriteView = () => {
  const books = useContext(BookContext);
  return (
    <>
      <h1>this is the favorites view</h1>
      <BookTable data={books.filter(book => book.favorite)}/>
    </>
  );
};

export default FavoriteView;
