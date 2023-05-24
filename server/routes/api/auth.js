const express = require("express");
const registrationController = require("../../controllers/registrationController");
const loginController = require("../../controllers/loginController");
const forgotPasswordController = require("../../controllers/forgotPasswordController");
const matchOtpController = require("../../controllers/matchOtpController");
const resetPasswordController = require("../../controllers/resetPasswordController");
const _ = express.Router();

_.post("/registration", registrationController);
_.post("/login", loginController);
_.post("/forgotPassword", forgotPasswordController);
_.post("/matchOtp", matchOtpController);
_.post("/resetPassword", resetPasswordController);

module.exports = _;
