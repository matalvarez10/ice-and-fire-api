import React, { useState, useContext, useEffect } from "react";
import { BookContext } from "../hooks/bookContext";
import BookTable from "../components/tableComponent";
import AuthorButtonComponent from "../components/authorButtonComponent";
import LoadingComponent from "../components/loadingComponent";
import { useOutletContext } from "react-router-dom";
import { IOutletProps } from "../interfaces/outletProps.interface";
import ErrorFetchComponent from "../components/errorFetchComponent";

const HomeView: React.FC = () => {
  const books = useContext(BookContext);
  const [uniqueAuthors, setUniqueAuthors] = useState<string[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);

  const { isLoading, hasError } = useOutletContext() as IOutletProps;

  useEffect(() => {
    const authorsSet = new Set<string>();
    books.forEach((book) => {
      book.authors.forEach((author) => {
        authorsSet.add(author);
      });
    });
    const uniqueAuthorsArray = Array.from(authorsSet);
    setUniqueAuthors(uniqueAuthorsArray);
  }, [books]);

  const handleAuthorButtonClick = (author: string) => {
    setSelectedAuthor(author === selectedAuthor ? null : author);
  };

  const filteredBooks = selectedAuthor
    ? books.filter((book) => book.authors.includes(selectedAuthor))
    : books;

  return (
    <div className="main-container">
      {hasError ? (
        <ErrorFetchComponent />
      ) : isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <div className="flex flex-row gap-4 m-1 mb-3 flex-wrap">
            {uniqueAuthors.map((author) => (
              <AuthorButtonComponent
                key={author}
                author={author}
                selectedAuthor={selectedAuthor}
                onClick={handleAuthorButtonClick}
              />
            ))}
            <AuthorButtonComponent
              author="Show All Authors"
              selectedAuthor={selectedAuthor}
              onClick={() => setSelectedAuthor(null)}
            />
          </div>
          <BookTable data={filteredBooks} />
        </>
      )}
    </div>
  );
};

export default HomeView;
