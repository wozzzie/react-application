import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../../screens/home/Home';

it('testing home advice text', () => {
  render(<Home advice="Think green and plant something" />);
  const advice = screen.queryByText(/Think green and plant something/i);
  expect(advice).toBeVisible();
});
