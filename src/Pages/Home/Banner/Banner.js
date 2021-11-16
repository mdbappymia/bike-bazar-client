import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="main-banner py-5">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            {/* carousel part  */}
            <Carousel interval={800} controls={false} fade indicators={false}>
              <Carousel.Item>
                <img
                  className="d-block banner-carousel w-100"
                  src="https://i.ibb.co/8byYjc9/banner-bike.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block banner-carousel w-100"
                  src="https://i.ibb.co/dMdLXY2/banner-bike-2.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block banner-carousel w-100"
                  src="https://i.ibb.co/Qr1sFJS/banner-bike-3.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm={12} md={6}>
            <h2 className="text-white fw-bold">OUR FACILITY</h2>
            <ul className="text-white">
              <li>
                <FontAwesomeIcon
                  className="text-success mx-3 fw-bold"
                  icon={faCheck}
                />{" "}
                100% Original Product
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-success mx-3 fw-bold"
                  icon={faCheck}
                />{" "}
                24 Hour Service
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-success mx-3 fw-bold"
                  icon={faCheck}
                />{" "}
                10 Years Warranty
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-success mx-3 fw-bold"
                  icon={faCheck}
                />{" "}
                Reasonable Price
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-success mx-3 fw-bold"
                  icon={faCheck}
                />{" "}
                Cashback Offer
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
