import React from 'react';

import { it, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { RadioInput } from '../../../components/form';

describe('Input text', () => {
  it('renders a radio input group with two options', () => {
    const inputRef1 = { current: null };
    const inputRef2 = { current: null };
    const options = ['Option 1', 'Option 2'];
    render(
      <RadioInput
        label="Select an option"
        name="option"
        options={options}
        inputRef1={inputRef1}
        inputRef2={inputRef2}
      />
    );
    expect(inputRef1.current).toBeInTheDocument();
    expect(inputRef2.current).toBeInTheDocument();
    expect(inputRef1.current).not.toBeChecked();
    expect(inputRef2.current).not.toBeChecked();
  });

  it('clicking an option selects it', () => {
    const inputRef1 = { current: { checked: false } } as React.RefObject<HTMLInputElement>;
    const inputRef2 = { current: { checked: false } } as React.RefObject<HTMLInputElement>;

    const options = ['Option 1', 'Option 2'];
    const { getByLabelText } = render(
      <RadioInput
        label="Select an option"
        name="option"
        options={options}
        inputRef1={inputRef1}
        inputRef2={inputRef2}
      />
    );
    const option1 = getByLabelText(options[0]) as HTMLInputElement;
    const option2 = getByLabelText(options[1]) as HTMLInputElement;

    fireEvent.click(option1);

    expect(option1.checked).toBe(true);
    expect(option2.checked).toBe(false);
  });

  it('displays an error message', () => {
    const inputRef1 = { current: null };
    const inputRef2 = { current: null };
    const options = ['Option 1', 'Option 2'];
    const errorMessage = 'Please select an option';
    const { getByText } = render(
      <RadioInput
        label="Select an option"
        name="option"
        options={options}
        inputRef1={inputRef1}
        inputRef2={inputRef2}
        error={errorMessage}
      />
    );
    const error = getByText(errorMessage);
    expect(error).toBeInTheDocument();
    expect(error).toHaveStyle('color: red');
  });
});
