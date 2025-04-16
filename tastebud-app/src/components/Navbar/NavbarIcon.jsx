import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const NavbarIcon = ({ icon, link, onClick, isActive = false }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      navigate(link);
    }
  };

  const isImagePath = typeof icon === 'string' && (
    icon.startsWith('/') || 
    icon.startsWith('./') || 
    icon.startsWith('http')
  );

  return (
    <button 
      className={`navbar-icon ${isActive ? 'active' : ''}`}
      onClick={handleClick}
      aria-label="Navigation icon"
    >
      {isImagePath ? (
        <img src={icon} alt="" className="navbar-icon-image" />
      ) : typeof icon === 'string' ? (
        <span className="navbar-icon-text">{icon}</span>
      ) : (
        <img src={icon} alt="" className="navbar-icon-image" />
      )}
    </button>
  );
};

export default NavbarIcon; 