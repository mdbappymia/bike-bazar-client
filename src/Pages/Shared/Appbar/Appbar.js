import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Appbar.css";

const Appbar = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar
      className="shared-nav"
      sticky="top"
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">Bike Bazar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/explore">
              Explore
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            {user?.email ? (
              <>
                <NavLink className="nav-link" to="/dashboard">
                  Dashboard
                </NavLink>
                <small className="text-secondary p-2 ">
                  Login as:{" "}
                  <span className="text-warning">{user.displayName}</span>
                </small>
                <img
                  className="profile-image"
                  src={
                    user.imageURL ||
                    "https://static.vecteezy.com/system/resources/thumbnails/000/550/731/small/user_icon_004.jpg"
                  }
                  alt=""
                />
                <Button onClick={logOut} variant="danger">
                  Log Out
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
