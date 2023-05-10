const User = require("../models/registrationModel");

const matchOtpController = async (req, res) => {
  try {
    const { otp, email } = req.body;
    const existingUser = await User.find({ email });

    if (!existingUser.length > 0) {
      return res.send({ error: "user not found", errorField: "otp" });
    }

    if (existingUser[0].forgotPasswordOTP !== otp) {
      return res.send({ error: "otp does not match", errorField: "otp" });
    }

    await User.updateOne({ email }, { $unset: { forgotPasswordOTP: "" } });
    return res.send({ message: "otp matched" });
  } catch (err) {
    return res.send({ error: "internal server error", errorField: "otp" });
  }
};

module.exports = matchOtpController;
