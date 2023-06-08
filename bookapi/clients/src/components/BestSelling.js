import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Book from './Book';
import { CartContext } from '../context/CartContext';

const BestSelling = () => {
  const { addOneToCart } = useContext(CartContext);
  const [bestSelling, setBestSelling] = useState([]);
console.log(addOneToCart, "best selling")
  useEffect(() => {
    axios
      .get('/bestselling')
      .then((response) => {
        setBestSelling(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bestselling:', error);
      });
  }, []);

  return (
    <div>
      <h2>Best Selling</h2>
      {bestSelling.map((book) => (
        <Book
          key={book._id}
          book={book}
          addToCart={addOneToCart} // Update the prop name
        />
      ))}
    </div>
  );
};

export default BestSelling;
