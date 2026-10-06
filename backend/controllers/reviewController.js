const Review = require("../models/Review");

// Create Review
const createReview = async (req, res) => {
  try {
    const review = await Review.create({
      customerName: req.body.customerName,
      rating: req.body.rating,
      comment: req.body.comment,
    });

    res.status(201).json({
      success: true,
      review,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .sort({ createdAt: -1 });

    res.status(200).json(reviews);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Review
const deleteReview = async (req, res) => {
  try {

    await Review.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Review Deleted",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createReview,
  getReviews,
  deleteReview,
};