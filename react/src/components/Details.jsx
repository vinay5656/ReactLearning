import React from "react";

function Details(props) {
  return (
    <div className="bottom">
      <p className="info">{props.Dtel}</p>
      <p className="info">{props.Demail}</p>
    </div>
  );
}
export default Details;
