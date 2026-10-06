const express = require("express");

const router = express.Router();

const upload =
require("../middleware/upload");

const {
  getGallery,
  addGallery,
  deleteGallery,
} = require(
  "../controllers/galleryController"
);

router.get("/", getGallery);

router.post(
  "/",
  upload.single("image"),
  addGallery
);

router.delete(
  "/:id",
  deleteGallery
);

module.exports = router;