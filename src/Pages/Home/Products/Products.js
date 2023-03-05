import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Product from "../../Shared/Product/Product";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://bike-bazar-muyy.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const showingProducts = products.slice(0, 6);
  return (
    <div className="home-products-section pb-5">
      <Container className="text-center">
        <h1 className="text-center text-white fw-bold py-5">Our products</h1>
        <Row>
          {showingProducts.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>

        <Link to="/explore">
          <Button className="my-3" variant="info">
            More Product
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default Products;
