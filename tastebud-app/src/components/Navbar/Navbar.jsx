import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isAuthenticated, logoutUser } from '@/utils/auth'
import NavbarIcon from './NavbarIcon'
import NavbarSearch from './NavbarSearch'
import NavbarButton from './NavbarButton'
import './Navbar.css'
import logo from './navbarAssets/logo.png'
import homeIcon from './navbarAssets/home.png'
import utencilIcon from './navbarAssets/utencils.png'
import messageIcon from './navbarAssets/message.png'
import notificationIcon from './navbarAssets/notification.png'
import profileIcon from './navbarAssets/profile.png'

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
            <div className="navbar-logo">
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