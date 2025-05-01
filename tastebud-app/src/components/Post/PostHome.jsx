import React, { useState, useEffect, useRef } from 'react';
import "./PostHome.css";
import IconButton from '@/components/Button/IconButton';
import RecipeInstruction from "@/components/RecipeInstruction/RecipeInstruction";
import Comment from "@/components/Comment/Comment";
import { DeleteModal } from '@/components/Modal/DeleteModal';
import { ShareModal } from '@/components/Modal/ShareModal';
import { getAllPosts, setAllPosts, getLoggedInUser } from "@/services/localStorage";

// example of an import for utils to getPosts
// import { getPosts, deletePost, editPost } from '@/utils/PostUtils'; 

// here postId is a single argument, but we can add more!

const PostHome = ({
  id,
  user = { 
    name: "John Doe", 
    avatar: "https://images.squarespace-cdn.com/content/v1/598a797af5e23155afc4d592/1597998089824-UHZER996H8NB5EYYDFIW/AVI.JPG?format=2500w" },
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

  const [post, setPost] = useState(() => {
    const allPosts = getAllPosts();
    return allPosts.find(p => p.id === id) || initialPost;
  });

  useEffect(() => {
    const allPosts = getAllPosts();
    const updatedPosts = allPosts.map(p =>
      p.id === post.id ? post : p
    );
    setAllPosts(updatedPosts);
  }, [post, id]);


  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  // const [liked, setLiked] = useState(false);
  // const [likes, setLikes] = useState(initialLikes);

  // action when liked button is clicked
  const toggleLike = () => {
    const newLiked = !post.liked;
    const newLikes = newLiked ? post.likes + 1 : post.likes - 1;
  
    setPost(prev => ({
      ...prev,
      liked: newLiked,
      likes: newLikes,
    }));
  };
  const fakeUser = 'https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/11688145/pokemon_piplup.png?quality=90&strip=all&crop=0,3.4685863874346,100,93.062827225131'
  const [newComment, setNewComment] = useState("");
  const commentInputRef = useRef(null);
    
  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newEntry = {
      name: currUser.display_name,
      text: newComment,
      avatar: currUser.profile_photo_url,
    };

    const updatedComments = [...post.comments, newEntry];

    setPost(prev => ({
      ...prev,
      comments: updatedComments,
    }));

    setNewComment("");
  };

  const handleDeleteClick = () => {
    setShowMenu(false);
    setShowDeleteModal(true);
  };

  const handleShareClick = () => {
    setShowMenu(false);
    setShowShareModal(true);
  };

  const handleConfirmDelete = () => {
    console.log('Post deleted');
    // Here you would call your delete function, e.g.:
    // deletePost(postId);
    setShowDeleteModal(false);
  };

  return (
    <div className="card">
      {/* Header */}
      <div className="post-header-bar"></div>
      <div className="post-header">
        <div className="avatar">
          <img src={user.avatar ? user.avatar : fakeUser} alt={`${user.name}'s avatar`} />
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
              <button onClick={handleDeleteClick}>Delete</button>
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
    </div>
  );
};

export default PostHome;

