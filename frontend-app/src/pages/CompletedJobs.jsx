import { useEffect, useState } from "react";
import axios from "axios";

export default function CompletedJobs() {
  const [bookings, setBookings] = useState([]);

  const fetchCompleted = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/bookings/completed"
      );

      setBookings(res.data.bookings || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCompleted();
  }, []);

  const totalRevenue = bookings.reduce(
    (total, item) =>
      total + Number(item.estimatedPrice || 0),
    0
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
        padding: "120px 40px 40px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Heading */}

     <h1
  style={{
    textAlign: "center",
    fontSize: "48px",
    fontWeight: "800",
    marginTop: "20px",
    marginBottom: "40px",
    lineHeight: "1.3",
  }}
>
  ✅ Completed Jobs
</h1>

      {/* Stats */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "#111",
            padding: "25px 40px",
            borderRadius: "20px",
            minWidth: "250px",
            textAlign: "center",
            border:
              "1px solid rgba(0,255,100,.2)",
            boxShadow:
              "0 0 25px rgba(0,255,100,.12)",
          }}
        >
          <h2
            style={{
              color: "#00e676",
              margin: 0,
              fontSize: "38px",
            }}
          >
            {bookings.length}
          </h2>

          <p
            style={{
              color: "#ccc",
              marginTop: "10px",
            }}
          >
            Total Completed Jobs
          </p>
        </div>

        <div
          style={{
            background: "#111",
            padding: "25px 40px",
            borderRadius: "20px",
            minWidth: "250px",
            textAlign: "center",
            border:
              "1px solid rgba(255,215,0,.2)",
            boxShadow:
              "0 0 25px rgba(255,215,0,.12)",
          }}
        >
          <h2
            style={{
              color: "#FFD700",
              margin: 0,
              fontSize: "38px",
            }}
          >
            ₹{totalRevenue.toLocaleString()}
          </h2>

          <p
            style={{
              color: "#ccc",
              marginTop: "10px",
            }}
          >
            Total Revenue
          </p>
        </div>
      </div>

      {/* Table */}

      <div
        style={{
          background: "#111",
          borderRadius: "25px",
          padding: "25px",
          overflowX: "auto",
          border:
            "1px solid rgba(255,255,255,.08)",
          boxShadow:
            "0 0 30px rgba(255,255,255,.05)",
        }}
      >
        {bookings.length === 0 ? (
          <h2
            style={{
              textAlign: "center",
              color: "#aaa",
              padding: "40px",
            }}
          >
            No Completed Jobs Found
          </h2>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                {[
                  "Customer",
                  "Vehicle",
                  "Service",
                  "Revenue",
                  "Completed Date",
                ].map((item) => (
                  <th
                    key={item}
                    style={{
                      padding: "18px",
                      color: "#FFD700",
                      fontSize: "17px",
                      borderBottom:
                        "1px solid rgba(255,215,0,.2)",
                    }}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {bookings.map((b) => (
                <tr
                  key={b._id}
                  style={{
                    textAlign: "center",
                    borderBottom:
                      "1px solid rgba(255,255,255,.05)",
                  }}
                >
                  <td
                    style={{
                      padding: "18px",
                    }}
                  >
                    👤 {b.customerName}
                  </td>

                  <td
                    style={{
                      padding: "18px",
                    }}
                  >
                    🚘 {b.brand}{" "}
                    {b.vehicleModel}
                  </td>

                  <td
                    style={{
                      padding: "18px",
                    }}
                  >
                    {b.serviceType}
                  </td>

                  <td
                    style={{
                      padding: "18px",
                      color: "#00e676",
                      fontWeight: "700",
                    }}
                  >
                    ₹{b.estimatedPrice}
                  </td>

                  <td
                    style={{
                      padding: "18px",
                      color: "#bbb",
                    }}
                  >
                    {b.completedAt
                      ? new Date(
                          b.completedAt
                        ).toLocaleDateString(
                          "en-IN"
                        )
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}