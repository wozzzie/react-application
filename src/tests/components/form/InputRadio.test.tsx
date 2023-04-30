import { screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';

import { RadioInput } from '../../../components/form';
import renderWithProviders from '../../../tools/tests/test-utilits';

describe('RadioInput', () => {
  const options = ['Option 1', 'Option 2'];
  const label = 'Select an option';
  const name = 'title';

  it('renders label and options', () => {
    renderWithProviders(
      <RadioInput label={label} name={name} register={vi.fn()} options={options} />
    );

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(options[0])).toBeInTheDocument();
    expect(screen.getByText(options[1])).toBeInTheDocument();
  });

  it('displays an error message when no option is selected', async () => {
    const error = 'At least one option must be selected';

    renderWithProviders(
      <RadioInput label={label} name={name} register={vi.fn()} options={options} error={error} />
    );

    const input = screen.getByTestId('new-input');
    fireEvent.submit(input);

    const errorMessage = await screen.findByTestId('form-error');
    expect(errorMessage).toHaveTextContent(error);
  });
});
