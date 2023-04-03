import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CheckboxInput } from '../../../components/form';

describe('CheckboxInput', () => {
  test('renders the checkbox input', () => {
    const { getByLabelText } = render(
      <CheckboxInput
        label="Checkbox Label"
        defaultChecked={false}
        register={vi.fn()}
        name="isChecked"
      />
    );

    const checkboxInput = getByLabelText('Checkbox Label') as HTMLInputElement;
    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput.checked).toBe(false);
  });

  test('renders the label for the checkbox', () => {
    const { getByText } = render(
      <CheckboxInput
        label="Checkbox Label"
        defaultChecked={false}
        register={vi.fn()}
        name="isChecked"
      />
    );

    expect(getByText('Checkbox Label')).toBeInTheDocument();
  });

  test('renders an error message if an error is provided', () => {
    const errorMessage = 'This is an error message';

    render(
      <CheckboxInput
        label="Checkbox Label"
        defaultChecked={false}
        error={errorMessage}
        register={vi.fn()}
        name="isChecked"
      />
    );

    const errorElement = screen.getByTestId('form-error');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(errorMessage);
  });

  test('calls the register function with the correct parameters when checkbox is checked', () => {
    const registerFunction = vi.fn();
    const checkboxName = 'isChecked';

    render(
      <CheckboxInput
        label="Checkbox Label"
        defaultChecked={false}
        register={registerFunction}
        name={checkboxName}
      />
    );

    const checkboxInput = screen.getByLabelText('Checkbox Label');
    userEvent.click(checkboxInput);

    expect(registerFunction).toHaveBeenCalledTimes(1);
    expect(registerFunction).toHaveBeenCalledWith(checkboxName, {
      required: 'Checkbox must be checked',
    });
  });
});
