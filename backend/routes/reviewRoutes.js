const express = require("express");
const Review = require("../models/Review");

const router = express.Router();

// POST review
router.post("/", async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET all reviews
// GET reviews by imdbID
router.get("/:imdbID", async (req, res) => {
  const reviews = await Review.find({
    imdbID: req.params.imdbID,
  }).sort({ createdAt: -1 });

  res.json(reviews);
});

module.exports = router;
