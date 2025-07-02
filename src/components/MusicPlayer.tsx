import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat, 
  Volume2, 
  VolumeX,
  Heart,
  Monitor,
  List,
  Maximize2
} from 'lucide-react';
import { dummyTracks } from '../data/dummyData';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentTrack] = useState(dummyTracks[0]);

  // Simulate progress
  useEffect(() => {
    if (isPlaying && currentTrack) {
      // Convert duration string to seconds
      const [minutes, seconds] = currentTrack.duration.split(':').map(Number);
      const totalSeconds = minutes * 60 + seconds;
      setDuration(totalSeconds);

      const interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= totalSeconds) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, currentTrack]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    setCurrentTime(Math.floor(percent * duration));
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-4 py-3 z-50">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Track Info */}
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <img 
            src={currentTrack.image} 
            alt={currentTrack.title}
            className="w-14 h-14 rounded-md object-cover"
          />
          <div className="min-w-0 flex-1">
            <h3 className="text-white text-sm font-medium truncate">{currentTrack.title}</h3>
            <p className="text-gray-400 text-xs truncate">{currentTrack.artist}</p>
          </div>
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 hover:scale-105 transition-transform ${isLiked ? 'text-green-500' : 'text-gray-400 hover:text-white'}`}
          >
            <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex-1 max-w-2xl mx-8">
          {/* Control Buttons */}
          <div className="flex items-center justify-center space-x-4 mb-2">
            <button 
              onClick={() => setIsShuffle(!isShuffle)}
              className={`p-2 hover:scale-105 transition-all ${isShuffle ? 'text-green-500' : 'text-gray-400 hover:text-white'}`}
            >
              <Shuffle size={16} />
            </button>
            <button className="p-2 text-gray-300 hover:text-white hover:scale-105 transition-all">
              <SkipBack size={20} />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause size={20} className="text-black" />
              ) : (
                <Play size={20} className="text-black ml-1" />
              )}
            </button>
            <button className="p-2 text-gray-300 hover:text-white hover:scale-105 transition-all">
              <SkipForward size={20} />
            </button>
            <button 
              onClick={() => setIsRepeat(!isRepeat)}
              className={`p-2 hover:scale-105 transition-all ${isRepeat ? 'text-green-500' : 'text-gray-400 hover:text-white'}`}
            >
              <Repeat size={16} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <span className="w-10 text-right">{formatTime(currentTime)}</span>
            <div 
              className="flex-1 h-1 bg-gray-600 rounded-full cursor-pointer group"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-white rounded-full relative group-hover:bg-green-500 transition-colors"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              >
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <span className="w-10">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume and Options */}
        <div className="flex items-center space-x-4 flex-1 justify-end">
          <button className="hidden lg:block p-2 text-gray-400 hover:text-white transition-colors">
            <List size={16} />
          </button>
          <button className="hidden lg:block p-2 text-gray-400 hover:text-white transition-colors">
            <Monitor size={16} />
          </button>
          
          {/* Volume Control */}
          <div className="hidden md:flex items-center space-x-2">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <div className="w-24 h-1 bg-gray-600 rounded-full cursor-pointer group">
              <div 
                className="h-full bg-white rounded-full relative group-hover:bg-green-500 transition-colors"
                style={{ width: `${isMuted ? 0 : volume}%` }}
              >
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          <button className="hidden lg:block p-2 text-gray-400 hover:text-white transition-colors">
            <Maximize2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;