import { IBookAddedData } from "../interfaces/bookAddedData.interface";

export const BookCardComponent = ({ book }: { book: IBookAddedData }) => {
  return (
    <article>
        <h1 className="font-lato font-semibold text-2xl  text-blue-800 text-center my-4 uppercase">{book.name} : {book.isbn}</h1>
        <div className="rounded-md font-raleway bg-white shadow-2xl border-gray-200 text-center">
          <img
            src={book.imgUrl}
            alt="book-img"
            className="h-80 w-full object-contain p-1"
          />
          <p className="font-bold">Number of pages :</p>
          <p>{book.numberOfPages}</p>
          <p className="font-bold">Publisher:</p>
          <p>{book.publisher}</p>
          <p className="font-bold">Author(s):</p>
          <p>{book.authors.toString()}</p>
          <p className="font-bold">Publisher:</p>
          <p>{book.publisher}</p>
          <p className="font-bold">Country:</p>
          <p>{book.country}</p>
          <p className="font-bold">Number of POV Characters:</p>
          <p>{book.povCharacters.length}</p>
          <p className="font-bold">Number of Characters:</p>
          <p>{book.characters.length}</p>
        </div>
    </article>
  );
};
