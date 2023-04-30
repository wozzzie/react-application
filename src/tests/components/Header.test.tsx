import React from 'react';
import { fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../../components/header/Header';
import renderWithProviders from '../../tools/tests/test-utilits';

describe('Header component', () => {
  it('testing render the component', async () => {
    const { getByTestId } = await act(async () =>
      renderWithProviders(<Header home={'Home page'} about={'About us'} card={'Your card'} />)
    );

    expect(getByTestId('main-link')).toBeInTheDocument();
    expect(getByTestId('about-link')).toBeInTheDocument();
  });

  it('testing Header home page text', () => {
    renderWithProviders(<Header home={'Home page'} about={'About us'} card={'Your card'} />);

    const errorSubtitle = screen.queryByText(/Home page/i);
    expect(errorSubtitle).toBeVisible();
  });

  it('testing Header about us text', () => {
    renderWithProviders(<Header home={'Home page'} about={'About us'} card={'Your card'} />);

    const errorSubtitle = screen.queryByText(/About us/i);
    expect(errorSubtitle).toBeVisible();
  });

  it('testing activation the link of the corresponding page', async () => {
    const { getByTestId } = await act(async () =>
      renderWithProviders(<Header home={'Home page'} about={'About us'} card={'Your card'} />)
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
