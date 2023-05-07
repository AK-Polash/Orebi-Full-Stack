const passwordPattern = /^\S+$/;

const passwordValidation = (res, password) => {
  if (!password) {
    res.send({ error: "password required", errorField: "password" });
    return true;
  } else if (!passwordPattern.test(password)) {
    res.send({ error: "password can't be empty", errorField: "password" });
    return true;
  } else {
    return false;
  }
};

module.exports = passwordValidation;
