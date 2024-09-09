import React from 'react';

const Login = () => {
  return (
    <div className="bg-white p-8 md:p-6 rounded-lg shadow-md max-w-sm w-full box-border mx-auto">
      <div className="text-center mb-4">
        <h2 className='m-0 text-4xl text-gray-800 md:text-2xl'>Login</h2>
      </div>
      <form className="flex flex-col">
        <label htmlFor="username" className='mb-2 md:text-lg text-gray-600'>Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" className='p-3 mb-4 border border-solid border-gray-300 rounded-1 text-base md:text-sm focus:border-red-700 focus:outline-none'/>
        <label htmlFor="password" className='mb-2 md:text-lg text-gray-600'>Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" className='p-3 mb-4 border border-solid border-gray-300 rounded-1 text-base md:text-sm focus:border-red-700 focus:outline-none' />

        <div className="text-right -mt-2 mb-4 md:text-sm">
          <a href="/forgot-password" className='text-blue-500 no-underline text-sm md:text-xs hover:underline'>Forgot password?</a>
        </div>

        <button type="submit" href='http://localhost:3001/' className='p-3 bg-red-700 text-white md:text-md border-none rounded-1 text-base cursor-pointer transition-colors duration-300 ease hover:bg-green-900'>Login</button>
      </form>
    </div>
  );
}

export default Login;
