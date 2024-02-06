import { Link } from "react-router-dom";

const HeaderComponent = () => {

    return (
    <nav data-testid="header-component">        
        <Link to="/">All Books</Link>
        <Link to="/favorites">favorites</Link>
        <Link to="/add-book">Add Book</Link>
    </nav>
      );
}
 
export default HeaderComponent;