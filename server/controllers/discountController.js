const mongoose = require("mongoose");
const Discount = require("../models/discountModel");
const { emptySpaceValidation } = require("../utils/spaceValidation");

const createDiscountController = async (req, res) => {
  const { percent, cash, flat, category, subCategory, product } = req.body;

  try {
    // ============ percent discount ============
    if (
      percent !== undefined &&
      (cash === undefined || cash === "") &&
      flat === undefined
    ) {
      if (
        category !== undefined &&
        (subCategory === undefined || subCategory === "") &&
        (product === undefined || product === "")
      ) {
        if (emptySpaceValidation(res, percent, "percent")) {
          return;
        } else if (!mongoose.Types.ObjectId.isValid(category)) {
          return res.send({ error: "Invalid category reference" });
        } else {
          const existingCategoryDiscount = await Discount.findOne({ category });
          if (existingCategoryDiscount) {
            return res.send({
              error: "Already added discount in this category",
            });
          }
          const discount = new Discount({
            percent,
            category,
          });
          await discount.save();
          return res.send({ message: "Discount added successfully" });
        }
      } else if (
        subCategory !== undefined &&
        (category === undefined || category === "") &&
        (product === undefined || product === "")
      ) {
        if (emptySpaceValidation(res, percent, "percent")) {
          return;
        } else if (!mongoose.Types.ObjectId.isValid(subCategory)) {
          return res.send({ error: "Invalid sub-category reference" });
        } else {
          const existingSubCategoryDiscount = await Discount.findOne({
            subCategory,
          });
          if (existingSubCategoryDiscount) {
            return res.send({
              error: "Already added discount in this sub-category",
            });
          }
          const discount = new Discount({
            percent,
            subCategory,
          });
          await discount.save();
          return res.send({ message: "Discount added successfully" });
        }
      } else if (
        product !== undefined &&
        (category === undefined || category === "") &&
        (subCategory === undefined || subCategory === "")
      ) {
        if (emptySpaceValidation(res, percent, "percent")) {
          return;
        } else if (!mongoose.Types.ObjectId.isValid(product)) {
          return res.send({ error: "Invalid sub-category reference" });
        } else {
          const existingProductDiscount = await Discount.findOne({ product });
          if (existingProductDiscount) {
            return res.send({
              error: "Already added discount in this product",
            });
          }
          const discount = new Discount({
            percent,
            product,
          });
          await discount.save();
          return res.send({ message: "Discount added successfully" });
        }
      } else {
        return res.send({ error: "Discount field missing" });
      }
    }
    // ============ cash discount ============
    else if (
      cash !== undefined &&
      (percent === undefined || percent === "") &&
      flat === undefined
    ) {
      if (
        category !== undefined &&
        (subCategory === undefined || subCategory === "") &&
        (product === undefined || product === "")
      ) {
        if (emptySpaceValidation(res, cash, "cash")) {
          return;
        } else if (!mongoose.Types.ObjectId.isValid(category)) {
          return res.send({ error: "Invalid category reference" });
        } else {
          const existingCategoryDiscount = await Discount.findOne({ category });
          if (existingCategoryDiscount) {
            return res.send({
              error: "Already added discount in this category",
            });
          }
          const discount = new Discount({
            cash,
            category,
          });
          await discount.save();
          return res.send({ message: "Discount added successfully" });
        }
      } else if (
        subCategory !== undefined &&
        (category === undefined || category === "") &&
        (product === undefined || product === "")
      ) {
        if (emptySpaceValidation(res, cash, "cash")) {
          return;
        } else if (!mongoose.Types.ObjectId.isValid(subCategory)) {
          return res.send({ error: "Invalid sub-category reference" });
        } else {
          const existingSubCategoryDiscount = await Discount.findOne({
            subCategory,
          });
          if (existingSubCategoryDiscount) {
            return res.send({
              error: "Already added discount in this sub-category",
            });
          }
          const discount = new Discount({
            cash,
            subCategory,
          });
          await discount.save();
          return res.send({ message: "Discount added successfully" });
        }
      } else if (
        product !== undefined &&
        (category === undefined || category === "") &&
        (subCategory === undefined || subCategory === "")
      ) {
        if (emptySpaceValidation(res, cash, "cash")) {
          return;
        } else if (!mongoose.Types.ObjectId.isValid(product)) {
          return res.send({ error: "Invalid product reference" });
        } else {
          const existingProductDiscount = await Discount.findOne({ product });
          if (existingProductDiscount) {
            return res.send({
              error: "Already added discount in this product",
            });
          }
          const discount = new Discount({
            cash,
            product,
          });
          await discount.save();
          return res.send({ message: "Discount added successfully" });
        }
      } else {
        return res.send({ error: "Discount field missing" });
      }
    }
    // ============ flat discount ============
    else if (
      flat !== undefined &&
      percent !== undefined &&
      (cash === undefined || cash === "")
    ) {
      if (emptySpaceValidation(res, percent, "percent")) {
        return;
      } else if (typeof flat !== "boolean") {
        return res.send({ error: "Boolean value required" });
      } else if (flat !== true) {
        return res.send({ error: "Boolean true value required" });
      }

      const existingFlatDiscount = await Discount.findOne({ flat });
      if (existingFlatDiscount && existingFlatDiscount.flat === true) {
        return res.send({
          error: `Already added ${existingFlatDiscount.percent}% flat discount`,
        });
      }

      const discount = new Discount({
        flat,
        percent,
      });
      await discount.save();
      return res.send({ message: "Discount added successfully" });
    } else {
      return res.send({ error: "Something went wrong" });
    }
  } catch (error) {
    console.log(error);
    return res.send({ error: "Internal server error" });
  }
};

const allDiscountController = async (req, res) => {
  try {
    const allDiscount = await Discount.find({}).select("-__v");
    if (!allDiscount.length > 0) {
      return res.send({ error: "No discount added yet" });
    }

    return res.send({ message: "Request successfull", allDiscount });
  } catch (error) {
    console.log(error);
    return res.send({ error: "Internal server error" });
  }
};

const removeDiscountController = async (req, res) => {
  const { discountId } = req.body;

  if (!discountId) {
    return res.send({ error: "Discount id is required" });
  } else if (!mongoose.Types.ObjectId.isValid(discountId)) {
    return res.send({ error: "Invalid discount id" });
  }

  try {
    const data = await Discount.findOneAndDelete(
      { _id: discountId },
      { new: true }
    );

    if (data === null) {
      return res.send({ error: "Could not find the selected item" });
    }
    return res.send({ message: "Discount removed successfully" });
  } catch (error) {
    console.log(error);
    return res.send({ error: "Internal server error" });
  }
};

module.exports = {
  createDiscountController,
  allDiscountController,
  removeDiscountController,
};
