import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const searchStorage = localStorage.getItem('searchForm');
    if (searchStorage) {
      setSearch(searchStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchForm', search);
  }, [search]);

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
