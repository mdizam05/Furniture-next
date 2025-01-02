"use client"
import React from 'react';
import Link from 'next/link';

import SimpleDropdown from './pagelist';





const Navbar = () => {
return (
    <nav className="Width 1177px padding 40px Top 63px Left 371px" style={{background: 'linear-gradient(121.53deg, #F3F9FF 0%, #F1F0FF 100%)'}}>
        <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/about"> {/* Link to the about page */}
        <h1 className="text-6xl font-bold text-[#0D0E43] hover:text-pink-500 cursor-pointer transition duration-200">
          Hekto
        </h1>
      </Link>
          {/* Navigation Links */}
            <div className="flex space-x-8 font-['Lato'] text-base">
            <div className="flex items-center text-[#0D0E43] hover:text-[#FB2E86]">
              <a href="/">Home</a>
            </div>
            <div className="flex items-center text-[#0D0E43] hover:text-[#FB2E86]">
            <SimpleDropdown/>
            </div>
            <div className="flex items-center text-[#0D0E43] hover:text-[#FB2E86]">
                <a href="/product">Product</a>
            </div>
            <div className="flex items-center text-[#0D0E43] hover:text-[#FB2E86]">
                <a href="/blog">Blog</a>
            </div>
            <div className="flex items-center text-[#0D0E43] hover:text-[#FB2E86]">
                <a href="/shop">Shop</a>
            </div>
            <div className="flex items-center text-[#0D0E43] hover:text-[#FB2E86]">
                <a href="/contact">Contact</a>
            </div>
          {/* Search Bar */}
            <div className="flex">
            <div className="relative">
                <input 
                type="text" 
                className="w-[317px] h-10 border-2 border-[#E7E6EF] pl-4 pr-12"
                placeholder="Search..."
                />
          </div>
          
          <div className="flex items-center cursor-pointer transition duration-200  text-[#0D0E43] hover:text-[#FB2E86]">
            <Link href="/wishlist" >
            Wishlist
            </Link>
          </div>
          <div className="ml-4 flow-root lg:ml-6">
              <a href="#" className="group -m-2 flex items-center p-2">
                <svg className="size-6 shrink-0 text-gray-400 group-hover:text-gray-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                <span className="sr-only">items in cart, view bag</span>
              </a>
            </div>
          </div>
            </div>
        </div>
        </div>
    </nav>
    );
};

export default Navbar