import React from "react";
import "./Button.css";

const Button = ({ buttonText, onClick }) => {
    return (
        <button>
            {buttonText}
        </button>

    );
};

export default Button;