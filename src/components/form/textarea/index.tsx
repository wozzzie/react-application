import React, { RefObject } from 'react';

import './style.css';
import '../index.css';

interface TextAreaProps {
  label: string;
  defaultValue: string;
  error?: string;
  textAreaRef?: RefObject<HTMLTextAreaElement>;
}

class TextArea extends React.Component<TextAreaProps> {
  render() {
    const { label, defaultValue, error, textAreaRef } = this.props;
    return (
      <div className="block">
        <label className="label">{label}</label>
        <textarea
          className="textarea"
          defaultValue={defaultValue}
          ref={textAreaRef}
          maxLength={100}
        />
        {error && <div className="form__error">{error}</div>}
      </div>
    );
  }
}

export default TextArea;
