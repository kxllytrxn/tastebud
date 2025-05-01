import React from 'react';
import PostProfile from '@/components/Post/PostProfile';
import ProfileBanner from '@/components/ProfileBanner/ProfileBanner';
import PeopleYouMayKnow from '@/components/PeopleYouMayKnow/PeopleYouMayKnow';
import '@/main.css';
import { getAllPosts, getLoggedInUser } from '../services/localStorage';
import TastebudStats from '@/components/TastebudStats/TastebudStats';

const RightSidebar = () => (
  <div className="sidebar">
    <PeopleYouMayKnow />
  </div>
);

const UserProfile = () => {
  const loggedInUser = getLoggedInUser();
  const userPosts = getAllPosts().filter((post => post.user.user_id === loggedInUser.id))
  console.log(userPosts)
  return (
    <div className="user-container"> 
      <ProfileBanner 
        user={loggedInUser} 
        avatar={loggedInUser.profile_photo_url}/>
      <div className="main-content">
        
        <div className="activity-section">
          <TastebudStats 
            mealsCooked={8} 
            weekStreak={5} 
            totalLikes={130} 
          />
        
          <div className="activity-header">
            <h3>My Activity</h3>
            <button className="see-all-btn">See all posts ⌄</button>
          </div>
          {userPosts.length > 0 ? 
            (userPosts.map((post) => (
              <PostProfile key={post.id} {...post} />
            ))) :
            <p> No posts found. Create one today! </p>
          }
          
        </div>
        <RightSidebar />

      </div>
    </div>
  );
  }
  
  export default UserProfile;