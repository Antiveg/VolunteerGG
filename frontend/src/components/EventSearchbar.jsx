import React, { useState } from 'react';
import styles from './EventSearchbar.module.css';

const EventSearchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would handle the search submission here
    // For example: props.onSearch(searchTerm);
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm);
    }
    // Optionally, clear the search term after submission
    // setSearchTerm('');
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search anything you want ..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit" className={styles.searchButton} aria-label="Search">
        {/* Unicode Search Icon */}
        <span className={styles.searchIcon}>&#x1F50D;</span>
        {/* Or you can use an SVG icon here */}
        {/* Example SVG:
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        */}
      </button>
    </form>
  );
};

export default EventSearchbar;