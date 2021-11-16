import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import "./InsertItem.css";
import { Link } from "react-router-dom";
const InsertItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const isAdd = window.confirm("Are you sure added the service?");
    if (isAdd) {
      fetch("https://radiant-meadow-05044.herokuapp.com/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert("Successfully Added");
          }
        });
      reset();
    }
  };
  return (
    <div className="insert-item-page mt-3">
      <h1 className="fw-bold text-center py-3">Insert a new Product</h1>
      <div className="insert-item-form">
        <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
          <label className="fw-bold">Product Name:</label>
          <input
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}
          <br />
          <label className="fw-bold">Product Image Link:</label>
          <input
            className="form-control"
            {...register("img", { required: true })}
          />
          {errors.img && (
            <span className="text-danger">This field is required</span>
          )}
          <br />
          <label className="fw-bold">Price:</label>
          <input
            type="number"
            className="form-control"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-danger">This field is required</span>
          )}
          <br />
          <label className="fw-bold">Product Description:</label>
          <textarea
            className="form-control"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-danger">This field is required</span>
          )}
          <br />
          <Button type="submit">Add Now</Button>
        </form>
        <br />
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default InsertItem;
