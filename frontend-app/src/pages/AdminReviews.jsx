import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminReviews() {

  const [reviews, setReviews] =
    useState([]);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/reviews"
    );

    setReviews(res.data);
  };

  const deleteReview = async (id) => {

    await axios.delete(
      `http://localhost:5000/api/reviews/${id}`
    );

    loadReviews();
  };

  return (
    <div
      style={{
        background:"#0b0b0b",
        minHeight:"100vh",
        color:"white",
        padding:"40px",
      }}
    >
      <h1>Admin Reviews</h1>

      {reviews.map((review) => (
        <div
          key={review._id}
          style={{
            background:"#151515",
            padding:"20px",
            marginBottom:"15px",
            borderRadius:"10px",
          }}
        >
          <h3>
            {review.customerName}
          </h3>

          <p>
            ⭐ {review.rating}
          </p>

          <p>
            {review.comment}
          </p>

          <button
            onClick={() =>
              deleteReview(
                review._id
              )
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}