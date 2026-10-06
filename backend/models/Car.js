const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
{
  brand: {
    type: String,
    required: true,
  },

  model: {
    type: String,
    required: true,
  },

  variant: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default: "",
  },

  ppfPrice: {
    type: Number,
    required: true,
  },

  ceramicPrice: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    default: "",
  },
},
{ timestamps: true }
);

module.exports = mongoose.model("Car", carSchema);