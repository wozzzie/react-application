import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DateInput } from '../../../components/form';

describe('DateInput', () => {
  it('renders error message', () => {
    const error = 'Test Error';
    const inputRef = React.createRef<HTMLInputElement>();
    render(<DateInput label="Test" error={error} inputRef={inputRef} />);
    expect(screen.getByText(error)).toBeInTheDocument();
  });

  it('updates value', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    const label = 'Test Label';
    render(<DateInput label={label} inputRef={inputRef} />);
    const newValue = '2023-03-28';
    fireEvent.change(inputRef.current as HTMLInputElement, { target: { value: newValue } });
    expect(inputRef.current?.value).toEqual(newValue);
  });

  it('validate past dates', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    render(<DateInput label="Test" inputRef={inputRef} />);
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);
    userEvent.type(inputRef.current as HTMLInputElement, pastDate.toISOString().substr(0, 10));
    expect(inputRef.current?.value).toEqual('');
  });
});
