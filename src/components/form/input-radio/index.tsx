import React, { RefObject } from 'react';

import './style.css';

interface RadioInputProps {
  label: string;
  name: string;
  options: string[];
  inputRef1: RefObject<HTMLInputElement>;
  inputRef2: RefObject<HTMLInputElement>;
  error?: string;
}

class RadioInput extends React.Component<RadioInputProps> {
  render() {
    const { label, name, options, inputRef1, inputRef2, error } = this.props;
    return (
      <div className="block">
        <label className="label">{label}</label>
        <div className="input_radio-buttons">
          <p>
            <input
              id={`${name}-1`}
              type="radio"
              name={name}
              data-testid="new-input"
              ref={inputRef1}
            />
            <label className="input_radio__label" htmlFor={`${name}-1`}>
              {options[0]}
            </label>
          </p>

          <p>
            <input id={`${name}-2`} type="radio" name={name} ref={inputRef2} />
            <label className="input_radio__label" htmlFor={`${name}-2`}>
              {options[1]}
            </label>
          </p>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    );
  }
}

export default RadioInput;
