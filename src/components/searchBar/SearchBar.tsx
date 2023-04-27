import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText } from '../../store/reducers/searchBarSlice';
import { RootState } from '../../store/store';

import './SearchBar.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState) => state.searchBar?.searchText);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    dispatch(setSearchText(searchTerm));
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearchText(searchText));
  };

  return (
    <div className="search-form__wrapper">
      <form className="search-form" onSubmit={handleSearchSubmit} data-testid="search-form">
        <input
          data-testid="search-input"
          className="search-form__input"
          type="search"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Search for a plant..."
        />
        <img src="/img/search.png" alt="loop" className="search-form__loop" />
      </form>
    </div>
  );
};

export default SearchBar;
