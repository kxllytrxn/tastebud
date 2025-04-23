import React from 'react';
import PostProfile from '@/components/Post/PostProfile';
import SideBarUser from '@/components/SideBarUser/SideBarUser.jsx';
import IconButton from '@/components/Button/IconButton';

import '@/main.css';

const UserProfile = () => {
    
    return (
      <div className="container">
            <main>
              <PostProfile 
                image="https://assets.epicurious.com/photos/5f32b611f1722a2c13407e4e/1:1/w_2560%2Cc_limit/miso-glazed-salmon-recipe-BA-081120.jpg" 
                comments={[{ name: "James Doe", text: "Looks great!" }, { name: "Jane Doe", text: "Slay :)" }]}
                instructions={[
                  "Cook the rice",
                  "Season the salmon",
                  "Pan-fry for 3 minutes each side",
                  "Serve with soy sauce",
                ]}
                currPage="userPage"
              />
            </main>
          </div>
    )
  }
  
  export default UserProfile;