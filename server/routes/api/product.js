const express = require("express");
const {
  secureUpload,
  createProductController,
  createVariantController,
  allProductsController,
} = require("../../controllers/productController");
const _ = express.Router();

_.post("/createProduct", secureUpload, createProductController);
_.post("/createVariant", createVariantController);
_.get("/allProducts", allProductsController);

module.exports = _;
