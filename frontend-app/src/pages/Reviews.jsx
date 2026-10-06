import {
  useState,
  useEffect,
} from "react";

import axios from "axios";

export default function Reviews() {

  const [reviews,
  setReviews] =
  useState([]);

  const [form,
  setForm] =
  useState({
    customerName:"",
    rating:"",
    comment:"",
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews =
  async () => {

    const res =
    await axios.get(
      "http://localhost:5000/api/reviews"
    );

    setReviews(
      res.data
    );
  };

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/reviews",
      form
    );

    alert(
      "Review Added"
    );

    fetchReviews();
  };

  return (
    <div
      style={{
        padding:"40px",
        color:"white",
      }}
    >
      <h1>
        Customer Reviews
      </h1>

      <form
        onSubmit={
          handleSubmit
        }
      >

        <input
          placeholder="Name"
          onChange={(e)=>
          setForm({
            ...form,
            customerName:
            e.target.value
          })
          }
        />

        <br /><br />

        <input
          placeholder="Rating"
          onChange={(e)=>
          setForm({
            ...form,
            rating:
            e.target.value
          })
          }
        />

        <br /><br />

        <textarea
          placeholder="Comment"
          onChange={(e)=>
          setForm({
            ...form,
            comment:
            e.target.value
          })
          }
        />

        <br /><br />

        <button>
          Submit Review
        </button>

      </form>

      <hr />

      {reviews.map(
      (review)=>(
        <div
        key={
          review._id
        }
        >
          <h3>
          {
            review.customerName
          }
          </h3>

          <p>
          ⭐
          {
            review.rating
          }
          </p>

          <p>
          {
            review.comment
          }
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}