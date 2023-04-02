import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../../types/form';

import './style.css';
import '../index.css';

interface TextAreaProps {
  label: string;
  defaultValue: string;
  error?: string;
  register: UseFormRegister<FormValues>;
  name: keyof FormValues;
}

const TextArea = ({ label, defaultValue, error, register, name }: TextAreaProps) => {
  return (
    <div className="block">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <textarea
        id={name}
        className="textarea"
        defaultValue={defaultValue}
        {...register(name, {
          required: 'Field is required',
          maxLength: {
            value: 200,
            message: 'Max length is 200 characters',
          },
        })}
      />

      {error && (
        <div style={{ color: 'red' }} className="form__error" data-testid="form-error">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextArea;
