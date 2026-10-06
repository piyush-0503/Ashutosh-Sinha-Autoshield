const express = require("express");

const router = express.Router();

const {
  createCar,
  getCars,
} = require("../controllers/carController");

router.post("/", createCar);

router.get("/", getCars);

module.exports = router;