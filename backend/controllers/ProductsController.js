const Product = require("../models/ProductModel");

const addProduct = async (req, res) => {
  const { product } = req.body;
  try {
    const newProduct = await Product.create(product);
    res.json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addProduct };
