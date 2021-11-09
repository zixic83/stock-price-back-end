const mongoose = require("mongoose");
const Double = require("@mongoosejs/double");

const portfolioSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, "Stock code must not be empty"],
  },
  avgPrice: {
    type: Number,
    required: [true, "Average price must not be empty"],
  },
  units: {
    type: Number,
    required: [true, "Number of units must not be empty"],
  },
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
