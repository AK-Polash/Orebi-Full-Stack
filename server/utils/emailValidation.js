const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emailValidation = (res, email) => {
  if (!email) {
    res.send({ error: "email required" });
    return true;
  } else if (!emailPattern.test(email)) {
    res.send({ error: "valid email required" });
    return true;
  } else {
    return false;
  }
};

module.exports = emailValidation;
