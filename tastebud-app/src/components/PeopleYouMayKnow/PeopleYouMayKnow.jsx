import React from 'react';
import './PeopleYouMayKnow.css';

const names = [
  "Etai Doe", "Emily Doe", "Lauren Doe", "Kelly Doe",
  "James Doe", "Bjoern Doe", "Eevee Doe", "Oski Doe"
];

const PeopleYouMayKnow = () => {
  return (
    <div className="card">
      <h3 className="sidebar-header">People you may know:</h3>
      <ul className="sidebar-list">
        {names.map((name) => (
          <li key={name}>👤 {name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleYouMayKnow;
