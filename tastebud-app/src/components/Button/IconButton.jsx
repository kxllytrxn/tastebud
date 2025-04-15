import React from "react";
import "./Button.css";

const IconButton = ({ icon, onClick, className = "" }) => {
    const isImageIcon = typeof icon === 'string' && (icon.startsWith('http') || icon.startsWith('/'));

    return (
        <button
            className={`icon-button ${className}`}
            onClick={onClick}
            aria-label={typeof icon === 'string' ? icon : 'button'}
        >
            {isImageIcon ? (
                <img src={icon} alt="" className="icon-image" />
            ) : (
                <span className="icon-text">{icon}</span>
            )}
        </button>
    );
};

export default IconButton;