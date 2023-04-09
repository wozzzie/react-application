import React from 'react';
import './cardModal.css';
import { CardType } from '../../types/form';

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  author: string;
  description: string;
  location: string;
  likes: string;
  requirements: string;
  card: CardType;
}

const CardModal: React.FC<CardModalProps> = ({
  isOpen,
  onClose,
  image,
  title,
  author,
  description,
  location,
  likes,
  requirements,
}) => {
  const handleClickOverlay = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`card-modal ${isOpen ? 'open' : ''}`} onClick={handleClickOverlay}>
      <div className="card-modal__container">
        <button className="card-modal__close-button" onClick={onClose}>
          &times;
        </button>
        <div className="card-modal__content">
          <div className="card-modal__imageBlock">
            <img className="card__image" src={image} alt={title} />
            <div className="card-modal__info">
              <div className="card-modal__titleBlock">
                <h2 className="card-modal__title">{title}</h2>
                <p className="card-modal__likes">💚 {likes}</p>
              </div>
              <p className="card-modal__location">🏞 Location: {location}</p>
              <p className="card-modal__description">{description}</p>
            </div>
          </div>
          <div className="card-modal__requirementsBlock">
            <p className="card-modal__author">Author: {author}</p>

            <p className="card-modal__requirements">Requirements: {requirements}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
