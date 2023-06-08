import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

const NewReleases = () => {
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    axios.get('/newreleases')
      .then((response) => {
        setNewReleases(response.data);
      })
      .catch((error) => {
        console.error('Error fetching new releases:', error);
      });
  }, []);

  return (
    <div>
      <h2>New Releases</h2>
      {newReleases.map((book) => (
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

export default NewReleases;
