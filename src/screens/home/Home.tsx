import React, { useState, useEffect } from 'react';
import { CardType } from '../../types/form';
import Card from '../../components/card/Card';
import SearchBar from '../../components/searchBar/SearchBar';
import './Home.css';
import { data } from '../../data/data';
import filteredData from '../../components/filteredData/filteredData';
import Loader from '../../components/loader/loader';
import CardModal from '../../components/cardModal/cardModal';

interface HomeProps {
  advice: string;
}

const Home: React.FC<HomeProps> = ({ advice }) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchSubmit = async (searchTerm: string) => {
    setLoading(true);
    const response = await fetch(`https://mock-server-api-two.vercel.app/catalog?q=${searchTerm}`);
    const data = await response.json();
    setCards(data);
    setSearch(searchTerm);
    setLoading(false);
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

  const handleCardClick = (card: CardType) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  return (
    <div data-testid="main-page">
      <SearchBar onSubmit={handleSearchSubmit} />
      <div className="container">
        <div className="home__wrapper">
          <div className="home__card">
            {loading ? (
              <Loader />
            ) : cards.length ? (
              cards.map((card) => (
                <Card
                  key={card.id}
                  image={card.image}
                  title={card.title}
                  author={card.author}
                  // description={card.description}
                  location={card.location}
                  likes={card.likes}
                  // requirements={card.requirements}
                  onClick={() => handleCardClick(card)}
                />
              ))
            ) : (
              <div className="no-results">No results found.</div>
            )}
          </div>
          <div className="home__text">
            <div className="home__advice">{advice}</div>
            <div className="home__img"></div>
          </div>
        </div>
      </div>
      {selectedCard && (
        <CardModal
          card={selectedCard}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          image={selectedCard.image}
          title={selectedCard.title}
          author={selectedCard.author}
          description={selectedCard.description}
          location={selectedCard.location}
          likes={selectedCard.likes}
          requirements={selectedCard.requirements}
        />
      )}
    </div>
  );
};

export default Home;
