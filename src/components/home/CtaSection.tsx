import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, RocketIcon, GlobeIcon } from 'lucide-react';
import { countries } from '../../constants/countries';
export function CtaSection() {
  const [selectedCountry, setSelectedCountry] = useState('');
  // Load selected country from localStorage on initial load
  useEffect(() => {
    const savedCountry = localStorage.getItem('preferredCountry');
    if (savedCountry && countries[savedCountry]) {
      setSelectedCountry(savedCountry);
    }
  }, []);
  // Get country name based on code
  const getCountryName = code => countries[code] || 'European';
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
  return <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#0A0826] border border-[#2D2755]">
          {/* Background glow effects */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#EA3A70]/20 rounded-full blur-[100px] -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[#EA3A70]/10 rounded-full blur-[100px] translate-y-1/2"></div>
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#EA3A70]/20 text-[#EA3A70] mb-6 backdrop-blur-sm">
                <RocketIcon className="h-4 w-4 mr-2" />
                <span>Get Started Today</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {selectedCountry ? <span className="flex items-center justify-center">
                    <span className="text-2xl mr-3">
                      {getCountryFlag(selectedCountry)}
                    </span>
                    Ready to Launch Your Business in{' '}
                    {getCountryName(selectedCountry)}?
                  </span> : 'Ready to Launch Your Business in Europe?'}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of international businesses that have successfully
                established their European presence through House of Companies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/get-started" className="px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors flex items-center font-medium shadow-md shadow-[#EA3A70]/20">
                  Get Started
                </Link>
                <Link to="/book-demo" className="px-6 py-3 bg-[#1B1537] text-white rounded-lg border border-[#2D2755] hover:bg-[#2D2755]/50 transition-colors flex items-center font-medium">
                  Book a Consultation
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}