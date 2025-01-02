"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const SimpleDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Blogs', href: '/blog' },
    { text: 'Contact', href: '/contact' }
  ];

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative"
    >
      <button className="px-4 py-2 text-[#0D0E43] hover:text-[#FB2E86] rounded">
        Pages
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-4 w-40 bg-black text-white border rounded shadow-lg z-50">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block px-4 py-2 hover:bg-gray-700 hover:text-[#FB2E86] transition-colors duration-200"
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SimpleDropdown;