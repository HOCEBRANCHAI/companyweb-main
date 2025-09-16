import React, { useState } from 'react';
import { BuildingIcon, EuroIcon, BriefcaseIcon, ChevronDownIcon, ChevronUpIcon, XIcon, PlusIcon, ClockIcon, FileTextIcon, CheckIcon } from 'lucide-react';
interface CompareCountriesProps {
  onClose: () => void;
}
const availableCountries = {
  netherlands: 'Netherlands',
  france: 'France',
  spain: 'Spain',
  italy: 'Italy'
} as const;
const businessTypeData = {
  netherlands: {
    types: {
      'Private Limited (BV)': {
        description: 'Most common form for foreign investors',
        minCapital: '€0.01',
        timeline: '3-5 days',
        shareholders: 'Minimum 1',
        directors: 'Minimum 1',
        audit: 'Required above thresholds',
        advantages: ['Limited liability protection', 'Professional image', 'Easy to attract investment', 'Flexible structure'],
        disadvantages: ['More administrative requirements', 'Annual account filing mandatory', 'Director responsibilities']
      },
      'Branch Office': {
        description: 'Extension of foreign company',
        minCapital: 'N/A',
        timeline: '2-3 weeks',
        shareholders: 'N/A',
        directors: 'Minimum 1 representative',
        audit: 'Based on parent company',
        advantages: ['Quick to establish', 'Lower setup costs', 'Use parent company name', 'Operational flexibility'],
        disadvantages: ['No limited liability', 'Parent company fully responsible', 'Less prestigious than BV']
      },
      'Representative Office': {
        description: 'Limited activities allowed',
        minCapital: 'N/A',
        timeline: '1-2 weeks',
        shareholders: 'N/A',
        directors: '1 representative',
        audit: 'Not required',
        advantages: ['Simple structure', 'Market research allowed', 'Low maintenance', 'Easy setup'],
        disadvantages: ['No commercial activities', 'Limited scope of operations', 'Cannot generate revenue']
      }
    }
  },
  france: {
    types: {
      'SARL (Limited Liability)': {
        description: 'Popular among small-medium businesses',
        minCapital: '€1',
        timeline: '2-3 weeks',
        shareholders: '1-100',
        directors: 'Minimum 1',
        audit: 'Required above thresholds',
        advantages: ['Limited liability', 'Flexible management', 'Low capital requirement', 'Tax efficiency'],
        disadvantages: ['Growth limitations', 'Complex transformation to SA', 'Strict management rules']
      },
      'Branch Office': {
        description: 'Extension of foreign company',
        minCapital: 'N/A',
        timeline: '3-4 weeks',
        shareholders: 'N/A',
        directors: '1 representative',
        audit: 'Based on parent company',
        advantages: ['Simple structure', 'Direct control', 'Parent company support', 'Operational freedom'],
        disadvantages: ['No limited liability', 'Complex tax situation', 'Parent company exposure']
      }
    }
  },
  spain: {
    types: {
      'SL (Limited Liability)': {
        description: 'Most common company type',
        minCapital: '€3,000',
        timeline: '2-3 weeks',
        shareholders: 'Minimum 1',
        directors: 'Minimum 1',
        audit: 'Required above thresholds',
        advantages: ['Limited liability', 'Low capital requirement', 'Flexible structure', 'Tax benefits'],
        disadvantages: ['Share transfer restrictions', 'Administrative burden', 'Bank account requirements']
      },
      'Branch Office': {
        description: 'Secondary establishment',
        minCapital: 'N/A',
        timeline: '3-4 weeks',
        shareholders: 'N/A',
        directors: '1 representative',
        audit: 'Based on parent company',
        advantages: ['No capital requirements', 'Operational flexibility', 'Use parent name', 'Direct management'],
        disadvantages: ['No separate legal entity', 'Parent company liability', 'Complex accounting']
      }
    }
  },
  italy: {
    types: {
      'SRL (Limited Liability)': {
        description: 'Flexible limited company',
        minCapital: '€1',
        timeline: '3-4 weeks',
        shareholders: 'Minimum 1',
        directors: 'Minimum 1',
        audit: 'Required above thresholds',
        advantages: ['Limited liability', 'Flexible structure', 'Low capital requirement', 'Tax efficiency'],
        disadvantages: ['Complex incorporation', 'Strict compliance rules', 'Administrative costs']
      },
      'Branch Office': {
        description: 'Secondary establishment',
        minCapital: 'N/A',
        timeline: '4-5 weeks',
        shareholders: 'N/A',
        directors: '1 representative',
        audit: 'Based on parent company',
        advantages: ['Simpler structure', 'No capital requirements', 'Direct operations', 'Parent support'],
        disadvantages: ['No liability protection', 'Tax complexity', 'Regulatory requirements']
      }
    }
  }
};
export function CompareCountries({
  onClose
}: CompareCountriesProps) {
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['netherlands']);
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState<string[]>([]);
  const [selectedCountryForTypes, setSelectedCountryForTypes] = useState<string>('netherlands');
  const [comparisonType, setComparisonType] = useState<'country' | 'business-type'>('country');
  const addCountry = (country: string) => {
    if (selectedCountries.length < 4) {
      setSelectedCountries([...selectedCountries, country]);
    }
  };
  const removeCountry = (country: string) => {
    setSelectedCountries(selectedCountries.filter(c => c !== country));
  };
  const toggleBusinessType = (type: string) => {
    if (selectedBusinessTypes.includes(type)) {
      setSelectedBusinessTypes(selectedBusinessTypes.filter(t => t !== type));
    } else if (selectedBusinessTypes.length < 3) {
      setSelectedBusinessTypes([...selectedBusinessTypes, type]);
    }
  };
  return <div className="fixed inset-0 bg-[#0F0B1F]/75 flex items-center justify-center z-50">
      <div className="bg-[#1B1537] rounded-lg shadow-xl max-w-6xl w-full m-4 border border-[#2D2755]">
        <div className="flex items-center justify-between p-4 border-b border-[#2D2755]">
          <h2 className="text-xl font-semibold text-white">
            {comparisonType === 'country' ? 'Compare Countries (Select up to 4)' : 'Compare Business Types (Select up to 3)'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-300">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="flex space-x-4 mb-6">
            <button onClick={() => {
            setComparisonType('country');
            setSelectedBusinessTypes([]);
          }} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${comparisonType === 'country' ? 'bg-[#EA3A70] text-white' : 'bg-[#2D2755] text-gray-300 hover:bg-[#2D2755]/70'}`}>
              Compare Countries
            </button>
            <button onClick={() => {
            setComparisonType('business-type');
            setSelectedCountryForTypes('netherlands');
          }} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${comparisonType === 'business-type' ? 'bg-[#EA3A70] text-white' : 'bg-[#2D2755] text-gray-300 hover:bg-[#2D2755]/70'}`}>
              Compare Business Types
            </button>
          </div>
          {comparisonType === 'country' ? <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(availableCountries).map(([key, name]) => <button key={key} onClick={() => selectedCountries.includes(key) ? removeCountry(key) : addCountry(key)} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedCountries.includes(key) ? 'bg-[#EA3A70] text-white' : 'bg-[#2D2755] text-gray-300 hover:bg-[#2D2755]/70'}`} disabled={!selectedCountries.includes(key) && selectedCountries.length >= 4}>
                  {name}
                  {selectedCountries.includes(key) && <XIcon className="inline-block ml-2 h-4 w-4" />}
                </button>)}
            </div> : <div className="space-y-6">
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(availableCountries).map(([key, name]) => <button key={key} onClick={() => setSelectedCountryForTypes(key)} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedCountryForTypes === key ? 'bg-[#EA3A70] text-white' : 'bg-[#2D2755] text-gray-300 hover:bg-[#2D2755]/70'}`}>
                    {name}
                  </button>)}
              </div>
              <div className="border border-[#2D2755] rounded-lg p-6 bg-[#0F0B1F]">
                <h3 className="text-lg font-medium text-white mb-4">
                  Select Business Types in{' '}
                  {availableCountries[selectedCountryForTypes]}
                  <span className="text-sm text-gray-400 ml-2">
                    (Select up to 3)
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(businessTypeData[selectedCountryForTypes].types).map(([type, data]) => <button key={type} onClick={() => toggleBusinessType(type)} className={`border ${selectedBusinessTypes.includes(type) ? 'border-[#EA3A70] bg-[#EA3A70]/10' : 'border-[#2D2755]'} rounded-lg p-4 text-left hover:bg-[#2D2755]/30 transition-colors ${!selectedBusinessTypes.includes(type) && selectedBusinessTypes.length >= 3 ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!selectedBusinessTypes.includes(type) && selectedBusinessTypes.length >= 3}>
                      <h4 className="font-medium text-white">{type}</h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {data.description}
                      </p>
                    </button>)}
                </div>
              </div>
              {selectedBusinessTypes.length > 0 && <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedBusinessTypes.map(type => <div key={type} className="border border-[#2D2755] rounded-lg p-4 bg-[#0F0B1F]">
                      <h4 className="font-medium text-white mb-2">{type}</h4>
                      <div className="space-y-2 text-sm">
                        {Object.entries(businessTypeData[selectedCountryForTypes].types[type]).map(([key, value]) => {
                  if (key !== 'advantages' && key !== 'disadvantages' && key !== 'description') {
                    return <div key={key} className="flex justify-between">
                                <span className="text-gray-400">
                                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                                  :
                                </span>
                                <span className="font-medium text-white">
                                  {value as string}
                                </span>
                              </div>;
                  }
                  return null;
                })}
                      </div>
                    </div>)}
                </div>}
            </div>}
          <div className="mt-8 bg-gradient-to-r from-[#EA3A70] to-[#EA3A70]/70 rounded-lg p-6 text-white">
            <div className="flex items-start space-x-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  Need Expert Guidance for Your Market Entry?
                </h3>
                <p className="text-white/80 mb-4">
                  Get personalized consultation with our market entry
                  specialists. We'll help you analyze your options and create a
                  tailored Go-to-Market strategy for your business.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-white text-[#EA3A70] px-6 py-2 rounded-md text-sm font-medium hover:bg-white/90">
                    Schedule Consultation
                  </button>
                  <button className="border border-white text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-white/10">
                    Learn More About Our Strategy Service
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 rounded-lg p-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 mr-2 text-white" />
                      <span>Detailed market analysis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 mr-2 text-white" />
                      <span>Structure optimization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 mr-2 text-white" />
                      <span>Tax & compliance guidance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}