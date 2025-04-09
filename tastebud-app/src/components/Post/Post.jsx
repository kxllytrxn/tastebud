import React, { useState, useEffect } from 'react';
import { getPosts, deletePost, editPost } from '../../utils/PostUtils'; // Importing utils

const Post = ({ postId }) => {
  // State for the current post
  const [post, setPost] = useState(null);

  // Fetch the post details from localStorage when the component mounts
  useEffect(() => {
    const posts = getPosts();
    const postData = posts.find((post) => post.id === postId);
    setPost(postData);
  }, [postId]);

  // Handle editing the post
  const handleEdit = () => {
    const updatedPost = { title: 'Updated Title', content: 'Updated Content' }; // Example of updated content
    editPost(postId, updatedPost);
    setPost({ ...post, ...updatedPost });
  };

  // Handle deleting the post
  const handleDelete = () => {
    deletePost(postId);
    setPost(null); // Optionally clear the post from the state after deletion
  };

  if (!post) {
    return <div> </div>;
  }

  return (
    <div className="post-card">
      <div className="post-header">
        <h2>{post.title}</h2>
        <p className="post-meta">{post.author} • {post.date}</p>
      </div>
      <div className="post-body">
        <p>{post.content}</p>
      </div>
      <div className="post-actions">
        <button onClick={handleEdit} className="edit-button">Edit</button>
        <button onClick={handleDelete} className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default Post;