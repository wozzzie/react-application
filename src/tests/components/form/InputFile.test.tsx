import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FileInput } from '../../../components/form';

import { FormValues } from '../../../types/form';

describe('FileInput', () => {
  const mockRegister = vi.fn();
  const mockOnChange = vi.fn();
  const defaultProps = {
    label: 'Test Label',
    error: 'Test Error',
    onChange: mockOnChange,
    register: mockRegister,
    name: 'name' as keyof FormValues,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the component with a label and input', () => {
    render(<FileInput {...defaultProps} />);

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByLabelText('Test Label')).toHaveAttribute('type', 'file');
  });

  it('should show an error message if there is an error', () => {
    render(<FileInput {...defaultProps} />);
    const error = screen.getByTestId('form-error');

    expect(error).toHaveTextContent('Test Error');
  });
});
