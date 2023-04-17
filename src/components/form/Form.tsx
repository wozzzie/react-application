import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addCard } from '../../store/reducers/formSlice';
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
import Popup from './popup';
import { Card, CardProps } from '../../types/form';
import { FormValues } from '../../types/form';

import './Form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const cards = useSelector((state: RootState) => state.form.cards);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const newCard: Card = {
      authorName: data.authorName,
      requirements: data.requirements,
      date: data.date,
      location: data.location,
      title: data.title,
      isChecked: data.isChecked,
      file: URL.createObjectURL(data.file[0]),
    };

    dispatch(addCard(newCard));
    setShowPopup(true);
    reset();
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="form__container">
        <form className="form" onSubmit={handleSubmit(onSubmit)} data-testid="form-component">
          <div className="form__block">
            <div className="form__credentials">
              <TextInput
                label="Name"
                defaultValue=""
                register={register}
                name="authorName"
                error={errors.authorName?.message}
              />
              <TextArea
                label="Requirements"
                defaultValue=""
                register={register}
                name="requirements"
                error={errors.requirements?.message}
              />
              <DateInput
                label="Date"
                name="date"
                register={register}
                error={errors.date?.message}
              />
              <SelectInput
                label="Location"
                defaultValue=""
                name="location"
                register={register}
                error={errors.location?.message}
              />
              <RadioInput
                label="How can I contact you:"
                name="title"
                options={['Mr', 'Ms']}
                register={register}
                error={errors.title?.message}
              />
              <CheckboxInput
                label="I agree to the terms and conditions"
                name="isChecked"
                register={register}
                defaultChecked={false}
                error={errors.isChecked?.message}
              />
            </div>
            <FileInput
              label="Upload file"
              name="file"
              register={register}
              error={errors.file?.message}
            />
          </div>
          <button className="form__btn" type="submit" data-testid="submit-button">
            Submit
          </button>
        </form>
      </div>
      {showPopup && (
        <Popup
          message="The form is submitted"
          showPopup={showPopup}
          handleClosePopup={handleClosePopup}
        />
      )}
      <div className="cards__container">
        {cards.map(
          (card: JSX.IntrinsicAttributes & CardProps, index: React.Key | null | undefined) => (
            <FormCard key={index} {...card} />
          )
        )}
      </div>
    </>
  );
};

export default Form;
