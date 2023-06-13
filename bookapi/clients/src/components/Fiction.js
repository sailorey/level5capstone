import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

const Fiction = () => {
  const [fictionBooks, setFictionBooks] = useState([]);

  useEffect(() => {
    axios.get('/fiction')
      .then((response) => {
        setFictionBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching fiction books:', error);
      });
  }, []);

  return (
    <div>
      <h2>Fiction</h2>
      {fictionBooks.map((book) => (
        <Book
        key={book._id}
        book={book}
      />
      ))}
    </div>
  );
};

export default Fiction;
