const mongoose = require('mongoose');

const fantasySchema = new mongoose.Schema({
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

const Fantasy = mongoose.model('Fantasy', fantasySchema);

module.exports = Fantasy


