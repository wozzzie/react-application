import React, { ChangeEvent } from 'react';

import { assert, it } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { SelectInput } from '../../../components/form';

describe('Select', () => {
  it('renders the label and options', () => {
    const options = ['Belarus', 'Poland', 'Ukraine'];
    const label = 'Location';

    const { getByLabelText } = render(
      <SelectInput label={label} selectRef={null} defaultValue="Belarus" />
    );
    const select = getByLabelText(label) as HTMLSelectElement;
    expect(select.options.length).toBe(options.length + 1);
  });

  it('renders the default value', () => {
    const label = 'Country';
    const defaultValue = 'Poland';

    const { getByLabelText } = render(
      <SelectInput label={label} selectRef={null} defaultValue={defaultValue} />
    );
    const select = getByLabelText(label) as HTMLSelectElement;
    assert.equal(select.value, defaultValue);
  });

  it('test the onChange handler', () => {
    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const newValue = event.target.value;
      expect(newValue).toBe('Belarus');
    };
    const { getByLabelText } = render(
      <SelectInput label={'label'} selectRef={null} defaultValue={''} onChange={onChange} />
    );
    const select = getByLabelText('label') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: 'Belarus' } });
  });

  it('renders the error message', () => {
    const label = 'Country';
    const error = 'Please select a country';

    const { getByText } = render(
      <SelectInput label={label} selectRef={null} defaultValue="" error={error} />
    );
    const errorElement = getByText(error);
    assert.ok(errorElement);
  });
});
