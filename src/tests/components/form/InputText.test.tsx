import React from 'react';

import { it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TextInput } from '../../../components/form';

describe('Input text', () => {
  it('renders default value', () => {
    const defaultValue = 'Plant';
    render(<TextInput label="Input" defaultValue={defaultValue} />);
    const inputElement = screen.getByLabelText('Input') as HTMLInputElement;
    expect(inputElement.value).toBe(defaultValue);
  });

  it('test onChange', () => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      expect(event.target.value).toBe('new');
    };
    const defaultValue = 'Plant';
    render(<TextInput label="Input" defaultValue={defaultValue} onChange={handleChange} />);
    const inputElement = screen.getByLabelText('Input') as HTMLInputElement;
    const newValue = 'new';
    inputElement.value = newValue;
    inputElement.dispatchEvent(new Event('input'));
  });
});
