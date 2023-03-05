import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const BookingForm = (props) => {
  const { img, name, price } = props.product;
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newData = { ...data, img, name, price };
    newData.displayName = user.displayName;
    newData.email = user.email;
    newData.status = "Pending";
    const isOrder = window.confirm("Are you sure your information correct?");
    if (isOrder) {
      fetch("https://bike-bazar-muyy.onrender.com/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Order added on dashboard");
          }
        });
      reset();
    }
  };
  return (
    <div>
      <h2 className="text-center fw-bold my-5 ">Please fill up the form</h2>
      <form className="form-control mx-lg-4" onSubmit={handleSubmit(onSubmit)}>
        <label>Your Name:</label>
        <input
          className="form-control"
          defaultValue={user.displayName}
          disabled
          {...register("displayName")}
        />
        <br />
        <label>Your Email Address:</label>
        <input
          className="form-control"
          defaultValue={user.email}
          disabled
          {...register("email")}
        />
        <br />
        <label>Your Phone Number:</label>
        <input
          className="form-control"
          type="number"
          {...register("phone", { required: true })}
        />
        {errors.address && (
          <span className="text-danger">This field is required</span>
        )}
        <br />
        <label>Your Address:</label>
        <input
          className="form-control"
          type="text"
          {...register("address", { required: true })}
        />
        {errors.address && (
          <span className="text-danger">This field is required</span>
        )}
        <br />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default BookingForm;
