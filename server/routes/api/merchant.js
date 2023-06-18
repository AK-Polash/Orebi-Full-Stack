const express = require("express");
const {
  becomeMerchantController,
  merchantStatusController,
  allMerchantController,
} = require("../../controllers/merchantController");
const _ = express.Router();

_.post("/becomeMerchant", becomeMerchantController);
_.post("/merchantStatus", merchantStatusController);
_.get("/allMerchant", allMerchantController);

module.exports = _;
