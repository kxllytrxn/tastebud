import React from 'react';
import Post from '@/components/Post/Post';
import SideBarUser from '@/components/SideBarUser/SideBarUser.jsx';
import IconButton from '@/components/Button/IconButton';
import ManageInfo from '@/components/ManageInfo/ManageInfo';
import PeopleYouMayKnow from '@/components/PeopleYouMayKnow/PeopleYouMayKnow';
import '@/main.css';

// Placeholder Components - TODO: REMOVE LATER

const CreatePost = () => (
  <div className="card">
    <button className="btn-create-post">Create a post →</button>
  </div>
);

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
  return (
    <div className="container">
        <SideBarUser 
            name="John Doe"
            followers={40}
            following={23}
            lastMealDate="April 10, 2025"
        />      
      <main>
        <CreatePost />
        <Post />
        <PostItem />
        <PostItem />
      </main>
      <RightSidebar />
    </div>
  );
};

export default Home;
