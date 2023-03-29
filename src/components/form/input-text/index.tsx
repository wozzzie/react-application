import React, { RefObject } from 'react';

import '../index.css';

interface TitleInputProps {
  label: string;
  defaultValue: string;
  error?: string;
  inputRef?: RefObject<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class TextInput extends React.Component<TitleInputProps> {
  render() {
    const { label, defaultValue, error, inputRef } = this.props;
    return (
      <div className="block">
        <label htmlFor="input_text" className="label">
          {label}
        </label>
        <input
          id="input_text"
          className="input"
          type="text"
          defaultValue={defaultValue}
          ref={inputRef}
        />

        {error && (
          <div style={{ color: 'red' }} data-testid="form-error">
            {error}
          </div>
        )}
      </div>
    );
  }
}

export default TextInput;
