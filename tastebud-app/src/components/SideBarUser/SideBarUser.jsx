import React from 'react';
import './SideBarUser.css';

const SideBarUser = ({ name, followers, following, lastMealDate }) => {
    return (
      <div className="sidebar-user">
        <div className="profile-image" />
  
        <h3 className="user-name">{name}</h3>
        <p className="user-follow">
          {followers} followers | {following} following
        </p>
  
        <p className="last-meal">Last Meal Posted: <span>{lastMealDate}</span></p>
  
        <div className="meal-preview">
          <div className="meal-box" />
          <div className="meal-box" />
          <div className="meal-box" />
        </div>
      </div>
    );
  };
  
  export default SideBarUser;