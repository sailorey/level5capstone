import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const cartQuantity = cartItems ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0;


  return (
    <nav className={`navbar ${visible ? '' : 'scrolled'}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            Bookstore
          </Link>
        </div>
        <div className="navbar-right">
          <div className="navbar-genre">
            <button className="navbar-genre-btn">Genre</button>
            <div className="navbar-genre-menu">
              <Link to="/nonfiction" className="navbar-genre-item">
                Nonfiction
              </Link>
              <Link to="/fiction" className="navbar-genre-item">
                Fiction
              </Link>
              <Link to="/fantasy" className="navbar-genre-item">
                Fantasy
              </Link>
            </div>
          </div>
          <div className="navbar-cart">
            <Link to="/cart" className="navbar-cart-link">
              <span className="cart-badge">Cart : {cartQuantity}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
