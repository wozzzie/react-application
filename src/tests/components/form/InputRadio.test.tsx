import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

import { RadioInput } from '../../../components/form';

describe('RadioInput', () => {
  const options = ['Option 1', 'Option 2'];
  const label = 'Select an option';
  const name = 'title';

  it('renders label and options', () => {
    render(<RadioInput label={label} name={name} register={vi.fn()} options={options} />);

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(options[0])).toBeInTheDocument();
    expect(screen.getByText(options[1])).toBeInTheDocument();
  });

  it('displays an error message when no option is selected', async () => {
    const error = 'At least one option must be selected';
    render(
      <RadioInput label={label} name={name} register={vi.fn()} options={options} error={error} />
    );

    const input = screen.getByTestId('new-input');
    fireEvent.submit(input);

    const errorMessage = await screen.findByTestId('form-error');
    expect(errorMessage).toHaveTextContent(error);
  });
});
