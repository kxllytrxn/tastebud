import React from 'react';
import './ManageAccount.css';
import "@/main.css"
import mycircle from '@/assets/icons/mycircle-black-fill.png'
import savedrecipes from '@/assets/icons/save-black-fill.png'
import utensils from '@/assets/icons/utensils-black-fill.png'
import signout from '@/assets/icons/sign-out.png'
import { logoutUser } from '@/utils/auth';
import { useNavigate } from 'react-router-dom';

const ManageAccount = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    logoutUser();
    navigate('/login');
  };

  const handleSavedRecipesClick = () => {
    navigate('/recipes');
  };
  
  const handleMyRecipesClick = () => {
    navigate('/profile');
  };

  return (
    <div className="manage-account-card">
      <div className="header-bar"></div>
      <h3 className="sidebar-header">Manage account</h3>
      <ul className="sidebar-list">

        <li className="menu-entry"> 
          <img src={mycircle} alt="My Circle Icon" className="menu-icon" />
          <span>My circle</span>
        </li>

        <li className="menu-entry" onClick={handleSavedRecipesClick}> 
          <img src={savedrecipes} alt="Saved" className="menu-icon" />
          <span>Saved recipes</span>
        </li>

        <li className="menu-entry" onClick={handleMyRecipesClick}> 
          <img src={utensils} alt="Recipe Icon" className="menu-icon" />
          <span>My recipes</span>
        </li>

        <li className="menu-entry" onClick={handleSignOut}> 
          <img src={signout} alt="Sign Out" className="menu-icon" />
          <span>Sign out</span>
        </li>

      </ul>
    </div>
  );
};

export default ManageAccount;
