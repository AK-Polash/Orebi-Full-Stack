const bcrypt = require("bcrypt");
const User = require("../models/registrationModel");
const passwordValidation = require("../utils/passwordValidation");

const resetPasswordController = async (req, res) => {
  const { email, newPassword } = req.body;
  if (passwordValidation(res, newPassword, "resetPassword")) return;

  try {
    if (newPassword.length < 8) {
      return res.send({
        error: "at lest 8 char require",
        errorField: "resetPassword",
      });
    } else if (!email) {
      return res.send({
        error: "untracked email",
        errorField: "resetPassword",
      });
    }

    const hash = await bcrypt.hash(newPassword, 10);
    await User.findOneAndUpdate({ email }, { password: hash });

    return res.send({ message: "successfully reset the password" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = resetPasswordController;
