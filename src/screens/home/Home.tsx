import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardType } from '../../types/form';
import Card from '../../components/card/Card';
import SearchBar from '../../components/searchBar/SearchBar';
import './Home.css';
import { useGetCardsQuery } from '../../store/api/api';
import Loader from '../../components/loader/loader';
import CardModal from '../../components/cardModal/cardModal';
import { setSearchResults } from '../../store/reducers/searchResultsSlice';
import { RootState } from '../../store/store';

interface HomeProps {
  advice: string;
}

const Home: React.FC<HomeProps> = ({ advice }) => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state: RootState) => state.searchResults.results);

  const [search, setSearch] = useState('');
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetCardsQuery(search);

  useEffect(() => {
    if (data) {
      dispatch(setSearchResults(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    dispatch(setSearchResults(searchResults));
  }, [dispatch, searchResults]);

  const handleSearchSubmit = (searchTerm: string) => {
    setSearch(searchTerm);
    if (searchTerm === '') {
      dispatch(setSearchResults(data!));
    }
  };

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
            {isLoading ? (
              <Loader />
            ) : searchResults.length ? (
              searchResults.map((card) => (
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
