import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { CheckboxInput } from '../../../components/form';

describe('CheckboxInput', () => {
  const checkboxRef = { current: null };
  const label = 'I consent to my personal data';
  const error = 'Please consent to personal data';

  beforeEach(() => {
    render(
      <CheckboxInput label={label} defaultChecked={false} error={error} checkboxRef={checkboxRef} />
    );
  });

  it('render a label', () => {
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('render a checkbox', () => {
    expect(checkboxRef.current).toBeInstanceOf(HTMLInputElement);
  });

  it('render an error message', () => {
    expect(screen.getByText(error)).toBeInTheDocument();
  });

  it('check the checkbox when clicked', () => {
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
});
