// import React, { useContext, useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from './Book';
// import { CartContext } from '../context/CartContext';

const BestSelling = () => {
  const [bestSelling, setBestSelling] = useState([]);

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
    
    <div className='book'>
      <h2>Best Selling</h2>
      <div className='book-container'>
        
        {bestSelling.map((book) => (
          <Book
            key={book._id}
            book={book}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;