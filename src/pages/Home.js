// src/pages/Home/index.js
import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../App.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <Container>
          <Row>
            <Col lg="6">
              <h1>Welcome to Healthy and Vibrant</h1>
              <p>
                Experience healing through natural remedies and food.
              </p>
              <Button color="primary" href="/about">Learn More</Button>
            </Col>
            <Col lg="6">
              {/* Add an image or any other content here */}
            </Col>
          </Row>
        </Container>
      </header>
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;
