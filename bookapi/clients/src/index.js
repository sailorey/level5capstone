import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { CartProvider } from './context/CartContext';

// const container = document.getElementById('root')

// const root = ReactDOM.createRoot(container)

// root.render(<App />)

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
  <App />
</CartProvider>
)