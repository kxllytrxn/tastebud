import React, { useState } from 'react';
import './ShareModal.css';

export const ShareModal = ({ visible, onClose }) => {
  const [copied, setCopied] = useState(false);
  const linkToCopy = "notareallink.com";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(linkToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  if (!visible) return null;

  return (
    <div className="share-modal-overlay" onClick={(e) => {
      if (e.target.className === 'share-modal-overlay') {
        onClose();
      }
    }}>
      <div className="share-modal-content">
        <div className="share-modal-header">
          <h2>Share post</h2>
          <button onClick={onClose} className="share-modal-close-button">×</button>
        </div>
        
        <div className="share-modal-body">
          <p className="share-instruction">Copy this link to share</p>
          <div className="link-container">
            <span className="link-text">{linkToCopy}</span>
            <button className="copy-button" onClick={handleCopyLink}>
              <span className="clipboard-icon">📋</span>
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          {copied && <p className="copied-message">Link copied to clipboard!</p>}
        </div>
        
        <div className="share-modal-footer">
          <button className="confirm-button" onClick={onClose}>Confirm</button>
        </div>
      </div>
    </div>
  );
}; 