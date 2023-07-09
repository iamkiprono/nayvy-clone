const multer = require("multer");

const express = require("express");
const {
  addProduct,
  getProducts,
} = require("../controllers/ProductsController");
const router = express.Router();
const RequireAuth = require("../Middleware/RequireAuth");
const uploadImage = require("../es3");

// Configure multer for handling file uploads
const upload = multer({ dest: "uploads/" });

router.post("/", RequireAuth, upload.single("image"), uploadImage, addProduct);
router.get("/", getProducts);

module.exports = router;
