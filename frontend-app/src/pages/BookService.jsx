import { useState } from "react";
import axios from "axios";

const services = {
  PPF: 85000,
  "Ceramic Coating": 25000,
  "Graphene Coating": 35000,
  "Car Wrapping": 45000,
  "Paint Correction": 18000,
  Detailing: 8000,
  "Interior Detailing": 6000,
  "Bike PPF": 15000,
  "Bike Ceramic": 6000,
};

export default function BookService() {
  const [bookingResult, setBookingResult] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    state: "",
    vehicleType: "Car",
    brand: "",
    model: "",
    service: "",
    slotDate: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getNumericPrice = () => {
    return services[form.service] || 0;
  };

  const advanceAmount = Math.round(getNumericPrice() * 0.1);

  const whatsappMessage = `Hello PPF Studio

Name: ${form.name}
Phone: ${form.phone}
Vehicle Type: ${form.vehicleType}
Brand: ${form.brand}
Model: ${form.model}
Service: ${form.service}
Date: ${form.slotDate}

Estimated Cost: ₹${getNumericPrice()}`;

  const whatsappLink = `https://wa.me/917570908459?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bookingData = {
        customerName: form.name,
        phone: form.phone,
        state: form.state,
        vehicleType: form.vehicleType,
        brand: form.brand,
        vehicleModel: form.model,
        serviceType: form.service,
        slotDate: form.slotDate,
        slotTime: "Not Selected",
        bookingDate: new Date(),
        estimatedPrice: getNumericPrice(),
      };

      const response = await axios.post(
        "http://localhost:5000/api/bookings",
        bookingData
      );

      setBookingResult(response.data.booking);

      alert("Booking Submitted Successfully ✅");
    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Booking Failed ❌");
      }
    }
  };
  return (
  <div
    style={{
      minHeight: "100vh",
      background:
        "radial-gradient(circle at top,#2b0018,#050505)",
      padding: "120px 40px 60px",
      color: "#fff",
    }}
  >
    <h1
  style={{
    textAlign: "center",
    fontSize: "clamp(40px, 6vw, 70px)",
    fontWeight: "800",
    marginTop: "20px",
    marginBottom: "50px",
    lineHeight: "1.2",
    background: "linear-gradient(90deg,#FFD700,#FF7A00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 20px rgba(255,215,0,0.2)",
  }}
>
  Book Your Appointment
</h1>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: "35px",
        maxWidth: "1400px",
        margin: "auto",
      }}
    >
      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#111",
          padding: "35px",
          borderRadius: "25px",
          border: "1px solid rgba(255,215,0,.15)",
          boxShadow:
            "0 0 30px rgba(255,215,0,.08)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#FFD700",
            marginBottom: "25px",
          }}
        >
          Studio Details
        </h2>

        <input
          name="name"
          placeholder="Studio Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <select
          name="state"
          value={form.state}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="">Select State</option>
          <option>Punjab</option>
          <option>Chandigarh</option>
          <option>Delhi</option>
          <option>Haryana</option>
          <option>Jammu</option>
          <option>Kashmir</option>
        </select>

        <select
          name="vehicleType"
          value={form.vehicleType}
          onChange={handleChange}
          style={inputStyle}
        >
          <option>Car</option>
          <option>Bike</option>
        </select>

        <input
          name="brand"
          placeholder="Enter Vehicle Brand"
          value={form.brand}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          name="model"
          placeholder="Enter Vehicle Model"
          value={form.model}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="">Select Service</option>

          {Object.keys(services).map((service) => (
            <option key={service}>
              {service}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="slotDate"
          value={form.slotDate}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "18px",
            border: "none",
            borderRadius: "12px",
            background:
              "linear-gradient(90deg,#ff0000,#ff9800)",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "700",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Book Appointment
        </button>
      </form>

      {/* SUMMARY */}

      <div
        style={{
          background: "#111",
          padding: "35px",
          borderRadius: "25px",
          border: "1px solid rgba(255,215,0,.15)",
          boxShadow:
            "0 0 30px rgba(255,215,0,.08)",
          height: "fit-content",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#FFD700",
          }}
        >
          Booking Summary
        </h2>

        <div
          style={{
            marginTop: "25px",
            lineHeight: "2",
            fontSize: "20px",
          }}
        >
          <p><b>Name:</b> {form.name}</p>
          <p><b>Phone:</b> {form.phone}</p>
          <p><b>Vehicle:</b> {form.brand} {form.model}</p>
          <p><b>Service:</b> {form.service}</p>
          <p><b>Date:</b> {form.slotDate}</p>
        </div>

        <hr
          style={{
            margin: "30px 0",
            borderColor: "#333",
          }}
        />

        <h1
          style={{
            color: "#00ff88",
            textAlign: "center",
            fontSize: "48px",
          }}
        >
          ₹{getNumericPrice().toLocaleString()}
        </h1>

        

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "30px",
            padding: "16px",
            borderRadius: "12px",
            textDecoration: "none",
            background: "#25D366",
            color: "#fff",
            fontWeight: "700",
          }}
        >
          Confirm On WhatsApp
        </a>

        
      </div>
    </div>
  </div>
);
}

const inputStyle = {
  width: "100%",
  padding: "16px",
  marginBottom: "16px",
  background: "#1a1a1a",
  color: "#fff",
  border: "1px solid #333",
  borderRadius: "12px",
  fontSize: "16px",
};