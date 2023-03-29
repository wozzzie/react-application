import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../../components/searchBar/SearchBar';

describe('Search Bar component', () => {
  test('testing render of the search input', () => {
    render(<SearchBar />);

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue('');
  });

  test('testing update of the search input value', () => {
    render(<SearchBar />);

    const searchInput = screen.getByTestId('search-input');

    fireEvent.change(searchInput, { target: { value: 'plant' } });
    expect(searchInput).toHaveValue('plant');
  });

  test('testing save search input value to local storage', () => {
    render(<SearchBar />);

    const searchInput = screen.getByTestId('search-input');

    fireEvent.change(searchInput, { target: { value: 'plant' } });
    expect(localStorage.getItem('searchForm')).toEqual('plant');
  });

  test('testing update local storage on component unmount', () => {
    const { unmount } = render(<SearchBar />);
    const searchInput = screen.getByTestId('search-input');

    fireEvent.change(searchInput, { target: { value: 'plant' } });
    expect(localStorage.getItem('searchForm')).toEqual('plant');

    unmount();
    expect(localStorage.getItem('searchForm')).toEqual('plant');
  });

  test('testing load value from local storage', () => {
    localStorage.setItem('searchForm', 'plant');

    render(<SearchBar />);

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toHaveValue('plant');
  });
});
