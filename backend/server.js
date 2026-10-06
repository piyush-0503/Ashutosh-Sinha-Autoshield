require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const productRoutes = require("./routes/productRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

// Database Connection
connectDB();

// Middlewares
app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Static Upload Folder
app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

// ====================
// API Routes
// ====================

app.use("/api/auth", authRoutes);

app.use(
  "/api/bookings",
  bookingRoutes
);

app.use(
  "/api/gallery",
  galleryRoutes
);

app.use(
  "/api/reviews",
  reviewRoutes
);

app.use(
  "/api/dashboard",
  dashboardRoutes
);

app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/payments",
  paymentRoutes
);

// Image Upload Route
app.use(
  "/api/upload",
  uploadRoutes
);

// Home Route
app.get("/", (req, res) => {
  res.send("PPF Studio API Running 🚗");
});

// Start Server
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});