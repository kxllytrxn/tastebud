import React, { useState } from "react";
import IconButton from "@/components/Button/Button";
import "./ProfileBanner.css"
import { EditProfileModal } from "@/components/Modal/EditProfileModal";

const ProfileBanner = ({ user, avatar }) => {
    const [showEditModal, setShowEditModal] = useState(false);

    const handleEditClick = () => {
      setShowEditModal(true);
    };

    const handleCloseModal = () => {
      setShowEditModal(false);
    };

    console.log("Profile Banner - User photo:", user.profile_photo_url);
    
    return (
      <div className="profile-banner-wrapper">
        <div className="profile-banner-header" />
        <div className="profile-banner-content">
          <div className="profile-avatar">
            <img alt={"Profile Avatar"} src={user.profile_photo_url || avatar}/>
          </div>
          <div className="profile-info">
            <h2>{user.display_name}</h2>
            <p>{user.followers} followers | {user.following} following</p>
          </div>
          <IconButton 
            buttonText="Edit Profile"
            disabled={false}
            variant="primary"
            color="green"
            onClick={handleEditClick}
          />
        </div>

        {/* Edit Profile Modal */}
        <EditProfileModal
          visible={showEditModal}
          onClose={handleCloseModal}
        />
      </div>
    );
  };
  

export default ProfileBanner;