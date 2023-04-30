import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Error from '../../screens/error/Error';
import renderWithProviders from '../../tools/tests/test-utilits';

describe('Error screen', () => {
  it('testing error page title', () => {
    renderWithProviders(
      <Error errorMessage="Oops! Something went wrong. Please try again later." />
    );

    const errorTitle = screen.queryByText(/404/i);
    expect(errorTitle).toBeVisible();
  });

  it('testing error page subtitle', () => {
    renderWithProviders(
      <Error errorMessage="Oops! Something went wrong. Please try again later." />
    );

    const errorSubtitle = screen.queryByText(
      /Oops! Something went wrong. Please try again later./i
    );
    expect(errorSubtitle).toBeVisible();
  });
});
