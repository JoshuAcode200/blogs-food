// CheckoutContext.js
import React, { createContext, useState, useContext } from 'react';

const CheckoutContext = createContext();

export const useCheckouts = () => useContext(CheckoutContext);

export const CheckoutProvider = ({ children }) => {
  const [checkouts, setCheckouts] = useState([]);

  const addToCheckouts = (buy) => {
    setCheckouts((prevCheckouts) => [...prevCheckouts, buy]);
  };

  return (
    <CheckoutContext.Provider value={{ checkouts, addToCheckouts }}>
      {children}
    </CheckoutContext.Provider>
  );
};
