import React from 'react';
import image38 from '../assets/pics/pexels-38.jpg';
import image39 from '../assets/pics/pexels-39.jpg';
import image40 from '../assets/pics/pexels-40.jpg';
import image41 from '../assets/pics/pexels-41.jpg';
import image42 from '../assets/pics/pexels-42.jpg';
import image43 from '../assets/pics/pexels-43.jpg';
import image44 from '../assets/pics/pexels-44.jpg';
import image45 from '../assets/pics/pexels-45.jpg';
import { useFavorites } from '../context/FavoriteContext'; // Adjusted to match the context location
import { useCarts } from '../context/CartContext'; // Adjusted to match the context location
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons'; // Import the icon

const buys = [
  {
    id: 1,
    name: "The Unique Spaghetti Carbonara",
    image: image38,
    cost: "$20", // Corrected cost
  },
  {
    id: 2,
    name: "Are vegan tacos worth it?",
    image: image39,
    cost: "$20", // Corrected cost
  },
  {
    id: 3,
    name: "Supersonic sauces",
    image: image40,
    cost: "$20", // Corrected cost
  },
  {
    id: 4,
    name: "The French fries secret",
    image: image41,
    cost: "$20", // Corrected cost
  },
  {
    id: 5,
    name: "Spaghetti Carbonara",
    image: image42,
    cost: "$20", // Corrected cost
  },
  {
    id: 6,
    name: "Grilled Chicken Salad",
    image: image43,
    cost: "$20", // Corrected cost
  },
  {
    id: 7,
    name: "Vegan Tacos",
    image: image44,
    cost: "$20", // Corrected cost
  },
  {
    id: 8,
    name: "Vegan Tacos",
    image: image45,
    cost: "$20", // Corrected cost
  }
];

const Store = () => {
  const { addToFavorites } = useFavorites();
  const { addToCarts } = useCarts();

  const handleFavoriteClick = (buy) => {
    addToFavorites(buy);
  };

  const handleCartClick = (buy) => {
    addToCarts(buy);
    alert('Added to cart');
  };

  return (
    <div className='container'>
      <div className="mb-24 mt-10">
        <p className="font-body font-bold flex justify-center text-3xl">Store</p>
        <p className="font-body mt-20 flex justify-center text-xl">Need new hardware? Check these out!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 my-20">
          {buys.map((buy) => (
            <div 
              key={buy.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl hover:scale-[0.9]"
            >
              <img src={buy.image} alt={buy.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 font-body">{buy.name}</h3>
              </div>

              <div className="p-6 border-t flex items-center justify-between font-body h-20">
                <button 
                  className="flex mt-2 px-4 py-2 text-md text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  onClick={() => handleCartClick(buy)}
                >
                  Add to cart
                </button>
                <a
                  href='#'
                  className='fas fa-heart text-black text-4xl py-4 px-6 hover:text-red-700'
                  onClick={() => handleFavoriteClick(buy)}
                ></a>
                <div className="flex items-center text-xl">
                  <div>
                    <span className="text-gray-800 text-xl">Buy:{buy.cost}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
