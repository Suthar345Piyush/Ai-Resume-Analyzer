import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

function Header({ darkMode, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/analyze', text: 'Analyze Resume' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 transition-colors duration-300 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-orange-500 cursor-pointer">
              Rez.Ai
            </h1>
          </div>

          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-500 transition-colors duration-200 font-medium"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <FaSun className="w-5 h-5 text-yellow-500" />
              ) : (
                <FaMoon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <FaBars className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '64px' }}
      >
        <nav className="container mx-auto px-4 py-6">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-lg font-medium text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-500 transition-colors duration-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeMenu}
          style={{ top: '64px' }}
        />
      )}
    </header>
  );
}

export default Header;



