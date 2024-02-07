import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const NoFavoritesComponent = () => {
  return (
    <article className="h-[500px] flex justify-center items-center flex-col gap-5">
      <p className="section-header font-light text-4xl">
        No favorites Found - Add some Favorites!{" "}
      </p>
      <Link
        className="red-btn flex flex-row justify-center items-center gap-3 hover:bg-gray-900"
        to={"/"}
      >
        <FaArrowLeft />
        Go back to Homepage{" "}
      </Link>
    </article>
  );
};

export default NoFavoritesComponent;
