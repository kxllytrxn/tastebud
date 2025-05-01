import React, { useState, useEffect } from 'react';
import PostHome from '@/components/Post/PostHome';
import SideBarUser from '@/components/SideBarUser/SideBarUser.jsx';
import IconButton from '@/components/Button/IconButton';
import { getAllUsers, getAllPosts, getLoggedInUser } from '@/services/localStorage';
import ManageAccount from '@/components/ManageAccount/ManageAccount';
import PeopleYouMayKnow from '@/components/PeopleYouMayKnow/PeopleYouMayKnow';
import '@/main.css';
import { CreatePost } from '@/components/Modal/CreatePost';
import addimage from '@/assets/icons/addimage-darkgrey-outline.png';
import utensils from '@/assets/icons/utensils-darkgrey-outline.png';

const RightSidebar = () => (
  <div className="sidebar">
    <ManageAccount />
    <PeopleYouMayKnow />
  </div>
);

const Home = () => {
  // const users = getAllUsers();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const storedPosts = getAllPosts();
    setPosts(storedPosts);
  }, []); 
  const sortedPosts = [...posts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  const loggedInUser = getLoggedInUser();
  const signUpDate = new Date(loggedInUser.created_at);
  const signUpDateFormatted = signUpDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const fakeComments = [{ name: "James Doe", text: "Looks great!", avatar: "https://i.pinimg.com/474x/f7/f4/86/f7f486d7d277227fd7c7fce2541807cc.jpg" }, { name: "Jane Doe", text: "Slay :)", avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6kW9VIrbqGQB5tgpzN_YulvweOfOTxmDOw&s" }];
  const [createPostModalVisible, setCreatePostModalVisible] = useState(false);
  useEffect(() => {
    if (!createPostModalVisible) {
      setPosts(getAllPosts());
    }
  }, [createPostModalVisible, setPosts]);

  return (
    <div className="home-container">
      <SideBarUser 
          name={loggedInUser.display_name}
          followers={loggedInUser.followers ? loggedInUser.followers : 0}
          following={loggedInUser.following ? loggedInUser.following : 0}
          signUpDate={signUpDateFormatted}
      />      
      <main>
      <div className="card">
        <div className="yellow-header-bar"></div>
        <div className="create-post-row">
          <button className="btn-create-post" onClick={() => setCreatePostModalVisible(!createPostModalVisible)}>Create a post &#20;→</button>
          
          <div className="create-post-icons">
            <img src={addimage} alt="Add Image" onClick={() => setCreatePostModalVisible(!createPostModalVisible)}/>
            <img src={utensils} alt="Add Recipe" onClick={() => setCreatePostModalVisible(!createPostModalVisible)}/>
          </div>
        </div>
      </div>
        {sortedPosts.length > 0 ? (
          sortedPosts.map((post) => (
            <PostHome key={post.id}
              id={post.id}
              user={post.user}
              timestamp={post.timestamp}
              caption={post.caption}
              title={post.title}
              image={post.image} 
              comments={post.comments}
              instructions={post.instructions}
              liked={post.liked}
              initialLikes={post.initialLikes}
            />
          ))) : (<p>No posts yet. Start by creating one!</p>)
        }
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