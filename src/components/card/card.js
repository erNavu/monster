import React from "react";
import "./card.css";

const Card = (props) => {
  const { name, website } = props.monster;
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h1>{name}</h1>
      <h4>{website}</h4>
    </div>
  );
};

export default Card;
