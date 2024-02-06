import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./headerComponent";
import { fetchData } from "../services/fetchLibros";
import { IBookAddedData } from "../interfaces/bookAddedData.interface";
import { BookContext } from "../hooks/bookContext";

const LayoutComponent = () => {
  const [bookData, setBookData] = useState<IBookAddedData[]>([]);

  useEffect(() => {
    const fetchDatosIniciales = async () => {
      try {
        const datos = await fetchData();
        const booksWithFavorite: IBookAddedData[] = datos.map((book) => ({
          ...book,
          favorite: false,
        }));
        setBookData(booksWithFavorite);
      } catch (error) {
        console.log(error);
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
      <Outlet context={{ addFavorite,addBook }} />
    </BookContext.Provider>
  );
};

export default LayoutComponent;
