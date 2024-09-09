import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [dropdown, setDropdown] = useState(null);

  const handleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="flex flex-col gap-3 mb-20">
      <div className="flex flex-row mb-3 mt-0 justify-between items-center text-white font-normal w-full px-5 bg-transparent"> 
        <a href="/home" className="flex font-sans font-medium text-4xl text-red-700">
          <i className="fas fa-book"></i> food <span className='text-yellow-700'>Mongers</span>
        </a>

        <div className="hidden md:flex items-center w-1/3 h-10 overflow-hidden bg-white rounded-2xl ml-10 pr-3 p-1">
          <input 
            type="search" 
            placeholder="Search here..." 
            className="text-xl py-2 h-full w-full text-black border-white p-3" 
          />
          <label htmlFor="search-box" className="fas fa-search text-black cursor-pointer text-2xl ml-2"></label>
        </div>

        <div className="flex items-center text-4xl ml-1 text-black cursor-pointer space-x-4">
          <div className="fas fa-search md:hidden cursor-pointer" onClick={toggleMenu}></div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 list-none mt-4 md:mr-10 md:ml-20 text-2xl">
          <div><Link to="/favourites" className="fas fa-heart cursor-pointer"></Link></div>
          <div className="relative">
              <button
                onClick={() => handleDropdown('blogs')}
                className="fas fa-user cursor-pointer rounded-md transition text-2xl"
              >
              </button>
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

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block lg:flex flex-col md:flex-row gap-20 pl-20 ml-96 bg-transparent align-center`}> {/* Transparent background for dropdown */}
        <ul className="flex md:flex-row justify-center list-none text-2xl gap-10 text-white">
          <li><Link to="/home" className='px-4 py-2 hover:bg-white hover:text-black rounded-full'>Home</Link></li>
          <li><Link to="/discover" className='px-4 py-2 hover:bg-white hover:text-black rounded-full'>Discover</Link></li>
          <li><Link to="/favourites" className='px-4 py-2 hover:bg-white hover:text-black rounded-full'>Favourites</Link></li>
          <li><Link to="/contact" className='px-4 py-2 hover:bg-white hover:text-black rounded-full'>Contact</Link></li>
        </ul> 
      </div>
    </nav>
  );
};

export default Navbar;