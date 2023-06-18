const mongoose = require("mongoose");
const Store = require("../models/merchantModel");
const User = require("../models/registrationModel");
const nameValidation = require("../utils/nameValidation");
const emailValidation = require("../utils/emailValidation");
const telephoneValidation = require("../utils/telephoneValidation");
const {
  emptySpaceValidation,
  noSpaceValidation,
} = require("../utils/spaceValidation");

const becomeMerchantController = async (req, res) => {
  const {
    storeName,
    storeEmail,
    storePhone,
    storeAddress,
    voterIdNumber,
    owner,
  } = req.body;

  if (nameValidation(res, storeName, "storeName")) {
    return;
  } else if (emailValidation(res, storeEmail, "storeEmail")) {
    return;
  } else if (telephoneValidation(res, storePhone)) {
    return;
  } else if (emptySpaceValidation(res, storeAddress, "storeAddress")) {
    return;
  } else if (noSpaceValidation(res, voterIdNumber, "voterIdNumber")) {
    return;
  } else if (noSpaceValidation(res, owner, "owner")) {
    return;
  }

  try {
    const existingStore = await Store.find({ storeEmail });
    const existingVoterId = await Store.find({ voterIdNumber });

    if (existingStore.length > 0) {
      return res.send({
        error: "Store already created with this Email",
        errorField: "storeEmail",
      });
    } else if (existingVoterId.length > 0) {
      return res.send({
        error: "Already created a store with this VoterId",
        errorField: "storeEmail",
      });
    }

    const store = new Store({
      storeName,
      storeEmail,
      storePhone,
      storeAddress,
      voterIdNumber,
      owner,
    });

    await store.save();

    return res.send({
      message: "Successfully created store as a merchant",
    });
  } catch (error) {
    console.log(error);
    return res.send({ error: "Internal server error" });
  }
};

const merchantStatusController = async (req, res) => {
  const { email, status, userId } = req.body;

  if (emailValidation(res, email, "email")) {
    return;
  } else if (noSpaceValidation(res, status, "status")) {
    return;
  } else if (noSpaceValidation(res, userId, "userId")) {
    return;
  } else if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.send({ error: "Reference error occured" });
  }

  try {
    const existingMerchant = await Store.find({ storeEmail: email });

    if (!existingMerchant.length > 0) {
      return res.send({
        error: "Merchant request not found",
        errorField: "email",
      });
    }

    if (status === "rejected" || status === "waiting") {
      await Store.findOneAndUpdate(
        { storeEmail: email },
        { $set: { status: status } },
        { new: true }
      );

      await User.findOneAndUpdate(
        { _id: userId },
        { $set: { role: "member", merchant: false } },
        { new: true }
      );

      if (status === "waiting") {
        return res.send({ message: "Waited merchant request" });
      }

      return res.send({ message: "Rejected merchant request" });
    } else if (status === "approved") {
      await Store.findOneAndUpdate(
        { storeEmail: email },
        { $set: { status: status } },
        { new: true }
      );

      await User.findOneAndUpdate(
        { _id: userId },
        { $set: { role: "merchant", merchant: true } },
        { new: true }
      );

      return res.send({ message: "Approved merchant request" });
    }
  } catch (error) {
    console.log(error);
    return res.send({ error: "Internal server error" });
  }
};

const allMerchantController = async (req, res) => {
  const { authorization } = req.headers;
  const allMerchant = await Store.find({}).select({ __v: 0 });

  if (authorization !== process.env.allMerchant_secret) {
    return res.send({ error: "Unauthorized entry" });
  }

  return res.send(allMerchant);
};

module.exports = {
  becomeMerchantController,
  merchantStatusController,
  allMerchantController,
};
