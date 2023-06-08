const express = require("express")
const bestsellingRouter = express.Router()
const Bestselling = require ('../models/bestselling.js')


// Get All Bestselling
bestsellingRouter.get("/", async (req, res, next) => {
    try {
      const bestsellings = await Bestselling.find();
      return res.status(200).send(bestsellings);
    } catch (err) {
      res.status(500);
      return next(err);
    }
});

// Get Bestselling ID
bestsellingRouter.get("/:bestsellingId", async (req, res, next) => {
    try {
        const bestselling = await Bestselling.findOne({_id: req.params.bestsellingId});
        if (!bestselling) {
        return res.status(404).send(`Bestselling with ID ${req.params.bestsellingId} not found.`);
        }
        return res.status(200).send(bestselling);
    } catch (err) {
        res.status(500);
        return next(err);
    }
    });

// Post One
bestsellingRouter.post("/", async (req, res, next) => {
    console.log(req.body)
    try {
      const newBestselling = new Bestselling(req.body);
      const savedBestselling = await newBestselling.save();
      return res.status(201).send(savedBestselling);
    } catch (err) {
        res.status(500);
      return next(err);
    }
  });
  
  //delete one
  bestsellingRouter.delete("/:bestsellingId", async (req, res, next) => {
    try {
      const deletedBestselling = await Bestselling.findOneAndDelete({_id: req.params.bestsellingId});
      if (!deletedBestselling) {
        return res.status(404).send(`Bestselling with ID ${req.params.bestsellingId} not found.`);
      }
      return res.status(200).send(`Successfully deleted ${deletedBestselling.title} from the database.`);
    } catch (err) {
      res.status(500);
      return next(err);
    }
  });

//update one
bestsellingRouter.put("/:bestsellingId", async (req, res, next) => {
    try {
        const bestselling = await Bestselling.findOneAndUpdate({ _id: req.params.bestsellingId }, 
            req.body, 
            { new: true }
            )
            return res.status(200).send(bestselling)
    } catch (err) {
        res.status(500);
        return next(err);
    }
})
;




module.exports = bestsellingRouter