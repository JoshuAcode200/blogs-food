import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiFruitBowl } from "react-icons/gi";

const Navbar = () => {
  // State to control search bar visibility
  const [isSearchVisible, setSearchVisible] = useState(false);

  // Function to toggle search bar visibility
  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const [dropdown, setDropdown] = useState(null);

  const handleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="flex flex-col gap-3 mb-20">
      <div className="flex flex-row mb-3 mt-0 justify-between items-center text-white font-normal w-full px-5 bg-transparent"> 
        <div className="text-4xl text-yellow-400">
          <div className="ml-14"><GiFruitBowl /></div>
          <a href="/home" className="font-medium text-4xl text-yellow-400 font-body items-center">
           food <span className='text-yellow-800 font-logo'>Mongers</span>
          </a>
        </div>

        <div className= "md:block lg:flex flex-col md:flex-row gap-20 pl-20 ml-12 bg-transparent align-center"> {/* Transparent background for dropdown */}
          <ul className="flex md:flex-row justify-center list-none text-2xl gap-10 text-white">
            <li><Link to="/home" className='px-4 py-2 hover:bg-white hover:text-black rounded-full'>Home</Link></li>
            <li><Link to="/discover" className='px-4 py-2 hover:bg-white hover:text-black rounded-full'>Discover</Link></li>
            <li><Link to="/bloggers" className='px-4 py-2 hover:bg-white hover:text-black rounded-full'>Blogs</Link></li>
            <li><Link to="/contact" className='px-4 py-2 hover:bg-white hover:text-black rounded-full'>Contact</Link></li>
          </ul> 
        </div>

        <div className="flex flex-col md:flex-row gap-4 list-none cursor-pointer mt-4 md:mr-10 md:ml-20 text-2xl">
          {/* Search Bar */}
          <div
            className={`transition-all duration-300 ease-in-out ${isSearchVisible ? 'w-28' : 'w-0'} overflow-hidden bg-white rounded-lg ml-10 p-1 flex items-center`}
          >
            <input
              type="search"
              placeholder="search..."
              className={`text-xl py-2 h-full text-black border-white p-3 ${isSearchVisible ? 'block' : 'hidden'}`}
            />
            <label
              htmlFor="search-box"
              className={`fas fa-search text-black cursor-pointer text-lg ml-2 ${isSearchVisible ? 'block' : 'hidden'}`}
            ></label>
          </div>

          {/* Search Icon */}
          <div
            className="fas fa-search cursor-pointer mt-1.5"
            onClick={toggleSearch}
          ></div>

          {/* Favourites Link */}
          <div>
            <Link to="/favourites" className="fas fa-heart cursor-pointer"></Link>
          </div>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdown('blogs')}
              className="fas fa-user cursor-pointer rounded-md transition text-2xl"
            ></button>
            {dropdown === 'blogs' && (
              <div className="absolute mt-2 w-48 bg-white text-green-600 shadow-lg rounded-md">
                <Link to="/signup" className="block px-4 py-2 text-lg hover:bg-green-100">
                  Signup
                </Link>
                <Link to="/login" className="block px-4 py-2 text-lg hover:bg-green-100">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;