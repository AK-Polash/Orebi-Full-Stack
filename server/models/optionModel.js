const mongoose = require("mongoose");
const { Schema } = mongoose;

const optionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  value: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],

  variant: {
    type: Schema.Types.ObjectId,
    ref: "Variant",
  },

  created: {
    type: Date,
    default: Date.now,
  },

  updated: {
    type: Date,
  },
});

module.exports = mongoose.model("Option", optionSchema);
