import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalBookings: 0,
    totalGallery: 0,
    totalReviews: 0,
    completedJobs: 0,
    pendingJobs: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/dashboard"
      );

      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "white",
        padding: "30px",
      }}
    >
      {/* Header */}
      <div
  style={{
    textAlign: "center",
    padding: "40px 20px",
    marginBottom: "30px",
  }}
>
  <h1
  style={{
    fontSize: "70px",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "20px",
    lineHeight: "1.2",
    background:
      "linear-gradient(90deg,#FFD700,#FF7A00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "block",
    overflow: "visible",
  }}
>
  Premium PPF Dashboard
</h1>

  <p
    style={{
      color: "#bbb",
      fontSize: "22px",
    }}
  >
    XPEL • Garware • Llumar • STEK
  </p>
</div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <Card
          title="Total Bookings"
          value={stats.totalBookings}
        />

        <Card
          title="Pending Jobs"
          value={stats.pendingJobs}
        />

        <Card
          title="Completed Jobs"
          value={stats.completedJobs}
        />

        <Card
          title="Gallery Images"
          value={stats.totalGallery}
        />

        <Card
          title="Reviews"
          value={stats.totalReviews}
        />

        <Card
          title="Revenue"
          value={`₹${stats.totalRevenue}`}
        />
      </div>

      {/* Admin Actions */}
      <div
        style={{
          marginTop: "50px",
        }}
      >
        <h2
          style={{
            color: "#ff3b3b",
          }}
        >
          Admin Controls
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Link
            to="/admin/gallery"
            style={buttonStyle}
          >
            Manage Gallery
          </Link>

          <Link
            to="/admin/bookings"
            style={buttonStyle}
          >
            Manage Bookings
          </Link>

          <Link
            to="/reviews"
            style={buttonStyle}
          >
            View Reviews
          </Link>

          <Link
            to="/"
            style={buttonStyle}
          >
            Website Home
          </Link>
          <Link
 to="/admin/products"
 style={buttonStyle}
>
 Manage Products
</Link>
        </div>
      </div>

      {/* Revenue Box */}
      <div
        style={{
          marginTop: "50px",
          background: "#151515",
          padding: "30px",
          borderRadius: "15px",
        }}
      >
        <h2>Total Revenue</h2>

        <h1
          style={{
            color: "#00ff88",
          }}
        >
          ₹{stats.totalRevenue}
        </h1>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div
      style={{
        background: "#151515",
        padding: "25px",
        borderRadius: "15px",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>

      <h1
        style={{
          color: "#00ff88",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

const buttonStyle = {
  background: "#ff3b3b",
  color: "white",
  padding: "15px 25px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
};