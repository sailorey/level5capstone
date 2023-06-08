import React from 'react';
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="page-container">
      <div className="home-container">
        <div className="home-icon"></div>
        <h1>Welcome to our Children's Bookstore!</h1>
        <p>Discover the joy of reading with our wide selection of children's books.</p>
        <div className="home-button-container">
          <a href="/bestselling" className="home-button">
            Browse Bestsellers
          </a>
          <a href="/newreleases" className="home-button">
          Explore New Releases
        </a>
      </div>

      <div className="trending-books-container">
        <h2>Trending Christmas Books</h2>
        <div className="trending-books">
          <div className="trending-book">
            <img src="https://www.realsimple.com/thmb/5PpPisklSSxTqP8p8-NcsGKMhTc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/best-christmas-books-for-kids-2000-d635000fa9aa4807b891bc58f4873042.jpg" alt="Trending Book" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;
