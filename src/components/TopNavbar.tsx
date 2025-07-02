import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Menu, User, Bell, ChevronDown } from 'lucide-react';

interface TopNavbarProps {
  onMenuClick: () => void;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="bg-gradient-to-b from-gray-900 to-transparent h-16 flex items-center justify-between px-6 relative z-10">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Mobile Menu Button */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden text-white hover:text-gray-300 transition-colors"
        >
          <Menu size={24} />
        </button>

        {/* Navigation Arrows - Desktop Only */}
        <div className="hidden lg:flex space-x-2">
          <button className="w-8 h-8 bg-black bg-opacity-70 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button className="w-8 h-8 bg-black bg-opacity-70 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-4 py-2 bg-white text-black placeholder-gray-500 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="hidden md:flex w-8 h-8 bg-black bg-opacity-70 rounded-full items-center justify-center text-gray-400 hover:text-white transition-colors">
          <Bell size={16} />
        </button>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-2 bg-black bg-opacity-70 rounded-full pl-1 pr-3 py-1 hover:bg-opacity-80 transition-colors"
          >
            <div className="w-7 h-7 bg-gray-600 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <span className="hidden md:block text-white text-sm font-medium">User</span>
            <ChevronDown size={14} className={`text-gray-400 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
          </button>

          {/* User Dropdown */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                Account
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                Settings
              </a>
              <hr className="my-1 border-gray-700" />
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                Log out
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;