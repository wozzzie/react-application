import React, { RefObject } from 'react';

import './style.css';
import '../index.css';

interface TextAreaProps {
  label: string;
  defaultValue: string;
  error?: string;
  textAreaRef?: RefObject<HTMLTextAreaElement>;
  maxLength: number;
}

class TextArea extends React.Component<TextAreaProps> {
  render() {
    const { label, defaultValue, error, textAreaRef, maxLength } = this.props;
    return (
      <div className="block">
        <label htmlFor="textarea" className="label">
          {label}
        </label>
        <textarea
          id="textarea"
          className="textarea"
          defaultValue={defaultValue}
          ref={textAreaRef}
          maxLength={maxLength}
        />
        {error && (
          <div style={{ color: 'red' }} className="form__error" data-testid="form-error">
            {error}
          </div>
        )}
      </div>
    );
  }
}

export default TextArea;
