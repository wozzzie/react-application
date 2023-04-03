import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../../types/form';

import './style.css';
import '../index.css';

interface CheckboxInputProps {
  label: string;
  defaultChecked: boolean;
  error?: string;
  register: UseFormRegister<FormValues>;
  name: keyof FormValues;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  defaultChecked,
  error,
  register,
  name,
}) => {
  return (
    <div className="block">
      <input
        id={name}
        className="input_checkbox"
        type="checkbox"
        defaultChecked={defaultChecked}
        {...register(name, { required: 'Checkbox must be checked' })}
      />
      <label htmlFor={name} className="input_checkbox__label">
        <span></span>
        {label}
      </label>
      {error && (
        <div style={{ color: 'red' }} data-testid="form-error">
          {error}
        </div>
      )}
    </div>
  );
};

export default CheckboxInput;
