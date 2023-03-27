import { render } from '@testing-library/react';

import { fireEvent, screen } from '@testing-library/dom';
import Form from '../../../components/form/Form';
import React from 'react';

describe('Form', () => {
  it('submits the form when all fields are filled correctly', () => {
    const form = render(<Form />);
    const nameInput = form.getByLabelText('Name');
    const requirementsInput = form.getByLabelText('Requirements');
    const dateInput = form.getByLabelText('Date');
    const locationInput = form.getByLabelText('Location');
    const mrRadioButton = form.getByLabelText('Mr');
    const consentCheckbox = form.getByLabelText('I consent to my personal data');
    const fileInput = form.getByLabelText('Upload your file...');

    fireEvent.input(nameInput, { target: { value: 'Elon Musk' } });
    fireEvent.input(requirementsInput, { target: { value: 'Requirements' } });
    fireEvent.input(dateInput, { target: { value: '2024-12-31' } });
    fireEvent.input(locationInput, { target: { value: 'USA' } });
    fireEvent.click(mrRadioButton);
    fireEvent.click(consentCheckbox);
    fireEvent.change(fileInput, {
      target: { files: [new File(['file contents'], 'filename.txt')] },
    });
  });

  it('displays errors', () => {
    const form = render(<Form />);
    const nameInput = form.getByLabelText('Name');
    const requirementsInput = form.getByLabelText('Requirements');
    const dateInput = form.getByLabelText('Date');
    const locationInput = form.getByLabelText('Location');
    const consentCheckbox = form.getByLabelText('I consent to my personal data');
    const fileInput = form.getByLabelText('Upload your file...');

    fireEvent.submit(form.getByTestId('form-component'));
    expect(screen.getAllByTestId('form-error')).toHaveLength(7);

    fireEvent.input(nameInput, { target: { value: 'elon musk' } });
    fireEvent.input(dateInput, { target: { value: '2020-01-03' } });

    fireEvent.submit(form.getByTestId('form-component'));

    expect(screen.getByText('Name must start with a capital letter')).toBeInTheDocument();
    expect(screen.getByText('Please select a date in the future')).toBeInTheDocument();

    fireEvent.input(requirementsInput, { target: { value: 'Requirements' } });
    fireEvent.input(locationInput, { target: { value: 'USA' } });
    fireEvent.click(consentCheckbox);
    fireEvent.change(fileInput, {
      target: { files: [new File(['file contents'], 'filename.txt')] },
    });

    fireEvent.submit(form.getByTestId('form-component'));

    expect(form.getByTestId('submit-button')).toHaveAttribute('type', 'submit');
  });
});
