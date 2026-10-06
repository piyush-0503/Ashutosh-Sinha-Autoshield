import { useEffect, useState } from "react";
import axios from "axios";

export default function LeadRevenueCenter() {
  const [bookings, setBookings] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/bookings"
      );

      const data =
        res.data.bookings || res.data || [];

      setBookings(data);

      const revenue = data.reduce(
        (sum, item) =>
          sum + (item.estimatedPrice || 0),
        0
      );

      setTotalRevenue(revenue);

    } catch (error) {
      console.log(error);
    }
  };

  const convertedLeads = bookings.filter(
    (item) => item.estimatedPrice > 0
  ).length;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "30px",
      }}
    >
      <h1>Lead & Revenue Center</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <Card
          title="Total Leads"
          value={bookings.length}
        />

        <Card
          title="Converted Leads"
          value={convertedLeads}
        />

        <Card
          title="Total Revenue"
          value={`₹${totalRevenue.toLocaleString()}`}
        />

        <Card
          title="Average Ticket"
          value={
            bookings.length
              ? `₹${Math.floor(
                  totalRevenue /
                    bookings.length
                ).toLocaleString()}`
              : "₹0"
          }
        />
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "#1e293b",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Latest Leads</h2>

        <table
          style={{
            width: "100%",
            marginTop: "20px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Vehicle</th>
              <th>Service</th>
              <th>Revenue</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((item) => (
              <tr key={item._id}>
                <td>{item.customerName}</td>

                <td>
                  {item.brand}{" "}
                  {item.vehicleModel}
                </td>

                <td>{item.serviceType}</td>

                <td>
                  ₹
                  {item.estimatedPrice?.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}