import React from 'react';
import PostHome from '@/components/Post/PostHome';
import SideBarUser from '@/components/SideBarUser/SideBarUser.jsx';
import IconButton from '@/components/Button/IconButton';
import { getAllUsers, getAllPosts, getLoggedInUser } from '@/services/localStorage';
import '@/main.css';

// Placeholder Components - TODO: REMOVE LATER

const CreatePost = () => (
  <div className="card">
    <div className="yellow-header-bar"></div>
    <button className="btn-create-post">Create a post &#20;→</button>
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
  // const users = getAllUsers();
  const posts = getAllPosts(); // this uses the UUIDs
  // posts.sort(())
  // to do - sort posts 
  // const comments = getAllComments();
  const loggedInUser = getLoggedInUser();
  const signUpDate = new Date(loggedInUser.created_at);
  const signUpDateFormatted = signUpDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  console.log(signUpDate)
  console.log(loggedInUser);
  console.log(posts);
  const fakeComments = [{ name: "James Doe", text: "Looks great!", avatar: "https://i.pinimg.com/474x/f7/f4/86/f7f486d7d277227fd7c7fce2541807cc.jpg" }, { name: "Jane Doe", text: "Slay :)", avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6kW9VIrbqGQB5tgpzN_YulvweOfOTxmDOw&s" }];
  return (
    <div className="home-container">
        <SideBarUser 
            name={loggedInUser.display_name}
            followers={loggedInUser.followers ? loggedInUser.followers : 0}
            following={loggedInUser.following ? loggedInUser.following : 0}
            signUpDate={signUpDateFormatted}
        />      
      <main>
        <CreatePost />
        {posts && (
          posts.map((post) => (
            <PostHome key={post.id}
              timestamp={post.timestamp}
              caption={post.caption}
              title={post.title}
              image={post.image} 
              comments={post.comments}
              instructions={post.instructions}
              initialLikes={post.initialLikes}
            />
          ))
        )}

        
      </main>
      <RightSidebar />
    </div>
  );
};

export default Home;