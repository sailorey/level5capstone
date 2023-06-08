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
          name={book.name}
          author={book.author}
          description={book.description}
          oldPrice={book.old_price}
          newPrice={book.new_price}
          imgUrl={book.imgUrl}
        />
      ))}
    </div>
  );
};

export default Fantasy;
