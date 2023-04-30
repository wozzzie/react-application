import React from 'react';
import { useGetCardsQuery } from '../../store/api/api';
import './cardModal.css';
import Loader from '../loader/loader';

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

const CardModal: React.FC<CardModalProps> = ({ isOpen, onClose, id }) => {
  const { data: cardData, isLoading } = useGetCardsQuery(id);

  const card = cardData?.find((card: { id: string }) => card.id === id);

  const handleClickOverlay = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`card-modal ${isOpen ? 'open' : ''}`}
      onClick={handleClickOverlay}
      data-testid="card-modal"
    >
      <div className="card-modal__container">
        {isLoading || !card ? (
          <Loader data-testid="loader" />
        ) : (
          <>
            <button
              className="card-modal__close-button"
              onClick={onClose}
              data-testid="card-modal-close-button"
            >
              &times;
            </button>
            <div className="card-modal__content">
              <div className="card-modal__imageBlock">
                <img className="card__image" src={card.image} alt={card.title} />
                <div className="card-modal__info">
                  <div className="card-modal__titleBlock">
                    <h2 className="card-modal__title">{card.title}</h2>
                    <p className="card-modal__likes">{`💚 ${card.likes}`}</p>
                  </div>

                  <p className="card-modal__location">{`Location: ${card.location}`}</p>
                  <p className="card-modal__description">{card.description}</p>
                </div>
              </div>

              <div className="card-modal__requirementsBlock">
                <div className="card-modal__author">{`Author: ${card.author}`}</div>
                <div className="card-modal__requirements">{`Requirements: ${card.requirements}`}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardModal;
