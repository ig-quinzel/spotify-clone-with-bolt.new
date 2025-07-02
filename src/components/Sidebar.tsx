import React from 'react';
import { Home, Search, Library, Heart, Plus, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Search', active: false },
    { icon: Library, label: 'Your Library', active: false }
  ];

  const libraryItems = [
    { icon: Plus, label: 'Create Playlist' },
    { icon: Heart, label: 'Liked Songs', liked: true }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-black transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        {/* Logo and Close Button */}
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">S</span>
            </div>
            <span className="text-white font-bold text-xl">MySpotify</span>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="px-6 mb-8">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className={`
                    flex items-center space-x-4 text-sm font-medium transition-colors group
                    ${item.active 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                    }
                  `}
                >
                  <item.icon size={20} className={`${item.active ? 'text-white' : 'group-hover:text-white'}`} />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Library Section */}
        <div className="px-6 mb-6">
          <ul className="space-y-4">
            {libraryItems.map((item, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className="flex items-center space-x-4 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
                >
                  <item.icon 
                    size={20} 
                    className={`group-hover:text-white ${item.liked ? 'text-green-500' : ''}`}
                    fill={item.liked ? 'currentColor' : 'none'}
                  />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Playlist List */}
        <div className="flex-1 px-6 overflow-y-auto">
          <div className="space-y-3">
            {[
              'My Playlist #1',
              'Discover Weekly',
              'Release Radar',
              'Daily Mix 1',
              'Daily Mix 2',
              'Liked from Radio',
              'Recently Played',
              'Made For You'
            ].map((playlist, index) => (
              <a 
                key={index}
                href="#" 
                className="block text-sm text-gray-400 hover:text-white transition-colors truncate py-1"
              >
                {playlist}
              </a>
            ))}
          </div>
        </div>

        {/* Install App Prompt */}
        <div className="p-6 border-t border-gray-800">
          <a 
            href="#" 
            className="flex items-center space-x-3 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center">
              <span className="text-xs">↓</span>
            </div>
            <span>Install App</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;