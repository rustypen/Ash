import Ash from './index.js';


const element = (
  Ash.createElement(
    "div",
    {
      style:"border: 10px solid black"
    }
  )
  // Ash.createElement('div', 
  // {

  // }
  // , "Hello")
);
const container = document.getElementById("root");
Ash.render(element, container);