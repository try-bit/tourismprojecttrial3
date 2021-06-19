import React from "react";
import { Button } from "reactstrap";
import "./App.css";
import { Redirect } from "react-router-dom";

import {useHistory} from 'react-router-dom';


function Hero () {
  let history=useHistory();
  const redirect = () => {
    history.push('/card')
  }
  return(
  <div>
    
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          <h1>BACK TO THE ROAD</h1>
          <h3 className="multicolortext">INCREDIBLE !NDIA</h3>
         
        </div>
      </section>
    </main>
  </div>
  );
}

export default Hero;