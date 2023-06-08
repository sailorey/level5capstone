import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { items, deleteFromCart, clearCart } = useContext(CartContext);
console.log(items, "items")
  return (
    <div className="cart">
      <h2>Cart</h2>
      {items?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items?.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <button onClick={() => deleteFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {items?.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
    </div>
  );
};

export default Cart;
