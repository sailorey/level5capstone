import React from 'react';
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
import { CartProvider } from './Context/CartContext';
import './App.css';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bestselling" element={<BestSelling />} />
          <Route path="/newreleases" element={<NewReleases />} />
          <Route path="/nonfiction" element={<NonFiction />} />
          <Route path="/fiction" element={<Fiction />} />
          <Route path="/fantasy" element={<Fantasy />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
};

export default App;
