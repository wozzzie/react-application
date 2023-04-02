import React from 'react';
import { CardProps } from '../../../types/form';

import './style.css';

const FormCard: React.FC<CardProps> = ({
  authorName,
  requirements,
  date,
  location,
  title,
  isChecked,
  file,
}) => {
  return (
    <div className="card_new">
      {file && file instanceof Blob && (
        <div>
          <img className="card_new__img" src={URL.createObjectURL(file)} alt="File preview" />
        </div>
      )}

      <p className="card_new__text">
        {title} {authorName}
      </p>
      <p className="card_new__text">Your requirements: {requirements}</p>
      <p className="card_new__text">Shipping date: {date}</p>
      <p className="card_new__text">Your location: {location}</p>
      <p className="card_new__text">
        Confirmation:
        {isChecked ? ' ✅ - confirmed' : 'I am not consent to my personal data...'}
      </p>
      <p className="card_new__thank">Thank you for choosing us!</p>
    </div>
  );
};

export default FormCard;
