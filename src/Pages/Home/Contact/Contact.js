import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  const [check, setCheck] = useState(false);
  return (
    <div className="contact-form-section">
      <Container className="py-5">
        <h1 className="text-center fw-bold text-white">Contact Us</h1>
        <Form className="contact-form-home">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Your Name:</Form.Label>
            <Form.Control placeholder="Your Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Your Phone:</Form.Label>
            <Form.Control type="number" placeholder="Your Phone Number" />
          </Form.Group>
          <Form.Label>Your Message:</Form.Label>
          <textarea
            placeholder="You valuable message"
            className="form-control mb-3"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={() => setCheck(!check)}
              type="checkbox"
              label="agree terms and condition"
            />
          </Form.Group>
          <Button disabled={!check} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
