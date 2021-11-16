import React from "react";
import { Alert, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { error, signInUsingEmailPassword } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInUsingEmailPassword(data.email, data.password, location, history);
  };

  return (
    <div className="login-page">
      <Container>
        <h1 className="text-center fw-bold py-4">Please Login</h1>
        {error && (
          <Alert className="text-center" variant="danger">
            {error}
          </Alert>
        )}
        <form
          className="login-form form-control"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="fw-bold">Your Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            {...register("email", { required: true })}
          />
          <br />
          <label className="fw-bold">Your Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Your Password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
          <br />
          <Button type="submit" className="my-3">
            Login
          </Button>
        </form>
        <h5 className="text-center my-5">
          New User? <Link to="/register">Sign Up</Link>
        </h5>
      </Container>
    </div>
  );
};

export default Login;
