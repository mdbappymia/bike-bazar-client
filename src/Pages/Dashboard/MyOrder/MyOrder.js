import React, { useEffect, useState } from "react";
import { Card, Container, Button, Col, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./MyOrder.css";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://bike-bazar-muyy.onrender.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  //   remove single order
  const handleRemove = (id) => {
    const isRemove = window.confirm("Are you sure delete the item?");
    if (isRemove) {
      fetch(`https://bike-bazar-muyy.onrender.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        });
    }
  };
  return (
    <div className="my-order-section">
      <Container>
        {orders.length ? (
          <Row>
            {orders.map((order) => (
              <Col
                sm={12}
                md={4}
                lg={3}
                key={order._id}
                className="text-black py-3"
              >
                <Card className="my-order-card">
                  <Card.Img variant="top" src={order.img} />
                  <Card.Body>
                    <p className="fw-bold">{order.name}</p>
                    <Card.Text>Status: {order.status}</Card.Text>
                  </Card.Body>
                  <Button
                    onClick={() => handleRemove(order._id)}
                    variant="danger"
                  >
                    Remove
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <h1>Your Order List is Empty</h1>
        )}
      </Container>
    </div>
  );
};

export default MyOrder;
