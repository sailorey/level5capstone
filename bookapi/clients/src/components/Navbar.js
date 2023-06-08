import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
