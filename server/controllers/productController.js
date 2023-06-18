const mongoose = require("mongoose");
const User = require("../models/registrationModel");

const secureUpload = async (req, res, next) => {
  const { authorization } = req.headers;
  const userId = authorization.split("@")[1];
  const userSecret = authorization.split("@")[2];

  try {
    if (!authorization) {
      return res.send({ error: "Unauthorized attachment" });
    } else if (!userId) {
      return res.send({ error: "Unauthorized identy" });
    } else if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.send({ error: "Unauthorized persing" });
    } else if (!userSecret) {
      return res.send({ error: "Unauthorized credential" });
    } else if (userSecret !== process.env.MERCHANT_SECRET) {
      return res.send({ error: "Unauthorized entry" });
    }

    const user = await User.find({ _id: userId });
    if (!user.length > 0) return res.send({ error: "User not found" });
    const merchantRole = user[0].role;

    if (merchantRole !== "merchant") {
      return res.send({ error: "Not being able to create product" });
    } else if (userSecret === process.env.MERCHANT_SECRET) {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.send({ error: "Internal server error" });
  }
};

const createProductController = (req, res) => {
  const { productName } = req.body;
  console.log(productName);
};

module.exports = { secureUpload, createProductController };
