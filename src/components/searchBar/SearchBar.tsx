import React, { useState, useEffect, useRef } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSubmit: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [search, setSearch] = useState<string>(localStorage.getItem('searchForm') ?? '');

  const inputRef = useRef<string>(search);

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

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(search);
  };

  return (
    <div className="search-form__wrapper">
      <form className="search-form" onSubmit={handleSearchSubmit} data-testid="search-form">
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
