// Favorites.jsx
import React from 'react';
import { useFavorites } from '../context/FavoriteContext'; // Adjusted to match the context location

const Favorites = ({handleCartClick}) => {
  const { favorites } = useFavorites();

  return (
    <section className='favorites'>
      <h1 className='text-center text-4xl mb-8'>My Favorites</h1>
      <div className='grid grid-cols-4 gap-2'>
        {favorites.map((buy, index) => (
          <div key={index} className='w-[18rem] h-[30rem] my-8 relative overflow-hidden border border-gray-500 text-center'>
            <div className='p-4 bg-gradient-to-br from-gray-200 to-white'>
              <img src={buy.image} className='h-80 w-72 max-h-full max-w-full object-cover' alt={buy.name} />
            </div>
            <div className='bg-white p-0'>
              <h3 className='text-black text-2xl'>{buy.name}</h3>
              <div className='text-2xl text-black pt-0 pb-4'>
                N1500<span className='text-xl line-through text-black'>N2000</span>
              </div>
              <a href='#' className='rounded-full text-white bg-red-700 px-4 py-3 justify-center text-[1.4rem]'
              onClick={() => handleCartClick(buy)}
              >
                add to cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favorites;
