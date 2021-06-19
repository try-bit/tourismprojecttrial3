import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

import { ReactComponent as Facebook } from "./img/facebook.svg";
import { ReactComponent as Twitter } from "./img/twitter.svg";
import { ReactComponent as Linkedin } from "./img/linkedin.svg";
import { ReactComponent as Instagram } from "./img/instagram.svg";
import imgCard5 from "./AgraImage5.jpg"
class Hotelselection extends Component {
  render() {
    return (
      <div className="subComponent-lg" id="footerBody">
        <Container>
          <header className="headerTitle text-center">
           
          </header>
          <footer className="svg-group text-center">
            <Row>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                <li><a href="#"><img src={imgCard5}/></a></li>
                </div>
              </Col>
              <Col md="3" xs="6">
              <div className="svg-card-3">
                <li><a href="#"><img src={imgCard5}/></a></li>
                </div>
              </Col>
              <Col md="3" xs="6">
              <div className="svg-card-3">
                <li><a href="#"><img src={imgCard5}/></a></li>
                </div>
              </Col>
              <Col md="3" xs="6">
              <div className="svg-card-3">
                <li><a href="#"><img src={imgCard5}/></a></li>
                </div>
              </Col>
            </Row>
            <hr />
            <br />
            <p>created by |P Division Group 1 </p>
          </footer>
        </Container>
      </div>
    );
  }
}

export default Hotelselection;