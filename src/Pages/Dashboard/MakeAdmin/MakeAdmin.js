import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://radiant-meadow-05044.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleMakeAdmin = (id, role) => {
    const isRoleChange = window.confirm("Are you sure?");
    if (isRoleChange) {
      fetch(`https://radiant-meadow-05044.herokuapp.com/users/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ role }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.modifiedCount > 0) {
            let updatedUser = [];
            for (let user of users) {
              if (user._id === id) {
                user.role = role;
              }
              updatedUser.push(user);
            }
            setUsers(updatedUser);
            alert("Admin role change successfully");
          }
        });
    }
  };
  return (
    <div className="make-admin-page">
      <Container>
        {users.map((user) => (
          <div key={user._id} className="single-user-item">
            <h4>{user.displayName}</h4>
            <h5>Email: {user.email}</h5>
            <p>
              Role: <span className="text-warning fw-bold">{user.role}</span>
            </p>
            <div>
              <Button
                disabled={user.role === "Admin"}
                onClick={() => handleMakeAdmin(user._id, "Admin")}
                variant="success"
                className="me-3"
              >
                Make Admin
              </Button>
              <Button
                disabled={user.role === "User"}
                onClick={() => handleMakeAdmin(user._id, "User")}
                variant="danger"
              >
                Remove Admin
              </Button>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default MakeAdmin;
