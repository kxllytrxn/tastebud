import React, { useState } from 'react';
import './CreatePost.css'; // You'll need to create this CSS file
import picIcon from './modal-icons/pic.png';
import utencilIcon from './modal-icons/utencil.png';
import plusIcon from './modal-icons/plus.png';

export const CreatePost = ({ visible, onClose }) => {
  const [postTitle, setPostTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lastSaved, setLastSaved] = useState(null);

  const handleSelectImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleSaveAsDraft = () => {
    const currentTime = new Date();
    setLastSaved(currentTime);
    console.log('Post saved as draft', { postTitle, caption, selectedImage });
  };

  const handleSave = () => {
    console.log('Post saved', { postTitle, caption, selectedImage });
    onClose();
  };

  const formatTime = (date) => {
    if (!date) return '';
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-close">
          <button onClick={onClose} className="modal-close-button">×</button>
        </div>
        
        <div className="modal-header">
          <h2>New Post</h2>
        </div>
        
        <div className="modal-scrollable-content">
          <div className="field-container">
            <div className="field-left">
              <div className="field-label">Post Title</div>
              <div className="field-subtitle">Give your meal a title</div>
            </div>
            <div className="field-right">
              <input 
                type="text" 
                placeholder="e.g. Salmon and Rice" 
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                className="input"
              />
            </div>
          </div>
          
          <div className="divider"></div>
          
          <div className="field-container">
            <div className="field-left">
              <div className="field-label">Caption</div>
              <div className="field-subtitle">Give a behind-the-scenes or tag your friends</div>
            </div>
            <div className="field-right">
              <textarea 
                placeholder="e.g. Made some salmon + rice for dinner :) — With @Jane Doe"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="input caption-input"
              ></textarea>
            </div>
          </div>
          
          <div className="divider"></div>
          
          <div className="field-container">
            <div className="field-left">
              <div className="field-label">Photo</div>
              <div className="field-subtitle">Show off your creation</div>
            </div>
            <div className="field-right">
              {selectedImage ? (
                <div className="photo-preview">
                  <img src={selectedImage} alt="Preview" className="preview-image" />
                  <button className="remove-image" onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
              ) : (
                <div className="image-selector">
                  <div className="image-placeholder">
                    <span className="icon">📷</span>
                    <p>Drag photos here or</p>
                    <label className="select-button">
                      Select from computer
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleSelectImage}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-left">
            <button className="icon-button">
              <img src={picIcon} alt="Picture" className="modal-icon" />
            </button>
            <button className="icon-button">
              <img src={utencilIcon} alt="Utensil" className="modal-icon" />
            </button>
            <button className="icon-button">
              <img src={plusIcon} alt="Add" className="modal-icon" />
            </button>
          </div>
          <div className="footer-right">
            <button className="draft-button" onClick={handleSaveAsDraft}>Save as draft</button>
            <button className="save-button" onClick={handleSave}>Save</button>
          </div>
          
          {lastSaved && (
            <div className="timestamp">draft last saved at {formatTime(lastSaved)}</div>
          )}
        </div>
      </div>
    </div>
  );
}; 