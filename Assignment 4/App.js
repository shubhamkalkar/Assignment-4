import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h2",{},"welcome to React");
const heading2 = React.createElement("p",{},"welcome shubham to React");
const container =  React.createElement("div",{},[heading,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
