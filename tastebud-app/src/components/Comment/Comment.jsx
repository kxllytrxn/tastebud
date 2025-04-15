import React from "react";
import "./Comment.css";

const Comment = ({ name, text }) => {
    return (
        <div className="comment">
            <div className="avatar small" />
            <div className="comment-content">
                <div className="comment-author">{name}</div>
                <div className="comment-text">{text}</div>
            </div>
        </div>
    );
};

export default Comment;
