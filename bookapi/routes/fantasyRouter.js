const express = require("express");
const Fantasy = require('../models/fantasy');
const fantasyRouter = express.Router();

// Get all fantasy books
fantasyRouter.get("/", async (req, res) => {
  try {
    const fantasys = await Fantasy.find();
    res.status(200).json(fantasys);
  } catch (err) {
    res.status(500).json({ message: "Error fetching fantasy books", error: err });
  }
});

// Create a new fantasy book
// POST /fantasy
fantasyRouter.post("/", async (req, res) => {
  try {
    const newFantasy = await Fantasy.create(req.body); // Assuming you're using Mongoose's `create` method

    res.status(201).json(newFantasy); // Return the newly created fantasy book
  } catch (err) {
    console.error("Error creating new fantasy book:", err); // Log the error for debugging purposes
    res.status(500).json({ message: "Error creating new fantasy book", error: err.message }); // Include error message in response
  }
});

fantasyRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFantasy = await Fantasy.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedFantasy);
  } catch (err) {
    res.status(500).json({ message: "Error updating fantasy book", error: err });
  }
});

module.exports = fantasyRouter;

