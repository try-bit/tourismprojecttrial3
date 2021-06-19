import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import AgraCarousel from "./AgraCarousel";
// import tours from "../components/Package";
import imgCard1 from "./AgraImage1.jpg";
import imgCard2 from "./AgraImage2.jpg";
import imgCard3 from "./AgraImage3.jpg"
import imgCard4 from "./AgraImage4.jpg"
import imgCard5 from "./AgraImage5.jpg"
import imgCard6 from "./AgraImage6.jpg"
const Agra1= () => (
    <div className ="Carousel"> 
  <div className="subComponent" >
    <section className="tour-cover item-center">
        <img src={imgCard5} alt="" />
       </section>
    <Container>
      <section className="tour-info">
        <Row>
          <Col sm="8">
      <AgraCarousel/>
            <div className="tour-desc">
              <p>
               
               
              </p>
              <p >
              Wish to realize a dream vacation? <br/>
       Welcome to the amazing tourism city of the TajMahal - Agra, India. <br/>
       The seat of the great Mughal rulers for ages Agra, India offers its treasure trove for all the tourists from India and abroad. <br/>
       Even though Agra, India is synonymous with the Taj, the city stands in testimony to the great amount of architectural activity of the Mughals. <br/>
       TajMahal is the epitome of love, poem in white marble, one of the Seven Wonders of the World besides being the pride of India. <br/>
       
    

              </p>
            </div>
          </Col>
          <Col sm="4">
            <div className="tour-gallery">
              <a href={imgCard1}>
                <img src={imgCard1} alt="" />
              </a>
              <a href={imgCard2}>
                <img src={imgCard2} alt="" />
              </a>
              <a href={imgCard3}>
                <img src={imgCard3} alt="" />
              </a>
              <a href={imgCard4}>
                <img src={imgCard4} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
    
  </div>
  </div>
);

export default Agra1;
