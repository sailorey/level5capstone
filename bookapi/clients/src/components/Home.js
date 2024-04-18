import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="page-container">
      <div className="home-container">
        <div className="home-icon"></div>
        <h1 className="home-title">Welcome to our Children's Bookstore!</h1>
        <p className="home-description">Immerse yourself in the enchanting world of children's literature.</p>
        <div className="home-button-container">
          <Link to="/bestselling" className="home-button">
            Explore Bestsellers
          </Link>
          <Link to="/newreleases" className="home-button">
            Discover New Releases
          </Link>
        </div>

        <div className="trending-books-container">
          <h2 className="trending-books-title">Trending Christmas Books</h2>
          <div className="trending-books">
            <div className="trending-book">
              <img src="https://www.realsimple.com/thmb/5PpPisklSSxTqP8p8-NcsGKMhTc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/best-christmas-books-for-kids-2000-d635000fa9aa4807b891bc58f4873042.jpg" alt="Trending Book" />
            </div>
          </div>
        </div>
        
        <div className="home-button-container">
          <Link to="/cart" className="home-button">
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
