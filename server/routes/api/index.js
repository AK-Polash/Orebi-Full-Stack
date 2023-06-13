const express = require("express");
const authRoutes = require("./auth");
const categoryRoutes = require("./category");
const _ = express.Router();

_.use("/auth", authRoutes);
_.use("/category", categoryRoutes);

module.exports = _;
