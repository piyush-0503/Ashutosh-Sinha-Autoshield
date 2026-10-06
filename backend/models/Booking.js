const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      default: "",
    },

    state: {
      type: String,
      default: "",
    },

    city: {
      type: String,
      default: "",
    },

    vehicleType: {
      type: String,
      required: true,
      default: "Car",
    },

    brand: {
      type: String,
      default: "",
    },

    vehicleModel: {
      type: String,
      default: "",
    },

    variant: {
      type: String,
      default: "",
    },

    year: {
      type: String,
      default: "",
    },

    serviceType: {
      type: String,
      required: true,
    },

    slotDate: {
      type: String,
      required: true,
    },

    

    bookingDate: {
      type: Date,
      default: Date.now,
    },

    estimatedPrice: {
      type: Number,
      default: 0,
    },

    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid"],
      default: "Pending",
    },

    paymentId: {
      type: String,
      default: "",
    },

    adminNotes: {
      type: String,
      default: "",
    },

    completionDate: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Confirmed",
        "In Progress",
        "Completed",
        "Cancelled",
      ],
      default: "Pending",
    },
    completedAt: {
  type: Date,
  default: null,
},
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Booking",
  bookingSchema
);