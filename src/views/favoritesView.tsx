import { useContext } from "react";
import { BookContext } from "../hooks/bookContext";
import BookTable from "../components/tableComponent";
import NoFavoritesComponent from "../components/noFavoritesComponent";

const FavoriteView = () => {
  const books = useContext(BookContext);
  
  // Check if there are any favorite books
  const hasFavorites = books.some(book => book.favorite);

  return (
    <div className="main-container">
      {hasFavorites ? ( 
        <BookTable data={books.filter(book => book.favorite)} />
      ) : (
        <NoFavoritesComponent/>
      )}
    </div>
  );
};

export default FavoriteView;
