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
      <img className="card_new__img" src={file} alt="File preview" data-testid="card-file" />
      <p className="card_new__text" data-testid="card-authorName">
        {title} {authorName}
      </p>
      <p className="card_new__text" data-testid="card-requirements">
        Your requirements: {requirements}
      </p>
      <p className="card_new__text" data-testid="card-date">
        Shipping date: {date}
      </p>
      <p className="card_new__text" data-testid="card-location">
        Your location: {location}
      </p>
      <p className="card_new__text">
        Confirmation:
        {isChecked ? ' ✅ - confirmed' : 'I am not consent to my personal data...'}
      </p>
      <p className="card_new__thank">Thank you for choosing us!</p>
    </div>
  );
};

export default FormCard;
