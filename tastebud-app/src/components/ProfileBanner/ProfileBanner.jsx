import React from "react";
import IconButton from "@/components/Button/Button";
import "./ProfileBanner.css"

const ProfileBanner = ({ user, avatar }) => {
    console.log(avatar);
    return (
      <div className="profile-banner-wrapper">
        <div className="profile-banner-header" />
        <div className="profile-banner-content">
          <div className="profile-avatar">
            <img alt={"Profile Avatar"} src={avatar}/>
          </div>
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