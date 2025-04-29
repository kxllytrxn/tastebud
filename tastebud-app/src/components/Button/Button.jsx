import React from "react";
import classNames from "classnames";
import "./Button.css";

const Button = ({
    buttonText,
    onClick,
    disabled = false,
    variant = "primary", // primary or secondary (outlined)
    color = "orange", // orange, green, yellow
  }) => {
    const buttonClass = classNames(
      "custom-button",
      variant,
      color,
      { disabled }
    );
  
    return (
      <button onClick={onClick} disabled={disabled} className={buttonClass}>
        {buttonText}
      </button>
    );
  };
  
  export default Button;