import { useState, useContext, useEffect } from "react";
import { BookContext } from "../hooks/bookContext";
import BookTable from "../components/tableComponent";
import AuthorButtonComponent from "../components/authorButtonComponent";

const HomeView: React.FC = () => {
  const books = useContext(BookContext);
  const [uniqueAuthors, setUniqueAuthors] = useState<string[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);

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
    <div className="bg-white py-20 h-screen w-screen flex flex-col items-center gap-2">
      <div className="flex flex-row gap-4">
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
    </div>
  );
};

export default HomeView;
