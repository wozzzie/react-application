import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../../types/form';

import '../index.css';

interface DateInputProps {
  label: string;
  error?: string;
  register: UseFormRegister<FormValues>;
  name: keyof FormValues;
}

const DateInput: React.FC<DateInputProps> = ({ label, error, name, register }) => {
  return (
    <div className="block">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        id={name}
        className="input"
        type="date"
        {...register(name, { required: 'Date is required' })}
      />
      {error && (
        <div style={{ color: 'red' }} data-testid="form-error">
          {error}
        </div>
      )}
    </div>
  );
};

export default DateInput;
