import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import "./ManageProducts.css";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://bike-bazar-muyy.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //   delete a product
  const handleDelete = (id) => {
    let isDelete = window.confirm("Are you sure delete this?");

    if (isDelete) {
      fetch(`https://bike-bazar-muyy.onrender.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Successfully Deleted");
            const remainingProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProducts);
          }
        });
    }
  };
  return (
    <div>
      <Container>
        <div className="admin-all-product-container">
          {products.map((product) => (
            <div key={product._id} className="admin-manage-product">
              <h5>{product.name}</h5>
              <p>
                Price: <span className="text-warning">${product.price}</span>
              </p>
              <Button
                onClick={() => handleDelete(product._id)}
                variant="danger"
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ManageProducts;
