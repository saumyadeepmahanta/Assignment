import React from "react";

function Star({ isFavorite, onToggle }) {
  return (
    <div className="star-rating" onClick={onToggle}>
      <span className={isFavorite ? "star filled" : "star"}>&#9733;</span>
    </div>
  );
}

export default Star;
