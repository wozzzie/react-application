import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../../types/form';

import './style.css';
import '../index.css';

interface FileInputProps {
  label: string;
  error?: string;
  onChange?: (event: File) => void;
  register: UseFormRegister<FormValues>;
  name: keyof FormValues;
}

const FileInput: React.FC<FileInputProps> = ({ label, error, register, name }) => {
  return (
    <div className="block">
      <div className="input__block">
        <label htmlFor={name} className="input_file__label">
          {label}
        </label>
        <input
          className="input_file"
          id={name}
          type="file"
          {...register(name, { required: 'File is required' })}
        />
      </div>
      {error && (
        <div style={{ color: 'red' }} data-testid="form-error">
          {error}
        </div>
      )}
    </div>
  );
};

export default FileInput;
