import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';

const NavbarButton = ({ text, children, hasDropdown = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-button-container" ref={dropdownRef}>
      <button 
        className="navbar-button"
        onClick={toggleDropdown}
      >
        {text}
        {hasDropdown && <span className="dropdown-arrow">▼</span>}
      </button>
      
      {hasDropdown && isOpen && (
        <div className="navbar-dropdown">
          {children}
        </div>
      )}
    </div>
  );
};

export default NavbarButton; 