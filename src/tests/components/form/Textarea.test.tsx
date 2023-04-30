import React from 'react';
import { vi } from 'vitest';
import { fireEvent, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { TextArea } from '../../../components/form';
import renderWithProviders from '../../../tools/tests/test-utilits';

describe('TextArea', () => {
  const label = 'My Label';
  const defaultValue = 'My Default Value';
  const maxLengthError = 'Max length is 200 characters';
  const requiredError = 'Field is required';

  it('renders label and default value correctly', () => {
    renderWithProviders(
      <TextArea label={label} defaultValue={defaultValue} register={vi.fn()} name="requirements" />
    );

    const errorMessage = screen.getByLabelText(label);
    expect(errorMessage.textContent).toBe(defaultValue);
  });

  it('displays an error message if the field is required and no value is provided', async () => {
    renderWithProviders(
      <TextArea
        label={label}
        defaultValue={defaultValue}
        register={vi.fn()}
        name="requirements"
        error={requiredError}
      />
    );

    const textarea = screen.getByLabelText(label);
    userEvent.clear(textarea);
    userEvent.tab();

    const errorMessage = await screen.findByTestId('form-error');
    expect(errorMessage.textContent).toBe(requiredError);
  });

  it('displays an error message if the input exceeds the maximum length', async () => {
    const longValue = 'a'.repeat(201);

    const { getByLabelText } = await act(async () =>
      renderWithProviders(
        <TextArea
          label={label}
          defaultValue={defaultValue}
          register={vi.fn()}
          name="requirements"
          error={maxLengthError}
        />
      )
    );
    const input = getByLabelText(label);
    fireEvent.change(input, { target: { value: longValue } });

    const errorMessage = screen.getByTestId('form-error');
    expect(errorMessage.textContent).toBe(maxLengthError);
  });
});
