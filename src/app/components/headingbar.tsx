import React from 'react';
import { ChevronDown, User, Heart } from 'lucide-react';


const HeaderBar = () => {
return (
    <div className="w-full bg-[#7E33E0] py-2">
        <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          {/* Left side */}
            <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center cursor-pointer hover:text-gray-600">
                <span>English</span>
                <ChevronDown className="h-4 w-4 ml-1" />
            </div>
            
            {/* Currency Selector */}
            <div className="flex items-center cursor-pointer hover:text-gray-600">
                <span>USD</span>
                <ChevronDown className="h-4 w-4 ml-1" />
            </div>
            </div>

          {/* Right side */}
            <div className="flex items-center space-x-6">
            {/* Login */}
            <button className="flex items-center hover:text-gray-600">
                <User className="h-4 w-4 mr-1" />
                <span>Login</span>
            </button>

            {/* Wishlist */}
            <button className="flex items-center hover:text-gray-600">
                <Heart className="h-4 w-4 mr-1" />
                <span>Wishlist</span>
            </button>
            </div>
        </div>
        </div>
    </div>
    );
};

export default HeaderBar;