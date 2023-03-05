import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Container } from "react-bootstrap";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://bike-bazar-muyy.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="text-center review-section-home">
      <Container>
        <h1 className="text-center fw-bold text-white pt-4">
          Our site reviews
        </h1>
        <div className="review-container">
          {reviews.map((review) => (
            <div key={review?._id} className="review-item">
              <h3 className="fw-bold text-center">{review?.displayName}</h3>
              <small>Review: {review?.message.slice(0, 30)}</small>
              <p>
                Rating:{" "}
                <Rating
                  emptySymbol="far fa-star text-danger"
                  fullSymbol="fas fa-star text-danger"
                  initialRating={review?.rate}
                  readonly
                />
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
