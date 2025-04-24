import React, { useState } from 'react';
import PostHome from '@/components/Post/PostHome';
import SideBarUser from '@/components/SideBarUser/SideBarUser.jsx';
import IconButton from '@/components/Button/IconButton';
import ManageInfo from '@/components/ManageInfo/ManageInfo';
import PeopleYouMayKnow from '@/components/PeopleYouMayKnow/PeopleYouMayKnow';
import '@/main.css';
import { CreatePost } from '@/components/Modal/CreatePost';

// Placeholder Components - TODO: REMOVE LATER

const PostItem = () => (
  <div className="card">
    <div className="card-text">John Doe • March 8, 2025</div>
    <h2 className="card-title">Salmon and Rice</h2>
    <div
      className="card-img"
      style={{ height: "192px", backgroundColor: "#e5e7eb", margin: "8px 0" }}
    />
    <div className="card-footer icon-buttons-container">
      <IconButton icon="🔗" onClick={() => console.log('Share clicked')} />
      <IconButton icon="🤍" onClick={() => console.log('Like clicked')} />
      <IconButton icon="💬" onClick={() => console.log('Comment clicked')} />
    </div>
    <div className="card-text">James Doe commented...</div>
  </div>
);

const RightSidebar = () => (
  <div className="sidebar">
    <ManageInfo />
    <PeopleYouMayKnow />
  </div>
);

const Home = () => {
  const [createPostModalVisible, setCreatePostModalVisible] = useState(false);
  
  return (
    <div className="container">
        <SideBarUser 
            name="John Doe"
            followers={40}
            following={23}
            lastMealDate="April 10, 2025"
        />      
      <main>
        <div className="card">
          <button 
            className="btn-create-post" 
            onClick={() => setCreatePostModalVisible(true)}
          >
            Create a post →
          </button>
        </div>
        <PostHome
          image="https://assets.epicurious.com/photos/5f32b611f1722a2c13407e4e/1:1/w_2560%2Cc_limit/miso-glazed-salmon-recipe-BA-081120.jpg" 
          comments={[{ name: "James Doe", text: "Looks great!", avatar: "https://i.pinimg.com/474x/f7/f4/86/f7f486d7d277227fd7c7fce2541807cc.jpg" }, { name: "Jane Doe", text: "Slay :)", avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6kW9VIrbqGQB5tgpzN_YulvweOfOTxmDOw&s" }]}
          instructions={[
            "Cook the rice",
            "Season the salmon",
            "Pan-fry for 3 minutes each side",
            "Serve with soy sauce",
          ]}
        />
        <PostItem />
        <PostItem />
      </main>
      <RightSidebar />
      
      <CreatePost 
        visible={createPostModalVisible}
        onClose={() => setCreatePostModalVisible(false)}
      />
    </div>
  );
};

export default Home;