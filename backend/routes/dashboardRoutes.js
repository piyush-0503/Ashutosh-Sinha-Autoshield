const express = require("express");

const router = express.Router();

const Booking = require("../models/Booking");
const Gallery = require("../models/Gallery");
const Review = require("../models/Review");

router.get("/", async (req, res) => {
  try {

    const totalBookings =
      await Booking.countDocuments();

    const totalGallery =
      await Gallery.countDocuments();

    const totalReviews =
      await Review.countDocuments();

    const completedJobs =
      await Booking.countDocuments({
        status: "Completed",
      });

    const pendingJobs =
      await Booking.countDocuments({
        status: {
          $in: [
            "Pending",
            "Confirmed",
            "In Progress",
          ],
        },
      });

    const completedBookings =
      await Booking.find({
        status: "Completed",
      });

    let totalRevenue = 0;

    completedBookings.forEach(
      (booking) => {
        totalRevenue +=
          booking.estimatedPrice || 0;
      }
    );

    res.json({
      totalBookings,
      totalGallery,
      totalReviews,
      completedJobs,
      pendingJobs,
      totalRevenue,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;