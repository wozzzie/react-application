import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/header/Header';

it('testing Header home page text', () => {
  render(
    <Router>
      <Header home={'Home page'} about={'About us'} />
    </Router>
  );
  const errorSubtitle = screen.queryByText(/Home page/i);
  expect(errorSubtitle).toBeVisible();
});

it('testing Header about us text', () => {
  render(
    <Router>
      <Header home={'Home page'} about={'About us'} />
    </Router>
  );
  const errorSubtitle = screen.queryByText(/About us/i);
  expect(errorSubtitle).toBeVisible();
});
