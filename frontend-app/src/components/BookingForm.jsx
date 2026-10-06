import { useState } from "react";
import API from "../api/api";

function BookingForm() {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    vehicleType: "",
    vehicleModel: "",
    serviceType: "",
    bookingDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/bookings", formData);

      alert("Booking Created Successfully");

      console.log(res.data);

      setFormData({
        customerName: "",
        phone: "",
        vehicleType: "",
        vehicleModel: "",
        serviceType: "",
        bookingDate: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error creating booking");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="customerName"
        placeholder="Customer Name"
        value={formData.customerName}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <input
        name="vehicleType"
        placeholder="Vehicle Type"
        value={formData.vehicleType}
        onChange={handleChange}
      />

      <input
        name="vehicleModel"
        placeholder="Vehicle Model"
        value={formData.vehicleModel}
        onChange={handleChange}
      />

      <input
        name="serviceType"
        placeholder="Service Type"
        value={formData.serviceType}
        onChange={handleChange}
      />

      <input
        type="date"
        name="bookingDate"
        value={formData.bookingDate}
        onChange={handleChange}
      />

      <button type="submit">
        Book Now
      </button>
    </form>
  );
}

export default BookingForm;