import React from "react";

export const Tile = ({name, description}) => {
  const descriptions = Object.values(description);
  return (
    
    <div className="tile-container">
      <p className="tile.tile-tile">{name}</p>
      
      {descriptions.map((desc, index) => {
        return <p className="tile" key={index}>{desc}</p>
      })}
      
    </div>
  );
};
