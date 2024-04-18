const express = require("express");
const Bestselling = require('../models/bestselling');
const bestsellingRouter = express.Router();

// Get all bestselling books
bestsellingRouter.get("/", async (req, res) => {
  try {
    const bestsellings = await Bestselling.find();
    res.status(200).json(bestsellings);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bestselling books", error: err });
  }
});

// Create a new bestselling book
bestsellingRouter.post("/", async (req, res) => {
  try {
    const newBestselling = new Bestselling(req.body);
    const savedBestselling = await newBestselling.save();
    res.status(201).json(savedBestselling);
  } catch (err) {
    res.status(500).json({ message: "Error creating new bestselling book", error: err });
  }
});

bestsellingRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBestselling = await Bestselling.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedBestselling);
  } catch (err) {
    res.status(500).json({ message: "Error updating bestselling book", error: err });
  }
});


module.exports = bestsellingRouter;