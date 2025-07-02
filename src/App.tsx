import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';
import MainContent from './components/MainContent';
import MusicPlayer from './components/MusicPlayer';
import ChatPanel from './components/ChatPanel';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen bg-black text-white overflow-hidden flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation */}
        <TopNavbar onMenuClick={() => setSidebarOpen(true)} />
        
        {/* Main Content */}
        <MainContent />
      </div>

      {/* Music Player */}
      <MusicPlayer />

      {/* Chat Assistant */}
      <ChatPanel />
    </div>
  );
}

export default App;