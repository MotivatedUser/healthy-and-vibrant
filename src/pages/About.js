// src/pages/About.js
import React from "react";
import { Container, Row, Col } from "reactstrap";
import rocks from "../images/rocks.webp";
import rocks2 from '../images/rocks2.webp';
import walking from '../images/walking.webp';
import feeling from "../images/feeling.webp";
import stopExcuses from "../images/stopExcuses.webp";
import startChanges from "../images/startChanges.webp";

const About = () => {
  return (
    <Container className="about-page">
      <Row>
        <Col>
          <h2>About Healthy & Vibrant</h2>
          <p>
            Healthy & Vibrant is a wellness center founded by Roxane Cook, a
            dedicated Functional Diagnostic Nutrition Practitioner with a
            passion for helping clients overcome their health challenges. Our
            mission is to provide personalized and effective wellness solutions
            that address the root causes of health issues, empowering clients to
            achieve their optimum well-being.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Our Philosophy</h3>
          <p>
            <img src={rocks} alt="Stacked rocks symbolizing balance" className="about-image" />
            <img src={rocks2} alt='Rocks stacked on the ocean shore' className="about-image-right" />
            We believe that the body possesses a remarkable ability to heal
            itself and function optimally when given the proper support. Our
            approach is centered around understanding each client's unique needs
            and developing tailored wellness plans that promote proper immune
            function, healthy digestion, and effective detoxification.
            
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Our Services</h3>
          <p>
            <img src={walking} alt='Shadow of a person walking in a desert' className='about-image' />
            <img src={feeling} alt="Lady with her eyes closed and her hand on her chest" className="about-image-right" />
            At Healthy & Vibrant, we offer a wide range of services designed to
            enhance your well-being, including:
            
          </p>
          <ul>
            <li>Nutrition Response Testing™</li>
            <li>Functional Diagnostic Nutrition (FDN)</li>
            <li>IonCleanse Detox footbaths</li>
            <li>Personalized weight loss plans and coaching</li>
            <li>Strategies for reducing and reversing chronic pain issues</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Our Commitment</h3>
          <p>
            Roxane Cook, the founder of Healthy & Vibrant, is committed to
            lifelong learning and staying informed on the latest advancements in
            her field. This dedication enables her to effectively identify the
            root causes of health concerns and provide targeted support for her
            clients' well-being. Since 2013, Healthy & Vibrant has been a
            trusted source of holistic wellness solutions for clients seeking to
            improve their health and quality of life.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <img className="scrable-img" src={stopExcuses} alt="Scrabble tiles spelling stop excuses" />
        </Col>
        <Col md="6">
          <img className="scrable-img" src={startChanges} alt="Scrabble tiles spelling start changes" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
