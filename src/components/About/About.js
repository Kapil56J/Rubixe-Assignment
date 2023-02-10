import React from "react";
import "./About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col sm={7}>
            <div className="text">
              <h2>WHO WE ARE </h2>
              <p>
                Rubixe™ is a global technology company specializing in
                disruptive technologies – <br /> Artificial Intelligence (AI),
                Machine Learning, Robotic Process Automation (RPA), Block Chain
                and Internet of Things (IoT).{" "}
              </p>

              <p>
                Rubixe™ mission is to enable bussinesses to leverage the full
                potential of distuptive technologyies and stay competitive in
                the market, turning complex challenges into solution, providing
                a strategic competitive advantages that are more efficient,
                effective and predictable
              </p>
            </div>
          </Col>
          <Col sm={5}>
            <div className="study">
              <img src="assets/Studying-atmosphere.jpg" alt="" />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="container1">
        

        <Container>
          <Row>
            <Col sm={10}>
              <div>
              <h3>WHERE WE STARTED</h3>
                <p>
                  We started in 2015,With a passionate team who to bring
                  game-changing solution disrupting technologies.We experties in
                  delivering enterprise-level solutions in the field of
                  Artificial Intelligence(AI) Cyber Security,Robotics Process
                  Automation(RPA),Internet of Things(IoT),and BlockChain
                  technology
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
