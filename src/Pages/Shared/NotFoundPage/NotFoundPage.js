import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Container>
        <h1 className="text-center fw-bold py-5 my-5">404 Not Found</h1>
      </Container>
      <h2 className="fw-bold text-center my-3">
        Back to <Link to="/">home</Link>
      </h2>
    </div>
  );
};

export default NotFoundPage;
