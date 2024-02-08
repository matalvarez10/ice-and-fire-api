import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { IBookAddedData } from "../interfaces/bookAddedData.interface";
import { IOutletProps } from "../interfaces/outletProps.interface";
import CustomInputComponent from "../components/customInputComponent";

const AddBookView = () => {
  const { addBook } = useOutletContext() as IOutletProps;

  const [formData, setFormData] = useState<IBookAddedData>({
    url: "",
    imgUrl: "",
    name: "",
    isbn: "",
    authors: [],
    numberOfPages: 0,
    publisher: "",
    country: "",
    mediaType: "",
    released: new Date(),
    characters: [],
    povCharacters: [],
    favorite: false,
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const updatedValue =
      name === "authors" || name === "characters"
        ? value.split(",")
        : name === "released"
        ? new Date(value)
        : value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    addBook(formData);
    setFormData({
      imgUrl: "",
      url: "",
      name: "",
      isbn: "",
      authors: [],
      numberOfPages: 0,
      publisher: "",
      country: "",
      mediaType: "",
      released: new Date(),
      characters: [],
      povCharacters: [],
      favorite: false,
    });
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className="main-container">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 w-[90%] md:w-[60%]"
      >
        <CustomInputComponent
          type="text"
          labelText="Name"
          name="name"
          placeholder="Name"
          onChange={handleInputChange}
          value={formData.name}
          required
        />
        <CustomInputComponent
          type="text"
          labelText="ISBN"
          name="isbn"
          placeholder="ISBN"
          onChange={handleInputChange}
          value={formData.isbn}
          required
        />
        <CustomInputComponent
          type="text"
          labelText="Book image url"
          name="imgUrl"
          placeholder="Book image url"
          onChange={handleInputChange}
          value={formData.imgUrl}
          required
        />
        <CustomInputComponent
          type="text"
          labelText="Authors (comma-separated)"
          name="authors"
          placeholder="Authors"
          onChange={handleInputChange}
          value={formData.authors.join(",")}
          required
        />
        <CustomInputComponent
          type="text"
          labelText="Characters (comma-separated)"
          name="characters"
          placeholder="Characters"
          onChange={handleInputChange}
          value={formData.characters.join(",")}
          required
        />
        <CustomInputComponent
          type="number"
          labelText="Number of Pages"
          name="numberOfPages"
          placeholder="Number of Pages"
          onChange={handleInputChange}
          value={formData.numberOfPages}
          required
        />
        <CustomInputComponent
          type="text"
          labelText="Publisher"
          name="publisher"
          placeholder="Publisher"
          onChange={handleInputChange}
          value={formData.publisher}
          required
        />
        <CustomInputComponent
          type="text"
          labelText="Country"
          name="country"
          placeholder="Country"
          onChange={handleInputChange}
          value={formData.country}
          required
        />
        <CustomInputComponent
          type="text"
          labelText="Media Type"
          name="mediaType"
          placeholder="Media Type"
          onChange={handleInputChange}
          value={formData.mediaType}
          required
        />
        <CustomInputComponent
          type="date"
          labelText="Released"
          name="released"
          onChange={handleInputChange}
          value={formData.released.toISOString().split("T")[0]}
          required
        />
        <button className="btn-blue col-span-2" type="submit">
          Add Book
        </button>
      </form>
      {showSuccessMessage && (
        <div className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
        <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <div>
          <span className="font-medium">Book added succesfully!</span>
        </div>
      </div>
      )}
    </div>
  );
};

export default AddBookView;
