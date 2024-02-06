import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeaderComponent from '../components/headerComponent';

describe('HeaderComponent', () => {
  it('Se muestran los links de navegación, con los textos correctos', () => {
    render(
      <MemoryRouter>
        <HeaderComponent />
      </MemoryRouter>
    );

    const allBooksLink = screen.getByText('All Books');
    const favoritesLink = screen.getByText('favorites');
    const addBookLink = screen.getByText('Add Book');

    expect(allBooksLink).toBeInTheDocument();
    expect(favoritesLink).toBeInTheDocument();
    expect(addBookLink).toBeInTheDocument();
  });
});
