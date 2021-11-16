import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Appbar from "../Shared/Appbar/Appbar";
import Footer from "../Shared/Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <Appbar></Appbar>
      <div className="about-us-page">
        <Container>
          <h1 className="text-center fw-bold py-5">About Us</h1>
          <Row>
            <Col className="d-none d-lg-block" sm={12} lg={6}>
              <img
                src="https://i.ibb.co/vVzgjmc/08-Fd-ARH8-Tr-d-Hgrl-V6x4-UT0f7a-BK3m4-H6-WQVRzd71b-AK-Os-Xf-Qg-v-N-p-VXDDddn-CBwd-5-PDDv-ISCry-Ox0b.jpg"
                alt=""
              />
            </Col>
            <Col sm={12} lg={6}>
              <p>
                Bike bazar is owned and operated by Verticalscope Inc.,
                publishers of more than 400 powersports, automotive, sports, and
                technology web sites. Since 1994, Bike bazar has been the
                definitive information resource for motorcycle enthusiasts
                around the world. It is home to thousands of reviews and
                performance tests, giving consumers all the information they
                need on the latest bikes, parts, and accessories. Bike bazar
                covers the full spectrum of bikes, including sport bikes,
                choppers, cruisers, adventure bikes, fat boys, and everything
                in-between. The Bike bazar archive, which also includes
                thousands of photos and videos, is second to none. Today, over 2
                million motorcycle enthusiasts per month rely on the site when
                they are shopping for a new bike, tuning-up their current bike,
                or getting ready to head to the track.
              </p>
              <p>
                Like most of the best happenings in his life, Evans stumbled
                into his motojournalism career. While on his way to a planned
                life in academia, he applied for a job at a motorcycle magazine,
                thinking he’d get the opportunity to write some freelance
                articles. Instead, he was offered a full-time job in which he
                discovered he could actually get paid to ride other people’s
                motorcycles – and he’s never looked back. Over the 25 years he’s
                been in the motorcycle industry, Evans has written two books,
                101 Sportbike Performance Projects and How to Modify Your Metric
                Cruiser, and has ridden just about every production motorcycle
                manufactured. Evans has a deep love of motorcycles and believes
                they are a force for good in the world.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
