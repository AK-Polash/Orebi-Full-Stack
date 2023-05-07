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
    repeatPassword,
    policy,
  } = req.body;

  if (nameValidation(res, firstName, "firstName")) {
    return;
  } else if (nameValidation(res, lastName, "lastName")) {
    return;
  } else if (emailValidation(res, email)) {
    return;
  } else if (telephoneValidation(res, telephone)) {
    return;
  } else if (passwordValidation(res, password)) {
    return;
  } else if (password.length < 8) {
    return res.send({
      error: "at lest 8 char require",
      errorField: "password",
    });
  } else if (password !== repeatPassword) {
    return res.send({
      error: "password does not match",
      errorField: "repeatPassword",
    });
  } else if (policy === false) {
    return res.send({
      error: "check this to signup",
      errorField: "policy",
    });
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
        return res.send({ error: "user already exist", errorField: "email" });
      }
    } catch (error) {
      return res.send({ error: "server error" });
    }
  });
};

module.exports = registrationController;
