import Ash from './index.js';


const element = Ash.createElement(
  "div", 
  null, 
  Ash.createElement(
    "h1", {
      className: "primary"
    }, 
    "QndReact is Quick and dirty react"
  ), 
  Ash.createElement(
    "p", 
    null, 
    "It is about building your own React in 90 lines of JavsScript"
  )
);


const container = document.getElementById("root");
Ash.render(element, container);