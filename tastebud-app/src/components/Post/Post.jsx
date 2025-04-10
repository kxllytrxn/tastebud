import React, { useState, useEffect } from 'react';
import "./Post.css";
// example of an import for utils to getPosts
// import { getPosts, deletePost, editPost } from '@/utils/PostUtils'; 

// here postId is a single argument, but we can add more!
const Post = ({
  user = { name: "John Doe", avatar: "" },
  title = "Salmon and Rice",
  timestamp = "March 8, 2025",
  image = null,
  description = "So delicious!",
  comment = null,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="card">
      {/* Header */}
      <div className="post-header">
        <div className="avatar" />
        <div className="post-header-info">
          <div className="username">{user.name}</div>
          <div className="timestamp">{timestamp}</div>
        </div>

        {/* ⋯ Options Menu */}
        <div className="post-menu-container">
          <button className="menu-button" onClick={() => setShowMenu(!showMenu)}>
            ⋯
          </button>
          {showMenu && (
            <div className="menu-dropdown">
              <button>Edit</button>
              <button>Delete</button>
              <button>Share</button>
            </div>
          )}
        </div>
      </div>

      {/* Title */}
      <h2 className="post-card-title">{title}</h2>

      {/* Image */}
      {image && (
        <img
          src={image}
          alt="Post"
          className="post-card-img"
        />
      )}

      {/* Description */}
      {description && <p className="post-description">{description}</p>}

      {/* Actions */}
      <div className="card-footer">
        <button>🔗</button>
        <button>🤍</button>
        <button>💬</button>
      </div>

      {/* Comment preview */}
      {comment && (
        <div className="comment">
          <div className="avatar small" />
          <div className="comment-content">
            <div className="comment-author">{comment.name}</div>
            <div className="comment-text">{comment.text}</div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Post;

