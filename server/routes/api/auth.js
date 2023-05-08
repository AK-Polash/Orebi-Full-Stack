const express = require("express");
const registrationController = require("../../controllers/registrationController");
const loginController = require("../../controllers/loginController");
const forgotPasswordController = require("../../controllers/forgotPasswordController");
const _ = express.Router();

_.post("/registration", registrationController);
_.post("/login", loginController);
_.post("/forgotPassword", forgotPasswordController);

module.exports = _;
