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
                image="https://www.thedietchefs.com/wp-content/uploads/2024/01/Salmon-and-rice-735x1103.jpg" 
                comments={[{ name: "James Doe", text: "Looks great!" }, { name: "Jane Doe", text: "Slay :)" }]}
                instructions={[
                  "Cook the rice",
                  "Season the salmon",
                  "Pan-fry for 3 minutes each side",
                  "Serve with soy sauce",
                ]}
              />
            </main>
          </div>
    )
  }
  
  export default UserProfile;