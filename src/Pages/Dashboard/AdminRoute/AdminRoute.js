import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { admin, adminLoading } = useAuth();

  if (adminLoading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="grow" />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
