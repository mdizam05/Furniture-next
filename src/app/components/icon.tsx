"use client"


import React, { useState } from 'react';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'info', label: 'Additional Info' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'video', label: 'Video' }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="border-b">
        <nav className="flex gap-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 relative ${
                activeTab === tab.id 
                ? 'text-blue-600 font-medium' 
                : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="py-6">
        {activeTab === 'description' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Varius tempor.</h3>
            <p className="text-gray-600">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor amare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum.
            </p>
            <div className="space-y-4">
              <h4 className="font-medium">More details</h4>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex gap-2">
                  <span className="text-blue-600">→</span>
                  <p className="text-gray-600">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus dis diam arcu, nulla laboris juste retris dis.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;