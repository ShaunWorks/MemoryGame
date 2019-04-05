import React from "react";
import "./MemoryCard.css";

export default function MemoryCard(props) {
  const { image, name} = props.body
  return(
    <div>
      <img src={image} alt={name} onClick={() => props.check(props.body.name)} className="mem-card img-thumbnail"/>
    </div>
  );
  
}
