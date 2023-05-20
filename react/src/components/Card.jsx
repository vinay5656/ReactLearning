import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2>{props.id}</h2>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>

      {/* <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div> */}

      <Details Dtel={props.tel} Demail={props.email} />
    </div>
  );
}

export default Card;
