import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./App.css";
import { ReactComponent as Facebook } from "./img/facebook.svg";
import { ReactComponent as Twitter } from "./img/twitter.svg";
import { ReactComponent as Linkedin } from "./img/linkedin.svg";
import { ReactComponent as Instagram } from "./img/instagram.svg";

class Footer extends Component {
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
                  <a href="#">
                    <Facebook width="50" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="#">
                    <Twitter width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="#">
                    <Linkedin width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="#">
                    <Instagram width="55" height="55" strokeWidth="1" />
                  </a>
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

export default Footer;