import React, { useState, useEffect, useRef } from 'react';
import "./PostProfile.css";
import IconButton from '@/components/Button/IconButton';
import RecipeInstruction from "@/components/RecipeInstruction/RecipeInstruction";
import Comment from "@/components/Comment/Comment";
import { DeleteModal } from '@/components/Modal/DeleteModal';
import { ShareModal } from '@/components/Modal/ShareModal';
import { getLoggedInUser, deletePostById } from '../../services/localStorage';
import { CreatePost } from '@/components/Modal/CreatePost';

// example of an import for utils to getPosts
// import { getPosts, deletePost, editPost } from '@/utils/PostUtils'; 

// here postId is a single argument, but we can add more!

const PostProfile = ({
  id,
  user = { name: "John Doe", avatar: "https://images.squarespace-cdn.com/content/v1/598a797af5e23155afc4d592/1597998089824-UHZER996H8NB5EYYDFIW/AVI.JPG?format=2500w" },
  title = "",
  timestamp = new Date(),
  caption = "",
  image = null,
  description = "",
  instructions = [],
  comments = null,
  liked = false,
  likes = 0,
}) => {

  const initialPost = {
    id,
    user,
    title,
    timestamp,
    caption,
    image,
    description,
    instructions,
    comments: comments || [],
    liked: liked ?? false,
    likes: likes,
  };

  const currUser = getLoggedInUser();
  const [isCurrentUserPost, setIsCurrentUserPost] = useState(false);

  // populate initial post
  const [post, setPost] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(`${id}`));
      return saved && saved.user ? saved : initialPost;
    } catch (e) {
      return initialPost;
    }
  });

  // Check if the post belongs to the current user
  useEffect(() => {
    if (currUser && post.user) {
      // Check if user_id property exists and matches
      if (post.user.user_id && currUser.id) {
        setIsCurrentUserPost(post.user.user_id === currUser.id);
      } else {
        // Fallback to name comparison if IDs aren't available
        setIsCurrentUserPost(post.user.name === currUser.display_name);
      }
    }
  }, [currUser, post.user]);

  // updates when something changes
  useEffect(() => {
    localStorage.setItem(`${id}`, JSON.stringify(post));
  }, [post, id]);

  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  console.log(post.image);

  // action when liked button is clicked
  const toggleLike = () => {
    const newLiked = !post.liked;
    const newLikes = newLiked ? post.likes + 1 : post.likes - 1;

    setPost(prev => ({
      ...prev,
      likes: newLikes,
      liked: newLiked,
    }));
  };

  const [newComment, setNewComment] = useState("");
  const commentInputRef = useRef(null);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const newEntry = { name: currUser.display_name, text: newComment, avatar: currUser.profile_photo_url };
    const updatedComments = [...post.comments, newEntry];


    setPost(prev => ({
      ...prev,
      comments: updatedComments,
    }));
    setNewComment("");
  };
  

  const handleEditClick = () => {
    setShowMenu(false);
    setShowEditModal(true);
  };

  const handleDeleteClick = () => {
    setShowMenu(false);
    setShowDeleteModal(true);
  };

  const handleShareClick = () => {
    setShowMenu(false);
    setShowShareModal(true);
  };


  const handleEditClose = () => {
    setShowEditModal(false);
    // Trigger refresh if callback is provided
    if (onPostUpdated) {
      onPostUpdated();
    }
  };


  const handleConfirmDelete = () => {
    deletePostById(id);
    console.log('Post deleted', id);
    setShowDeleteModal(false);
    
    // Refresh the page to reflect the changes
    if (window) {
      window.location.reload();
    }
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

        {/* Options Menu - Only show for the current user's posts */}
        <div className="post-menu-container">
          <button className="menu-button" onClick={() => setShowMenu(!showMenu)}>
            ⋯
          </button>
          {showMenu && (
            <div className="menu-dropdown">
              {isCurrentUserPost && <button onClick={handleEditClick}>Edit</button>}
              {isCurrentUserPost && <button onClick={handleDeleteClick}>Delete</button>}
              <button onClick={handleShareClick}>Share</button>
            </div>
          )}
        </div>
      </div>

      {/* Title */}
      <h2 className="post-card-title">{title}</h2>

      {/* Caption */}
      {caption && <p className="post-caption">{caption}</p>}

      {/* Image */}
       {post.image && (
        <img
          src={post.image}
          alt="Post"
          className="post-card-img"
        />
      )}


      {/* Recipe Preview */}
      <RecipeInstruction instructions={instructions} />

      {/* Actions */}
      <div className="card-footer icon-buttons-container">
        <IconButton icon={post.liked ? "❤️" : "🤍"} onClick={toggleLike} />
        <IconButton
          icon="💬"
          onClick={() => commentInputRef.current?.focus()}
        />
        <IconButton icon="🔗" onClick={handleShareClick} />
      </div>

      {/* Like and Comment Count */}
      <div className="post-stats">
        <span>❤️ {post.likes} likes</span>
        <span>💬 {post.comments.length} comments</span>
      </div>

      {/* Comment */}
      {post.comments.map((c, i) => (
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

      {/* Delete Modal */}
      <DeleteModal
        visible={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
      />

      {/* Share Modal */}
      <ShareModal
        visible={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
      <CreatePost
              visible={showEditModal}
              onClose={handleEditClose}
              postToEdit={post}
        />
    </div>
  );
};

export default PostProfile;