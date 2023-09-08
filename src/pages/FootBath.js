import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import VideoComponent from '../components/VideoComponent/VideoComponent';


const FootDetox = () => {
  return (
    <Container className="foot-detox-page">
      <Row>
        <Col>
          <h1 className="foot-detox__title">Discover the Benefits of IonCleanse Foot Bath</h1>
          <h2 className="foot-detox__subtitle">A Revolutionary Approach to Full-Body Detoxification</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <VideoComponent />
        </Col> 
      </Row>

      <Row>
        <Col md={6}>
          <h3 className="foot-detox__header">What is IonCleanse Foot Bath?</h3>
          <p className="foot-detox__content">
            The IonCleanse Foot Bath is a cutting-edge detoxification method designed to enhance your body's natural ability to heal. It utilizes ionized water to draw out toxins, thereby revitalizing your system from the inside out.
          </p>
        </Col>
        <Col md={6}>
          <h3 className="foot-detox__header">Why Choose IonCleanse?</h3>
          <p className="foot-detox__content">
            Unlike traditional detoxification methods, IonCleanse offers a non-invasive, relaxing experience while delivering effective, whole-body detoxification. Its unique mechanism targets toxins at a cellular level, making it ideal for those looking to achieve a higher state of wellness.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3 className="foot-detox__header text-center">Key Benefits</h3>
          <ul className="foot-detox__list">
            <li>Enhanced Immune System</li>
            <li>Improved Digestion</li>
            <li>Reduced Stress and Anxiety</li>
            <li>Greater Energy Levels</li>
            <li>Improved Focus and Mental Clarity</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Link to='/schedule'>
        <Col className="foot-detox__cta">
          <Button color='warning' aria-label="Book Your IonCleanse Foot Bath Session">Book Your IonCleanse Foot Bath Session</Button>
        </Col>
        </Link>
      </Row>
    </Container>
  );
};

export default FootDetox;
