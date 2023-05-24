const User = require("../models/registrationModel");
const emailValidation = require("../utils/emailValidation");
const emailSend = require("../utils/emailSend");
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");

const forgotPasswordController = async (req, res) => {
  try {
    const { forgotPassword } = req.body;
    if (emailValidation(res, forgotPassword, "forgotPassword")) return;

    const existingUser = await User.find({ email: forgotPassword });
    if (!existingUser.length > 0) {
      return res.send({
        error: "user not found",
        errorField: "forgotPassword",
      });
    }

    const { uInt32 } = aleaRNGFactory(Date.now());
    const randomOtp = uInt32().toString().substring(0, 4);

    await User.findOneAndUpdate(
      { email: forgotPassword },
      { $set: { forgotPasswordOTP: randomOtp } }
    );

    return emailSend(res, randomOtp, forgotPassword);
  } catch (error) {
    return res.send({
      error: "internal server error",
      errorField: "forgotPassword",
    });
  }
};

module.exports = forgotPasswordController;
