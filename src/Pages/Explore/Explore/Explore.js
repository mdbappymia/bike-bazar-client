import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Product from "../../Shared/Product/Product";
import "./Explore.css";

const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://radiant-meadow-05044.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="explore-page">
      {products.length ? (
        <Container className="text-center py-5">
          <h1 className="text-center fw-bold my-5 text-white">Our products</h1>
          <Row>
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </Row>
        </Container>
      ) : (
        <div className="text-center py-5 text-white">
          <Spinner animation="grow" />
        </div>
      )}
    </div>
  );
};

export default Explore;
