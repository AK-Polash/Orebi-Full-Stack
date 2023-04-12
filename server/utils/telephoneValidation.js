const telephonePattern = /^\S+$/;

const telephoneValidation = (res, telephone) => {
  if (!telephone) {
    res.send({ error: "telephone number required" });
    return true;
  } else if (!telephonePattern.test(telephone)) {
    res.send({ error: "field can't be empty" });
    return true;
  } else {
    return false;
  }
};

module.exports = telephoneValidation;
