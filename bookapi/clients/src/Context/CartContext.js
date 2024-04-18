import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await axios.get('/cart');
                setCartItems(response.data.items || []);
            } catch (error) {
                console.error('Failed to fetch cart items:', error);
            }
        };
        fetchCart();
    }, []);

    const addToCart = async (item) => {
        try {
            const response = await axios.post('/cart', item);
            setCartItems(response.data.items);
        } catch (error) {
            console.error('Failed to add item to cart:', error);
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            await axios.delete(`/cart/${itemId}`);
            setCartItems(currentItems => currentItems.filter(item => item._id !== itemId));
        } catch (error) {
            console.error('Failed to remove item from cart:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
