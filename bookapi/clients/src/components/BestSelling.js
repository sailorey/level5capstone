import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../Context/CartContext';
import '../styles/Bestselling.css';

const BestSelling = () => {
    const [books, setBooks] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('/bestselling');
                setBooks(response.data);
            } catch (error) {
                console.error('Failed to fetch books:', error);
                setBooks([]);
            }
        };

        fetchBooks();
    }, []);

    const handleAddToCart = async (bookId, bookModel) => {
        try {
            const item = { bookId, bookModel, quantity: 1 };
            await addToCart(item);
        } catch (error) {
            console.error('Failed to add item to cart:', error);
        }
    };

    return (
        <div className="bestselling-container">
            <h2>Bestselling Books</h2>
            <div className="bestselling-grid">
                {books.map((book) => (
                    <div className="bestselling-item" key={book._id}>
                        <img src={book.imgUrl} alt={book.name} className="bestselling-img" />
                        <h3>{book.name}</h3>
                        <p>{book.author}</p>
                        <p>${book.new_price}</p>
                        <button className="add-to-cart-btn" onClick={() => handleAddToCart(book._id)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSelling;
