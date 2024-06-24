import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({tileList}) => {
  if (!tileList) {
    return null;
  }
  return (
    
    <div> 
     { tileList.map((item, index) => {
       const {name, ...description} = item;
       return <Tile name={item.name} key={index} description = {{...description}}/>;
  })};
      
    </div>
  );
};
