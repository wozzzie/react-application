import React from 'react';
import { test } from 'vitest';
import { fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw';

import renderWithProviders from '../../tools/tests/test-utilits';
import Home from '../../screens/home/Home';
import { server } from '../../mocks/server/server';

test('renders the SearchBar component', () => {
  renderWithProviders(<Home advice="Some advice" />);
  const searchBar = screen.getByTestId('search-bar');
  expect(searchBar).toBeInTheDocument();
});

test('renders a list of cards', async () => {
  const { getAllByTestId } = await act(async () =>
    renderWithProviders(<Home advice="Test Advice" />)
  );

  await screen.findAllByTestId('card');
  expect(getAllByTestId('card')).toHaveLength(2);
});

test('opens the card modal when a card is clicked', async () => {
  const { getByTestId } = await act(async () => renderWithProviders(<Home advice="Test Advice" />));

  const cards = await screen.findAllByTestId('card');

  fireEvent.click(cards[0]);
  expect(getByTestId('card-modal')).toBeInTheDocument();
});

test('closes the card modal when the close button is clicked', async () => {
  const { getByTestId, queryByTestId } = await act(async () =>
    renderWithProviders(<Home advice="Test Advice" />)
  );

  const cards = await screen.findAllByTestId('card');
  fireEvent.click(cards[0]);
  expect(getByTestId('card-modal')).toBeInTheDocument();

  const closeButton = await screen.findByTestId('card-modal-close-button');
  fireEvent.click(closeButton);
  expect(queryByTestId('card-modal')).not.toBeInTheDocument();
});

test('displays "No results found."', async () => {
  server.use(rest.get('*', (_req, res, ctx) => res.once(ctx.status(500))));

  const { getByTestId } = await act(async () => renderWithProviders(<Home advice="Test Advice" />));

  await screen.findByTestId('no-results-found');
  expect(getByTestId('no-results-found')).toBe;
});
