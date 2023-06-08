const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Books Blueprint
const nonfictionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      author: {
        type: String,
      },
      description: {
        type: String,
      },
      old_price: {
        type: Number,
      },
      new_price: {
        type: Number,
      },
      imgUrl: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 0,
      },
    }, {
      timestamps: true,
    });

module.exports = mongoose.model("nonfiction", nonfictionSchema)