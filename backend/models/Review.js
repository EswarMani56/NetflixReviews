const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    imdbID: { type: String, required: true },
    movieName: String,
    rating: Number,
    comment: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
