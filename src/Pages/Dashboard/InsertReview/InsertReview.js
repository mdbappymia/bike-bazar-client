import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import "./InsertReview.css";
import useAuth from "../../../hooks/useAuth";

const InsertReview = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newReview = { ...data };
    newReview.displayName = user.displayName;
    newReview.email = user.email;
    const isReview = window.confirm("Are your sure?");
    if (isReview) {
      fetch("https://bike-bazar-muyy.onrender.com/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newReview),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Review added Successfully");
            reset();
          }
        });
    }
  };
  return (
    <div className="my-order-section py-5">
      <h3 className="text-center fw-bold">Give a Review</h3>
      <form
        className="form-control review-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>Your Name:</label>
        <input
          className="form-control"
          defaultValue={user.displayName}
          disabled
          {...register("displayName")}
        />
        <br />
        <label>Your Email</label>
        <input
          className="form-control"
          disabled
          defaultValue={user.email}
          {...register("email")}
        />
        <br />
        <label>Your Rate:</label>
        <select
          className="form-control"
          {...register("rate", { required: true })}
          name="rate"
          id="rate"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Your Message:</label>
        <textarea
          cols="30"
          {...register("message", { required: true })}
          className="form-control"
        ></textarea>
        <br />
        {errors.exampleRequired && <span>This field is required</span>}

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default InsertReview;
