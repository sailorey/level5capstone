const express = require('express');
const Cart = require('../models/Cart');
const cartRouter = express.Router();

// Hardcoded user ID
const userId = '123';

// Add or update an item in the cart
cartRouter.post('/', async (req, res) => {
  const { bookId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }
    const itemIndex = cart.items.findIndex(item => item.book.toString() === bookId);
    if (itemIndex > -1) {
      let item = cart.items[itemIndex];
      item.quantity += quantity;
      cart.items[itemIndex] = item;
    } else {
      
      cart.items.push({ book: { _id: bookId, name: 'Book Name', author: 'Author Name', imgUrl: 'book_image_url' }, quantity });
    }
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ message: 'Error updating cart', error: error.message });
  }
});

// Remove an item from the cart
cartRouter.delete('/:bookId', async (req, res) => {
  const { bookId } = req.params;
  try {
    let cart = await Cart.findOne({ user: userId });
    const itemIndex = cart.items.findIndex(item => item.book.toString() === bookId);
    if (itemIndex > -1) {
      cart.items.splice(itemIndex, 1);
      await cart.save();
      res.status(200).send('Item removed from cart successfully');
    } else {
      res.status(404).send('Item not found in cart');
    }
  } catch (error) {
    res.status(400).json({ message: 'Error removing item from cart', error: error.message });
  }
});


cartRouter.get('/', async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: userId }).populate('items.book'); // Populate the 'book' field
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found for the user' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cart', error: error.message });
  }
});


// Clear all items from the cart
cartRouter.delete('/', async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate({ user: userId }, { $set: { items: [] } }, { new: true });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found for the user' });
    }
    res.status(200).json({ message: 'Cart cleared successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error clearing cart', error: error.message });
  }
});

// Update item quantity in the cart
cartRouter.post('/:itemId', async (req, res) => {
  const { itemId } = req.params;
  const { quantity } = req.body;
  try {
    let cart = await Cart.findOne({ user: userId });
    const item = cart.items.find(item => item._id.toString() === itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }
    item.quantity = quantity;
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item quantity', error: error.message });
  }
});

module.exports = cartRouter;
