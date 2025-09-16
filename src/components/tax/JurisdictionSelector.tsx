import React, { useState } from 'react';
import { SearchIcon, GlobeIcon } from 'lucide-react';
interface JurisdictionSelectorProps {
  selectedJurisdictions: string[];
  onJurisdictionChange: (jurisdictions: string[]) => void;
}
export function JurisdictionSelector({
  selectedJurisdictions,
  onJurisdictionChange
}: JurisdictionSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const jurisdictions = [
  // EU Countries
  {
    code: 'NL',
    name: 'Netherlands',
    region: 'European Union'
  }, {
    code: 'DE',
    name: 'Germany',
    region: 'European Union'
  }, {
    code: 'FR',
    name: 'France',
    region: 'European Union'
  }, {
    code: 'BE',
    name: 'Belgium',
    region: 'European Union'
  }, {
    code: 'IT',
    name: 'Italy',
    region: 'European Union'
  }, {
    code: 'ES',
    name: 'Spain',
    region: 'European Union'
  }, {
    code: 'IE',
    name: 'Ireland',
    region: 'European Union'
  }, {
    code: 'LU',
    name: 'Luxembourg',
    region: 'European Union'
  },
  // Non-EU European Countries
  {
    code: 'UK',
    name: 'United Kingdom',
    region: 'Europe (Non-EU)'
  }, {
    code: 'CH',
    name: 'Switzerland',
    region: 'Europe (Non-EU)'
  },
  // Americas
  {
    code: 'US',
    name: 'United States',
    region: 'Americas'
  }, {
    code: 'CA',
    name: 'Canada',
    region: 'Americas'
  },
  // Asia Pacific
  {
    code: 'SG',
    name: 'Singapore',
    region: 'Asia Pacific'
  }, {
    code: 'HK',
    name: 'Hong Kong',
    region: 'Asia Pacific'
  }, {
    code: 'AU',
    name: 'Australia',
    region: 'Asia Pacific'
  }];
  const filteredJurisdictions = jurisdictions.filter(jurisdiction => jurisdiction.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const groupedJurisdictions = filteredJurisdictions.reduce((groups, jurisdiction) => {
    if (!groups[jurisdiction.region]) {
      groups[jurisdiction.region] = [];
    }
    groups[jurisdiction.region].push(jurisdiction);
    return groups;
  }, {} as Record<string, typeof jurisdictions>);
  const toggleJurisdiction = (jurisdictionName: string) => {
    if (selectedJurisdictions.includes(jurisdictionName)) {
      onJurisdictionChange(selectedJurisdictions.filter(j => j !== jurisdictionName));
    } else {
      onJurisdictionChange([...selectedJurisdictions, jurisdictionName]);
    }
  };
  return <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Search jurisdictions..." />
      </div>
      <div className="max-h-72 overflow-y-auto border border-gray-200 rounded-md">
        {Object.entries(groupedJurisdictions).map(([region, regionJurisdictions]) => <div key={region} className="border-b border-gray-200 last:border-b-0">
              <div className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                {region}
              </div>
              <div className="divide-y divide-gray-200">
                {regionJurisdictions.map(jurisdiction => <div key={jurisdiction.code} className={`flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer ${selectedJurisdictions.includes(jurisdiction.name) ? 'bg-blue-50' : ''}`} onClick={() => toggleJurisdiction(jurisdiction.name)}>
                    <div className="flex items-center">
                      <GlobeIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-900">{jurisdiction.name}</span>
                    </div>
                    <input type="checkbox" checked={selectedJurisdictions.includes(jurisdiction.name)} onChange={() => {}} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </div>)}
              </div>
            </div>)}
        {Object.keys(groupedJurisdictions).length === 0 && <div className="px-4 py-3 text-gray-500 text-center">
            No jurisdictions found matching "{searchTerm}"
          </div>}
      </div>
      {selectedJurisdictions.length > 0 && <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Selected Jurisdictions:
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedJurisdictions.map(jurisdiction => <span key={jurisdiction} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {jurisdiction}
                <button type="button" onClick={e => {
            e.stopPropagation();
            toggleJurisdiction(jurisdiction);
          }} className="ml-1 text-blue-600 hover:text-blue-800 focus:outline-none">
                  &times;
                </button>
              </span>)}
          </div>
        </div>}
    </div>;
}