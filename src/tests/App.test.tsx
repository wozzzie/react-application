import React from 'react';
import { act } from 'react-dom/test-utils';
import { test, expect, describe } from 'vitest';
import '@testing-library/jest-dom';

import renderWithProviders from '../tools/tests/test-utilits';
import App from '../App';

describe('App test', () => {
  test('Render App component', async () => {
    const { getByTestId } = await act(async () => renderWithProviders(<App />));

    expect(getByTestId('routes-component')).toBeInTheDocument();
  });
});
