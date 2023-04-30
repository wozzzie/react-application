import React from 'react';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom';

import NewCard from '../../screens/new-card/NewCard';
import renderWithProviders from '../../tools/tests/test-utilits';

describe('FormCard', () => {
  it('renders NewCard component', () => {
    renderWithProviders(<NewCard />);
  });

  it('displays the correct text content', async () => {
    const { getByText } = await act(async () => renderWithProviders(<NewCard />));

    expect(getByText(/Tell us a little about yourself and your preferences/i)).toBeInTheDocument();
    expect(
      getByText(/Indicate how we can contact you, your preferences, your location/i)
    ).toBeInTheDocument();
    expect(
      getByText(/Also indicate your preferred delivery date and upload a photo/i)
    ).toBeInTheDocument();
    expect(getByText(/We are waiting for your reply/i)).toBeInTheDocument();
  });

  it('displays the image', async () => {
    const { getByAltText } = await act(async () => renderWithProviders(<NewCard />));

    expect(getByAltText('')).toHaveAttribute('src', '/img/card-plant.png');
  });

  it('renders Form component', async () => {
    const { getByTestId } = await act(async () => renderWithProviders(<NewCard />));

    expect(getByTestId('form-component')).toBeInTheDocument();
  });
});
