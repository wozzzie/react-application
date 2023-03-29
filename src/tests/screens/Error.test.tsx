import { render, screen } from '@testing-library/react';
import React from 'react';
import Error from '../../screens/error/Error';

describe('Error screen', () => {
  it('testing error page title', () => {
    render(<Error errorMessage="Oops! Something went wrong. Please try again later." />);
    const errorTitle = screen.queryByText(/404/i);
    expect(errorTitle).toBeVisible();
  });

  it('testing error page subtitle', () => {
    render(<Error errorMessage="Oops! Something went wrong. Please try again later." />);
    const errorSubtitle = screen.queryByText(
      /Oops! Something went wrong. Please try again later./i
    );
    expect(errorSubtitle).toBeVisible();
  });
});
