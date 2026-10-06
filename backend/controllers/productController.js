const Product = require("../models/Product");

// GET PRODUCTS
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({
      createdAt: -1,
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ADD PRODUCT
exports.addProduct = async (req, res) => {
  try {
    const {
      name,
      brand,
      price,
      image,
      description,
      stock,
    } = req.body;

    const product = await Product.create({
      name,
      brand,
      price: Number(price),
      image,
      description,
      stock: Number(stock),
    });

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};