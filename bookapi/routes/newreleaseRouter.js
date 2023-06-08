const express = require("express")
const newreleaseRouter = express.Router()
const Newrelease = require ('../models/newrelease.js')


// Get All Newrelease
newreleaseRouter.get("/", async (req, res, next) => {
    try {
      const newreleases = await Newrelease.find();
      return res.status(200).send(newreleases);
    } catch (err) {
      res.status(500);
      return next(err);
    }
});

// Get Newrelease ID
newreleaseRouter.get("/:newreleaseId", async (req, res, next) => {
    try {
        const newrelease = await Newrelease.findOne({_id: req.params.newreleaseId});
        if (!newrelease) {
        return res.status(404).send(`Newrelease with ID ${req.params.newreleaseId} not found.`);
        }
        return res.status(200).send(newrelease);
    } catch (err) {
        res.status(500);
        return next(err);
    }
    });

// Post One
newreleaseRouter.post("/", async (req, res, next) => {
    console.log(req.body)
    try {
      const newNewrelease = new Newrelease(req.body);
      const savedNewrelease = await newNewrelease.save();
      return res.status(201).send(savedNewrelease);
    } catch (err) {
        res.status(500);
      return next(err);
    }
  });
  
  //delete one
  newreleaseRouter.delete("/:newreleaseId", async (req, res, next) => {
    try {
      const deletedNewrelease = await Newrelease.findOneAndDelete({_id: req.params.newreleaseId});
      if (!deletedNewrelease) {
        return res.status(404).send(`Newrelease with ID ${req.params.newreleaseId} not found.`);
      }
      return res.status(200).send(`Successfully deleted ${deletedNewrelease.title} from the database.`);
    } catch (err) {
      res.status(500);
      return next(err);
    }
  });

//update one
newreleaseRouter.put("/:newreleaseId", async (req, res, next) => {
    try {
        const newrelease = await Newrelease.findOneAndUpdate({ _id: req.params.newreleaseId }, 
            req.body, 
            { new: true }
            )
            return res.status(200).send(newrelease)
    } catch (err) {
        res.status(500);
        return next(err);
    }
})
;




module.exports = newreleaseRouter