import React from 'react';

import './style.css';

interface PopupProps {
  message: string;
  handleClosePopup: () => void;
  showPopup: boolean;
}

const Popup: React.FC<PopupProps> = ({ message, handleClosePopup, showPopup }) => {
  return (
    <div className={`popup ${showPopup ? 'popup__open' : ''}`} data-testid="popup-container">
      <div className="popup__content">
        <h2>Hooray!</h2>
        <p className="popup__message">{message}</p>
        <button className="popup__button" onClick={handleClosePopup}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Popup;
