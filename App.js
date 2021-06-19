import logo from './logo.svg';
import './App.css';
import Hero from './Hero.js'
import Footer from './Footer.js'
import Carousel from './Carousel.js'
import Card from './card-ui'
import { Button } from "reactstrap";

import Navbar from './Navbar.js';

import PersonalInfo from './Form.js'
import { BrowserRouter as Router,Switch,Link} from "react-router-dom";
import Agra from "./SlidingImages/Agra/Agra1.js";
import Goa from "./SlidingImages/Goa/Goa1.js";
import Hyderabad from "./SlidingImages/Hyderabad/Hyderabad1.js";
import Jaipur from "./SlidingImages/Jaipur/Jaipur1.js";
import Kochi from "./SlidingImages/Kochi/Kochi1.js";
import Ladakh from "./SlidingImages/Ladakh/Ladakh1.js";
import NewDelhi from "./SlidingImages/NewDelhi/NewDelhi1.js";
import Shimla from "./SlidingImages/Shimla/Shimla1.js";
import Route from 'react-router-dom/Route';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Services from './Services.js';
import Home from './Home.js';

function App() {
  return (
  
    <div className="App">
     <Navbar/>
   
      <Router>
   
   
     
        <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/card" component={Card}/>
        <Route exact path="/hero" component={Hero}/>
        <Route exact path="/form" component={PersonalInfo}/>
        <Route exact path="/footer" component={Footer}/>
        <Route exact path="/navbar" component={Navbar}/>
        <Route exact path="/agra" component={Agra}/>
        <Route exact path="/goa" component={Goa}/>
        <Route exact path="/hyderabad" component={Hyderabad}/>
        <Route exact path="/jaipur" component={Jaipur}/>
        <Route exact path="/kochi" component={Kochi}/>
        <Route exact path="/ladakh" component={Ladakh}/>
        <Route exact path="/newDelhi" component={NewDelhi}/>
        <Route exact path="/shimla" component={Shimla}/>

        </Switch>
        
     
      

    
    
    
    
    </Router>
     
  
     
      

    
    
    
    </div>
  
     
   
    
    
    
    
  );
}

export default App;
