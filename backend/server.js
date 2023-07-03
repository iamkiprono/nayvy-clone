require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db.js");

const ProductRoutes = require("./routes/ProductRoutes.js");

connectDB();

app.use(cors());
app.use(express.json());

// routes
app.use("/products", ProductRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Running on ${process.env.PORT}`);
});
