import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/bookings"
      );

      setBookings(res.data.bookings || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const completeBooking = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/bookings/complete/${id}`
      );

      alert("Job Completed Successfully ✅");

      fetchBookings();
    } catch (error) {
      console.log(error);
      alert("Failed ❌");
    }
  };

  const deleteBooking = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/bookings/${id}`
      );

      alert("Booking Deleted ✅");

      fetchBookings();
    } catch (error) {
      console.log(error);
      alert("Delete Failed ❌");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
        padding: "40px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1
  style={{
    textAlign: "center",
    fontSize: "42px",
    marginBottom: "30px",
    marginTop: "20px",
    fontWeight: "800",
    lineHeight: "1.2",
    background:
      "linear-gradient(90deg,#FFD700,#ff6b00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  Premium Booking Center
</h1>

      <div
        style={{
          background: "#0d0d0d",
          borderRadius: "25px",
          padding: "20px",
          overflowX: "auto",
          border: "1px solid rgba(255,215,0,0.15)",
          boxShadow:
            "0 0 30px rgba(255,215,0,0.08)",
        }}
      >
        <table
  style={{
    width: "100%",
    borderCollapse: "collapse",
    tableLayout: "fixed",
  }}
>
        
          <thead>
            <tr>
              {[
                "Customer",
                "Phone",
                "Vehicle",
                "Service",
                "Price",
                "Status",
                "Action",
              ].map((item) => (
                <th
                  key={item}
                  style={{
                    padding: "12px",
                    color: "#FFD700",
                    fontSize: "18px",
                    textAlign: "center",
                    borderBottom:
                      "1px solid rgba(255,215,0,0.3)",
                  }}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {bookings
              .filter(
                (b) => b.status !== "Completed"
              )
              .map((b) => (
                <tr
                  key={b._id}
                  style={{
                    borderBottom:
                      "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <td
                    style={{
                      padding: "12px",
                      textAlign: "center",
                      fontSize: "14px",
wordBreak: "break-word",
                    }}
                  >
                    {b.customerName}
                  </td>

                  <td
                    style={{
                      padding: "12px",
                      textAlign: "center",
                      fontSize: "14px",
wordBreak: "break-word",
                    }}
                  >
                    {b.phone}
                  </td>

                  <td
                    style={{
                      padding: "12px",
                      textAlign: "center",
                      fontSize: "14px",
wordBreak: "break-word",
                    }}
                  >
                    {b.brand} {b.vehicleModel}
                  </td>

                  <td
                    style={{
                      padding: "12px",
                      textAlign: "center",
                      fontSize: "14px",
wordBreak: "break-word",
                    }}
                  >
                    {b.serviceType}
                  </td>

                  <td
                    style={{
                      padding: "12px",
                      textAlign: "center",
                      color: "#00e676",
                      fontWeight: "700",
                      fontSize: "14px",
wordBreak: "break-word",
                    }}
                  >
                    ₹{b.estimatedPrice}
                  </td>

                  <td
                    style={{
                      padding: "12px",
                      textAlign: "center",
                      fontSize: "14px",
wordBreak: "break-word",
                    }}
                  >
                    <span
                      style={{
                        background:
                          "rgba(255,174,0,0.15)",
                        color: "#ffae00",
                        padding:
                          "8px 14px",
                        borderRadius: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {b.status}
                    </span>
                  </td>

                  <td
                    style={{
                      padding: "12px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent:
                          "center",
                        gap: "10px",
                        flexWrap: "nowrap",
                      }}
                    >
                      <button
                        onClick={() =>
                          completeBooking(
                            b._id
                          )
                        }
                        style={{
                          background:
                            "linear-gradient(135deg,#00c853,#00e676)",
                          border: "none",
                          padding: "8px 12px",
fontSize: "13px",
                          color: "#fff",
                          borderRadius: "10px",
                          cursor: "pointer",
                          fontWeight: "700",
                          whiteSpace:
                            "nowrap",
                        }}
                      >
                        ✅ Done
                      </button>

                      <button
                        onClick={() =>
                          deleteBooking(
                            b._id
                          )
                        }
                        style={{
                          background:
                            "linear-gradient(135deg,#ff1744,#ff4569)",
                          border: "none",
                          padding: "8px 12px",
fontSize: "13px",
                          color: "#fff",
                          borderRadius: "10px",
                          cursor: "pointer",
                          fontWeight: "700",
                          whiteSpace:
                            "nowrap",
                        }}
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}