import React, { useEffect, useState } from 'react';
import { CheckIcon } from 'lucide-react';
export const CountryAdvantage = ({ countryName = 'Italy', mainCity = 'Rome' }: { countryName?: string; mainCity?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('country-advantage');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    handleScroll(); // Check on initial load
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section id="country-advantage" className="py-20 px-4 bg-[#0c0a20]/90 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#1c1a40]/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-[#1c1a40]/30 to-transparent"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '1.5s'
    }}></div>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="overflow-hidden rounded-xl group perspective shadow-xl shadow-pink-500/5">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt={`${mainCity} skyline with historic architecture`} className="rounded-xl w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a20]/50 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-pink-500/20 text-pink-500 text-sm font-medium mb-4 animate-pulse">
              STRATEGIC LOCATION
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              {countryName} Advantage
            </h2>
            <p className="text-gray-300 mb-8">
              {countryName} offers a strategic gateway to European and Mediterranean
              markets with a rich business tradition, established infrastructure,
              and access to a market of over 500 million EU consumers.
            </p>
            <div className="space-y-6">
              <div className="flex items-start transition-all duration-500 transform hover:-translate-x-1 hover:shadow-lg p-3 rounded-lg hover:bg-[#1c1a40]/50 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-full p-1 transition-all duration-300 transform group-hover:scale-110 shadow-md shadow-pink-500/20">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg group-hover:text-pink-100 transition-colors duration-300">
                    Strategic Location
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Gateway to Mediterranean and European markets with excellent
                    logistics infrastructure
                  </p>
                </div>
              </div>
              <div className="flex items-start transition-all duration-500 transform hover:-translate-x-1 hover:shadow-lg p-3 rounded-lg hover:bg-[#1c1a40]/50 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-full p-1 transition-all duration-300 transform group-hover:scale-110 shadow-md shadow-pink-500/20">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg group-hover:text-pink-100 transition-colors duration-300">
                    Business-friendly Environment
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Strong manufacturing tradition and innovative business
                    ecosystem
                  </p>
                </div>
              </div>
              <div className="flex items-start transition-all duration-500 transform hover:-translate-x-1 hover:shadow-lg p-3 rounded-lg hover:bg-[#1c1a40]/50 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-full p-1 transition-all duration-300 transform group-hover:scale-110 shadow-md shadow-pink-500/20">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg group-hover:text-pink-100 transition-colors duration-300">
                    Highly Skilled Workforce
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Access to a talented labor pool with specialized expertise
                    in design, engineering, and manufacturing
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-8 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 flex items-center group shadow-lg hover:shadow-pink-500/30">
              Start Your Branch Registration{' '}
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>;
};