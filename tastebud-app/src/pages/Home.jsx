import React from 'react';
import Post from '@/components/Post/Post';
import '@/main.css';

// Placeholder Components - TODO: REMOVE LATER
const SidebarProfile = () => (
  <div className="sidebar">
    <div className="card">
      <div
        className="card-img"
        style={{
          height: "160px",
          backgroundColor: "#e5e7eb",
          borderRadius: "8px",
          marginBottom: "16px",
        }}
      />
      <p className="card-title">John Doe</p>
      <p className="card-text">40 followers | 23 following</p>
      <p className="card-text">Last Meal Posted: Yesterday</p>
    </div>
  </div>
);

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
    <div className="card-footer">
      <button>🔗</button>
      <button>🤍</button>
      <button>💬</button>
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
      <SidebarProfile />
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
