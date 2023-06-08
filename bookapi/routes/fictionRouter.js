const express = require("express")
const fictionRouter = express.Router()
const Fiction = require ('../models/fiction.js')


// Get All Fiction
fictionRouter.get("/", async (req, res, next) => {
    try {
      const fictions = await Fiction.find();
      return res.status(200).send(fictions);
    } catch (err) {
      res.status(500);
      return next(err);
    }
});

// Get fiction ID
fictionRouter.get("/:fictionId", async (req, res, next) => {
    try {
        const fiction = await Fiction.findOne({_id: req.params.fictionId});
        if (!fiction) {
        return res.status(404).send(`Fiction with ID ${req.params.fictionId} not found.`);
        }
        return res.status(200).send(fiction);
    } catch (err) {
        res.status(500);
        return next(err);
    }
    });

// Post One
fictionRouter.post("/", async (req, res, next) => {
    console.log(req.body)
    try {
      const newFiction = new Fiction(req.body);
      const savedFiction = await newFiction.save();
      return res.status(201).send(savedFiction);
    } catch (err) {
        res.status(500);
      return next(err);
    }
  });
  
  //delete one
  fictionRouter.delete("/:fictionId", async (req, res, next) => {
    try {
      const deletedFiction = await Fiction.findOneAndDelete({_id: req.params.fictionId});
      if (!deletedFiction) {
        return res.status(404).send(`Fiction with ID ${req.params.fictionId} not found.`);
      }
      return res.status(200).send(`Successfully deleted ${deletedFiction.title} from the database.`);
    } catch (err) {
      res.status(500);
      return next(err);
    }
  });

//update one
fictionRouter.put("/:fictionId", async (req, res, next) => {
    try {
        const fiction = await Fiction.findOneAndUpdate({ _id: req.params.fictionId }, 
            req.body, 
            { new: true }
            )
            return res.status(200).send(fiction)
    } catch (err) {
        res.status(500);
        return next(err);
    }
})
;




module.exports = fictionRouter