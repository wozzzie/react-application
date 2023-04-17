import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '../../screens/home/Home';
import { setSearchResults } from '../../store/reducers/searchResultsSlice';
import { Store, AnyAction } from '@reduxjs/toolkit';
import { vi } from 'vitest';

const mockStore = configureStore([]);

describe('Home', () => {
  let store: Store<unknown, AnyAction>;

  beforeEach(() => {
    store = mockStore({
      searchResults: { results: [] },
    });

    store.dispatch = vi.fn();
  });

  test('renders the search bar', () => {
    render(
      <Provider store={store}>
        <Home advice="test advice" />
      </Provider>
    );
  });

  test('dispatches setSearchResults action when search results are loaded', () => {
    const mockResults = [
      {
        id: '1',
        title: 'test card',
        image: 'ss',
        location: 'dsd',
        requirements: 'sd',
        author: 'd',
        description: 'ds',
        likes: '4',
      },
    ];

    render(
      <Provider store={store}>
        <Home advice="test advice" />
      </Provider>
    );

    store.dispatch(setSearchResults(mockResults));

    expect(store.dispatch).toHaveBeenCalledWith(setSearchResults(mockResults));
  });

  test('displays the search results', () => {
    const mockResults = [
      {
        id: '1',
        title: 'test card',
        image: 'ss',
        location: 'dsd',
        requirements: 'sd',
        author: 'd',
        description: 'ds',
        likes: '4',
      },
    ];

    render(
      <Provider store={store}>
        <Home advice="test advice" />
      </Provider>
    );

    store.dispatch(setSearchResults(mockResults));
  });
});
