import React from 'react';
import './Card.css';

interface CardProps {
  image: string;
  title: string;
  author: string;
  // description: string;
  location: string;
  likes: string;
  // requirements: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  author,
  // description,
  location,
  likes,
  // requirements,
  onClick,
}) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card__image-container">
        <img className="card__image" src={image} alt={title} />
      </div>
      <div className="card__content">
        <div className="card__titleBlock">
          <h2 className="card__title">{title}</h2>
          <p className="card__likes">💚 {likes}</p>
        </div>
        <p className="card__author">Author: {author}</p>
        {/* <p className="card__description">{description}</p> */}
        <p className="card__location">Location: {location}</p>
        {/* <p className="card__requirements">Requirements: {requirements}</p> */}
      </div>
    </div>
  );
};

export default Card;
