import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./headerComponent";
import { fetchData } from "../services/fetchLibros";
import { IBookAddedData } from "../interfaces/bookAddedData.interface";
import { BookContext } from "../hooks/bookContext";
import { imgs } from "../assets/imgs";

const LayoutComponent = () => {
  const [bookData, setBookData] = useState<IBookAddedData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchDatosIniciales = async () => {
      setIsLoading(true);
      try {
        const datos = await fetchData();
        const booksWithFavorite: IBookAddedData[] = datos.map((book) => ({
          ...book,
          favorite: false,
          imgUrl: imgs.find((img) => img.name === book.name)?.imgUrl || "",
        }));
        setBookData(booksWithFavorite);
        setHasError(false);
      } catch (error) {
        setHasError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDatosIniciales();
  }, []);

  const addFavorite = (isbn: string) => {
    setBookData((prevBookData) => {
      return prevBookData.map((book) => {
        if (book.isbn === isbn) {
          return { ...book, favorite: !book.favorite };
        }
        return book;
      });
    });
  };

  const addBook = (newBook: IBookAddedData) => {
    setBookData((prevBookData) => [...prevBookData, newBook]);
  };

  return (
    <BookContext.Provider value={bookData}>
      <HeaderComponent />
      <Outlet context={{ addFavorite, addBook, isLoading, hasError }} />
    </BookContext.Provider>
  );
};

export default LayoutComponent;
