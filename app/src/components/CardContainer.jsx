import React from "react";
import MemoryCard from "./MemoryCard";
import './CardContainer.css'

export default function CardContainer(props) {
  return (
    <div className="container">
      {props.cards.map((el, index) => (
        <MemoryCard body={el} key={index} handleClick={props.handleClick} />
      ))}
    </div>
  );
}
