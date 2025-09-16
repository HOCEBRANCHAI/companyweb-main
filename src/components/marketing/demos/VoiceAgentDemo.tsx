import React from 'react';
import { XIcon, MicIcon, PhoneIcon, UserIcon, MessageSquareIcon } from 'lucide-react';
interface VoiceAgentDemoProps {
  onClose: () => void;
}
export function VoiceAgentDemo({
  onClose
}: VoiceAgentDemoProps) {
  return <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1B1537] rounded-xl border border-[#4A2D80]/30 max-w-2xl w-full max-h-[90vh] overflow-hidden animate-fadeIn">
        <div className="p-4 border-b border-[#4A2D80]/30 flex justify-between items-center">
          <div className="flex items-center">
            <MicIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
            <h3 className="text-xl font-bold text-white">
              AI Voice Agent Demo
            </h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-[#4A2D80]/30 transition-colors">
            <XIcon className="h-5 w-5 text-white" />
          </button>
        </div>
        <div className="p-6">
          <div className="bg-[#0A0826] rounded-xl p-6 mb-6 border border-[#4A2D80]/30">
            <div className="flex items-center justify-center mb-6">
              <PhoneIcon className="h-12 w-12 text-[#EA3A70] animate-pulse" />
            </div>
            <p className="text-center text-white mb-4">
              This is a demonstration of our AI Voice Agent technology. In a
              real implementation, the agent would engage in natural
              conversation with your leads and customers.
            </p>
            <div className="space-y-4 mt-6">
              <div className="flex items-start">
                <div className="bg-[#4A2D80]/30 p-2 rounded-full mr-3">
                  <UserIcon className="h-5 w-5 text-white" />
                </div>
                <div className="bg-[#4A2D80]/20 rounded-lg p-3 text-white max-w-[80%]">
                  Hello, I'm interested in your services. Can you tell me more
                  about pricing?
                </div>
              </div>
              <div className="flex items-start justify-end">
                <div className="bg-[#EA3A70]/20 rounded-lg p-3 text-white max-w-[80%]">
                  Hello! I'd be happy to discuss our pricing options. We offer
                  several packages starting at $99/month. Would you like me to
                  explain the features included in each package?
                </div>
                <div className="bg-[#EA3A70]/30 p-2 rounded-full ml-3">
                  <MessageSquareIcon className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-indigo-300 text-sm mb-4">
              In a full implementation, our AI Voice Agent can handle complex
              conversations, answer questions, qualify leads, and schedule
              appointments automatically.
            </p>
            <button onClick={onClose} className="px-6 py-3 bg-gradient-to-r from-[#EA3A70] to-[#4A2D80] text-white rounded-lg font-medium hover:from-[#EA3A70]/90 hover:to-[#4A2D80]/90">
              Learn More About AI Voice Agent
            </button>
          </div>
        </div>
      </div>
    </div>;
}