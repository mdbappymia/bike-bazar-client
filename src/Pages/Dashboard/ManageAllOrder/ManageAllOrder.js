import React from "react";
import { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./ManageAllOrder.css";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://radiant-meadow-05044.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleRemove = (id) => {
    const isRemove = window.confirm("Are you sure delete the item?");
    if (isRemove) {
      fetch(`https://radiant-meadow-05044.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        });
    }
  };
  const handleShipping = (id) => {
    const isShipped = window.confirm("Are you sure?");

    if (isShipped) {
      fetch(`https://radiant-meadow-05044.herokuapp.com/orders/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            let finalOrder = [];
            for (let order of orders) {
              if (order._id === id) {
                order.status = "Shipped";
              }
              finalOrder.push(order);
            }
            setOrders(finalOrder);
          }
        });
    }
  };
  return (
    <div className="my-order-section px-3">
      <Row>
        {orders.map((order) => (
          <Col
            sm={12}
            md={4}
            lg={3}
            key={order._id}
            className="text-black py-3"
          >
            <Card className="manage-all-order-card">
              <Card.Img variant="top" src={order.img} />
              <Card.Body>
                <p className="fw-bold">{order.name}</p>
                <small>{order.email}</small>
                <Card.Text>Status: {order.status}</Card.Text>
              </Card.Body>
              <Button
                disabled={order.status === "Shipped"}
                onClick={() => handleShipping(order._id)}
                variant="warning"
                className="mx-3 my-1"
              >
                Shipped
              </Button>
              <Button
                className="mx-3 my-1"
                onClick={() => handleRemove(order._id)}
                variant="danger"
              >
                Remove
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ManageAllOrder;
