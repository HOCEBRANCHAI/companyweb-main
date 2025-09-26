import React, { useState } from 'react';
import { MessageCircleIcon, XIcon, MinimizeIcon } from 'lucide-react';

export const FloatingChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
      setIsOpen(true);
    } else {
      setIsMinimized(true);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsMinimized(false);
    }, 300);
  };

  return (
    <>
      {/* Floating Chat Button - Only show when chat is closed */}
      {!isOpen && !isMinimized && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Open chatbot"
        >
          <MessageCircleIcon className="h-6 w-6" />
        </button>
      )}

      {/* Chatbot Widget - Bottom Right Corner */}
      {(isOpen || isMinimized) && (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isMinimized ? 'w-14 h-14' : 'w-80 h-[500px]'
        }`}>
          {isMinimized ? (
            /* Minimized State */
            <button
              onClick={toggleChat}
              className="w-full h-full bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircleIcon className="h-6 w-6" />
            </button>
          ) : (
            /* Expanded State */
            <div className="w-full h-full bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                <h3 className="text-sm font-semibold">AI Assistant</h3>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={toggleChat}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    title="Minimize"
                  >
                    <MinimizeIcon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={closeChat}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    title="Close"
                  >
                    <XIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Chatbot iframe */}
              <iframe
                src="https://chatbot-maincompany.vercel.app/"
                className="flex-1 border-0"
                title="AI Chatbot"
                allow="microphone; camera"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};
