import React from "react";
import "./RecipeCard.css";
import RecipeInstruction from "@/components/RecipeInstruction/RecipeInstruction";

const RecipeCard = ({ title, description, imageUrl, instructions }) => {
    return (
        <div className="recipe-card">
            <div className="recipe-image">
                {imageUrl ? (
                    <img className="" src={imageUrl} alt={title} />
                ) : ( <></>
                )}        </div>
            <div className="recipe-content">
                <h3 className="recipe-title">{title}</h3>
                <p className="recipe-description">{description}</p>

                {instructions && instructions.length > 0 && (
                <RecipeInstruction instructions={instructions} />
                )}
            </div>
        </div>
    );
};

export default RecipeCard;