"use client"

import { useState } from 'react';
import React from 'react';

const CommentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log({ name, email, comment, saveInfo });
    // Reset form fields (optional)
    setName('');
    setEmail('');
    setComment('');
    setSaveInfo(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name*
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Write Your Email*
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
          Write your comment*
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border border-green-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="saveInfo"
          checked={saveInfo}
          onChange={(e) => setSaveInfo(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="saveInfo" className="text-sm text-gray-600">
          Save my name, email, and website in this browser for the next time I comment.
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-pink-500 text-white rounded-md py-2 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
      >
        Continue Shipping
      </button>
    </form>
  );
};

export default CommentForm;