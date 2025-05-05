import React, { useState, useEffect } from 'react';
import './EditProfileModal.css';
import { getLoggedInUser, updateUser } from '@/services/localStorage';

export const EditProfileModal = ({ visible, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (visible) {
      const user = getLoggedInUser();
      if (user) {
        // Split the display name into first and last name
        const nameParts = user.display_name.split(' ');
        setFirstName(user.first_name || nameParts[0] || '');
        setLastName(user.last_name || nameParts.slice(1).join(' ') || '');
        setProfileImage(user.profile_photo_url || '');
      }
    }
  }, [visible]);

  const handleSelectImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Use FileReader to get a base64 string that can be saved to localStorage
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const user = getLoggedInUser();
    if (user) {
      console.log("Before update - Profile photo:", selectedImage || profileImage);
      
      const updatedUser = {
        ...user,
        first_name: firstName,
        last_name: lastName,
        display_name: `${firstName} ${lastName}`,
        profile_photo_url: selectedImage || profileImage,
      };
      
      console.log("Saving updated user with photo:", updatedUser.profile_photo_url);
      
      // Update the user in localStorage
      updateUser(updatedUser);
      
      // Verify the update was successful
      const verifyUser = getLoggedInUser();
      console.log("After update - Profile photo:", verifyUser.profile_photo_url);
      
      onClose();
      
      // Reload the page to reflect changes
      window.location.reload();
    }
  };

  if (!visible) return null;

  return (
    <div className="edit-profile-modal-overlay">
      <div className="edit-profile-modal-content">
        <div className="edit-profile-modal-header">
          <h2>Edit Profile</h2>
          <button onClick={onClose} className="edit-profile-modal-close-button">×</button>
        </div>
        
        <div className="edit-profile-modal-body">
          <div className="edit-profile-field">
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="edit-profile-input"
            />
          </div>
          
          <div className="edit-profile-field">
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="edit-profile-input"
            />
          </div>
          
          <div className="edit-profile-field">
            <label>Profile Picture</label>
            {(selectedImage || profileImage) ? (
              <div className="profile-image-preview">
                <img 
                  src={selectedImage || profileImage} 
                  alt="Profile Preview" 
                  className="preview-image"
                />
                <button 
                  className="change-image-button"
                  onClick={() => document.getElementById('profile-image-input').click()}
                >
                  Change Image
                </button>
              </div>
            ) : (
              <div className="profile-image-upload">
                <span className="upload-icon">📷</span>
                <button 
                  className="upload-button"
                  onClick={() => document.getElementById('profile-image-input').click()}
                >
                  Upload Image
                </button>
              </div>
            )}
            <input
              id="profile-image-input"
              type="file"
              accept="image/*"
              onChange={handleSelectImage}
              style={{ display: 'none' }}
            />
          </div>
        </div>
        
        <div className="edit-profile-modal-footer">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button 
            className="save-button" 
            onClick={handleSave}
            disabled={!firstName.trim() || !lastName.trim()}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}; 