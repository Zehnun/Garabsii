import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import books from "../../Assets/book.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Col>

          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Garabsii
            </h1>
            <p className="home-about-body">
            To create textbooks and online resources for elementary and primary students <br></br>
            <br></br>
            Increase literacy and provide accessible education to kids in Somalia<br></br>
            <br></br>
            Create a unified learning process throughout Somalia <br></br>
            <br></br>
            Certification/proficiency award for students that pass exams so that that they are internationally recognized

            </p>
          </Col>

            

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={books}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
          </Col>
          </Col>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
