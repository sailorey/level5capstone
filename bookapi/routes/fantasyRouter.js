const express = require("express")
const fantasyRouter = express.Router()
const Fantasy = require ('../models/fantasy.js')


// Get All fantasy
fantasyRouter.get("/", async (req, res, next) => {
    try {
      const fantasys = await Fantasy.find();
      return res.status(200).send(fantasys);
    } catch (err) {
      res.status(500);
      return next(err);
    }
});

// Get fantasy ID
fantasyRouter.get("/:fantasyId", async (req, res, next) => {
    try {
        const fantasy = await Fantasy.findOne({_id: req.params.fantasyId});
        if (!fantasy) {
        return res.status(404).send(`Fantasy with ID ${req.params.fantasyId} not found.`);
        }
        return res.status(200).send(fantasy);
    } catch (err) {
        res.status(500);
        return next(err);
    }
    });

// Post One
fantasyRouter.post("/", async (req, res, next) => {
    console.log(req.body)
    try {
      const newFantasy = new Fantasy(req.body);
      const savedFantasy = await newFantasy.save();
      return res.status(201).send(savedFantasy);
    } catch (err) {
        res.status(500);
      return next(err);
    }
  });
  
  //delete one
  fantasyRouter.delete("/:fantasyId", async (req, res, next) => {
    try {
      const deletedFantasy = await Fantasy.findOneAndDelete({_id: req.params.fantasyId});
      if (!deletedFantasy) {
        return res.status(404).send(`Fantasy with ID ${req.params.fantasyId} not found.`);
      }
      return res.status(200).send(`Successfully deleted ${deletedFantasy.title} from the database.`);
    } catch (err) {
      res.status(500);
      return next(err);
    }
  });

//update one
fantasyRouter.put("/:fantasyId", async (req, res, next) => {
    try {
        const fantasy = await Fantasy.findOneAndUpdate({ _id: req.params.fantasyId }, 
            req.body, 
            { new: true }
            )
            return res.status(200).send(fantasy)
    } catch (err) {
        res.status(500);
        return next(err);
    }
})
;




module.exports = fantasyRouter