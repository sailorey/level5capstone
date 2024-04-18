const mongoose = require('mongoose');

const bestsellingSchema = new mongoose.Schema({

  name: String,
  author: String,
  description: String,
  old_price: Number,
  new_price: Number,
  imgUrl: String,
  quantity: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Bestselling = mongoose.model('Bestselling', bestsellingSchema);

module.exports = Bestselling;
