import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RocketIcon, PlayCircleIcon, ArrowRightIcon, GlobeIcon, MapPinIcon, CheckIcon } from 'lucide-react';
import { SimpleImage } from '../common/SimpleImage';
import { countries } from '../../constants/countries';
export function HeroSection() {
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  // Popular/featured countries to highlight
  const featuredCountries = ['nl', 'de', 'fr', 'es', 'ie'];
  // Load selected country from localStorage on initial load
  useEffect(() => {
    const savedCountry = localStorage.getItem('preferredCountry');
    if (savedCountry && countries[savedCountry]) {
      setSelectedCountry(savedCountry);
    }
  }, []);
  // Handle country selection
  const handleCountrySelect = countryCode => {
    setSelectedCountry(countryCode);
    setShowCountrySelector(false);
    // Save country preference to localStorage
    localStorage.setItem('preferredCountry', countryCode);
  };
  // Filter countries based on search query
  const filteredCountries = Object.entries(countries).filter(([code, name]) => name.toLowerCase().includes(searchQuery.toLowerCase()) || code.toLowerCase().includes(searchQuery.toLowerCase()));
  // Get country flag emoji
  const getCountryFlag = countryCode => {
    const flagEmojis = {
      nl: '🇳🇱',
      de: '🇩🇪',
      fr: '🇫🇷',
      es: '🇪🇸',
      ie: '🇮🇪',
      be: '🇧🇪',
      it: '🇮🇹',
      lu: '🇱🇺',
      at: '🇦🇹',
      pl: '🇵🇱',
      hu: '🇭🇺',
      gr: '🇬🇷',
      ro: '🇷🇴',
      bg: '🇧🇬',
      ee: '🇪🇪',
      lt: '🇱🇹',
      lv: '🇱🇻',
      dk: '🇩🇰',
      fi: '🇫🇮',
      se: '🇸🇪',
      pt: '🇵🇹',
      cy: '🇨🇾',
      cz: '🇨🇿',
      sk: '🇸🇰',
      si: '🇸🇮',
      hr: '🇭🇷',
      mt: '🇲🇹'
    };
    return flagEmojis[countryCode] || '🇪🇺';
  };
  return <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#0A0826] z-0"></div>
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#EA3A70]/20 rounded-full blur-[100px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[#EA3A70]/10 rounded-full blur-[100px] translate-y-1/2"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="max-w-3xl animate-fadeInUp">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#EA3A70]/20 text-[#EA3A70] mb-6 backdrop-blur-sm">
              <RocketIcon className="h-4 w-4 mr-2" />
              <span>Expand your business across Europe</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Your Business in Europe, <br />
              Without the Complexity
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              House of Companies provides all-in-one solutions for international
              businesses to establish and operate across all 27 EU countries,
              without the traditional costs and complexity.
            </p>
            {/* Country selection button */}
            <div className="mb-6 sm:mb-8">
              <button onClick={() => setShowCountrySelector(true)} className="w-full sm:w-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-indigo-900/50 border border-indigo-500/30 rounded-xl hover:bg-indigo-800/50 transition-colors text-white">
                <div className="flex items-center">
                  <GlobeIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-[#EA3A70]" />
                  <div className="text-left">
                    <div className="text-xs text-indigo-300 mb-1">
                      Select your target market
                    </div>
                    <div className="font-medium text-sm sm:text-base">
                      {selectedCountry ? <span className="flex items-center">
                          <span className="mr-2 text-base sm:text-lg">
                            {getCountryFlag(selectedCountry)}
                          </span>
                          <span className="truncate">{countries[selectedCountry]}</span>
                        </span> : 'Discover the best EU country for your business'}
                    </div>
                  </div>
                </div>
                <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 ml-2 sm:ml-3 text-indigo-300 flex-shrink-0" />
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/get-started" className="w-full sm:w-auto px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors flex items-center justify-center font-medium shadow-md shadow-[#EA3A70]/20">
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/book-demo" className="w-full sm:w-auto px-6 py-3 bg-[#1B1537] text-white rounded-lg border border-[#2D2755] hover:bg-[#2D2755]/50 transition-colors flex items-center justify-center font-medium">
                <PlayCircleIcon className="h-5 w-5 mr-2" />
                Book a Demo
              </Link>
            </div>
          </div>
          <div className="relative animate-fadeInRight">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#2D2755] bg-[#1B1537]/20 backdrop-blur-sm">
              <div className="aspect-video w-full">
                <SimpleImage imageName="Branch_LP.jpg" alt="Platform dashboard" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B1F] via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-4 border border-[#2D2755]">
                  <div className="flex items-center mb-2">
                    <div className="h-3 w-3 rounded-full bg-green-400 mr-2"></div>
                    <p className="text-white text-sm font-medium">
                      Live Dashboard Demo
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Manage your entire European business operations from a
                    single dashboard
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-[#EA3A70]/10 backdrop-blur-sm rounded-full p-6 border border-[#EA3A70]/30 shadow-xl">
              <div className="text-center">
                <p className="text-[#EA3A70] font-bold text-xl">48h</p>
                <p className="text-white text-xs">Launch Time</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-4 border border-[#2D2755] shadow-xl max-w-xs">
              <div className="flex items-center mb-2">
                <div className="p-2 rounded-full bg-[#EA3A70]/20 mr-3">
                  <RocketIcon className="h-5 w-5 text-[#EA3A70]" />
                </div>
                <p className="text-white font-medium">Launch in 48 Hours</p>
              </div>
              <p className="text-gray-300 text-sm">
                Get your European business up and running in just 2 days with
                our eBranch solution
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Country Selector Modal */}
      {showCountrySelector && <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1B1537] rounded-xl border border-[#2D2755] max-w-4xl w-full max-h-[90vh] overflow-hidden animate-fadeIn">
            <div className="p-6 border-b border-[#2D2755] flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">
                Select Your Target Market
              </h3>
              <button onClick={() => setShowCountrySelector(false)} className="p-2 rounded-full hover:bg-[#2D2755]/50 transition-colors">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <p className="text-indigo-200 mb-6">
                Choose your target European market to get personalized
                information about business formation, tax regulations, and
                market opportunities specific to that country.
              </p>
              {/* Search Box */}
              <div className="relative mb-6">
                <input type="text" placeholder="Search countries..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg pl-10 pr-4 py-3 text-white placeholder-indigo-400 focus:outline-none focus:border-[#EA3A70]/50" />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* EU Map Visualization (Simplified for this implementation) */}
                <div className="hidden md:block bg-[#0F0B1F] border border-[#2D2755] rounded-xl p-4 relative">
                  <h4 className="text-white font-medium mb-3">
                    European Union
                  </h4>
                  <div className="aspect-square relative">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/EU27-2020_European_Union_map.svg/800px-EU27-2020_European_Union_map.svg.png" alt="EU Map" className="w-full h-full object-contain opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B1F] via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-center text-indigo-200 text-sm">
                      Select a country from the list to see country-specific
                      information
                    </div>
                  </div>
                </div>
                {/* Country List */}
                <div className="space-y-6">
                  {/* Featured Countries */}
                  <div>
                    <h4 className="text-xs font-medium text-indigo-400 mb-3 uppercase">
                      Popular Markets
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {featuredCountries.map(code => <button key={code} onClick={() => handleCountrySelect(code)} className={`flex items-center justify-between p-3 rounded-lg transition-colors ${selectedCountry === code ? 'bg-[#EA3A70]/20 border border-[#EA3A70]/30' : 'hover:bg-[#2D2755]/50 border border-transparent'}`}>
                          <div className="flex items-center">
                            <span className="text-xl mr-3">
                              {getCountryFlag(code)}
                            </span>
                            <span className="text-white">
                              {countries[code]}
                            </span>
                          </div>
                          {selectedCountry === code && <CheckIcon className="h-4 w-4 text-[#EA3A70]" />}
                        </button>)}
                    </div>
                  </div>
                  {/* All Countries */}
                  <div>
                    <h4 className="text-xs font-medium text-indigo-400 mb-3 uppercase">
                      {searchQuery ? 'Search Results' : 'All EU Countries'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
                      {filteredCountries.filter(([code]) => !featuredCountries.includes(code) || searchQuery).map(([code, name]) => <button key={code} onClick={() => handleCountrySelect(code)} className={`flex items-center justify-between p-3 rounded-lg transition-colors ${selectedCountry === code ? 'bg-[#EA3A70]/20 border border-[#EA3A70]/30' : 'hover:bg-[#2D2755]/50 border border-transparent'}`}>
                            <div className="flex items-center">
                              <span className="text-xl mr-3">
                                {getCountryFlag(code)}
                              </span>
                              <span className="text-white">{name}</span>
                            </div>
                            {selectedCountry === code && <CheckIcon className="h-4 w-4 text-[#EA3A70]" />}
                          </button>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-[#2D2755] bg-[#0F0B1F]/50">
              <div className="flex justify-between items-center">
                <p className="text-xs text-indigo-300">
                  Your selection will be remembered across the site
                </p>
                <button onClick={() => setShowCountrySelector(false)} className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm font-medium">
                  Confirm Selection
                </button>
              </div>
            </div>
          </div>
        </div>}
    </section>;
}