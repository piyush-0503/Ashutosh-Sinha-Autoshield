const Gallery = require("../models/Gallery");

const getGallery = async (req, res) => {
  try {
    const data = await Gallery.find().sort({
      createdAt: -1,
    });

    res.json(data);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addGallery = async (req, res) => {
  try {

    const gallery = new Gallery({
      title: req.body.title,
      carName: req.body.carName,
      description: req.body.description,
      image: req.file.filename,
    });

    const saved = await gallery.save();

    res.status(201).json(saved);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteGallery = async (
  req,
  res
) => {
  try {

    await Gallery.findByIdAndDelete(
      req.params.id
    );

    res.json({
      success: true,
      message:
        "Gallery Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getGallery,
  addGallery,
  deleteGallery,
};