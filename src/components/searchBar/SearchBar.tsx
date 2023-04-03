import React, { useState, useEffect, useRef } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [search, setSearch] = useState(localStorage.getItem('searchForm') ?? '');

  const inputRef = useRef(search);

  useEffect(() => {
    inputRef.current = search;
  }, [search]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchForm', inputRef.current);
    };
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search-form__wrapper">
      <form className="search-form">
        <input
          data-testid="search-input"
          className="search-form__input"
          type="search"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search for a plant..."
        />
        <img src="/img/search.png" alt="loop" className="search-form__loop" />
      </form>
    </div>
  );
};

export default SearchBar;
