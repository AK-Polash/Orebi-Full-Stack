const User = require("../models/registrationModel");
const emailValidation = require("../utils/emailValidation");
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");

const forgotPasswordController = async (req, res) => {
  try {
    const { email } = req.body;
    if (emailValidation(res, email)) return;

    const existingUser = await User.find({ email });
    if (!existingUser.length > 0) {
      return res.send({ error: "user not found", errorField: "email" });
    }

    const { uInt32 } = aleaRNGFactory(Date.now());
    const randomOtp = uInt32().toString().substring(0, 4);

    existingUser[0].forgotPasswordOTP = randomOtp;
    await existingUser[0].save();

    return res.send({ message: "password reset email sent" });
  } catch (err) {
    return res.send({ error: "internal server error", errorField: "email" });
  }
};

module.exports = forgotPasswordController;
