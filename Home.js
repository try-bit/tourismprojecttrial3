import React from "react";
import Hero from './Hero.js'
import Footer from './Footer.js'
import Carousel from './Carousel.js'
import Card from './card-ui'
import Services from './Services.js';

const Home = () => (
  <div>
      <Hero/>
      <Carousel/>
      <Card/>
      <Services/>
      <Footer/>
    
  </div>
);

export default Home;