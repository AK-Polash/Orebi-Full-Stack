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
  } else {
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
      password,
    });

    user.save().then(() => res.send({ message: "registration successful!" }));
  }
};

module.exports = registrationController;
