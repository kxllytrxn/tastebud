import React, { useState, useEffect } from 'react';
import "./Post.css";
// example of an import for utils to getPosts
// import { getPosts, deletePost, editPost } from '@/utils/PostUtils'; 

// here postId is a single argument, but we can add more!
const Post = ({ postId }) => {
  const [post, setPost] = useState(null);


  return (
    <div className="post-card"> 
        <h2>testing hello</h2>
      { /* insert some ,more html stuff to format post,  */}
    </div>
  );
};

export default Post;