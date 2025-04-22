import React from 'react';
import './ManageInfo.css';

const ManageInfo = () => {
  return (
    <div className="card">
      <h3 className="sidebar-header">Manage my info</h3>
      <ul className="sidebar-list">
        <li>👤 My circle</li>
        <li>📌 Saved recipes</li>
        <li>📋 My recipes</li>
      </ul>
    </div>
  );
};

export default ManageInfo;
