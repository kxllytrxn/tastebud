import React from 'react';
import './PeopleYouMayKnow.css';
import profile from '@/assets/icons/profile-black-outline.png'

const names = [
  "Etai Doe", "Emily Doe", "Lauren Doe", "Kelly Doe",
  "James Doe", "Bjoern Doe", "Eevee Doe", "Oski Doe"
];

const PeopleYouMayKnow = () => {
  return (
    <div className="people-card">
      <div className="header-bar"></div>
      <h3 className="sidebar-header">People you may know</h3>
      <ul className="sidebar-list">
        {names.map((name) => (
          <li key={name} className="person-entry"> 
            <img src={profile} alt="Default Profile Photo" className="profile-pic" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleYouMayKnow;
