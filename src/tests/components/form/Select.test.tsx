import React from 'react';
import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { SelectInput } from '../../../components/form';

describe('SelectInput', () => {
  it('renders label and options correctly', () => {
    render(<SelectInput label="Location" defaultValue="" register={vi.fn()} name="location" />);
    const labelElement = screen.getByText('Location');
    expect(labelElement).toBeInTheDocument();
    const optionElements = screen.getAllByRole('option');
    expect(optionElements.length).toBe(4);
    expect(optionElements[0]).toHaveValue('');
    expect(optionElements[1]).toHaveValue('Belarus');
    expect(optionElements[2]).toHaveValue('Poland');
    expect(optionElements[3]).toHaveValue('Ukraine');
  });

  it('sets the default value correctly', () => {
    render(
      <SelectInput label="Location" defaultValue="Poland" register={vi.fn()} name="location" />
    );
    const optionElement = screen.getByDisplayValue('Poland');
    expect(optionElement).toBeInTheDocument();
  });

  it('displays an error message when no option is selected', async () => {
    const registerMock = vi.fn();
    render(
      <SelectInput
        label="Location"
        defaultValue=""
        register={registerMock}
        name="location"
        error="Location is required"
      />
    );
    const selectElement = screen.getByRole('combobox');
    fireEvent.blur(selectElement);
    const errorElement = await screen.findByTestId('form-error');
    expect(errorElement).toHaveTextContent('Location is required');
  });
});
