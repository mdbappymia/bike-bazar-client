import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";
const Product = ({ product }) => {
  const { _id, name, price, description, img } = product;
  return (
    <Col sm={12} md={6} lg={4}>
      <Card className="single-product-card my-3">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bold fs-5">{name}</Card.Title>
          <Card.Text>{description?.slice(0, 150)}</Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-between mx-3">
          <h3 className="fw-bold text-warning">${price}</h3>
          <Link to={`/products/${_id}`}>
            <Button variant="primary">Buy Now</Button>
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default Product;
