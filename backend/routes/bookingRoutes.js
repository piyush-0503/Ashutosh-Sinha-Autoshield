const express = require("express");

const router = express.Router();

const {
  createBooking,
  getBookings,
  deleteBooking,
  completeBooking,
  getCompletedBookings,
} = require("../controllers/bookingController");


// CREATE BOOKING
router.post("/", createBooking);


// GET ALL BOOKINGS
router.get("/", getBookings);


// GET COMPLETED BOOKINGS
router.get(
  "/completed",
  getCompletedBookings
);


// MARK BOOKING COMPLETED
router.put(
  "/complete/:id",
  completeBooking
);


// DELETE BOOKING
router.delete(
  "/:id",
  deleteBooking
);

module.exports = router;