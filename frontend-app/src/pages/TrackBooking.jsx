import { useState } from "react";
import axios from "axios";

export default function TrackBooking() {
  const [phone, setPhone] =
    useState("");

  const [booking, setBooking] =
    useState(null);

  const searchBooking = async () => {
    try {

      const res =
        await axios.get(
          "http://localhost:5000/api/bookings"
        );

      const found =
        res.data.find(
          (b) =>
            b.phone === phone
        );

      if (found) {
        setBooking(found);
      } else {
        alert(
          "Booking Not Found"
        );
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "white",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "#ff3b3b",
        }}
      >
        Track Booking
      </h1>

      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e) =>
          setPhone(
            e.target.value
          )
        }
        style={{
          width: "300px",
          padding: "12px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={searchBooking}
      >
        Search
      </button>

      {booking && (
        <div
          style={{
            marginTop: "30px",
            background: "#151515",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>
            {
              booking.customerName
            }
          </h2>

          <p>
            Phone:
            {booking.phone}
          </p>

          <p>
            Vehicle:
            {
              booking.brand
            }
            {" "}
            {
              booking.vehicleModel
            }
          </p>

          <p>
            Service:
            {
              booking.serviceType
            }
          </p>

          <p>
            Status:
            {
              booking.status
            }
          </p>

          <p>
            Estimated Price:
            ₹
            {
              booking.estimatedPrice
            }
          </p>
        </div>
      )}
    </div>
  );
}