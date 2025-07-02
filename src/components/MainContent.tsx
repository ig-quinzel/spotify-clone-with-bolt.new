import React from 'react';
import { Play, Heart, MoreHorizontal } from 'lucide-react';
import { quickAccessPlaylists, dummyPlaylists, trendingAlbums, featuredArtists } from '../data/dummyData';

const MainContent: React.FC = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const PlaylistCard = ({ playlist, isLarge = false }: { playlist: any, isLarge?: boolean }) => (
    <div className={`group relative bg-gray-800 p-3 rounded-md hover:bg-gray-700 transition-all duration-300 cursor-pointer ${isLarge ? 'min-w-[180px]' : 'min-w-[160px]'}`}>
      <div className="relative mb-4">
        <img 
          src={playlist.image} 
          alt={playlist.name}
          className={`w-full aspect-square object-cover rounded-md shadow-lg ${isLarge ? '' : 'group-hover:shadow-2xl'}`}
        />
        <button className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 shadow-lg">
          <Play size={20} className="text-black ml-1" fill="currentColor" />
        </button>
      </div>
      <h3 className="font-semibold text-white mb-1 truncate">{playlist.name}</h3>
      <p className="text-sm text-gray-400 line-clamp-2 leading-tight">
        {playlist.description || `By ${playlist.artist}`}
      </p>
    </div>
  );

  const QuickAccessCard = ({ playlist }: { playlist: any }) => (
    <div className="group flex items-center bg-gray-800 bg-opacity-50 hover:bg-gray-700 rounded-md overflow-hidden cursor-pointer transition-all duration-300">
      <img 
        src={playlist.image} 
        alt={playlist.name}
        className="w-16 h-16 object-cover"
      />
      <div className="flex-1 px-4">
        <h3 className="font-semibold text-white truncate">{playlist.name}</h3>
      </div>
      <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 mr-4 hover:scale-105">
        <Play size={16} className="text-black ml-1" fill="currentColor" />
      </button>
    </div>
  );

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      <div className="h-full overflow-y-auto px-6 pb-32">
        {/* Greeting Section */}
        <div className="py-6">
          <h1 className="text-3xl font-bold mb-6">{getGreeting()}</h1>
          
          {/* Quick Access Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {quickAccessPlaylists.map((playlist) => (
              <QuickAccessCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </div>

        {/* Trending Now Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Trending Now</h2>
            <button className="text-sm text-gray-400 hover:text-white font-semibold">Show all</button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {trendingAlbums.map((album) => (
              <PlaylistCard key={album.id} playlist={album} isLarge={true} />
            ))}
          </div>
        </section>

        {/* Recently Played Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Recently Played</h2>
            <button className="text-sm text-gray-400 hover:text-white font-semibold">Show all</button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {dummyPlaylists.slice(0, 5).map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </section>

        {/* Made For You Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Made For You</h2>
            <button className="text-sm text-gray-400 hover:text-white font-semibold">Show all</button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {dummyPlaylists.slice(2, 6).map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </section>

        {/* Featured Artists Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Popular Artists</h2>
            <button className="text-sm text-gray-400 hover:text-white font-semibold">Show all</button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {featuredArtists.map((artist) => (
              <div key={artist.id} className="group min-w-[160px] bg-gray-800 p-3 rounded-md hover:bg-gray-700 transition-all duration-300 cursor-pointer">
                <div className="relative mb-4">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full aspect-square object-cover rounded-full shadow-lg"
                  />
                  <button className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 shadow-lg">
                    <Play size={20} className="text-black ml-1" fill="currentColor" />
                  </button>
                </div>
                <h3 className="font-semibold text-white mb-1 truncate">{artist.name}</h3>
                <p className="text-sm text-gray-400">Artist</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;