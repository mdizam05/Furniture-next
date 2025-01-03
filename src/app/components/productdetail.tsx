'use client'

import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const ProductDisplay = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const thumbnails = [
    '/Rectangle 134.png',
    '/Rectangle 136.png',
    '/Rectangle 137.png'
  ];
  
  const mainImage = '/Rectangle 138.png';

  return (
    <div className="flex gap-8 p-8 max-w-4xl mx-auto">
      {/* Thumbnail Column */}
      <div className="flex flex-col gap-4">
        {thumbnails.map((thumb, index) => (
          <img
            key={index}
            src={thumb}
            alt={`Thumbnail ${index + 2}`}
            className="relative object-cover cursor-pointer hover:opacity-75 transition"
            onClick={() => setSelectedImage(index)}
            width={100}
            height={103}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1">
        <img
          src={mainImage}
          alt="Main product view"
          className="w-full aspect-square object-cover"
          width={375}
          height={487}
        />
      </div>

      {/* Product Details */}
      <div className="w-80">
        <h1 className="text-2xl font-bold mb-2">Leather Tote Bag</h1>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {'★'.repeat(4)}{'☆'.repeat(1)}
          </div>
          <span className="text-gray-600">(121)</span>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-lg line-through text-gray-400">$125.00</span>
          <span className="text-xl font-bold text-red-500">$89.00</span>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Color</label>
          <select className="w-full p-2 border rounded">
            <option>Black</option>
            <option>Brown</option>
            <option>Navy</option>
          </select>
        </div>

        <div className="flex gap-4 mb-6">
          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Add To Cart
          </button>
          <button className="p-2 border rounded hover:bg-gray-50">
            <Heart className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <h2 className="font-medium mb-2">Categories:</h2>
          <div className="flex gap-2">
            <span className="text-blue-600 hover:underline cursor-pointer">Bags</span>
            <span className="text-blue-600 hover:underline cursor-pointer">Accessories</span>
          </div>
        </div>

        <div>
          <h2 className="font-medium mb-2">Share:</h2>
          <div className="flex gap-4">
            {['Facebook', 'Twitter', 'Pinterest'].map(platform => (
              <span key={platform} className="text-blue-600 hover:underline cursor-pointer">
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;