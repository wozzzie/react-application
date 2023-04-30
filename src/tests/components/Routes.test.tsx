import React from 'react';
import { screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import RoutesComponent from '../../components/routes/RoutesComponent';
import renderWithProviders from '../../tools/tests/test-utilits';

describe('Routes Component', () => {
  it('testing render of the main page', async () => {
    const { getByTestId } = await act(async () =>
      renderWithProviders(<RoutesComponent />, { route: '/' })
    );

    await screen.findByTestId('main-page');
    expect(getByTestId('main-page')).toBeInTheDocument();
  });
});
