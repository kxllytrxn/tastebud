import React, { useState, useEffect } from 'react';
import PostHome from '@/components/Post/PostHome';
import SideBarUser from '@/components/SideBarUser/SideBarUser.jsx';
import IconButton from '@/components/Button/IconButton';
import { getAllUsers, getAllPosts, getLoggedInUser } from '@/services/localStorage';
import ManageAccount from '@/components/ManageAccount/ManageAccount';
import PeopleYouMayKnow from '@/components/PeopleYouMayKnow/PeopleYouMayKnow';
import '@/main.css';
import { CreatePost } from '@/components/Modal/CreatePost';

const RightSidebar = () => (
  <div className="sidebar">
    <ManageAccount />
    <PeopleYouMayKnow />
  </div>
);

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const storedPosts = getAllPosts();
    setPosts(storedPosts);
    console.log(storedPosts)
  }, []); 
  const sortedPosts = [...posts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  const loggedInUser = getLoggedInUser();
  const signUpDate = new Date(loggedInUser.created_at);
  const signUpDateFormatted = signUpDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [createPostModalVisible, setCreatePostModalVisible] = useState(false);
  useEffect(() => {
    if (!createPostModalVisible) {
      setPosts(getAllPosts());
    }
  }, [createPostModalVisible, setPosts]);
  console.log(sortedPosts);

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
        <button className="btn-create-post" onClick={() => setCreatePostModalVisible(!createPostModalVisible)}>Create a post &#20;→</button>
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