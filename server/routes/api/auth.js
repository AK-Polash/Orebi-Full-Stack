const express = require("express");
const registrationController = require("../../controllers/registrationController");
const loginController = require("../../controllers/loginController");
const _ = express.Router();

_.post("/registration", registrationController);
_.post("/login", loginController);

module.exports = _;
