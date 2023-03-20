import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../screens/home/Home';
import { DATA } from '../../data/data';

describe('Home component', () => {
  const testProps = {
    advice: 'Test Advice',
  };

  test('renders home component with correct data', () => {
    render(<Home {...testProps} />);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();

    DATA.forEach((card) => {
      expect(screen.getByText(card.title)).toBeInTheDocument();
      expect(screen.getByText(`Author: ${card.author}`)).toBeInTheDocument();
      expect(screen.getByText(card.description)).toBeInTheDocument();
      expect(screen.getByText(`Location: ${card.location}`)).toBeInTheDocument();
      expect(screen.getByText(`Requirements: ${card.requirements}`)).toBeInTheDocument();
    });
    expect(screen.getByText('Test Advice')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });
});
