const Product = require("../models/ProductModel");

// add product to db
const addProduct = async (req, res) => {
  console.log(req.body);
  const {
    name,
    description,
    features: featureList,
    link,
    price,
    currency,
  } = req.body;

  try {
    const newProduct = await Product.create({
      name,
      description,
      features: featureList,
      image: req.loc,
      link,
      price,
      currency,
      user: req.user.email,
    });

    res.json(newProduct);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

// get all products from db

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get single product
const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.find({ _id: id });
    res.send(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addProduct, getProducts, getProduct };
