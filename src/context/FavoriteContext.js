import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (buy) => {
    // Ensure the item isn't already in the favorites
    const isAlreadyFavorite = favorites.some((item) => item.id === buy.id);
    if (!isAlreadyFavorite) {
      setFavorites((prevFavorites) => [...prevFavorites, buy]);
    } else {
      alert('Item is already in the favorites.');
    }
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};

