import React, { useState, useEffect } from 'react';
// import { getPosts, deletePost, editPost } from '../../utils/PostUtils'; 

const Post = ({ postId }) => {
  const [post, setPost] = useState(null);

//   useEffect(() => {
//     const posts = getPosts();
//     const postData = posts.find((post) => post.id === postId);
//     setPost(postData);
//   }, [postId]);

//   const handleEdit = () => {
//     const updatedPost = { title: 'FILLIN', content: 'FILLIN Content' }; 
//     editPost(postId, updatedPost);
//     setPost({ ...post, ...updatedPost });
//   };

//   const handleDelete = () => {
//     deletePost(postId);
//     setPost(null); 
//   };

//   if (!post) {
//     return <div> </div>;
//   }

//   return (
//     <div className="post-card">
//       <div className="post-header">
//         <h2>{post.title}</h2>
//         <p className="post-meta">{post.author} • {post.date}</p>
//       </div>
//       <div className="post-body">
//         <p>{post.content}</p>
//       </div>
//       <div className="post-actions">
//         <button onClick={handleEdit} className="edit-button">Edit</button>
//         <button onClick={handleDelete} className="delete-button">Delete</button>
//       </div>
//     </div>
//   );
};

export default Post;