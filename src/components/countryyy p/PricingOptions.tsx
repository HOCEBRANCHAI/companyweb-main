import React, { useState } from 'react';
import { CheckIcon, SparklesIcon } from 'lucide-react';
export const PricingOptions = () => {
  const [selectedTab, setSelectedTab] = useState('one-off');
  const [hoveredCard, setHoveredCard] = useState(null);
  return <section id="pricing-options" className="py-20 px-4 bg-[#0c0a20]/90 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute top-0 left-1/2 w-1/3 h-1/3 bg-pink-500/10 rounded-full blur-3xl transform -translate-x-1/2 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '4s'
    }}></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-pink-500/20 text-pink-500 text-sm font-medium mb-4 animate-pulse">
            <SparklesIcon className="w-4 h-4 inline mr-1" /> PRICING OPTIONS{' '}
            <SparklesIcon className="w-4 h-4 inline ml-1" />
          </div>
          <h2 className="text-4xl font-bold mb-4 relative inline-block group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Choose Your Branch Office
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-indigo-500 transform scale-x-0 transition-transform duration-500 origin-bottom-left group-hover:scale-x-100"></span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
            Select the option that best suits your business needs
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="bg-[#1c1a40] p-1 rounded-lg inline-flex shadow-lg backdrop-blur-sm">
            <button className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${selectedTab === 'one-off' ? 'bg-pink-500 text-white shadow-md' : 'text-gray-300 hover:text-white'}`} onClick={() => setSelectedTab('one-off')}>
              One-Off Registration
            </button>
            <button className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${selectedTab === 'ebranch' ? 'bg-pink-500 text-white shadow-md' : 'text-gray-300 hover:text-white'}`} onClick={() => setSelectedTab('ebranch')}>
              eBranch
            </button>
            <button className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${selectedTab === 'market-entry' ? 'bg-pink-500 text-white shadow-md' : 'text-gray-300 hover:text-white'}`} onClick={() => setSelectedTab('market-entry')}>
              Market Entry
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* One-Off Registration */}
          <div className={`bg-gradient-to-b from-[#1c1a40] to-[#1c1a40]/80 rounded-xl p-8 border-2 transition-all duration-500 transform ${hoveredCard === 'one-off' ? 'scale-105 -translate-y-2' : 'scale-100'} ${selectedTab === 'one-off' ? 'border-pink-500 shadow-lg shadow-pink-500/20' : 'border-transparent'}`} onMouseEnter={() => setHoveredCard('one-off')} onMouseLeave={() => setHoveredCard(null)}>
            <h3 className="text-xl font-bold mb-1">
              One-Off Branch Registration
            </h3>
            <p className="text-gray-400 mb-6">
              Branch registration without subscription
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-white">
                €895
              </span>
              <span className="text-gray-400">/one-time fee</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start group">
                <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-white">
                  Branch registration without subscription
                </span>
              </li>
              <li className="flex items-start group">
                <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-white">
                  +€300-600 notary fee (required by Italian law)
                </span>
              </li>
              <li className="flex items-start group">
                <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-white">
                  +€200-500 registration fees
                </span>
              </li>
            </ul>
            <button className="w-full relative overflow-hidden border-2 border-pink-500 text-pink-500 hover:text-white font-bold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center group">
              <span className="relative z-10">
                Select Plan{' '}
                <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
              <span className="absolute inset-0 bg-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </button>
          </div>
          {/* eBranch */}
          <div className={`bg-gradient-to-b from-[#1c1a40] to-[#1c1a40]/80 rounded-xl p-8 border-2 transition-all duration-500 transform ${hoveredCard === 'ebranch' ? 'scale-105 -translate-y-2' : 'scale-100'} ${selectedTab === 'ebranch' ? 'border-pink-500 shadow-lg shadow-pink-500/20' : 'border-transparent'} relative`} onMouseEnter={() => setHoveredCard('ebranch')} onMouseLeave={() => setHoveredCard(null)}>
            <div className="absolute -top-3 right-8 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-1">eBranch</h3>
            <p className="text-gray-400 mb-6">
              Complete branch management solution
            </p>
            <div className="mb-2">
              <div className="inline-block px-3 py-1 rounded-md bg-pink-500/20 text-pink-500 text-xs font-medium mb-2">
                SAVE €600
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-white">
                  €1,995
                </span>
                <span className="text-gray-400 line-through ml-2">€2,595</span>
                <span className="text-gray-400 ml-2">/yearly</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start group">
                <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-white">
                  Complete branch management solution
                </span>
              </li>
              <li className="flex items-start group">
                <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-white">
                  +€300-600 notary fee (required by Italian law)
                </span>
              </li>
              <li className="flex items-start group">
                <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-white">
                  Pause, modify, or cancel anytime after 1 year
                </span>
              </li>
              <li className="flex items-start group">
                <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-white">
                  Everything in One-Off registration
                </span>
              </li>
              <li className="flex items-start group">
                <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-white">
                  Registered Office (€1,200 value)
                </span>
              </li>
              <li className="flex items-start group">
                <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-white">
                  Advanced Software Suite (€795 value)
                </span>
              </li>
              <li className="flex items-start group">
                <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-white">
                  AI + Community Support
                </span>
              </li>
            </ul>
            <button className="w-full relative overflow-hidden bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-pink-500/30">
              <span className="relative z-10">
                Get Started{' '}
                <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </button>
          </div>
          {/* Market Entry */}
          <div className={`bg-gradient-to-b from-[#1c1a40] to-[#1c1a40]/80 rounded-xl p-8 border-2 transition-all duration-500 transform ${hoveredCard === 'market-entry' ? 'scale-105 -translate-y-2' : 'scale-100'} ${selectedTab === 'market-entry' ? 'border-pink-500 shadow-lg shadow-pink-500/20' : 'border-transparent'}`} onMouseEnter={() => setHoveredCard('market-entry')} onMouseLeave={() => setHoveredCard(null)}>
            <h3 className="text-xl font-bold mb-1">
              eBranch & Go-to-Market Report
            </h3>
            <p className="text-gray-400 mb-6">Full market entry package</p>
            <div className="mb-2">
              <div className="inline-block px-3 py-1 rounded-md bg-pink-500/20 text-pink-500 text-xs font-medium mb-2">
                SAVE €200
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-white">
                  €2,290
                </span>
                <span className="text-gray-400 line-through ml-2">€2,490</span>
                <span className="text-gray-400 ml-2">/yearly</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start group">
                <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-white">
                  Full market entry package
                </span>
              </li>
              <li className="flex items-start group">
                <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-white">
                  +€300-600 notary fee (required by Italian law)
                </span>
              </li>
              <li className="flex items-start group">
                <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-white">
                  Pause, modify, or cancel anytime after 1 year
                </span>
              </li>
              <li className="flex items-start group">
                <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-white">
                  Comprehensive market analysis
                </span>
              </li>
              <li className="flex items-start group">
                <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-colors duration-300 group-hover:text-white">
                  Strategic entry roadmap
                </span>
              </li>
            </ul>
            <button className="w-full relative overflow-hidden border-2 border-pink-500 text-pink-500 hover:text-white font-bold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center group">
              <span className="relative z-10">
                Select Plan{' '}
                <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
              <span className="absolute inset-0 bg-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </button>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400 text-sm flex justify-center gap-4 flex-wrap">
          <div className="flex items-center transition-all duration-300 hover:text-white hover:scale-105">
            <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-2"></span>
            No hidden fees
          </div>
          <div className="flex items-center transition-all duration-300 hover:text-white hover:scale-105">
            <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-2"></span>
            Money-back guarantee
          </div>
          <div className="flex items-center transition-all duration-300 hover:text-white hover:scale-105">
            <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-2"></span>
            100% secure checkout
          </div>
        </div>
      </div>
    </section>;
};