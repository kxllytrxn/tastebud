import React, { useState } from 'react';
import './RecipeInstruction.css';

const RecipeInstruction = ({ instructions }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedInstructions = showAll ? instructions : instructions.slice(0, 3);
  if (!instructions || instructions.length === 0) return null;

  return (
    <div className="instruction-box">
        <h4> Recipe:</h4>
      <ol className="instruction-list">
        {displayedInstructions.map((step, idx) => (
          <li key={idx} className="instruction-step">{step}</li>
        ))}
      </ol>
      {instructions.length > 3 && (
        <span className="toggle-instructions" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'See less' : 'See more...'}
        </span>
      )}
    </div>
  );
};

export default RecipeInstruction;

