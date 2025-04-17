// CartContext.js
import React, { createContext, useState } from 'react';

// Create a new context for the cart
export const CartContext = createContext();

// Create a provider component to wrap around any component that needs access to the cart
export const CartProvider = ({ children }) => {
  // State to hold items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add a drink to the cart
  const addToCart = (drink) => {
    setCartItems(prev => {
      // Check if the item already exists in the cart
      const existingItem = prev.find(item => item.id === drink.id);
      if (existingItem) {
         // If it exists, increase its quantity by 1
        return prev.map(item =>
          item.id === drink.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If it's a new item, add it to the cart with quantity 1
        return [...prev, { ...drink, quantity: 1 }];
      }
    });
  };

  // Function to increase the quantity of a specific item by ID
  const increaseQuantity = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease the quantity of a specific item by ID
  const decreaseQuantity = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        // Remove item from cart if quantity drops to 0
        .filter(item => item.quantity > 0)
    );
  };

  // Function to get the total number of items in the cart
  const getTotalItems = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
     // Provide cart-related state and functions to child components
    <CartContext.Provider
      value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, getTotalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
