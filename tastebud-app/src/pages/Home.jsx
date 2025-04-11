import React from 'react';
import Post from '@/components/Post/Post';
import SideBarUser from '@/components/SideBarUser/SideBarUser.jsx';
import IconButton from '@/components/Button/IconButton';
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
    <div className="card">
      <h3 className="sidebar-header">Manage my info</h3>
      <ul className="sidebar-list">
        <li>👤 My circle</li>
        <li>📌 Saved recipes</li>
        <li>📋 My recipes</li>
      </ul>
    </div>
    <div className="card">
      <h3 className="sidebar-header">People you may know:</h3>
      <ul className="sidebar-list">
        {[
          "Etai Doe",
          "Emily Doe",
          "Lauren Doe",
          "Kelly Doe",
          "James Doe",
          "Bjoern Doe",
          "Eevee Doe",
          "Oski Doe",
        ].map((name) => (
          <li key={name}>👤 {name}</li>
        ))}
      </ul>
    </div>
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
