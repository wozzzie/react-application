import React, { createRef } from 'react';

import { it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { TextArea } from '../../../components/form';

describe('TextArea', () => {
  it('renders correctly', () => {
    render(<TextArea label="Label" defaultValue="I am a plant" maxLength={100} />);
    const label = screen.getByLabelText('Label');
    const textarea = screen.getByRole('textbox', { name: 'Label' });
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveValue('I am a plant');
  });

  it('updates value on input', () => {
    const newValue = 'I am not a plant';
    const textAreaRef = createRef<HTMLTextAreaElement>();
    const { getByLabelText } = render(
      <TextArea
        label="Label"
        defaultValue="I am a plant"
        textAreaRef={textAreaRef}
        maxLength={100}
      />
    );

    const textarea = getByLabelText('Label');
    fireEvent.change(textarea, { target: { value: newValue } });
    expect(textAreaRef.current?.value).toBe(newValue);
  });

  it('shows error message', () => {
    const errorMessage = 'This field is required.';
    const { getByText } = render(
      <TextArea label="Label" defaultValue="" error={errorMessage} maxLength={100} />
    );
    const error = getByText(errorMessage);
    expect(error).toBeInTheDocument();
  });
});
