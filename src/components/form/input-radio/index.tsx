import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../../types/form';

import './style.css';

interface RadioInputProps {
  label: string;
  register: UseFormRegister<FormValues>;
  name: keyof FormValues;
  options: string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const RadioInput: React.FC<RadioInputProps> = ({ label, name, register, options, error }) => {
  return (
    <div className="block">
      <label htmlFor={`${name}-1`} className="label">
        {label}
      </label>
      <div className="input_radio-buttons">
        <p>
          <input
            id={`${name}-1`}
            type="radio"
            value={options[0]}
            data-testid="new-input"
            {...register(name, { required: 'At least one option must be selected' })}
          />
          <label className="input_radio__label" htmlFor={`${name}-1`}>
            {options[0]}
          </label>
        </p>

        <p>
          <input
            id={`${name}-2`}
            type="radio"
            value={options[1]}
            {...register(name, { required: 'At least one option must be selected' })}
          />
          <label className="input_radio__label" htmlFor={`${name}-2`}>
            {options[1]}
          </label>
        </p>
      </div>
      {error && (
        <div style={{ color: 'red' }} data-testid="form-error">
          {error}
        </div>
      )}
    </div>
  );
};

export default RadioInput;
