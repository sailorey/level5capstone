const express = require("express")
const nonfictionRouter = express.Router()
const nonFiction = require ('../models/nonfiction.js')


// Get All Fiction
nonfictionRouter.get("/", async (req, res, next) => {
    try {
      const nonfictions = await nonFiction.find();
      return res.status(200).send(nonfictions);
    } catch (err) {
      res.status(500);
      return next(err);
    }
});

// Get nonfiction ID
nonfictionRouter.get("/:nonfictionId", async (req, res, next) => {
    try {
        const nonfiction = await nonFiction.findOne({_id: req.params.nonfictionId});
        if (!nonfiction) {
        return res.status(404).send(`nonFiction with ID ${req.params.nonfictionId} not found.`);
        }
        return res.status(200).send(nonfiction);
    } catch (err) {
        res.status(500);
        return next(err);
    }
    });

// Post One
nonfictionRouter.post("/", async (req, res, next) => {
    console.log(req.body)
    try {
      const newnonFiction = new nonFiction(req.body);
      const savednonFiction = await newnonFiction.save();
      return res.status(201).send(savednonFiction);
    } catch (err) {
        res.status(500);
      return next(err);
    }
  });
  
  //delete one
  nonfictionRouter.delete("/:nonfictionId", async (req, res, next) => {
    try {
      const deletednonFiction = await nonFiction.findOneAndDelete({_id: req.params.nonfictionId});
      if (!deletednonFiction) {
        return res.status(404).send(`nonFiction with ID ${req.params.nonfictionId} not found.`);
      }
      return res.status(200).send(`Successfully deleted ${deletednonFiction.title} from the database.`);
    } catch (err) {
      res.status(500);
      return next(err);
    }
  });

//update one
nonfictionRouter.put("/:nonfictionId", async (req, res, next) => {
    try {
        const nonfiction = await nonFiction.findOneAndUpdate({ _id: req.params.nonfictionId }, 
            req.body, 
            { new: true }
            )
            return res.status(200).send(nonfiction)
    } catch (err) {
        res.status(500);
        return next(err);
    }
})
;




module.exports = nonfictionRouter