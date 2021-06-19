import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import JaipurCarousel from "./JaipurCarousel";
// import tours from "../components/Package";
import imgCard1 from "./AmberPalace.jpg";
import imgCard2 from "./AmberPalace2.jpg";
import imgCard3 from "./CityPalace.jpg"
import imgCard4 from "./Hawa_Mahal_Final_1.jpg"
import imgCard5 from "./Hawa_Mahal_on_a_stormy_afternoon.jpg"
import imgCard6 from "./Jalmahal.jpg";

const Jaipur1= () => (
  
  <div classNmae="Pagelayout" > 
  <h1>JAIPUR</h1>
  <h1>JAIPUR</h1>
<div className="subComponent" >
  <section className="tour-cover item-center">
      <img src={imgCard1} alt="" />
     </section>
  <Container>
    <section className="tour-info">
      <Row>
        <Col sm="8">
    <JaipurCarousel/>
          
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
            <br/>
            <br/>
          <h6 align="left"> Welcome to the Pink City of India!<br/>
            Jaipur, the capital of the North Indian State of Rajasthan, is named after its founder Maharaja Jai Singh II (1693-1743).<br/>
            The city is surrounded by hills and dotted with forts.
             Houses with pink latticed windows line the streets, and look almost magical at sunset.<br/>
            An extremely well planned city, Jaipur was designed by an engineer and scholar Vidyadhar Bhattacharya, in accordance with ancient Hindu treatise on architecture, the Shilpa Shasta (Vastu).<br/>
            The Old City, also known as the Pink City, is a wonderful place to wander around. 
            The whole city was painted pink by Maharaja Man Singh II when Prince of Wales, later Edward VII, visited Jaipur in 1876. 
            Today, every home within the city is obliged by law to maintain this facade - hence Jaipur's is also called the Pink City.</h6>
           </div>
        </Col>
      </Row>
    </section>
    <br/>
    <div className="Activities"><h1>ACTIVITIES</h1>
<h3 align="left"> Dudhsagar Falls </h3>.
<h6 align="left">The state is also home to Dudhsagar Falls, a spectacular four-tiered waterfall that towers some 310 meters above the earth. It's one of India's tallest waterfalls and a perpetually popular attraction for day trips around Goa and Karnataka. <br/>
To reach the falls, you'll need to make your way to the village of Colem by taxi or train. Depending on which train route you take, you may get a glimpse of Dudhsagar Falls along the way.</h6>
<br/>
<h3 align="left">Tanshikar's Working Spice Farm</h3>
<h6 align="left">Tourists can see what the local spice scene is all about by touring Tanshikar's Working Spice Farm & Ecological Rest House. 
This agritourism attraction grows seven different spices: pepper, vanilla, nutmeg, turmeric, cardamom, and chili, using totally organic farming methods.<br/></h6>
<br/>
</div>
<div className="Hotel"></div>
  </Container>
  
</div>

</div>

);

export default Jaipur1;