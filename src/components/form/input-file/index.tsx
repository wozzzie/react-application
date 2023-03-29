import React, { RefObject } from 'react';

import './style.css';
import '../index.css';

interface FileInputProps {
  label: string;
  error?: string;
  inputFileRef: RefObject<HTMLInputElement>;
  onChange?: (event: File) => void;
}

class FileInput extends React.Component<FileInputProps> {
  render() {
    const { label, error, inputFileRef } = this.props;
    return (
      <div className="block">
        <div className="input__block">
          <label htmlFor="input_file" className="input_file__label">
            {label}
          </label>
          <input className="input_file" id="input_file" type="file" ref={inputFileRef} />
        </div>
        {error && (
          <div style={{ color: 'red' }} data-testid="form-error">
            {error}
          </div>
        )}
      </div>
    );
  }
}

export default FileInput;
