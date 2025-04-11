import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ title, description, imageUrl }) => {
    return (
        <div className="recipe-card">
            <h3 className="recipe-title">{title}</h3>
            <p className="recipe-description">{description}</p>
            <div className="recipe-image">
            {imageUrl ? (
                <img src={imageUrl} alt={title} />
            ) : (
                <div className="image-placeholder">Image Placeholder</div>
            )}
            </div>
        </div>
    );
};

export default RecipeCard;