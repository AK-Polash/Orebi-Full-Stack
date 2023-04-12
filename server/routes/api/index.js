const express = require("express");
const auth = require("./auth");
const _ = express.Router();

_.use("/auth", auth);

module.exports = _;
