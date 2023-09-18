const mongoose = require("mongoose");
const { Schema } = mongoose;

const variantSchema = new Schema({
  image: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },

  color: {
    type: String,
  },

  ram: {
    type: String,
  },

  storage: {
    type: String,
  },

  size: {
    type: String,
  },

  created: {
    type: Date,
    default: Date.now,
  },

  updated: {
    type: Date,
  },
});

module.exports = mongoose.model("Variant", variantSchema);
