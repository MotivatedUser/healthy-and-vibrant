import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../App.css";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <Container fluid className="footer">
        <Row>
          <Col md="5" className="footer-links">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/" onClick={scrollTop}>Home</Link>
              </li>
              <li>
                <Link to="/foot" onClick={scrollTop}>Foot Detox</Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollTop}>About</Link>
              </li>
              <li>
                <Link to="/schedule" onClick={scrollTop}>Schedule</Link>
              </li>
              <li>
                <Link to="/order-here" onClick={scrollTop}>Order</Link>
              </li>
              <li>
                <Link to="/blog" onClick={scrollTop}>Blog</Link>
              </li>
            </ul>
          </Col>
          <Col md="5" className="footer-contact">
            <h3>Contact Info</h3>
            <ul className="list-unstyled">
              <li>
                <FaEnvelope />{" "}
                <a href="mailto:healingrox@gmail.com">HealingRox@gmail.com</a>
              </li>
              <li>
                <FaPhone /> <a href="tel:+15099514707">(509) 951-4707</a>
              </li>
              <li>
                <FaMapMarkerAlt />{" "}
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
              Web App by{" "}
              <a
                href="https://www.reactprosolutions.com"
                aria-label="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Pro Solutions
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
