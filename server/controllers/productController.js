const mongoose = require("mongoose");
const User = require("../models/registrationModel");
const Store = require("../models/merchantModel");
const Product = require("../models/productModel");
const Variant = require("../models/variantModel");
const Option = require("../models/optionModel");
const nameValidation = require("../utils/nameValidation");
const { emptySpaceValidation } = require("../utils/spaceValidation");

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

const createProductController = async (req, res) => {
  const { name, description, image, store } = req.body;

  if (nameValidation(res, name, "productName")) {
    return;
  } else if (emptySpaceValidation(res, description, "description")) {
    return;
  } else if (emptySpaceValidation(res, image, "productImage")) {
    return;
  } else if (!mongoose.Types.ObjectId.isValid(store)) {
    return res.send({ error: "Store reference error", errorField: "storeId" });
  }

  try {
    const existingProduct = await Product.find({ name });
    if (existingProduct.length > 0) {
      return res.send({
        error: "Product already exist in this name",
        errorField: "productName",
      });
    }

    const product = new Product({
      name,
      description,
      image,
      store,
    });

    await product.save();
    await Store.findOneAndUpdate(
      { _id: product.store },
      { $push: { products: product._id } },
      { new: true }
    );

    return res.send({ message: "Product created successfully", product });
  } catch (error) {
    console.log(error);
    return res.send({ error: "Internal server error" });
  }
};

const createVariantController = async (req, res) => {
  const { name, image, product } = req.body;

  if (nameValidation(res, name, "variantName")) {
    return;
  } else if (emptySpaceValidation(res, image, "variantImage")) {
    return;
  } else if (!mongoose.Types.ObjectId.isValid(product)) {
    return res.send({
      error: "Invalid product reference",
      errorField: "productId",
    });
  }

  try {
    const existingVariant = await Variant.find({ name });
    if (existingVariant.length > 0) {
      return res.send({
        error: "Variant already exist",
        errorField: "variantName",
      });
    }

    const variant = new Variant({
      name,
      image,
      product,
    });

    await variant.save();
    await Product.findOneAndUpdate(
      { _id: variant.product },
      { $push: { variants: variant._id } },
      { new: true }
    );

    return res.send({ message: "Variant created successfully", variant });
  } catch (error) {
    console.log(error);
    return res.send({ error: "Internal server error" });
  }
};

const allProductsController = async (req, res) => {
  try {
    const allProducts = await Product.find({})
      .select({ __v: 0 })
      .populate("variants", "-product -__v");

    if (!allProducts.length > 0) {
      return res.send({ error: "Can't find the products" });
    }

    return res.send(allProducts);
  } catch (error) {
    console.log(error);
    return res.send({ error: "Internal server error" });
  }
};

module.exports = {
  secureUpload,
  createProductController,
  createVariantController,
  allProductsController,
};
