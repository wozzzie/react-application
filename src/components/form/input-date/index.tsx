import React, { RefObject } from 'react';

import '../index.css';

interface DateInputProps {
  label: string;
  error?: string;
  inputRef: RefObject<HTMLInputElement>;
}

class DateInput extends React.Component<DateInputProps> {
  render() {
    const { label, error, inputRef } = this.props;
    return (
      <div className="block">
        <label htmlFor="input-date" className="label">
          {label}
        </label>
        <input id="input-date" className="input" type="date" ref={inputRef} />
        {error && (
          <div style={{ color: 'red' }} data-testid="form-error">
            {error}
          </div>
        )}
      </div>
    );
  }
}
export default DateInput;
