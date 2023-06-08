import React , { useContext } from 'react';
import "../styles/Book.css"
import { CartContext } from '../context/CartContext';

const Book = ({ book, addToCart }) => {
  // const {addOneToCart, test} = useContext(CartContext);
  console.log(addToCart, "test")

  const handleAddToCart = () => {
    addToCart(book._id);
  };

  return (
    <div>
      <h3>{book.name}</h3>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p className="price">Price: ${book.new_price}</p>
      <button onClick={() => addToCart(book._id)}>Add to Cart</button>
    </div>
  );
};

export default Book;