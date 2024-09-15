import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCarts = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  const addToCarts = (buy) => {
    // Ensure the item isn't already in the cart
    const isAlreadyInCart = carts.some((item) => item.id === buy.id);
    if (!isAlreadyInCart) {
      setCarts((prevCarts) => [...prevCarts, buy]);
    } else {
      alert('Item is already in the cart.');
    }
  };

  return (
    <CartContext.Provider value={{ carts, addToCarts }}>
      {children}
    </CartContext.Provider>
  );
};

