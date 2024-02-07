import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeView from "../views/homeView";
import FavoriteView from "../views/favoritesView";
import ErrorComponent from "../components/errorComponent";
import AddBookView from "../views/addBookView";
import BookDetailView from "../views/bookDetailView";
import App from "../App";


const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <HomeView /> },
        { path: "/favorites", element: <FavoriteView/> },
        { path: "/add-book", element: <AddBookView/> },
        { path: "/books/:id", element: <BookDetailView/> },
        { path: "*", element: <ErrorComponent /> },

      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
