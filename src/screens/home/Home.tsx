import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetCardsQuery } from '../../store/api/api';
import { RootState } from '../../store/store';

import { CardType } from '../../types/form';
import Card from '../../components/card/Card';
import SearchBar from '../../components/searchBar/SearchBar';
import './Home.css';
import Loader from '../../components/loader/loader';
import CardModal from '../../components/cardModal/cardModal';
import { setSearchResults } from '../../store/reducers/searchResultsSlice';

interface HomeProps {
  advice: string;
}

const Home: React.FC<HomeProps> = ({ advice }) => {
  const dispatch = useDispatch();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const searchText = useSelector((state: RootState) => state.searchBar.searchText);
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: cards = [], isLoading, isFetching } = useGetCardsQuery(searchText);

  useEffect(() => {
    if (isInitialLoad) {
      dispatch(setSearchResults(cards));
      setIsInitialLoad(false);
    }
  }, [dispatch, cards, isInitialLoad]);

  useEffect(() => {
    if (!isInitialLoad) {
      dispatch(setSearchResults(cards));
    }
  }, [dispatch, cards, searchText, isInitialLoad]);

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
      <SearchBar />
      <div className="container">
        <div className="home__wrapper">
          <div className="home__card">
            {isLoading || isFetching ? (
              <Loader />
            ) : cards.length ? (
              cards.map((card) => (
                <Card
                  key={card.id}
                  image={card.image}
                  title={card.title}
                  author={card.author}
                  location={card.location}
                  likes={card.likes}
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
        <CardModal isOpen={isModalOpen} onClose={handleCloseModal} id={selectedCard.id} />
      )}
    </div>
  );
};

export default Home;
