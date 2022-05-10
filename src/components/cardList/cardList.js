import React from "react";
import "./cardList.css";
import Card from "../card/card";

const CardList = (props) => {
  return (
    <div className="cardList">
      {props.monsters?.length
        ? props.monsters.map((monster) => (
            <Card id={monster.id} monster={monster}></Card>
          ))
        : null}
    </div>
  );
};

export default CardList;
