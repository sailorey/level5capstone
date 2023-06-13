import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

const Fantasy = () => {
  const [fantasyBooks, setFantasyBooks] = useState([]);

  useEffect(() => {
    axios.get('/fantasy')
      .then((response) => {
        setFantasyBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching fantasy books:', error);
      });
  }, []);

  return (
    <div>
      <h2>Fantasy</h2>
      {fantasyBooks.map((book) => (
        <Book
        key={book._id}
        book={book}
      />
      ))}
    </div>
  );
};

export default Fantasy;
