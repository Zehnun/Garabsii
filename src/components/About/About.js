import React from "react";
import Particle  from "../Particle";
import { Container, Row, Col } from "react-bootstrap";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle/>
      <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Garabsii</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                
              </div>
            </Col>
      
    </Container>
  );
}



export default About;
