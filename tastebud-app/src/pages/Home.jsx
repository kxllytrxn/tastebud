import React from 'react';
import PostHome from '@/components/Post/PostHome';
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
    </div>
  );
};

export default Home;