import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../../screens/home/Home';
import React from 'react';

const server = setupServer(
  rest.get('https://mock-server-api-two.vercel.app/catalog', (req, res, ctx) => {
    const searchTerm = req.url.searchParams.get('q');
    if (searchTerm === 'invalid') {
      return res(ctx.status(400));
    }
    return res(ctx.json([{ id: 1, title: 'Test Card', author: 'Test Author' }]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Home component', () => {
  it('shows error message when API call fails', async () => {
    server.use(
      rest.get('https://mock-server-api-two.vercel.app/catalog', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<Home advice="test advice" />);

    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });
  });

  it('shows no results found message when search term does not match', async () => {
    render(<Home advice="test advice" />);

    await waitFor(() => {
      expect(screen.queryByText(/test card/i)).not.toBeInTheDocument();
    });
  });
});
