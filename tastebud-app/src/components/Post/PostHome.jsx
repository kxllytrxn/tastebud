import React, { useState, useEffect, useRef } from 'react';
import "./PostHome.css";
import IconButton from '@/components/Button/IconButton';
import RecipeInstruction from "@/components/RecipeInstruction/RecipeInstruction";
import Comment from "@/components/Comment/Comment";

// example of an import for utils to getPosts
// import { getPosts, deletePost, editPost } from '@/utils/PostUtils'; 

// here postId is a single argument, but we can add more!
const Post = ({
  user = { name: "John Doe", avatar: "https://images.squarespace-cdn.com/content/v1/598a797af5e23155afc4d592/1597998089824-UHZER996H8NB5EYYDFIW/AVI.JPG?format=2500w" },
  title = "Salmon and Rice",
  timestamp = new Date(),
  caption = "",
  image = null,
  description = "",
  instructions = [],
  comments = null,
  initialLikes = 0,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const toggleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const [newComment, setNewComment] = useState("");
  const [allComments, setAllComments] = useState(comments || []);
  const commentInputRef = useRef(null);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const newEntry = { name: user.name, text: newComment, avatar: user.avatar };
    setAllComments([...allComments, newEntry]);
    setNewComment("");
  };

  return (
    <div className="card">
      {/* Header */}
      <div className="post-header-bar"></div>
      <div className="post-header">
        <div className="avatar">
          <img src={user.avatar} alt={`${user.name}'s avatar`} />
        </div>
        <div className="post-header-info">
          <div className="username">{user.name}</div>
          <div className="timestamp">{timestamp}</div>
        </div>

        {/* Options Menu */}
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

      {/* Caption */}
      {caption && <p className="post-caption">{caption}</p>}

      {/* Image */}
      {image && (
        <img
          src={image}
          alt="Post"
          className="post-card-img"
        />
      )}

      {/* Recipe Preview */}
      <RecipeInstruction instructions={instructions} />

      {/* Actions */}
      <div className="card-footer icon-buttons-container">
        <IconButton icon={liked ? "❤️" : "🤍"} onClick={toggleLike} />
        <IconButton
          icon="💬"
          onClick={() => commentInputRef.current?.focus()}
        />
        <IconButton icon="🔗" onClick={() => console.log('Share clicked')} />
      </div>

      {/* Like and Comment Count */}
      <div className="post-stats">
        <span>❤️ {likes} likes</span>
        <span>💬 {allComments.length} comments</span>
      </div>

      {/* Comment */}
      {allComments.map((c, i) => (
        <Comment key={i} name={c.name} text={c.text} avatar={c.avatar} />
      ))}

      {/* Add Comment */}
      <input
        type="text"
        placeholder="Add a comment..."
        className="comment-input"
        ref={commentInputRef}
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAddComment();
        }}
      />

    </div>
  );
};

export default Post;

