import React, { useState } from 'react';

interface ChatbotWidgetProps {
  chatbotUrl?: string;
}

export function ChatbotWidget({ chatbotUrl = 'https://chatbot-lead-qualification-flow.vercel.app/' }: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot iframe container */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden
                    w-[calc(100vw-2rem)] max-w-sm // On small screens, take full width minus 2rem (32px) for padding, max-width of 384px
                    h-[calc(100vh-8rem)] // On small screens, take 80% of viewport height (100vh - 8rem/128px) to leave space for button and margins
                    md:w-96 md:h-[500px] // On medium screens (768px+) and up, revert to the original desktop width (384px) and height (500px)
                    ">
          {/* Removed the top blue bar div */}
          <iframe
            src={chatbotUrl}
            // The iframe now simply fills the responsive dimensions of its parent container
            className="w-full h-full border-0"
            title="House of Companies Chatbot"
            allow="microphone; camera"
          />
        </div>
      )}

      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        aria-label="Open chatbot"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}
