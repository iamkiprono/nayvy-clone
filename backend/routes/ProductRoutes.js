const express = require("express");
const { addProduct } = require("../controllers/ProductsController");
const router = express.Router();

router.post("/", addProduct);

module.exports = router;
