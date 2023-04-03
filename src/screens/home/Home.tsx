import React, { useState, useEffect } from 'react';
import { DATA } from '../../data/data';
import Card from '../../components/card/Card';
import SearchBar from '../../components/searchBar/SearchBar';
import './Home.css';

type HomeProps = {
  advice: string;
};

const Home: React.FC<HomeProps> = ({ advice }) => {
  const [cards, setCards] = useState(DATA);

  useEffect(() => {
    setCards(DATA);
  }, []);

  return (
    <div data-testid="main-page">
      <SearchBar />
      <div className="container">
        <div className="home__wrapper">
          <div className="home__card">
            {cards.map((card) => (
              <Card
                key={card.id}
                image={card.image}
                title={card.title}
                author={card.author}
                description={card.description}
                location={card.location}
                likes={card.likes}
                requirements={card.requirements}
              />
            ))}
          </div>
          <div className="home__text">
            <div className="home__advice">{advice}</div>
            <div className="home__img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
