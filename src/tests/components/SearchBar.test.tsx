import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SearchBar from '../../components/searchBar/SearchBar';
import { Store, AnyAction } from '@reduxjs/toolkit';

const mockStore = configureMockStore();

describe('Search Bar component', () => {
  let store: Store<unknown, AnyAction>;

  beforeEach(() => {
    store = mockStore({
      searchBar: {
        searchText: '',
      },
    });
  });

  test('testing render of the search input', () => {
    render(
      <Provider store={store}>
        <SearchBar onSubmit={() => {}} />
      </Provider>
    );

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue('');
  });

  test('testing update of the search input value', () => {
    render(
      <Provider store={store}>
        <SearchBar onSubmit={() => {}} />
      </Provider>
    );

    const searchInput = screen.getByTestId('search-input');

    fireEvent.change(searchInput, { target: { value: '' } });
    expect(searchInput).toHaveValue('');
  });

  test('testing load value from store', () => {
    store = mockStore({
      searchBar: {
        searchText: 'plant',
      },
    });

    render(
      <Provider store={store}>
        <SearchBar onSubmit={() => {}} />
      </Provider>
    );

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toHaveValue('plant');
  });
});
