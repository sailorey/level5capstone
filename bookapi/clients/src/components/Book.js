import React , { useContext } from 'react';
import "../styles/Book.css"
import { CartContext } from '../context/CartContext';

const Book = ({ book }) => {
  const {addToCart} = useContext(CartContext);

  return (
    <div className='book'>
      <h3>{book.name}</h3>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <img src={book.imgUrl} alt={book.name}/>
      <p className="price">Price: ${book.new_price}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default Book;