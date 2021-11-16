import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import BookingForm from "../BookingForm/BookingForm";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://radiant-meadow-05044.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="product-details-page">
      <Container className="py-5">
        <Row>
          <Col md={12} lg={6}>
            <img src={product.img} alt="" />
            <h3 className="fw-bold my-3">Bike Name: {product.name}</h3>
            <p>
              Price:{" "}
              <span className="text-warning fw-bold">${product.price}</span>
            </p>
            <small>{product.description}</small>
          </Col>
          <Col md={12} lg={6}>
            <BookingForm product={product}></BookingForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
