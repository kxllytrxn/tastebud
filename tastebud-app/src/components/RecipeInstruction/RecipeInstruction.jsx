import React, { useState } from "react";
import './RecipeInstruction.css';

const RecipeInstruction = ({ instructions }) => {
    const [expandedRecipe, setExpandedRecipe] = useState(false);
    const display_limit = 2;

    const visibleInstructions = expandedRecipe ? instructions : instructions.slice(0, display_limit);

    if (!instructions || instructions.length === 0) return null;
    return (
       <div className="recipe-instructions-container">
         <div className="recipe-instructions">
            {/* <hr className="break-line" /> */}

            <h4>Instructions</h4>
            <ol className="instruction-list">
                {visibleInstructions.map((step, idx) => (
                <li key={idx}>{step}</li>
                ))}
            </ol>
            {instructions.length > display_limit && (

                // later replace this with one our buttons
                <button className="see-more-btn" onClick={() => setExpandedRecipe(!expandedRecipe)}>
                {expandedRecipe ? 'See Less' : 'See More'}
                </button>
            )}
        </div>
       </div>
    );
}

export default RecipeInstruction;