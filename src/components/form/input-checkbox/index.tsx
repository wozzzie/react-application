import React, { RefObject } from 'react';

import './style.css';
import '../index.css';

interface CheckboxInputProps {
  label: string;
  defaultChecked: boolean;
  error?: string;
  checkboxRef: RefObject<HTMLInputElement>;
}

class CheckboxInput extends React.Component<CheckboxInputProps> {
  render() {
    const { label, defaultChecked, error, checkboxRef } = this.props;
    return (
      <div className="block">
        <input
          id="input_checkbox"
          className="input_checkbox"
          type="checkbox"
          defaultChecked={defaultChecked}
          ref={checkboxRef}
        />
        <label htmlFor="input_checkbox" className="input_checkbox__label">
          <span></span>
          {label}
        </label>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    );
  }
}

export default CheckboxInput;
