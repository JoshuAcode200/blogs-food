import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">BookApp</h2>
          <p className="text-gray-400">
            Discover a wide range of books from various genres. Find your next great read here.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/home" className="hover:text-yellow-500">Home</a></li>
            <li><a href="/discover" className="hover:text-yellow-500">Discover</a></li>
            <li><a href="/bloggers" className="hover:text-yellow-500">Blogs</a></li>
            <li><a href="/events" className="hover:text-yellow-500">Events</a></li>
            <li><a href="/signup" className="hover:text-yellow-500">Sign Up</a></li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-400">Email: support@bookapp.com</p>
          <p className="text-gray-400 mb-4">Phone: +123 456 7890</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-yellow-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-yellow-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-yellow-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-yellow-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2024 BookApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
