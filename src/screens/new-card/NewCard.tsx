import React from 'react';
import Form from '../../components/form/Form';

import './NewCard.css';

class NewCard extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="newcard">
          <div className="newcard__text">
            {' '}
            <p>
              🖌 Tell us a little about yourself and your preferences so that we can find really good
              products for you. Fill out the form below.
            </p>
            <p>
              🏙 Indicate how we can contact you, your preferences, your location, so that we can
              choose the nearest store to you.
            </p>
            <p>
              📲 Also indicate your preferred delivery date and upload a photo of the plant you
              would like to purchase.
            </p>
            💛 We are waiting for your reply.
          </div>
          <img src="/img/card-plant.png" alt="" className="newcard__img" />
        </div>
        <Form />
      </div>
    );
  }
}

export default NewCard;
