import React from 'react';
import { act } from '@testing-library/react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';

import { FormCard } from '../../../components/form';
import renderWithProviders from '../../../tools/tests/test-utilits';

describe('FormCard', () => {
  const props = {
    authorName: 'Test Test',
    requirements: 'Test requirements',
    date: '2023-08-01',
    location: 'New York',
    title: 'Test title',
    isChecked: true,
    file: 'string',
  };

  it('should render the component correctly', async () => {
    window.URL.createObjectURL = vi.fn();

    const { getByText, getByAltText } = await act(async () =>
      renderWithProviders(<FormCard {...props} />)
    );

    expect(getByText(`${props.title} ${props.authorName}`)).toBeInTheDocument();
    expect(getByText(`Your requirements: ${props.requirements}`)).toBeInTheDocument();
    expect(getByText(`Shipping date: ${props.date}`)).toBeInTheDocument();
    expect(getByText(`Your location: ${props.location}`)).toBeInTheDocument();
    expect(
      getByText(props.isChecked ? /✅\s-\sconfirmed/i : 'I am not consent to my personal data...')
    ).toBeInTheDocument();
    expect(getByText('Thank you for choosing us!')).toBeInTheDocument();
    expect(getByAltText('File preview')).toBeInTheDocument();
  });
});
