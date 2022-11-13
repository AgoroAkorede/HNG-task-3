import React from "react";
import "./Card.scss";
import Star from "../../assets/Star 2.jpg";
function Card({ name, image }) {
  return (
    <div className="card">
      <img src={image} />
      <ul>
        <li>{name}</li>
        <li>1MBT per night</li>
        <li>2345km away</li>
        <li>available for 2 weeks stay</li>
        <li>
          <div className="images">
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Card;
