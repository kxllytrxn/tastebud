import React from 'react';
import './SideBarUser.css';
import "@/main.css"


const SideBarUser = ({ name, followers, following, signUpDate }) => {
    return (
      <div className="sidebar-user">
        <div className="header-bar"></div>
        <div className="profile-image">
          <img src="https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/11688145/pokemon_piplup.png?quality=90&strip=all&crop=0,3.4685863874346,100,93.062827225131"></img>
          </div>
  
        <h3 className="user-name">{name}</h3>
        <p className="user-follow">
          {followers} followers | {following} following
        </p>
  
        <p className="last-meal">Tastebud Member Since: <span>{signUpDate}</span></p>
  
        <div className="meal-preview">
          <div className="meal-box" />
          <div className="meal-box" />
          <div className="meal-box" />
        </div>
      </div>
    );
  };
  
export default SideBarUser;