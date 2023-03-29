import React from 'react';

import './style.css';

interface PopupProps {
  message: string;
  onClose: () => void;
  showPopup: boolean;
}

class Popup extends React.Component<PopupProps> {
  render() {
    const { message, onClose, showPopup } = this.props;
    return (
      <div className={`popup ${showPopup ? 'popup__open' : ''}`}>
        <div className="popup__content">
          <h2>Hooray!</h2>
          <p className="popup__message">{message}</p>
          <button className="popup__button" onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
