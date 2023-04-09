import React, { useState, useEffect } from 'react';
import { CardType } from '../../types/form';
import Card from '../../components/card/Card';
import SearchBar from '../../components/searchBar/SearchBar';
import './Home.css';
import { data } from '../../data/data';
import filteredData from '../../components/filteredData/filteredData';

interface HomeProps {
  advice: string;
}

const Home: React.FC<HomeProps> = ({ advice }) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [search, setSearch] = useState('');

  const handleSearchSubmit = async (searchTerm: string) => {
    const response = await fetch(`https://mock-server-api-two.vercel.app/catalog?q=${searchTerm}`);
    const data = await response.json();
    setCards(data);
    setSearch(searchTerm);
  };

  useEffect(() => {
    const searchForm = localStorage.getItem('searchForm');
    if (searchForm) {
      setSearch(searchForm);
    }
    const defaultCards = searchForm ? filteredData(data, searchForm) : data;
    setCards(defaultCards);
  }, []);

  useEffect(() => {
    localStorage.setItem('searchForm', search);
  }, [search]);

  useEffect(() => {
    const filteredCards = filteredData(data, search);
    setCards(filteredCards);
  }, [search]);

  return (
    <div data-testid="main-page">
      <SearchBar onSubmit={handleSearchSubmit} />
      <div className="container">
        <div className="home__wrapper">
          <div className="home__card">
            {cards.length === 0 ? (
              <div className="home__no-results">No results found for &quot;{search}&quot;</div>
            ) : (
              cards.map((card) => (
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
              ))
            )}
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
