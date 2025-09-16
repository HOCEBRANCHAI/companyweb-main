import React, { useState } from 'react';
import { BarChart2Icon, FileTextIcon, DownloadIcon, ArrowRightIcon, CheckCircleIcon, PieChartIcon, TrendingUpIcon, AlertCircleIcon, CalendarIcon, EyeIcon, PlusIcon, MessageSquareIcon, SendIcon, BrainIcon, PaperclipIcon, MousePointerIcon } from 'lucide-react';
import { SimpleImage } from '../common/SimpleImage';
interface TaxPortalPreviewProps {
  activeTab: string;
}
export function TaxPortalPreview({
  activeTab
}: TaxPortalPreviewProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const simulateInteraction = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };
  return <div>
      {activeTab === 'analysis' && <div className="relative">
          <SimpleImage imageName="Corporate_Tax_Analaysis.jpg" alt="Tax Analysis Dashboard" className="w-full rounded-xl border border-indigo-500/30" />
          <div className="absolute top-4 right-4 flex space-x-2">
            <button className="p-2 bg-indigo-900/70 backdrop-blur-sm text-white rounded-lg hover:bg-indigo-800 transition-colors">
              <EyeIcon className="h-5 w-5" />
            </button>
            <button className="p-2 bg-[#EA3A70]/90 backdrop-blur-sm text-white rounded-lg hover:bg-[#EA3A70] transition-colors">
              <DownloadIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-indigo-900/70 backdrop-blur-sm rounded-lg border border-indigo-500/30">
            <h3 className="text-white font-medium mb-2">
              Tax Analysis Dashboard
            </h3>
            <p className="text-indigo-200 text-sm">
              Visualize your tax position and identify optimization
              opportunities with AI-powered analysis
            </p>
          </div>
        </div>}
      {activeTab === 'filing' && <div className="relative">
          <SimpleImage imageName="tax_portal_planning.jpg" alt="Tax Filing Interface" className="w-full rounded-xl border border-indigo-500/30" />
          <div className="absolute top-4 right-4 flex space-x-2">
            <button className="p-2 bg-indigo-900/70 backdrop-blur-sm text-white rounded-lg hover:bg-indigo-800 transition-colors">
              <CalendarIcon className="h-5 w-5" />
            </button>
            <button className="p-2 bg-[#EA3A70]/90 backdrop-blur-sm text-white rounded-lg hover:bg-[#EA3A70] transition-colors">
              <PlusIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-indigo-900/70 backdrop-blur-sm rounded-lg border border-indigo-500/30">
            <h3 className="text-white font-medium mb-2">
              Tax Filing Interface
            </h3>
            <p className="text-indigo-200 text-sm">
              Streamlined tax filing with step-by-step guidance and automated
              calculations
            </p>
          </div>
        </div>}
      {activeTab === 'assistant' && <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="p-2 bg-[#EA3A70]/20 rounded-full mr-3">
                <BrainIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI Tax Agent</h3>
                <p className="text-indigo-300 text-sm">
                  24/7 tax assistance powered by AI
                </p>
              </div>
            </div>
          </div>
          <div className="bg-indigo-900/20 backdrop-blur-sm rounded-xl border border-indigo-500/20 p-4 mb-4 h-72 overflow-y-auto">
            <div className="space-y-4">
              {/* AI Message */}
              <div className="flex justify-start">
                <div className="max-w-3/4 bg-indigo-800/50 border border-indigo-500/30 rounded-lg p-3 text-white">
                  <p>
                    Hello! I'm your AI Tax Agent. How can I assist you with your
                    Dutch tax matters today?
                  </p>
                  <p className="text-xs mt-1 text-indigo-300">10:30 AM</p>
                </div>
              </div>
              {/* User Message */}
              <div className="flex justify-end">
                <div className="max-w-3/4 bg-[#EA3A70] rounded-lg p-3 text-white">
                  <p>
                    I need help with my quarterly VAT return. What documentation
                    do I need to prepare?
                  </p>
                  <p className="text-xs mt-1 text-pink-200">10:32 AM</p>
                </div>
              </div>
              {/* AI Response */}
              <div className="flex justify-start">
                <div className="max-w-3/4 bg-indigo-800/50 border border-indigo-500/30 rounded-lg p-3 text-white">
                  <p>
                    For your quarterly VAT return, you'll need to prepare the
                    following documentation:
                  </p>
                  <ol className="list-decimal pl-5 mt-2 space-y-1">
                    <li>Sales invoices for the quarter</li>
                    <li>Purchase invoices with VAT</li>
                    <li>Bank statements for reconciliation</li>
                    <li>Records of EU sales and purchases</li>
                    <li>Previous VAT return for reference</li>
                  </ol>
                  <p className="mt-2">
                    Would you like me to help you organize these documents or
                    explain any specific aspect in more detail?
                  </p>
                  <p className="text-xs mt-1 text-indigo-300">10:33 AM</p>
                </div>
              </div>
              {/* Typing indicator (shown when isAnimating is true) */}
              {isAnimating && <div className="flex justify-start">
                  <div className="bg-indigo-800/50 border border-indigo-500/30 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-indigo-300 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-indigo-300 rounded-full animate-bounce" style={{
                  animationDelay: '0.2s'
                }}></div>
                      <div className="h-2 w-2 bg-indigo-300 rounded-full animate-bounce" style={{
                  animationDelay: '0.4s'
                }}></div>
                    </div>
                  </div>
                </div>}
            </div>
          </div>
          <div className="flex items-end">
            <div className="flex-1 relative">
              <textarea placeholder="Ask a tax question..." className="w-full bg-indigo-900/30 border border-indigo-500/30 rounded-lg px-4 py-3 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-[#EA3A70] resize-none" rows={2} onClick={simulateInteraction} />
              <button className="absolute bottom-2 right-2 p-1.5 bg-indigo-800/50 rounded-md hover:bg-indigo-700/50 transition-colors">
                <PaperclipIcon className="h-4 w-4 text-indigo-300" />
              </button>
            </div>
            <button onClick={simulateInteraction} className="ml-3 p-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors flex-shrink-0">
              <SendIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-6">
            <h4 className="text-white font-medium mb-3">Suggested Questions</h4>
            <div className="flex flex-wrap gap-2">
              <button onClick={simulateInteraction} className="px-3 py-1.5 bg-indigo-800/40 text-indigo-200 rounded-lg hover:bg-indigo-700/40 text-sm">
                How do I qualify for the 30% ruling?
              </button>
              <button onClick={simulateInteraction} className="px-3 py-1.5 bg-indigo-800/40 text-indigo-200 rounded-lg hover:bg-indigo-700/40 text-sm">
                What's the deadline for my VAT return?
              </button>
              <button onClick={simulateInteraction} className="px-3 py-1.5 bg-indigo-800/40 text-indigo-200 rounded-lg hover:bg-indigo-700/40 text-sm">
                Can you help me draft an objection letter?
              </button>
            </div>
          </div>
          <div className="mt-4 text-center">
            <button onClick={simulateInteraction} className="inline-flex items-center text-indigo-300 hover:text-white text-sm">
              <MousePointerIcon className="h-4 w-4 mr-1" />
              Click to interact with the demo
            </button>
          </div>
        </div>}
    </div>;
}