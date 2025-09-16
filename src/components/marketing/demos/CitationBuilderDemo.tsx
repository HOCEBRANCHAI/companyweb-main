import React from 'react';
import { XIcon, MapPinIcon, CheckCircleIcon, SearchIcon } from 'lucide-react';
interface CitationBuilderDemoProps {
  onClose: () => void;
}
export function CitationBuilderDemo({
  onClose
}: CitationBuilderDemoProps) {
  return <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1B1537] rounded-xl border border-[#4A2D80]/30 max-w-2xl w-full max-h-[90vh] overflow-hidden animate-fadeIn">
        <div className="p-4 border-b border-[#4A2D80]/30 flex justify-between items-center">
          <div className="flex items-center">
            <MapPinIcon className="h-5 w-5 text-[#4A2D80] mr-2" />
            <h3 className="text-xl font-bold text-white">
              Local Citation Builder Demo
            </h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-[#4A2D80]/30 transition-colors">
            <XIcon className="h-5 w-5 text-white" />
          </button>
        </div>
        <div className="p-6">
          <div className="bg-[#0A0826] rounded-xl p-6 mb-6 border border-[#4A2D80]/30">
            <div className="mb-6">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-400" />
                <input type="text" placeholder="Enter your business name..." className="w-full bg-[#1E1B3F] border border-[#4A2D80]/30 rounded-lg pl-10 pr-4 py-3 text-white placeholder-indigo-400" defaultValue="Tech Solutions GmbH" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#1E1B3F] rounded-lg p-4 border border-[#4A2D80]/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-[#4A2D80] mr-2" />
                    <span className="text-white font-medium">
                      Google Business Profile
                    </span>
                  </div>
                  <CheckCircleIcon className="h-5 w-5 text-green-400" />
                </div>
                <p className="text-indigo-300 text-sm">
                  Your business information is consistent and verified.
                </p>
              </div>
              <div className="bg-[#1E1B3F] rounded-lg p-4 border border-[#4A2D80]/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-[#4A2D80] mr-2" />
                    <span className="text-white font-medium">Yelp</span>
                  </div>
                  <CheckCircleIcon className="h-5 w-5 text-green-400" />
                </div>
                <p className="text-indigo-300 text-sm">
                  Your business information is consistent and verified.
                </p>
              </div>
              <div className="bg-[#1E1B3F] rounded-lg p-4 border border-[#4A2D80]/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-[#4A2D80] mr-2" />
                    <span className="text-white font-medium">Yellow Pages</span>
                  </div>
                  <div className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full">
                    Pending
                  </div>
                </div>
                <p className="text-indigo-300 text-sm">
                  Citation in progress. Estimated completion in 24 hours.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-indigo-300 text-sm mb-4">
              Our Local Citation Builder ensures your business information is
              consistent across all major directories, boosting your local SEO
              performance.
            </p>
            <button onClick={onClose} className="px-6 py-3 bg-gradient-to-r from-[#4A2D80] to-[#6E36C9] text-white rounded-lg font-medium hover:from-[#4A2D80]/90 hover:to-[#6E36C9]/90">
              Learn More About Citation Builder
            </button>
          </div>
        </div>
      </div>
    </div>;
}