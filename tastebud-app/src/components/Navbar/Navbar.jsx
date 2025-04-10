import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isAuthenticated, logoutUser } from '@/utils/auth'
import './Navbar.css'

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

    return (
    <nav className="navbar">
        <div className="navbar-logo">
        <h1>TasteBud</h1>
        </div>

        <ul className="navbar-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/recipes">Recipes</a></li>
        <li><a href="/profile">Profile</a></li>
        </ul>

        <div className="navbar-actions">
        {!authenticated ? (
            <>
            <button className="btn-login" onClick={() => navigate('/login')}>Login</button>
            <button className="btn-signup" onClick={() => navigate('/signup')}>Sign Up</button>
            </>
        ) : (
            <button className="btn-logout" onClick={handleLogout}>Logout</button>
        )}
        </div>
    </nav>
    );
};

export default Navbar