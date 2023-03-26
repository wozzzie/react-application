import React, { RefObject } from 'react';

import './style.css';
import '../index.css';

interface SelectInputProps {
  label: string;
  error?: string;
  selectRef: RefObject<HTMLSelectElement>;
  defaultValue: string;
}

class SelectInput extends React.Component<SelectInputProps> {
  render() {
    const { label, error, selectRef, defaultValue } = this.props;
    return (
      <div className="block">
        <label htmlFor="select" className="label">
          {label}:
        </label>
        <select id="select" className="select" ref={selectRef} defaultValue={defaultValue}>
          <option value="">Select an option</option>
          <option value="Belarus">Belarus</option>
          <option value="Poland">Poland</option>
          <option value="Ukraine">Ukraine</option>
        </select>

        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    );
  }
}

export default SelectInput;
