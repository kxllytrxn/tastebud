import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isAuthenticated, logoutUser } from '@/utils/auth'
import NavbarIcon from './NavbarIcon'
import NavbarSearch from './NavbarSearch'
import NavbarButton from './NavbarButton'
import './Navbar.css'
import logo from '@/assets/icons/tastebud-logo.png'
import homeIcon from '@/assets/icons/home-black-outline.png'
import utencilIcon from '@/assets/icons/utensils-black-outline.png'
import messageIcon from '@/assets/icons/messages-black-outline.png'
import notificationIcon from '@/assets/icons/notification-alert.png'
import profileIcon from '@/assets/icons/profile-black-outline.png'
import searchIcon from '@/assets/icons/search-white.png'

// This file is a combination of all the NavBar sub components

const Navbar = () => {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);
  
    useEffect(() => {
      setAuthenticated(isAuthenticated());
    }, []);

    const handleLogout = () => {
        logoutUser(); 
        setAuthenticated(false); 
        navigate('/login');
      };  

    const handleSearch = (searchText) => {
        console.log('Searching for:', searchText);
        // NO ACTUAL SEARCH FUNCTIONALITY YET
    };

    return (
    <nav className="navbar-container">
        <div className="navbar-left">
            <div className="navbar-logo" onClick={() => navigate('/home')} style={{cursor: 'pointer'}}> 
                <img src={logo} alt="TasteBud Logo" />
            </div>

            <NavbarButton text="People" hasDropdown={true}>
                <ul className="dropdown-menu">
                    <li>People</li>
                    <li>Recipes</li>
                </ul>
            </NavbarButton>
            
            <NavbarSearch 
                placeholder="Search..." 
                onSearch={handleSearch} 
            />
        </div>
        
        <div className="navbar-right">
            <NavbarIcon icon={homeIcon} link="/home" />
            <NavbarIcon icon={utencilIcon} link="/recipes" />
            <NavbarIcon icon={messageIcon} link="/messages" />
            <NavbarIcon icon={notificationIcon} link="/notifications" />
            <NavbarIcon icon={profileIcon} link="/profile" />
        </div>
    </nav>
    );
};

export default Navbar