import React from 'react';
import { describe, test } from 'vitest';
import { fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import SearchBar from '../../components/searchBar/SearchBar';
import renderWithProviders from '../../tools/tests/test-utilits';

describe('SearchBar', () => {
  test('updates search text when input changes', async () => {
    const { getByTestId } = await act(async () => renderWithProviders(<SearchBar />));

    const input = getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'something' } });

    expect(input).toHaveValue('something');
  });

  test('dispatches setSearchText action when input changes', async () => {
    const { getByTestId, store } = await act(async () => renderWithProviders(<SearchBar />));

    const input = getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'something' } });

    expect(store.getState().searchBar.searchText).toEqual('something');
  });

  test('dispatches setSearchText action when form is submitted', async () => {
    const { getByTestId, store } = await act(async () => renderWithProviders(<SearchBar />));

    const input = getByTestId('search-input');
    const form = getByTestId('search-form');
    fireEvent.change(input, { target: { value: 'something' } });
    fireEvent.submit(form);

    expect(store.getState().searchBar.searchText).toEqual('something');
  });
});
