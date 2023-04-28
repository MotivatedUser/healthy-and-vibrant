import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid className='footer'>
        <Row>
          <Col md="5" className='footer-links'>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/schedule">Schedule</Link>
              </li>
              <li>
                <Link to="/order-here">Order</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </Col>
          <Col md="5" className='footer-contact'>
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li>
                <FaEnvelope />{' '}
                <a href="mailto:healingrox@gmail.com">
                HealingRox@gmail.com
                </a>
              </li>
              <li>
                <FaPhone />{' '}
                <a href="tel:+15099514707">(509) 951-4707</a>
              </li>
              <li>
                <FaMapMarkerAlt />{' '}
                <address>
                  11712 E Boone Ave, <br />
                  Spokane Valley, WA 99206
                </address>
              </li>
            </ul>
          </Col>
          {/* Add more columns if needed */}
        </Row>
        <Row>
          <Col className="text-center">
            <p className="credit">
              Website by{' '}
              <a
                href="https://www.reactivedoug.com"
                aria-label="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Doug Altermatt
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
