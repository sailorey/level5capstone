import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import BestSelling from './components/BestSelling';
import NewReleases from './components/NewReleases';
import NonFiction from './components/Nonfiction';
import Fiction from './components/Fiction';
import Fantasy from './components/Fantasy';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Book from './components/Book'; // Import the Book component

import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prevCartItems) => [...prevCartItems, book]);
  };

  const removeFromCart = (book) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== book.id)
    );
  };

  return (
    <Router>
      <div className="App">
        <Navbar cartItems={cartItems} /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/bestselling" element={<BestSelling />} />
          <Route path="/newreleases" element={<NewReleases />} />
          <Route path="/nonfiction" element={<NonFiction />} />
          <Route path="/fiction" element={<Fiction />} />
          <Route path="/fantasy" element={<Fantasy />} />
          <Route
            path="/book/:id" 
            element={<Book addToCart={addToCart} />} 
          />
        </Routes>
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        /> 
        <Footer />
      </div>
    </Router>
  );
};

export default App;
