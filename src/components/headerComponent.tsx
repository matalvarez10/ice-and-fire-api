import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <nav
      data-testid="header-component"
      className="absolute md:fixed w-full h-16 justify-between items-center top-0 text-white  px-6 lg:px-24 font-lato text-xs md:text-sm font-light bg-gray-900 uppercase  z-10"
    >
      <Link to="/">All Books</Link>
      <Link to="/favorites">favorites</Link>
      <Link to="/add-book">Add Book</Link>
    </nav>
  );
};

export default HeaderComponent;
