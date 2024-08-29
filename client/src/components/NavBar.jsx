import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './navbar.css';

const routes = [
  { name: 'Home', path: '#home' },
  { name: 'Features', path: '#feature' },
  { name: 'Event', path: '#event-section' },
  { name: 'Testimonials', path: '#testimonial' },
  { name: 'Sign Up', path: '/sign-up' },
  { name: 'Sign In', path: '/sign-in' },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-gray-800">
          CareConnect
        </div>

        <nav className={`md:flex md:items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <FaTimes className="md:hidden text-2xl cursor-pointer mb-4" onClick={toggleMenu} />
          {routes.map((route) => (
            route.path.startsWith('#') ? (
              <HashLink
                key={route.name}
                to={route.path}
                className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300 mx-2"
                onClick={toggleMenu}
              >
                {route.name}
              </HashLink>
            ) : (
              <Link
                key={route.name}
                to={route.path}
                className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300 mx-2"
                onClick={toggleMenu}
              >
                {route.name}
              </Link>
            )
          ))}
        </nav>

        <FaBars
          className="text-2xl text-gray-800 cursor-pointer md:hidden"
          onClick={toggleMenu}
        />
      </div>
    </header>
  );
};

export default NavBar;
