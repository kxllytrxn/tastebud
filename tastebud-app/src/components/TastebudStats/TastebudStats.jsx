import React from "react";
import './TastebudStats.css'


const TastebudStats = ({ meals = 8, streak = 5, likes = 130, heatmapData }) => {
    const weeks = heatmapData || [
      [0, 0, 0, 0, 0, 1, 0],
      [1, 1, 0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1]
    ];
  
    return (
      <div className="stats-card">
        <div className="stats-left">
          <h3>My TasteBud Stats</h3>
          <ul>
            <li>
              <span className="icon">🍽️</span>
              <strong>{meals}</strong> <em>meals cooked this week</em>
            </li>
            <li>
              <span className="icon">🔥</span>
              <strong>{streak}</strong> <em>week streak</em>
            </li>
            <li>
              <span className="icon">👍</span>
              <strong>{likes}</strong> <em>total likes</em>
            </li>
          </ul>
        </div>
        <div className="stats-right">
            <div className="day-labels">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                <span key={i}>{day}</span>
                ))}
            </div>
            <div className="heatmap">
                {Array(7).fill(0).map((_, colIndex) => (
                <div className="day-column" key={colIndex}>
                    {weeks.map((week, rowIndex) => (
                    <span
                        key={rowIndex}
                        className={`dot ${weeks[rowIndex][colIndex] === 1 ? "filled" : ""}`}
                    />
                    ))}
                </div>
                ))}
            </div>
        </div>
      </div>
    );
  };

export default TastebudStats;