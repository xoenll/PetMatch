import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Chowder",
      animal: "Dog",
      breed: "Chow-Chow",
    }),
    React.createElement(Pet, {
      name: "Sheldon",
      animal: "Cat",
      breed: "Siamese",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
