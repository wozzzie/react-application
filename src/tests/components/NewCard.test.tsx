import React from 'react';

import { render } from '@testing-library/react';
import NewCard from '../../screens/new-card/NewCard';

describe('FormCard', () => {
  it('renders NewCard component', () => {
    render(<NewCard />);
  });

  it('displays the correct text content', () => {
    const { getByText } = render(<NewCard />);
    expect(getByText(/Tell us a little about yourself and your preferences/i)).toBeInTheDocument();
    expect(
      getByText(/Indicate how we can contact you, your preferences, your location/i)
    ).toBeInTheDocument();
    expect(
      getByText(/Also indicate your preferred delivery date and upload a photo/i)
    ).toBeInTheDocument();
    expect(getByText(/We are waiting for your reply/i)).toBeInTheDocument();
  });

  it('displays the image', () => {
    const { getByAltText } = render(<NewCard />);
    expect(getByAltText('')).toHaveAttribute('src', '/img/card-plant.png');
  });

  it('renders Form component', () => {
    const { getByTestId } = render(<NewCard />);
    expect(getByTestId('form-component')).toBeInTheDocument();
  });
});
