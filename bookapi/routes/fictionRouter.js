const express = require("express");
const Fiction = require('../models/fiction');
const fictionRouter = express.Router();

// Get all fiction books
fictionRouter.get("/", async (req, res) => {
  try {
    const fictions = await Fiction.find();
    res.status(200).json(fictions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching fiction books", error: err });
  }
});


fictionRouter.post("/", async (req, res) => {
  try {
    const newFiction = await Fiction.create(req.body); 

    res.status(201).json(newFiction); 
  } catch (err) {
    console.error("Error creating new fiction book:", err); 
    res.status(500).json({ message: "Error creating new fiction book", error: err.message }); 
  }
});

module.exports = fictionRouter;

