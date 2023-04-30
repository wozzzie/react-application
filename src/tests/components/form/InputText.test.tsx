import React from 'react';
import { fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import '@testing-library/jest-dom';

import { TextInput } from '../../../components/form';
import renderWithProviders from '../../../tools/tests/test-utilits';

describe('TextInput', () => {
  const label = 'Name';
  const defaultValue = 'John';
  const maxLengthError = 'Max length is 10 letters';
  const patternError = 'Name must start with a capital letter';

  it('renders the label and input with the correct attributes', async () => {
    const { getByLabelText } = await act(async () =>
      renderWithProviders(
        <TextInput label={label} defaultValue={defaultValue} register={vi.fn()} name="authorName" />
      )
    );

    const input = getByLabelText(label);
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('id', 'authorName');
    expect(input).toHaveValue(defaultValue);
  });

  it('displays an error message if the input exceeds the maximum length', async () => {
    const longValue = 'a'.repeat(11);

    const { getByLabelText, getByTestId } = await act(async () =>
      renderWithProviders(
        <TextInput
          label={label}
          defaultValue={defaultValue}
          register={vi.fn()}
          name="authorName"
          error={maxLengthError}
        />
      )
    );

    const input = getByLabelText(label);
    fireEvent.change(input, { target: { value: longValue } });
    expect(getByTestId('form-error')).toHaveTextContent(maxLengthError);
  });

  it('displays an error message if the input does not start with a capital letter', async () => {
    const lowercaseValue = 'john';

    const { getByLabelText, getByTestId } = await act(async () =>
      renderWithProviders(
        <TextInput
          label={label}
          defaultValue={defaultValue}
          register={vi.fn()}
          name="authorName"
          error={patternError}
        />
      )
    );

    const input = getByLabelText(label);
    fireEvent.change(input, { target: { value: lowercaseValue } });
    expect(getByTestId('form-error')).toHaveTextContent(patternError);
  });
});
