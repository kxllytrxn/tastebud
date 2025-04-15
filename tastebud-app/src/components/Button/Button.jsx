import React from "react";
import "./Button.css";

const Button = ({ buttonText, onClick, disabled = false }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="custom-button"
        >
            {buttonText}
        </button>
    );
};

export default Button;