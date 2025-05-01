import React from "react";
import IconButton from "@/components/Button/Button";
import "./ProfileBanner.css"

const ProfileBanner = ({ user }) => {
    return (
      <div className="profile-banner-wrapper">
        <div className="profile-banner-header" />
        <div className="profile-banner-content">
          <div className="profile-avatar" />
          <div className="profile-info">
            <h2>{user.display_name}</h2>
            <p>{user.followers} followers | {user.following} following</p>
          </div>
          <IconButton 
          buttonText="Edit Profile"
          disabled={false}
          variant="primary"
          color="green" />
        </div>
      </div>
    );
  };
  

export default ProfileBanner;