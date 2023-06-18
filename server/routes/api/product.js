const express = require("express");
const {
  secureUpload,
  createProductController,
} = require("../../controllers/productController");
const _ = express.Router();

_.post("/createProduct", secureUpload, createProductController);

module.exports = _;
