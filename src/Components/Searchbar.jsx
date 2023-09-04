import React, { useState } from 'react';
import './Searchbar.css';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchText);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="New Post..."
        value={searchText}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button onClick={handleSearchSubmit} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
