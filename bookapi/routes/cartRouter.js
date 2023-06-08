const express = require("express");
const cartRouter = express.Router();

// In-memory storage for the cart items
let cartItems = [];

// Add item to cart
cartRouter.post("/", (req, res) => {
  const { itemId } = req.body; // Assuming the request body contains the item ID to add

  // Check if the item is already in the cart
  const existingItem = cartItems.find((item) => item.id === itemId);
  if (existingItem) {
    existingItem.quantity++; // If item already exists, increment its quantity
  } else {
    cartItems.push({ id: itemId, quantity: 1 }); // Otherwise, add the item to the cart with a quantity of 1
  }

  res.status(200).json({ message: "Item added to cart successfully." });
});

// Remove item from cart
cartRouter.delete("/:itemId", (req, res) => {
  const { itemId } = req.params; // Assuming the item ID is passed as a URL parameter

  // Find the item in the cart
  const itemIndex = cartItems.findIndex((item) => item.id === itemId);
  if (itemIndex !== -1) {
    const item = cartItems[itemIndex];
    if (item.quantity > 1) {
      item.quantity--; // If item quantity is greater than 1, decrement its quantity
    } else {
      cartItems.splice(itemIndex, 1); // Otherwise, remove the item from the cart
    }
    res.status(200).json({ message: "Item removed from cart successfully." });
  } else {
    res.status(404).json({ message: "Item not found in cart." });
  }
});

module.exports = cartRouter;
