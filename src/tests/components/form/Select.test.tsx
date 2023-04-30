import React from 'react';
import { vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SelectInput } from '../../../components/form';
import renderWithProviders from '../../../tools/tests/test-utilits';

describe('SelectInput', () => {
  it('renders label and options correctly', () => {
    renderWithProviders(
      <SelectInput label="Location" defaultValue="" register={vi.fn()} name="location" />
    );

    const labelElement = screen.getByText('Location');
    expect(labelElement).toBeInTheDocument();

    const optionElements = screen.getAllByRole('option');
    expect(optionElements.length).toBe(4);
    expect(optionElements[0]).toHaveAttribute('value', '');
    expect(optionElements[1]).toHaveAttribute('value', 'Belarus');
    expect(optionElements[2]).toHaveAttribute('value', 'Poland');
    expect(optionElements[3]).toHaveAttribute('value', 'Ukraine');
  });

  it('sets the default value correctly', () => {
    renderWithProviders(
      <SelectInput label="Location" defaultValue="Poland" register={vi.fn()} name="location" />
    );

    const optionElement = screen.getByDisplayValue('Poland');
    expect(optionElement).toBeDefined();
  });

  it('displays an error message when no option is selected', async () => {
    renderWithProviders(
      <SelectInput
        label="Location"
        defaultValue=""
        register={vi.fn()}
        name="location"
        error="Location is required"
      />
    );

    const selectElement = screen.getByRole('combobox');
    fireEvent.blur(selectElement);

    const errorElement = await screen.findByTestId('form-error');
    expect(errorElement.textContent).toBe('Location is required');
  });
});
