import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../../components/searchBar/SearchBar';

describe('SearchBar', () => {
  test('renders search input', () => {
    render(<SearchBar />);

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue('');
  });

  test('updates search input value', () => {
    render(<SearchBar />);

    const searchInput = screen.getByTestId('search-input');

    fireEvent.change(searchInput, { target: { value: 'plant' } });
    expect(searchInput).toHaveValue('plant');
  });

  test('saves search input value to local storage', () => {
    render(<SearchBar />);

    const searchInput = screen.getByTestId('search-input');

    fireEvent.change(searchInput, { target: { value: 'plant' } });
    expect(localStorage.getItem('searchForm')).toEqual('plant');
  });

  test('updates local storage on component unmount', () => {
    const { unmount } = render(<SearchBar />);
    const searchInput = screen.getByTestId('search-input');

    fireEvent.change(searchInput, { target: { value: 'plant' } });
    expect(localStorage.getItem('searchForm')).toEqual('plant');

    unmount();
    expect(localStorage.getItem('searchForm')).toEqual('plant');
  });

  test('loads value from local storage', () => {
    localStorage.setItem('searchForm', 'flower');

    render(<SearchBar />);

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toHaveValue('flower');
  });
});
