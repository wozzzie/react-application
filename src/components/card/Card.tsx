import React from "react";
import "./Card.css";

interface CardProps {
  image: string;
  title: string;
  author: string;
  description: string;
  location: string;
  likes: string;
  requirements: string;
}

class Card extends React.Component<CardProps> {
  render() {
    const { image, title, author, description, location, likes, requirements } =
      this.props;

    return (
      <div className="card" data-testid="card">
        <img src={image} className="card__image"></img>
        <div className="card__header">
          <p className="card__title">{title}</p>
          <p className="card__descr">💚 {likes}</p>
        </div>
        <p className="card__descr">Author: {author} </p>
        <p className="card__descr">{description}</p>
        <p className="card__descr">Location: {location}</p>
        <p className="card__descr">Requirements: {requirements}</p>
      </div>
    );
  }
}

export default Card;