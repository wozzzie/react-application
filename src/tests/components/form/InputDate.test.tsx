import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DateInput } from '../../../components/form';

describe('DateInput component', () => {
  const label = 'Test Date Input';
  const name = 'date';
  const register = vi.fn();
  const error = 'Date is required';

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('renders the component correctly', () => {
    render(<DateInput label={label} name={name} register={register} />);
    const input = screen.getByLabelText(label);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'date');
  });

  it('displays error message if error prop is provided', () => {
    render(<DateInput label={label} name={name} register={register} error={error} />);
    const errorMessage = screen.getByTestId('form-error');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(error);
  });

  it('calls register function with correct arguments', () => {
    render(<DateInput label={label} name={name} register={register} />);
    const input = screen.getByLabelText(label);
    userEvent.type(input, '2022-04-03');
    expect(register).toHaveBeenCalledWith(name, { required: 'Date is required' });
  });
});
