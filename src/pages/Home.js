import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../App.css';
import TestimonialSlider from '../components/TestimonialSlider';
import selfLove from '../images/selfLove.webp';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <Container className="homepage">
      <Row>
        <Col>
          <h1 className="homepage__title">Experience Holistic Wellness</h1>
          <h2 className="homepage__subtitle">Achieve Well-Being through Nutrition and Lifestyle</h2>
        </Col>
      </Row>

      <Row className='background-image'>
        <Col md={6}>
          <h3 className="homepage__name">Roxane Cook</h3>
          <p className="homepage__qualifications">
            RDH B.S. - NT - DS<br />
            FDN-P™, Nutrition Response Testing™<br />
            Functional Diagnostic Nutrition Practitioner<br />
            Nutritional Specialist - Detoxification Expert
          </p>
          <img src={selfLove} alt="Couch swing with Self Love hanging on the wall above it" className="self-love"/>
        </Col>
        <Col md={6}>
          <p className="homepage__intro">
          <strong>Have you been facing persistent health issues despite seeking conventional medical treatments?</strong> We are here to guide you towards improved well-being.
          </p>
          

          <p className="homepage__content">
          At Healthy & Vibrant, we utilize a variety of diagnostic techniques to evaluate the functionality of your autonomic nervous system. Our methods, including Nutrition Response Testing™ and Functional Diagnostic Nutrition (FDN), provide an in-depth understanding of your body's specific needs, paving the way for tailored wellness programs.
          </p>
          <p className="homepage__content">
          Our approach focuses on supporting the body's inherent ability to achieve optimal functioning by promoting proper immune response, healthy digestion, and effective detoxification. Our services include IonCleanse Detox footbaths, personalized weight loss plans and coaching, as well as solutions for reducing and reversing chronic pain issues.
          </p>
          <p className="homepage__content">
          Roxane Cook, founder of Healthy & Vibrant, launched her career as a Functional Diagnostic Nutrition Practitioner in 2013. Her personal journey with unresolved health challenges, including migraines, joint pain, food sensitivities, weight gain, and insomnia, fueled her passion for this field. Roxane is dedicated to continuous learning and staying up-to-date with the latest advancements, allowing her to effectively <strong>identify the root causes of health concerns and provide targeted support</strong> for her clients' well-being.
          </p>
        </Col>
      </Row>

      <TestimonialSlider />

      <Row>
        <Col className="homepage__cta">
          <Link to='/schedule'>
          <Button className='home-button' color='warning' >Schedule Your Free Evaluation</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;