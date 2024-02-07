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
        <div className="text-green-950 font-bold font-raleway text-3xl">
          Book added successfully!
        </div>
      )}
    </div>
  );
};

export default AddBookView;
