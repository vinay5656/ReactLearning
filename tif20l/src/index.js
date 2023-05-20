// var React = require("react");

// var ReactDOM = require("react-dom");
import React from "react";
import ReactDOM from "react-dom";
import List from "../public/List";
// import pi,{DoublePI,TriplePi} from "./math";
import * as p from "./math";

import { add, substraction, muliplecation, divide } from "./Calculator";

ReactDOM.render(<h1>Hello Vinay</h1>, document.getElementById("root"));

// TO render more the one tags at same time on HTML
//  We have to use a div as container
ReactDOM.render(
  <div>
    <h1>Hello Vinay</h1>
    <p>This is the description</p>
  </div>,
  document.getElementById("root")
);
// js inside of HTML inside of js
var num = 100;
ReactDOM.render(
  <div>
    {" "}
    <p>I have socred {num}% in c++</p>
  </div>,
  document.getElementById("skill")
);

// How to use string literals
const fName = "Vinay";
const lName = "Chouhan";

ReactDOM.render(
  <div>Hi, {`${fName + " " + lName}`}</div>,
  document.getElementById("root")
);

// Excercise
let date = new Date();
let year = date.getFullYear();
ReactDOM.render(<p>Created by {fName}</p>, document.getElementById("name"));
ReactDOM.render(
  <p>Copyright @ {year}</p>,
  document.getElementById("copyright")
);

// JSX Attributes and Styling React Element
// --> in jsx html rendered down to js
// --> in js to get access on classes we have property called className
//--> In JSX attribute are written in camelcase but in normal HTML not
ReactDOM.render(
  <div>
    <p>My project name is </p>
    <h4 className="project" contentEditable="true" spellCheck="true">
      smart survillence system
    </h4>
  </div>,
  document.getElementById("howToAccessClass")
);

// --> Adding className property to each image element
const linkToImages = "https://picsum.photos/id/1/200/300";
ReactDOM.render(
  <div>
    <h1>Images of fruits</h1>
    <div>
      <img
        className="size"
        src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
        alt="furits"
      />
      <img
        className="size"
        src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
        alt="furits"
      />
      <img
        className="size"
        src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
        alt="furits"
      />
      <h3> PICSUM Images </h3>
      <img src={linkToImages + "?grayscale"} alt="furits" />
    </div>
  </div>,
  document.getElementById("list")
);

// Inline styling in JSX (for React Element)
//-->why inline css in jsx --> for real time change or our style can change on the go
var value = {
  color: "magenta",
  fontSize: "20px",
  border: "1px solid red"
};
ReactDOM.render(
  <h4 style={value}>You are learning inline styling in JSX</h4>,
  document.getElementById("inlineStyle")
);

// React Style Prectice
var timing;
var today = new Date();
var time = today.getHours();
console.log(time);
var custumStyle = {
  color: "black"
};
if (time >= 0 && time < 12) {
  timing = "morning";
  custumStyle = {
    color: "red"
  };
} else if (time >= 12 && time <= 18) {
  timing = "afternoon";
  custumStyle = {
    color: "green"
  };
} else {
  timing = "evening";
  custumStyle = {
    color: "blue"
  };
}

ReactDOM.render(
  <h1 className="heading" style={custumStyle}>
    Good {timing}
  </h1>,
  document.getElementById("reactStylePreactice")
);

function Habits() {
  return <h1>These are some of my habits</h1>;
}
ReactDOM.render(
  <div>
    <Habits></Habits>
    <List />
  </div>,
  document.getElementById("rComponent")
);
// how to import single default export (an file only contain on single export);
// -->  import pi from "./math"; // for default export

// how to import multiple export
// --> import pi,{DoublePI,TriplePi} from "./math"; // for multiple import
// how to use a wildcard to import all module
// current import demostrate the import/export
ReactDOM.render(
  <div>
    {/* <p>{pi}</p>
    <p>{DoublePI()}</p>
    <p>{TriplePi()}</p> */}
    <p>{p.default}</p>
    <p>{p.DoublePI()}</p>
    <p>{p.TriplePi()}</p>
  </div>,
  document.getElementById("pi")
);

// import / export practice
ReactDOM.render(
  <div>
    <p> Addition : {add(45, 58)}</p>
    <p> Substraction : {substraction(100, 25)}</p>
    <p> Muliplecation : {muliplecation(25, 4)}</p>
    <p> Divide : {divide(200, 5)}</p>
  </div>,
  document.getElementById("cal")
);
