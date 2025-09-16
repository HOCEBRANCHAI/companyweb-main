import React, { useState } from 'react';
import { GlobeIcon, SearchIcon, CheckIcon } from 'lucide-react';
import { countries } from '../../constants/countries';
interface CountrySelectorProps {
  onCountrySelect: (country: string) => void;
  selectedCountry: string | null;
}
export function CountrySelector({
  onCountrySelect,
  selectedCountry
}: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredCountries = Object.entries(countries).filter(([code, name]) => name.toLowerCase().includes(searchTerm.toLowerCase())).sort((a, b) => a[1].localeCompare(b[1]));
  const handleSelect = (countryCode: string) => {
    onCountrySelect(countryCode);
    setIsOpen(false);
    setSearchTerm('');
  };
  return <div className="relative inline-block">
      <button className="flex items-center space-x-2 px-4 py-2 bg-[#2D2755]/50 hover:bg-[#2D2755] border border-[#2D2755] rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
        <GlobeIcon className="h-4 w-4 text-[#EA3A70]" />
        <span className="text-white text-sm">
          {selectedCountry ? countries[selectedCountry] : 'Optimize for your country'}
        </span>
      </button>
      {isOpen && <div className="absolute z-10 mt-2 w-72 bg-[#1B1537] border border-[#2D2755] rounded-lg shadow-xl">
          <div className="p-3 border-b border-[#2D2755]">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input type="text" placeholder="Search countries..." className="w-full pl-10 pr-4 py-2 bg-[#0F0B1F] border border-[#2D2755] rounded-lg text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#EA3A70]" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
          </div>
          <div className="max-h-60 overflow-y-auto py-2">
            {filteredCountries.map(([code, name]) => <button key={code} className="w-full text-left px-4 py-2 hover:bg-[#2D2755] flex items-center justify-between" onClick={() => handleSelect(code)}>
                <span className="text-white text-sm">{name}</span>
                {selectedCountry === code && <CheckIcon className="h-4 w-4 text-[#EA3A70]" />}
              </button>)}
            {filteredCountries.length === 0 && <div className="px-4 py-2 text-gray-400 text-sm">
                No countries found
              </div>}
          </div>
          <div className="p-3 border-t border-[#2D2755] text-xs text-gray-400">
            All templates work for any EU country, but country selection
            enhances specificity.
          </div>
        </div>}
    </div>;
}