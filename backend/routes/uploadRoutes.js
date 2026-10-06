const express = require("express");
const multer = require("multer");
const imagekit = require("../config/imagekit");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post(
  "/image",
  upload.single("image"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No file selected",
        });
      }

      const result = await imagekit.upload({
        file: req.file.buffer,
        fileName:
          Date.now() +
          "-" +
          req.file.originalname,
        folder: "/PPF-Studio",
      });

      res.json({
        success: true,
        imageUrl: result.url,
      });
    } catch (error) {
      console.log("UPLOAD ERROR:", error);

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);

module.exports = router;