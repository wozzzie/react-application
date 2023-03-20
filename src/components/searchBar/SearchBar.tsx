import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
  state = {
    search: '',
  };

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value });
  };

  componentDidMount = () => {
    const searchStorage = localStorage.getItem('searchForm');

    if (searchStorage) {
      this.setState({ search: searchStorage });
    }
  };

  componentWillUnmount = () => {
    localStorage.setItem('searchForm', this.state.search);
  };

  render() {
    return (
      <div className="search-form__wrapper">
        <form className="search-form">
          <input
            data-testid="search-input"
            className="search-form__input"
            type="search"
            value={this.state.search}
            onChange={this.handleSearchChange}
            placeholder="Search for a plant..."
          />
          <img src="/img/search.png" alt="loop" className="search-form__loop" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
