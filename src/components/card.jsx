import React from "react";
import "../styles/card.css";

const Card = ({ title, iconClass }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className={`icon ${iconClass}`}></div>
    </div>
  );
};

export default Card;
