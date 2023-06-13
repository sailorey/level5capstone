import React, { createContext, useState } from 'react';
import axios from "axios"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(null)
  
  function getCart() {
    axios.get("/cart")
    // .then(res => console.log(res.data.cartItems[0].quantity, "get cart"))
    .then(res => setCartQuantity(res.data.cartItems[0].quantity))
  }

  function addToCart(item){
    axios.post("/cart", item)
    .then(res => console.log(res, "add to cart"))
    setCartItems((prevItems) => [...prevItems, item]);
    getCart()
  }

  console.log(cartItems, "cart items")

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};