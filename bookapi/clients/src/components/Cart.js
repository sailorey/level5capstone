import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { CartContext } from '../Context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
    const { cartItems, setCartItems } = useContext(CartContext);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('/cart');
                setCartItems(response.data.items);
            } catch (error) {
                console.error('Failed to fetch cart items:', error);
                setCartItems([]);
            }
        };

        fetchCartItems();
    }, [setCartItems]);

    const handleQuantityChange = async (itemId, quantity) => {
        try {
            await axios.post(`/cart/${itemId}`, { quantity });
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item._id === itemId ? { ...item, quantity } : item
                )
            );
        } catch (error) {
            console.error('Failed to update item quantity:', error);
        }
    };

    const handleClearCart = async () => {
        try {
            await axios.delete('/cart'); 
            setCartItems([]); 
        } catch (error) {
            console.error('Failed to clear cart:', error);
        }
    };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            <button onClick={handleClearCart} className="clear-cart-btn">Clear Cart</button>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div className="cart-item" key={item._id}>
                        {item.book && item.book.imgUrl && ( 
                            <img src={item.book.imgUrl} alt={item.book.name} className="cart-img" />
                        )}
                        <div className="cart-details">
                            {item.book && ( 
                                <React.Fragment>
                                    <h3>{item.book.name}</h3>
                                    <p>{item.book.author}</p>
                                </React.Fragment>
                            )}
                            <p>
                                Quantity: 
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                                    min="1"
                                />
                            </p>
                            <p>Total Price: ${item.book ? item.book.new_price * item.quantity : 0}</p> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;