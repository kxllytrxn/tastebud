import React from "react";
import './Comment.css';

const Comment = ({ name, text, avatar }) => {
    return (
        <div className="comment">
            <div className="comment-avatar">
                <img src={avatar} alt={`${name}'s avatar`} />
            </div>
            <div className="comment-content">
                <div className="comment-author">{name}</div>
                <div className="comment-text">{text}</div>
            </div>
        </div>
    );
};

export default Comment;
