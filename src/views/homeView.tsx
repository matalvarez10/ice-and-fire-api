import { useContext } from "react";
import { BookContext } from "../hooks/bookContext";
import BookTable from "../components/tableComponent";

const HomeView = () => {
  const books = useContext(BookContext);

    return ( 
         <BookTable data={books} /> 

     );
}
 
export default HomeView;