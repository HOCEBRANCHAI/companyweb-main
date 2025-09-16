import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, BuildingIcon, PlusIcon } from 'lucide-react';
interface Company {
  id: string;
  name: string;
  type: string;
  country: string;
}
export function CompanyDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const companies: Company[] = [{
    id: '1',
    name: 'Tech Innovations B.V.',
    type: 'Private Limited',
    country: 'Netherlands'
  }, {
    id: '2',
    name: 'Digital Solutions GmbH',
    type: 'GmbH',
    country: 'Germany'
  }, {
    id: '3',
    name: 'Global Ventures Ltd',
    type: 'Limited Company',
    country: 'United Kingdom'
  }];
  const [selectedCompany, setSelectedCompany] = useState<Company>(companies[0]);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const selectCompany = (company: Company) => {
    setSelectedCompany(company);
    setIsOpen(false);
  };
  return <div className="relative" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="flex items-center space-x-2 bg-indigo-900/40 hover:bg-indigo-800/60 transition-colors px-3 py-2 rounded-xl border border-indigo-500/30">
        <div className="p-1.5 bg-indigo-800/70 rounded-lg">
          <BuildingIcon className="h-4 w-4 text-indigo-300" />
        </div>
        <div className="text-left">
          <p className="text-white font-medium text-sm truncate max-w-[150px]">
            {selectedCompany.name}
          </p>
          <p className="text-indigo-300 text-xs">{selectedCompany.country}</p>
        </div>
        <ChevronDown className={`h-4 w-4 text-indigo-300 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="absolute z-50 mt-2 w-64 bg-[#1E1B3F] border border-indigo-500/30 rounded-xl shadow-xl backdrop-blur-md py-2 animate-fadeIn">
          <div className="px-3 py-2 border-b border-indigo-500/30">
            <p className="text-indigo-200 text-xs">COMPANIES</p>
          </div>
          <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-700 scrollbar-track-indigo-900">
            {companies.map(company => <button key={company.id} onClick={() => selectCompany(company)} className={`w-full text-left px-3 py-2.5 hover:bg-indigo-800/50 transition-colors flex items-center space-x-2 ${selectedCompany.id === company.id ? 'bg-indigo-800/30' : ''}`}>
                <div className={`p-1.5 rounded-lg ${selectedCompany.id === company.id ? 'bg-[#EA3A70]/20' : 'bg-indigo-900/50'}`}>
                  <BuildingIcon className={`h-4 w-4 ${selectedCompany.id === company.id ? 'text-[#EA3A70]' : 'text-indigo-300'}`} />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    {company.name}
                  </p>
                  <p className="text-indigo-300 text-xs">
                    {company.type} • {company.country}
                  </p>
                </div>
              </button>)}
          </div>
          <div className="px-3 py-2 border-t border-indigo-500/30 mt-1">
            <button className="w-full flex items-center space-x-2 text-indigo-300 hover:text-white transition-colors px-2 py-1.5 rounded-lg hover:bg-indigo-800/50">
              <PlusIcon className="h-4 w-4" />
              <span className="text-sm">Add New Company</span>
            </button>
          </div>
        </div>}
    </div>;
}