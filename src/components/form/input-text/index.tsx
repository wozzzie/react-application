import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../../types/form';

import '../index.css';

interface TextInputProps {
  label: string;
  defaultValue: string;
  error?: string;
  register: UseFormRegister<FormValues>;
  name: keyof FormValues;
}

const TextInput: React.FC<TextInputProps> = ({ label, defaultValue, error, register, name }) => {
  return (
    <div className="block">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        id={name}
        className="input"
        type="text"
        defaultValue={defaultValue}
        {...register(name, {
          required: 'Name is required',
          pattern: {
            value: /^[A-Z]/,
            message: 'Name must start with a capital letter',
          },
          maxLength: {
            value: 10,
            message: 'Max length is 10 letters',
          },
        })}
      />

      {error && (
        <div style={{ color: 'red' }} data-testid="form-error">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextInput;
