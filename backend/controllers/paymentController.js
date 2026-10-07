// Razorpay Removed

exports.createOrder = async (req, res) => {
  return res.status(200).json({
    success: false,
    message: "Online payment is currently disabled",
  });
};

exports.verifyPayment = async (req, res) => {
  return res.status(200).json({
    success: false,
    message: "Payment verification is disabled",
  });
};