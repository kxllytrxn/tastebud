import React from 'react';
import './DeleteModal.css';

export const DeleteModal = ({ visible, onClose, onConfirm, itemName = 'post' }) => {
  if (!visible) return null;

  return (
    <div className="delete-modal-overlay" onClick={(e) => {
      if (e.target.className === 'delete-modal-overlay') {
        onClose();
      }
    }}>
      <div className="delete-modal-content">
        <div className="delete-modal-header">
          <h2>Delete {itemName}</h2>
          <button onClick={onClose} className="delete-modal-close-button">×</button>
        </div>
        
        <div className="delete-modal-body">
          <p>Are you sure you want to delete this {itemName}?</p>
          <p className="delete-warning"> ⚠️ This action cannot be undone.</p>
        </div>
        
        <div className="delete-modal-footer">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button 
            className="confirm-delete-button" 
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}; 