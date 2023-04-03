import React from 'react';
import { vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextArea } from '../../../components/form';

describe('TextArea', () => {
  const label = 'My Label';
  const defaultValue = 'My Default Value';
  const maxLengthError = 'Max length is 200 characters';
  const requiredError = 'Field is required';

  it('renders label and default value correctly', () => {
    render(
      <TextArea label={label} defaultValue={defaultValue} register={vi.fn()} name="requirements" />
    );

    expect(screen.getByLabelText(label)).toHaveValue(defaultValue);
  });

  it('displays an error message if the field is required and no value is provided', async () => {
    render(
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

    expect(await screen.findByTestId('form-error')).toHaveTextContent(requiredError);
  });

  it('displays an error message if the input exceeds the maximum length', () => {
    const longValue = 'a'.repeat(201);
    const { getByLabelText, getByTestId } = render(
      <TextArea
        label={label}
        defaultValue={defaultValue}
        register={vi.fn()}
        name="requirements"
        error={maxLengthError}
      />
    );
    const input = getByLabelText(label);
    fireEvent.change(input, { target: { value: longValue } });
    expect(getByTestId('form-error')).toHaveTextContent(maxLengthError);
  });
});
