import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { IBookAddedData } from "../interfaces/bookAddedData.interface";
import { IOutletProps } from "../interfaces/outletProps.interface";
import CustomInputComponent from "../components/customInputComponent";

const AddBookView = () => {
  const { addBook } = useOutletContext() as IOutletProps;

  const [formData, setFormData] = useState<IBookAddedData>({
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

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const updatedValue =
      name === "authors"
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
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 w-[90%] md:w-[60%]">
        <CustomInputComponent
          type="text"
          labelText="Name"
          name="name"
          placeholder="Name"
          onChange={handleInputChange}
          value={formData.name}
          
        />
        <CustomInputComponent
          type="text"
          labelText="ISBN"
          name="isbn"
          placeholder="ISBN"
          onChange={handleInputChange}
          value={formData.isbn}
          
        />
        <CustomInputComponent
          type="text"
          labelText="Authors (comma-separated)"
          name="authors"
          placeholder="Authors"
          onChange={handleInputChange}
          value={formData.authors.join(",")}
          
        />
        <CustomInputComponent
          type="number"
          labelText="Number of Pages"
          name="numberOfPages"
          placeholder="Number of Pages"
          onChange={handleInputChange}
          value={formData.numberOfPages}
          
        />
        <CustomInputComponent
          type="text"
          labelText="Publisher"
          name="publisher"
          placeholder="Publisher"
          onChange={handleInputChange}
          value={formData.publisher}
          
        />
        <CustomInputComponent
          type="text"
          labelText="Country"
          name="country"
          placeholder="Country"
          onChange={handleInputChange}
          value={formData.country}
          
        />
        <CustomInputComponent
          type="text"
          labelText="Media Type"
          name="mediaType"
          placeholder="Media Type"
          onChange={handleInputChange}
          value={formData.mediaType}
          
        />
        <CustomInputComponent
          type="date"
          labelText="Released"
          name="released"
          onChange={handleInputChange}
          value={formData.released.toISOString().split("T")[0]}
          
        />
        <button className="btn-blue col-span-2" type="submit">
          Add Book
        </button>
      </form>
      {showSuccessMessage && (
        <div className="text-green-950 font-bold font-raleway text-3xl">Book added successfully!</div>
      )}
    </div>
  );
};

export default AddBookView;
