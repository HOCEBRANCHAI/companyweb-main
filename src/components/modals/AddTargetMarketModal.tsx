import React from 'react';
import { XIcon, GlobeIcon, BuildingIcon, CheckIcon, ArrowRightIcon, EuroIcon, MapPinIcon, ClockIcon } from 'lucide-react';
interface AddTargetMarketModalProps {
  onClose: () => void;
}
export function AddTargetMarketModal({
  onClose
}: AddTargetMarketModalProps) {
  const markets = [{
    country: 'Belgium',
    setupTime: '48-72h',
    monthlyFee: '€95',
    benefits: ['Strategic location in EU', 'Multilingual business environment', 'Access to EU market'],
    icon: '🇧🇪'
  }, {
    country: 'Germany',
    setupTime: '72-96h',
            monthlyFee: '€199',
    benefits: ['Largest EU economy', 'Strong manufacturing sector', 'Innovation hub'],
    icon: '🇩🇪'
  }, {
    country: 'France',
    setupTime: '48-72h',
            monthlyFee: '€199',
    benefits: ['Second-largest EU economy', 'Strategic location', 'Large consumer market'],
    icon: '🇫🇷'
  }, {
    country: 'Spain',
    setupTime: '48-72h',
    monthlyFee: '€85',
    benefits: ['Gateway to Latin America', 'Growing startup ecosystem', 'Quality of life'],
    icon: '🇪🇸'
  }];
  return <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full m-4">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Add Target Market
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="text-center mb-8">
            <h3 className="text-lg font-medium text-gray-900">
              Select Your Next Market
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Choose a new market to expand your business presence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {markets.map(market => <div key={market.country} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">{market.icon}</span>
                  <h3 className="text-lg font-medium text-gray-900">
                    {market.country}
                  </h3>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <ClockIcon className="h-4 w-4 mr-2 text-blue-500" />
                    Setup Time: {market.setupTime}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <EuroIcon className="h-4 w-4 mr-2 text-green-500" />
                    Monthly Fee: {market.monthlyFee}
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {market.benefits.map(benefit => <li key={benefit} className="flex items-start text-sm text-gray-600">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>)}
                </ul>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center justify-center">
                  Select Market
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
}