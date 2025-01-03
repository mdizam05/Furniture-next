"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import SimpleDropdown from './pagelist';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full" style={{background: 'linear-gradient(121.53deg, #F3F9FF 0%, #F1F0FF 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/about">
            <h1 className="text-3xl md:text-6xl font-bold text-[#0D0E43] hover:text-pink-500 transition duration-200">
              Hekto
            </h1>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 font-['Lato'] text-base">
            <Link href="/" className="text-[#0D0E43] hover:text-[#FB2E86]">
              Home
            </Link>
            <div className="text-[#0D0E43] hover:text-[#FB2E86]">
              <SimpleDropdown />
            </div>
            <Link href="/product" className="text-[#0D0E43] hover:text-[#FB2E86]">
              Product
            </Link>
            <Link href="/blog" className="text-[#0D0E43] hover:text-[#FB2E86]">
              Blog
            </Link>
            <Link href="/shop" className="text-[#0D0E43] hover:text-[#FB2E86]">
              Shop
            </Link>
            <Link href="/contact" className="text-[#0D0E43] hover:text-[#FB2E86]">
              Contact
            </Link>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                className="w-[200px] xl:w-[317px] h-10 border-2 border-[#E7E6EF] pl-4 pr-12"
                placeholder="Search..."
              />
            </div>

            <Link href="/wishlist" className="text-[#0D0E43] hover:text-[#FB2E86]">
              Wishlist
            </Link>

            <Link href="#" className="group -m-2 flex items-center p-2">
              <svg 
                className="h-6 w-6 text-gray-400 group-hover:text-gray-700" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
              <span className="sr-only">items in cart, view bag</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col space-y-4 font-['Lato'] text-base">
            <Link 
              href="/" 
              className="text-[#0D0E43] hover:text-[#FB2E86] p-2 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div className="text-[#0D0E43] hover:text-[#FB2E86] p-2">
              <SimpleDropdown />
            </div>
            <Link 
              href="/product" 
              className="text-[#0D0E43] hover:text-[#FB2E86] p-2 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Product
            </Link>
            <Link 
              href="/blog" 
              className="text-[#0D0E43] hover:text-[#FB2E86] p-2 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/shop" 
              className="text-[#0D0E43] hover:text-[#FB2E86] p-2 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/contact" 
              className="text-[#0D0E43] hover:text-[#FB2E86] p-2 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Search */}
            <div className="relative p-2">
              <input
                type="text"
                className="w-full h-10 border-2 border-[#E7E6EF] pl-4 pr-12 rounded"
                placeholder="Search..."
              />
            </div>

            {/* Mobile Wishlist and Cart */}
            <div className="flex items-center justify-between p-2">
              <Link 
                href="/wishlist" 
                className="text-[#0D0E43] hover:text-[#FB2E86]"
                onClick={() => setIsOpen(false)}
              >
                Wishlist
              </Link>
              <Link 
                href="#" 
                className="group flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <svg 
                  className="h-6 w-6 text-gray-400 group-hover:text-gray-700" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;