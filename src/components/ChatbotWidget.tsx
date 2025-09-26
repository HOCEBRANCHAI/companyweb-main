import React from 'react';
import { DirectChatInterface } from './chatbot/DirectChatInterface';
import { XIcon } from 'lucide-react';

interface ChatbotWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl h-[80vh] max-h-[600px]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-colors"
          aria-label="Close chatbot"
        >
          <XIcon className="h-5 w-5 text-gray-600" />
        </button>
        
        {/* Chatbot Interface */}
        <div className="w-full h-full border-0 rounded-lg shadow-2xl overflow-hidden">
          <DirectChatInterface />
        </div>
      </div>
    </div>
  );
};