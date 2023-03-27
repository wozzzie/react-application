import React, { createRef } from 'react';

import {
  FormCard,
  CheckboxInput,
  DateInput,
  SelectInput,
  FileInput,
  TextInput,
  TextArea,
  RadioInput,
} from './index';

import { Card, FormState } from '../../types/form';

import './Form.css';

class Form extends React.Component<Record<string, never>, FormState> {
  private authorInputRef = createRef<HTMLInputElement>();
  private requirementsRef = createRef<HTMLTextAreaElement>();
  private dateInputRef = createRef<HTMLInputElement>();
  private selectRef = createRef<HTMLSelectElement>();
  private checkboxInputRef = createRef<HTMLInputElement>();
  private fileInputRef = createRef<HTMLInputElement>();
  private radioInputRef1 = createRef<HTMLInputElement>();
  private radioInputRef2 = createRef<HTMLInputElement>();

  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      cards: [],
      errors: {},
    };
  }

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const now = new Date();
    const newCard: Card = {
      authorName: '',
      requirements: '',
      date: '',
      location: '',
      title: this.radioInputRef1.current?.checked ? 'Mr' : 'Ms',
      isChecked: false,
      file: null,
    };
    const newErrors: FormState['errors'] = {};

    const selectedDate = new Date(this.dateInputRef.current?.value ?? '');
    if (!selectedDate || selectedDate < now) {
      newErrors.date = 'Please select a date in the future';
    } else {
      newCard.date = this.dateInputRef.current?.value ?? '';
    }

    if (!this.dateInputRef.current?.value) {
      newErrors.date = 'Date is required';
    } else {
      newCard.date = this.dateInputRef.current.value;
    }

    if (!this.authorInputRef.current?.value) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Z]/.test(this.authorInputRef.current.value)) {
      newErrors.name = 'Name must start with a capital letter';
    } else {
      newCard.authorName = this.authorInputRef.current.value;
    }

    if (!this.requirementsRef.current?.value) {
      newErrors.requirements = 'Field is required';
    } else {
      newCard.requirements = this.requirementsRef.current.value;
    }

    if (!this.selectRef.current?.value) {
      newErrors.location = 'Location is required';
    } else {
      newCard.location = this.selectRef.current.value;
    }

    if (!this.checkboxInputRef.current?.checked) {
      newErrors.isChecked = 'Checkbox must be checked';
    } else {
      newCard.isChecked = true;
    }

    if (!this.fileInputRef.current?.files || !this.fileInputRef.current?.files[0]) {
      newErrors.file = 'File is required';
    } else {
      newCard.file = this.fileInputRef.current.files[0];
    }

    if (!this.radioInputRef1.current?.checked && !this.radioInputRef2.current?.checked) {
      newErrors.title = 'At least one option must be selected';
    }

    if (Object.keys(newErrors).length === 0) {
      this.setState((prevState) => ({
        cards: [...prevState.cards, newCard],
        errors: {},
      }));
      alert('The form is submitted');
      if (this.authorInputRef.current) this.authorInputRef.current.value = '';
      if (this.requirementsRef.current) this.requirementsRef.current.value = '';
      if (this.dateInputRef.current) this.dateInputRef.current.value = '';
      if (this.selectRef.current) this.selectRef.current.value = '';
      if (this.checkboxInputRef.current) this.checkboxInputRef.current.checked = false;
      if (this.fileInputRef.current) this.fileInputRef.current.value = '';
      if (this.radioInputRef1.current) this.radioInputRef1.current.checked = false;
      if (this.radioInputRef2.current) this.radioInputRef2.current.checked = false;
    } else {
      this.setState({
        errors: newErrors,
      });
    }
  };

  public render() {
    const { cards, errors } = this.state;
    return (
      <>
        <div className="form__container">
          <form className="form" onSubmit={this.handleSubmit} data-testid="form-component">
            <div className="form__block">
              <div className="form__credentials">
                <TextInput
                  label="Name"
                  defaultValue=""
                  inputRef={this.authorInputRef}
                  error={errors.name}
                />
                <TextArea
                  label="Requirements"
                  defaultValue=""
                  textAreaRef={this.requirementsRef}
                  error={errors.requirements}
                  maxLength={100}
                />
                <DateInput label="Date" inputRef={this.dateInputRef} error={errors.date} />
                <SelectInput
                  label="Location"
                  defaultValue=""
                  selectRef={this.selectRef}
                  error={errors.location}
                />
                <RadioInput
                  label="How can I contact you:"
                  name="radio"
                  options={['Mr', 'Ms']}
                  inputRef1={this.radioInputRef1}
                  inputRef2={this.radioInputRef2}
                  error={errors.title}
                />
                <CheckboxInput
                  label="I consent to my personal data"
                  defaultChecked={false}
                  checkboxRef={this.checkboxInputRef}
                  error={errors.isChecked}
                />
              </div>
              <FileInput
                label="Upload your file..."
                inputFileRef={this.fileInputRef}
                error={errors.file}
              />
            </div>
            <button className="form__btn" type="submit" data-testid="submit-button">
              Submit
            </button>
          </form>
        </div>
        {cards.length > 0 && (
          <div className="cards__container">
            {cards.map((card) => (
              <FormCard
                key={card.authorName + card.requirements}
                authorName={card.authorName}
                requirements={card.requirements}
                date={card.date}
                location={card.location}
                title={card.title}
                isChecked={card.isChecked}
                file={card.file}
              />
            ))}
          </div>
        )}
      </>
    );
  }
}

export default Form;
