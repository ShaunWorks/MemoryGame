import React from "react";
import "./MemoryCard.css";

export default function MemoryCard(props) {
  const { image, name} = props.body
  return(
      <img src={image} alt={name} onClick={() => props.handleClick(props.body.name)} className="mem-card img-thumbnail m-1"/>
  );
 
}
