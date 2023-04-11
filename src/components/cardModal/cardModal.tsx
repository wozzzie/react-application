import React, { useState, useEffect } from 'react';
import { CardType } from '../../types/form';
import './cardModal.css';
import Loader from '../loader/loader';

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  card: CardType;
  id: string;
}

const CardModal: React.FC<CardModalProps> = ({ isOpen, onClose, id }) => {
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState<CardType | null>(null);

  useEffect(() => {
    const fetchCardData = async () => {
      setLoading(true);
      const response = await fetch(`https://mock-server-api-two.vercel.app/catalog/${id}`);
      const data = await response.json();
      setCardData(data);
      setLoading(false);
    };
    fetchCardData();
  }, [id]);

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
        {loading || !cardData ? (
          <Loader data-testid="loader" />
        ) : (
          <>
            <button className="card-modal__close-button" onClick={onClose}>
              &times;
            </button>
            <div className="card-modal__content">
              <div className="card-modal__imageBlock">
                <img className="card__image" src={cardData.image} alt={cardData.title} />
                <div className="card-modal__info">
                  <div className="card-modal__titleBlock">
                    <h2 className="card-modal__title">{cardData.title}</h2>
                    <p className="card-modal__likes">{`💚 ${cardData.likes}`}</p>
                  </div>

                  <p className="card-modal__location">{`Location: ${cardData.location}`}</p>
                  <p className="card-modal__description">{cardData.description}</p>
                </div>
              </div>

              <div className="card-modal__requirementsBlock">
                <div className="card-modal__author">{`Author: ${cardData.author}`}</div>
                <div className="card-modal__requirements">{`Requirements: ${cardData.requirements}`}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardModal;
