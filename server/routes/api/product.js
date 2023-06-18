const express = require("express");
const _ = express.Router();

_.get("/allProduct", (req, res) => {
  res.send("Test");
});

module.exports = _;
