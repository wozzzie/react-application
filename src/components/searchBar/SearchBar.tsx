import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchText } from '../../store/reducers/searchBarSlice';

import './SearchBar.css';
import { RootState } from '../../store/store';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState) => state.searchBar?.searchText);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRef.current && dispatch(setSearchText(searchRef.current.value));
  };

  return (
    <div className="search-form__wrapper" data-testid="search-bar">
      <form className="search-form" onSubmit={handleSearchSubmit} data-testid="search-form">
        <input
          data-testid="search-input"
          className="search-form__input"
          type="search"
          defaultValue={searchText}
          ref={searchRef}
          placeholder="Search for a plant..."
        />
        <img src="/img/search.png" alt="loop" className="search-form__loop" />
      </form>
    </div>
  );
};

export default SearchBar;
