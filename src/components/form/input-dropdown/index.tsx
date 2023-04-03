import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../../types/form';

import './style.css';
import '../index.css';

interface SelectInputProps {
  label: string;
  error?: string;
  defaultValue: string;
  register: UseFormRegister<FormValues>;
  name: keyof FormValues;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  error,
  defaultValue,
  register,
  name,
}) => {
  return (
    <div className="block">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <select
        id={name}
        className="select"
        defaultValue={defaultValue}
        {...register(name, { required: 'Location is required' })}
      >
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
};

export default SelectInput;
