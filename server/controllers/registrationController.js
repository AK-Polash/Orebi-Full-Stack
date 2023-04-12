const bcrypt = require("bcrypt");
const User = require("../models/registrationModel");
const nameValidation = require("../utils/nameValidation");
const emailValidation = require("../utils/emailValidation");
const telephoneValidation = require("../utils/telephoneValidation");
const passwordValidation = require("../utils/passwordValidation");

const registrationController = (req, res) => {
  const {
    firstName,
    lastName,
    email,
    telephone,
    addressOne,
    addressTwo,
    city,
    postCode,
    country,
    state,
    password,
  } = req.body;

  if (nameValidation(res, firstName)) {
    return;
  } else if (nameValidation(res, lastName)) {
    return;
  } else if (emailValidation(res, email)) {
    return;
  } else if (telephoneValidation(res, telephone)) {
    return;
  } else if (passwordValidation(res, password)) {
    return;
  }

  bcrypt.hash(password, 10, async (err, hash) => {
    if (err) return res.send({ error: "internal error" });

    try {
      const existUser = await User.find({ email: email });
      if (existUser.length === 0) {
        const user = new User({
          firstName,
          lastName,
          email,
          telephone,
          addressOne,
          addressTwo,
          city,
          postCode,
          country,
          state,
          password: hash,
        });

        return user
          .save()
          .then(() => res.send({ message: "registration successful" }));
      } else {
        return res.send({ message: "user already exist" });
      }
    } catch (error) {
      return res.send({ error: "server error" });
    }
  });
};

module.exports = registrationController;
