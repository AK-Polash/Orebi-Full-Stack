const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emailValidation = (res, email) => {
  if (!email) {
    res.send({ error: "email required", errorField: "email" });
    return true;
  } else if (!emailPattern.test(email)) {
    res.send({ error: "valid email required", errorField: "email" });
    return true;
  } else {
    return false;
  }
};

module.exports = emailValidation;
