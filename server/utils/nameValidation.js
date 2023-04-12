const namePattern = /^[a-zA-Z][a-zA-Z0-9\s]*$/;

const nameValidation = (res, name) => {
  if (!name) {
    res.send({ error: "name required" });
    return true;
  } else if (!namePattern.test(name)) {
    res.send({ error: "valid name required" });
    return true;
  } else {
    return false;
  }
};

module.exports = nameValidation;
