const mongoose = require('mongoose');

const fictionSchema = new mongoose.Schema({
  name: String,
  author: String,
  description: String,
  old_price: Number,
  new_price: Number,
  imgUrl: String,
  quantitiy: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Fiction = mongoose.model('Fiction', fictionSchema);

module.exports = Fiction

