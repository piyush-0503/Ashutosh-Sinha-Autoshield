import { useEffect, useState } from "react";
import api from "../api/api";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await api.get("/bookings");

      if (res.data.bookings) {
        setBookings(res.data.bookings);
      } else {
        setBookings([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const totalRevenue = bookings.reduce(
    (sum, item) =>
      sum + (item.estimatedPrice || 0),
    0
  );

  return (
    <div
      style={{
        padding: "30px",
        background: "#111",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1>Lead & Revenue Center</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={card}>
          <h3>Total Leads</h3>
          <h2>{bookings.length}</h2>
        </div>

        <div style={card}>
          <h3>Total Revenue</h3>
          <h2>₹{totalRevenue}</h2>
        </div>
      </div>

      <h2 style={{ marginTop: "40px" }}>
        Latest Leads
      </h2>

      {bookings.map((item) => (
        <div
          key={item._id}
          style={{
            background: "#1a1a1a",
            padding: "15px",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        >
          <h3>{item.customerName}</h3>

          <p>📞 {item.phone}</p>

          <p>
            🚗 {item.brand}{" "}
            {item.vehicleModel}
          </p>

          <p>
            🔧 {item.serviceType}
          </p>

          <p>
            💰 ₹{item.estimatedPrice}
          </p>
        </div>
      ))}
    </div>
  );
}

const card = {
  background: "#1a1a1a",
  padding: "20px",
  borderRadius: "10px",
  minWidth: "250px",
};

export default AdminDashboard;