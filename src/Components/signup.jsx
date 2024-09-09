import React from 'react';

const Signup = () => {
  return (
    <div className="bg-white p-8 md:p-6 rounded-lg shadow-md max-w-sm w-full box-border mx-auto min-h-max">
      <div className="text-center md:mb-4">
        <h2 className="m-0 text-4xl md:text-2xl text-gray-800">Sign Up</h2>
      </div>
      <form className="flex flex-col">
        <label htmlFor="username" className='mb-2 md:text-lg text-gray-700'>Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" className='p-3 mb-4 md:text-md md:mb-4 border border-gray-300 rounded text-base focus:border-red-700 focus:outline-none' />

        <label htmlFor="email" className='mb-2 md:text-lg text-gray-700'>Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" className='p-3 mb-4 md:text-md md:mb-4 border border-gray-300 rounded text-base focus:border-red-700 focus:outline-none'/>

        <label htmlFor="password" className='mb-2 md:text-lg text-gray-700'>Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" className='p-3 mb-4 md:text-sm md:mb-4 border border-gray-300 rounded text-base focus:border-red-700 focus:outline-none' />

        <label htmlFor="confirm-password" className='mb-2 md:text-lg text-gray-700'>Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" className='p-3 mb-4 md:text-sm md:mb-4 border border-gray-300 rounded text-base focus:border-red-700 focus:outline-none'/>

        <button type="submit" className='p-3 bg-red-700 text-white border-none rounded text-base md:text-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-green-800'>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
