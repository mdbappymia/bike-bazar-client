import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import "./CounterHome.css";

const CounterHome = () => {
  return (
    <div className="counter-home-section">
      <Container>
        <Row>
          <Col className="my-5" sm={12} lg={4}>
            <h2>Our Products</h2>
            <h4 className="text-warning fw-bold">
              <CountUp start={0} end={2000} duration={4.75} />+
            </h4>
          </Col>
          <Col className="my-5" sm={12} lg={4}>
            <h2>Our Happy Customers</h2>
            <h4 className="text-warning fw-bold">
              <CountUp start={0} end={1500} duration={4.75} />+
            </h4>
          </Col>
          <Col className="my-5" sm={12} lg={4}>
            <h2>Our Branch</h2>
            <h4 className="text-warning fw-bold">
              <CountUp start={0} end={100} duration={4.75} />+
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CounterHome;
