import React from "react";
import './Card.css'
function Card(props) {
  return (
    <div>
      <div class="row">
        <div class="column">
           <img src={props.image} alt=""/>
           <h3>{props.restaurant}</h3>
           <p>{props.cuisines}<span class="fa fa-star checked">{props.rating}</span></p>
        </div>
    </div>
    </div>
  );
}

export default Card;