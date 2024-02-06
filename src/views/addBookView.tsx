import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { IBookAddedData } from '../interfaces/bookAddedData.interface';
import { IOutletProps } from '../interfaces/outletProps.interface';

const AddBookView = () => {
  const { addBook } = useOutletContext() as IOutletProps;

  const [formData, setFormData] = useState<IBookAddedData>({
    url: '',
    name: '',
    isbn: '',
    authors: [],
    numberOfPages: 0,
    publisher: '',
    country: '',
    mediaType: '',
    released: new Date(),
    characters: [],
    povCharacters: [],
    favorite: false,
  });

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
  
    const updatedValue = name === 'authors' ? value.split(',') : name === 'released' ? new Date(value) : value;
  
    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBook(formData);
    setFormData({
      url: '',
      name: '',
      isbn: '',
      authors: [],
      numberOfPages: 0,
      publisher: '',
      country: '',
      mediaType: '',
      released: new Date(),
      characters: [],
      povCharacters: [],
      favorite: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        URL:
        <input type="text" name="url" value={formData.url} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        ISBN:
        <input type="text" name="isbn" value={formData.isbn} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Authors (comma-separated):
        <input type="text" name="authors" value={formData.authors.join(',')} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Number of Pages:
        <input type="number" name="numberOfPages" value={formData.numberOfPages} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Publisher:
        <input type="text" name="publisher" value={formData.publisher} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Country:
        <input type="text" name="country" value={formData.country} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Media Type:
        <input type="text" name="mediaType" value={formData.mediaType} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Released:
        <input type="date" name="released" value={formData.released.toISOString().split('T')[0]} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookView;
