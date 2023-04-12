const express = require("express");
const registration = require("../../controllers/registrationController");
const _ = express.Router();

_.post("/registration", registration);

module.exports = _;
