import React from 'react';
import { ChevronDown, User, Heart } from 'lucide-react';

const HeaderBar = () => {
  return (
    <div className="w-full bg-[#7E33E0] py-2 text-white"> {/* Added text-white for better contrast */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center text-sm md:text-base"> {/* Increased font size on larger screens */}
          {/* Left side */}
          <div className="flex items-center space-x-2 md:space-x-4"> {/* Adjusted spacing */}
            {/* Language Selector */}
            <div className="flex items-center cursor-pointer hover:text-gray-200"> {/* Improved hover color */}
              <span>English</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>

            {/* Currency Selector */}
            <div className="flex items-center cursor-pointer hover:text-gray-200"> {/* Improved hover color */}
              <span>USD</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-2 md:space-x-6"> {/* Adjusted spacing */}
            {/* Login */}
            <button className="flex items-center hover:text-gray-200"> {/* Improved hover color */}
              <User className="h-4 w-4 mr-1" />
              <span className="hidden md:inline">Login</span> {/* Hide text on small screens */}
            </button>

            {/* Wishlist */}
            <button className="flex items-center hover:text-gray-200"> {/* Improved hover color */}
              <Heart className="h-4 w-4 mr-1" />
              <span className="hidden md:inline">Wishlist</span> {/* Hide text on small screens */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;