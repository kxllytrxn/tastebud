import React, { useState } from 'react';
import './Navbar.css';

import searchIcon from '@/assets/icons/search-white.png';

const NavbarSearch = ({ placeholder = "Search...", onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch && searchText.trim()) {
      onSearch(searchText);
    }
  };

  return (
    <form className="navbar-search-container" onSubmit={handleSubmit}>
      <div className="search-icon-wrapper">
        <img src={searchIcon} alt="Search Icon"/>
      </div>
      <input
        type="text"
        className="navbar-search-input"
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default NavbarSearch; 