import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

const NonFiction = () => {
  const [nonFictionBooks, setNonFictionBooks] = useState([]);

  useEffect(() => {
    axios.get('/nonfiction')
      .then((response) => {
        setNonFictionBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching non-fiction books:', error);
      });
  }, []);

  return (
    <div>
      <h2>Non-Fiction</h2>
      {nonFictionBooks.map((book) => (
        <Book
        key={book._id}
        book={book}
      />
      ))}
    </div>
  );
};

export default NonFiction;
