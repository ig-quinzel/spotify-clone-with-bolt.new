import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! I\'m your music assistant. I can help you find songs, create playlists, or recommend music based on your mood. What would you like to listen to?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const predefinedResponses: { [key: string]: string } = {
    'play relaxing music': 'I\'ve found some great relaxing tracks for you! Try the "Chill Vibes" playlist - it has ambient and lo-fi tracks perfect for unwinding.',
    'recommend workout tracks': 'For your workout, I recommend high-energy tracks! Check out the "Workout Mix" playlist with upbeat songs to keep you motivated.',
    'find jazz music': 'Great choice! I can recommend some smooth jazz classics and contemporary artists. Would you like traditional jazz or modern fusion?',
    'create party playlist': 'Let\'s get this party started! I\'ll create a mix with the latest hits and dance tracks that will keep everyone moving.',
    'what\'s trending': 'Right now, trending tracks include songs by The Weeknd, Dua Lipa, and Harry Styles. Check out the "Trending Now" section!',
    'default': 'I\'d be happy to help you with music recommendations! You can ask me about genres, moods, or specific artists. What are you in the mood for?'
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const lowercaseInput = inputValue.toLowerCase();
      let response = predefinedResponses['default'];
      
      for (const [key, value] of Object.entries(predefinedResponses)) {
        if (lowercaseInput.includes(key.toLowerCase())) {
          response = value;
          break;
        }
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 right-4 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </button>

      {/* Chat Panel */}
      <div className={`
        fixed right-4 bottom-24 w-80 h-96 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-40 
        transform transition-all duration-300 origin-bottom-right
        ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
      `}>
        {/* Header */}
        <div className="bg-green-500 text-white p-4 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <Bot size={20} />
            <span className="font-semibold">Music Assistant</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 h-64">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.isUser ? 'bg-green-500' : 'bg-gray-600'
                }`}>
                  {message.isUser ? <User size={12} /> : <Bot size={12} />}
                </div>
                <div className={`rounded-lg p-3 text-sm ${
                  message.isUser 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-700 text-gray-100'
                }`}>
                  {message.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-gray-700 p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask for music recommendations..."
              className="flex-1 bg-gray-800 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-3 py-2 transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPanel;