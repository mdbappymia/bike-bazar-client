import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <h4 className="fw-bold">CATEGORIES</h4>
            <Nav>
              <Nav.Item>
                <Nav.Link href="/home">Sport Bikes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Standard</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Scooter</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Cafe Racer</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Electric</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Naked</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Cruiser</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12} md={4} lg={4} className="social-section-footer">
            <h4 className="fw-bold">SOCIAL LINKS</h4>

            <NavLink to="/">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </NavLink>
            <NavLink to="/">
              <FontAwesomeIcon icon={faLinkedin} /> Linkedin
            </NavLink>
            <NavLink to="/">
              <FontAwesomeIcon icon={faYoutube} /> Youtube
            </NavLink>
            <br />
            <NavLink to="/">
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </NavLink>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <p>
              <a href="/">Privacy Policy</a>
            </p>
            <p>
              <a href="/">Term of Service</a>
            </p>
            <p>
              <a href="/">FAQ</a>
            </p>
          </Col>
        </Row>
      </Container>
      <hr className="text-white" />
      <p className="text-secondary text-center">
        Copyright &copy; 2021 All right received
      </p>
    </div>
  );
};

export default Footer;
