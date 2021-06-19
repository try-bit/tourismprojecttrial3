import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import img from "./Jaipur/Hawa_Mahal_Final_1.jpg"
import img2 from "./Agra/AgraImage6.jpg"
import img4 from "./SlidingImages/Goa/CalanguteBeach.jpg"
import img5 from "./SlidingImages/Kochi/SantaCruzBasilica.png"
import img6 from "./SlidingImages/NewDelhi/RedFort.png"
import img7 from "./SlidingImages/Shimla/GreenValley.png";
import img8 from "./SlidingImages/Hyderabad/TheCharminar.png"
import img3 from "./SlidingImages/Ladakh/PangongTsoLake.png"

function Card(props) {
  return (
  
    <div>
      <h1 style={{ color: 'white' }}>.</h1>
    <ul>
      <li className="card-container">
      <img className="card-image" src={props.src} alt="" />
				
        <div className="card-container--content">
          <h3 className="card-header--title">{props.heading}</h3>
         
         
          <a href={props.link} class="btn btn-outline-warning">
            Explore
          </a>
        </div>
       
      </li>
    </ul>
    </div>

  );
}

export default function CardList(props) {
  return (
    <div>
    <div className="card-masonry">
      <Card
        heading="Jaipur"
        
        src={img}
        link="/jaipur"
      />
      <Card
        heading="Agra"
        src={img2}
        link="/agra"
      />
       <Card
        heading="Ladakh"
        
        src={img3}
        link="/ladakh"
      />
      <Card
        heading="Goa"
        src={img4}
        link="/goa"
      />
    </div>
     <div className="card-masonry">
     <Card
       heading="Kochi"
       
       src={img5}
       link="/kochi"
     />
     <Card
       heading="NewDelhi"
       src={img6}
       link="/newDelhi"
     />
      <Card
       heading="Shimla"
       
       src={img7}
       link="/shimla"
     />
     <Card
       heading="Hyderabad"
       src={img8}
       link="/hyderabad"
     />
   </div>
   </div>
  );
}