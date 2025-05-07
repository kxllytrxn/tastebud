import React, { useState } from 'react';
import Button from "@/components/Button/Button";
import './IngredientPill.css';

const IngredientPill = ({ ingredients }) => {
    const [showAll, setShowAll] = useState(false);
    const previewCount = 4;
  
    const displayedIngredients = showAll ? ingredients : ingredients.slice(0, previewCount);
    const moreCount = ingredients.length - previewCount;
  
    return (
      <div className="ingredient-tags-wrapper">
        <div className="ingredient-tags">
          {displayedIngredients.map((item, idx) => (
            <span key={idx} className="ingredient-pill">{item}</span>
          ))}
          {!showAll && moreCount > 0 && (
            <span className="ingredient-pill muted" onClick={() => setShowAll(true)}>
              +{moreCount} more
            </span>
          )}
        </div>
        {showAll && (
          <span className="toggle-ingredients" onClick={() => setShowAll(false)}>
            See less
          </span>
        )}
      </div>
    );
  };
  

export default IngredientPill;