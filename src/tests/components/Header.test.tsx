import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/header/Header';

describe('Header component', () => {
  it('testing render the component', () => {
    const { getByTestId } = render(
      <Router>
        <Header home={'Home page'} about={'About us'} />
      </Router>
    );
    expect(getByTestId('main-link')).toBeInTheDocument();
    expect(getByTestId('about-link')).toBeInTheDocument();
  });

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

  it('testing activation the link of the corresponding page', () => {
    const { getByTestId } = render(
      <Router>
        <Header home={'Home page'} about={'About us'} />
      </Router>
    );
    const mainLink = getByTestId('main-link');
    const aboutLink = getByTestId('about-link');
    fireEvent.click(mainLink);
    expect(mainLink).toHaveClass('header__link_active');
    expect(aboutLink).not.toHaveClass('header__link_active');
    fireEvent.click(aboutLink);
    expect(aboutLink).toHaveClass('header__link_active');
    expect(mainLink).not.toHaveClass('header__link_active');
  });
});
