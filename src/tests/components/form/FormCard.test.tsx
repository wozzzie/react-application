import React from 'react';

import { render } from '@testing-library/react';
import { FormCard } from '../../../components/form';
import { vi } from 'vitest';

describe('FormCard', () => {
  const props = {
    authorName: 'Test Test',
    requirements: 'Test requirements',
    date: '2023-08-01',
    location: 'New York',
    title: 'Test title',
    isChecked: true,
    file: new File([''], 'test.jpg', { type: 'image/jpeg' }),
  };

  it('should render the component correctly', () => {
    window.URL.createObjectURL = vi.fn();
    const { getByText, getByAltText } = render(<FormCard {...props} />);
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

  it('should not render the file preview if file prop is not provided', () => {
    const { queryByAltText } = render(<FormCard {...props} file={null} />);
    expect(queryByAltText('File preview')).not.toBeInTheDocument();
  });
});
