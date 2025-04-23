import React from "react";
import "./RecipeCard.css";
import "@/main.css"
// import RecipeInstruction from "@/components/RecipeInstruction/RecipeInstruction";

const RecipeCard = ({ title, description, imageUrl, instructions }) => {
    return (
        <div className="recipe-card">
            <div className="recipe-image">
                {imageUrl ? (
                    <img className="" src={imageUrl} alt={title} />
                ) : ( <div className="img-yellow"> </div>
                )}        </div>
            <div className="recipe-content">
                <h3 className="recipe-title">{title}</h3>
                <p className="recipe-description">{description}</p>
            </div>
        </div>
    );
};

export default RecipeCard;