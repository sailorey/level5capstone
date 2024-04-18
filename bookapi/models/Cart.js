const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Bestselling' || 'Fantasy' || 'Fiction' || 'NewRelease' || 'NonFiction' },
  quantity: { type: Number, required: true, min: 1, default: 1 }
});


const CartSchema = new mongoose.Schema({
  user: { type: String, required: true },
  items: [CartItemSchema]
});

module.exports = mongoose.model('Cart', CartSchema);
