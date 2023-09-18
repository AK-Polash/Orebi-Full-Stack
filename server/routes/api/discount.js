const express = require("express");
const {
  createDiscountController,
  allDiscountController,
  removeDiscountController,
} = require("../../controllers/discountController");
const _ = express.Router();

_.post("/createDiscount", createDiscountController);
_.get("/allDiscount", allDiscountController);
_.post("/removeDiscount", removeDiscountController);

module.exports = _;
