import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";


import Hotelselection from "./SlidingImages/Agra/Hotelselection";
import "bootstrap/dist/css/bootstrap.css";
// Add custom css import below this line
import "./index.css";
ReactDOM.render(
  
        <Hotelselection />
      
      , 
      document.getElementById("root"));
registerServiceWorker();