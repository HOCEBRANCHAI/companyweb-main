import React from 'react';
import { XIcon, FileTextIcon, RefreshCwIcon, InstagramIcon, LinkedinIcon, FacebookIcon } from 'lucide-react';
interface ContentGeneratorDemoProps {
  onClose: () => void;
}
export function ContentGeneratorDemo({
  onClose
}: ContentGeneratorDemoProps) {
  return <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1B1537] rounded-xl border border-[#4A2D80]/30 max-w-2xl w-full max-h-[90vh] overflow-hidden animate-fadeIn">
        <div className="p-4 border-b border-[#4A2D80]/30 flex justify-between items-center">
          <div className="flex items-center">
            <FileTextIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
            <h3 className="text-xl font-bold text-white">
              Content Generator Demo
            </h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-[#4A2D80]/30 transition-colors">
            <XIcon className="h-5 w-5 text-white" />
          </button>
        </div>
        <div className="p-6">
          <div className="bg-[#0A0826] rounded-xl p-6 mb-6 border border-[#4A2D80]/30">
            <div className="mb-6">
              <label className="block text-white mb-2">Topic</label>
              <input type="text" placeholder="Enter a topic for your content..." className="w-full bg-[#1E1B3F] border border-[#4A2D80]/30 rounded-lg px-4 py-3 text-white placeholder-indigo-400" defaultValue="AI-powered business solutions" />
            </div>
            <div className="mb-6">
              <label className="flex items-center justify-between text-white mb-2">
                <span>Generated Content</span>
                <button className="flex items-center text-[#EA3A70] text-sm">
                  <RefreshCwIcon className="h-4 w-4 mr-1" />
                  Regenerate
                </button>
              </label>
              <div className="bg-[#1E1B3F] border border-[#4A2D80]/30 rounded-lg p-4 text-white">
                <p>
                  Revolutionize your business operations with our cutting-edge
                  AI solutions! 🚀 Our intelligent automation tools help you
                  streamline workflows, enhance customer experiences, and drive
                  growth—all while reducing operational costs. #AIInnovation
                  #BusinessEfficiency #FutureOfWork
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex items-center justify-center bg-[#1E1B3F] border border-[#4A2D80]/30 rounded-lg p-3 text-white hover:bg-[#4A2D80]/20">
                <InstagramIcon className="h-5 w-5 mr-2" />
                Instagram
              </button>
              <button className="flex items-center justify-center bg-[#1E1B3F] border border-[#4A2D80]/30 rounded-lg p-3 text-white hover:bg-[#4A2D80]/20">
                <LinkedinIcon className="h-5 w-5 mr-2" />
                LinkedIn
              </button>
              <button className="flex items-center justify-center bg-[#1E1B3F] border border-[#4A2D80]/30 rounded-lg p-3 text-white hover:bg-[#4A2D80]/20">
                <FacebookIcon className="h-5 w-5 mr-2" />
                Facebook
              </button>
            </div>
          </div>
          <div className="text-center">
            <p className="text-indigo-300 text-sm mb-4">
              Our Content Generator creates engaging, platform-optimized content
              for your social media channels, blogs, and marketing campaigns.
            </p>
            <button onClick={onClose} className="px-6 py-3 bg-gradient-to-r from-[#EA3A70] to-[#4A2D80] text-white rounded-lg font-medium hover:from-[#EA3A70]/90 hover:to-[#4A2D80]/90">
              Learn More About Content Generator
            </button>
          </div>
        </div>
      </div>
    </div>;
}