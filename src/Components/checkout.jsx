import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {

  return (
    <div className="container mx-auto p-0">
      <h2 className="text-3xl font-bold mb-14 text-center">Checkout</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Billing Details</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
              <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
              <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="address">Address</label>
              <input type="text" id="address" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="city">City</label>
              <input type="text" id="city" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="postalCode">Postal Code</label>
              <input type="text" id="postalCode" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="country">Country</label>
              <input type="text" id="country" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500" />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
          <div className="p-4 border border-gray-300 rounded-md mb-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>N1500.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>N100.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>N10.00</span>
            </div>
            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>$1610.00</span>
            </div>
          </div>
          <button className="w-full bg-yellow-300 text-white mb-10 py-3 rounded-md hover:bg-yellow-500 transition duration-300"
          onClick={alert('Order received. ETA - 7days')}
          >
            Place Order
          </button>
          <Link to='/store' className="w-40 bg-yellow-300 text-white ml-52 text-xl mt-20 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300">
            Keep shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
