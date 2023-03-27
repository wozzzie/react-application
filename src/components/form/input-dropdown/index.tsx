import React, { ChangeEvent, RefObject } from 'react';

import './style.css';
import '../index.css';

interface SelectInputProps {
  label: string;
  error?: string;
  selectRef: RefObject<HTMLSelectElement> | null;
  defaultValue: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

class SelectInput extends React.Component<SelectInputProps> {
  render() {
    const { label, error, selectRef, defaultValue } = this.props;
    return (
      <div className="block">
        <label htmlFor="select" className="label">
          {label}
        </label>
        <select id="select" className="select" ref={selectRef} defaultValue={defaultValue}>
          <option value="">Select an option</option>
          <option value="Belarus">Belarus</option>
          <option value="Poland">Poland</option>
          <option value="Ukraine">Ukraine</option>
        </select>

        {error && (
          <div style={{ color: 'red' }} data-testid="form-error">
            {error}
          </div>
        )}
      </div>
    );
  }
}

export default SelectInput;
