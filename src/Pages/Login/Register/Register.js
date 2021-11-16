import React, { useState } from "react";
import { Alert, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";
const Register = () => {
  const { registerUser, error } = useAuth();
  const [matchPass, setMatchPass] = useState(true);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password === data.password2) {
      registerUser(data.email, data.password, data.name, history);
      setMatchPass(true);
      reset();
    } else {
      setMatchPass(false);
    }
  };
  setTimeout(() => {
    setMatchPass(true);
  }, 3000);
  return (
    <div className="register-page">
      <Container>
        {!matchPass && (
          <Alert variant="danger" className="text-center">
            Password not matched
          </Alert>
        )}
        <h1 className="text-center fw-bold py-4">Please Sign Up</h1>
        {error && (
          <Alert className="text-center" variant="danger">
            {error}
          </Alert>
        )}
        <form
          className="form-control registration-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="fw-bold">Your Name:</label>
          <input
            className="form-control"
            placeholder="Your Name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
          <br />
          <label className="fw-bold">Your Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
          <br />
          <label className="fw-bold">Your Password:</label>
          <input
            className="form-control"
            type="password"
            placeholder="Your Password"
            {...register("password", { required: true })}
          />
          <br />
          <label className="fw-bold">Retype Your Password:</label>
          {errors.password && <span>This field is required</span>}
          <input
            className="form-control"
            type="password"
            placeholder="Retype Your Password"
            {...register("password2", { required: true })}
          />
          {errors.password2 && <span>This field is required</span>}
          <br />
          <Button className="my-3" type="submit">
            Sign Up
          </Button>
        </form>
        <h5 className="text-center my-4">
          Already Sign Up? <Link to="/login">Login</Link>
        </h5>
      </Container>
    </div>
  );
};

export default Register;
