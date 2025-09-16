import React, { useState } from 'react';
import { InfoIcon, TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
export function TaxRateComparisonChart() {
  const [highlight, setHighlight] = useState<string | null>('netherlands');
  const countries = [{
    id: 'netherlands',
    name: 'Netherlands',
    color: '#3B82F6',
    flag: '🇳🇱'
  }, {
    id: 'belgium',
    name: 'Belgium',
    color: '#F59E0B',
    flag: '🇧🇪'
  }, {
    id: 'germany',
    name: 'Germany',
    color: '#10B981',
    flag: '🇩🇪'
  }, {
    id: 'luxembourg',
    name: 'Luxembourg',
    color: '#6366F1',
    flag: '🇱🇺'
  }, {
    id: 'uk',
    name: 'United Kingdom',
    color: '#EF4444',
    flag: '🇬🇧'
  }, {
    id: 'france',
    name: 'France',
    color: '#8B5CF6',
    flag: '🇫🇷'
  }];
  const taxRates = [{
    id: 'corporate',
    name: 'Corporate Income Tax (Standard)',
    description: 'Standard corporate income tax rate applied to taxable profits',
    rates: {
      netherlands: 25.8,
      belgium: 25.0,
      germany: 30.0,
      luxembourg: 24.94,
      uk: 25.0,
      france: 25.0
    }
  }, {
    id: 'reduced',
    name: 'Corporate Income Tax (Reduced)',
    description: 'Reduced rate for smaller businesses or lower profit thresholds',
    rates: {
      netherlands: 19.0,
      belgium: 20.0,
      germany: 15.0,
      luxembourg: 15.0,
      uk: 19.0,
      france: 15.0
    }
  }, {
    id: 'dividend',
    name: 'Dividend Withholding Tax',
    description: 'Tax on dividends paid to shareholders',
    rates: {
      netherlands: 15.0,
      belgium: 30.0,
      germany: 26.375,
      luxembourg: 15.0,
      uk: 0.0,
      france: 28.0
    }
  }, {
    id: 'vat',
    name: 'VAT Standard Rate',
    description: 'Standard value-added tax rate on goods and services',
    rates: {
      netherlands: 21.0,
      belgium: 21.0,
      germany: 19.0,
      luxembourg: 17.0,
      uk: 20.0,
      france: 20.0
    }
  }, {
    id: 'innovation',
    name: 'Innovation Box Rate',
    description: 'Special tax rate for qualifying intellectual property income',
    rates: {
      netherlands: 9.0,
      belgium: 4.4,
      germany: 15.0,
      luxembourg: 5.2,
      uk: 10.0,
      france: 10.0
    }
  }];
  // Find Netherlands' position relative to other countries for each tax type
  const getNetherlands = (taxType: string) => {
    const tax = taxRates.find(t => t.id === taxType);
    if (!tax) return {
      advantage: false,
      position: 0,
      total: 0
    };
    const rates = Object.entries(tax.rates).map(([country, rate]) => ({
      country,
      rate
    }));
    rates.sort((a, b) => a.rate - b.rate);
    const nlPosition = rates.findIndex(r => r.country === 'netherlands') + 1;
    const advantage = nlPosition <= Math.ceil(rates.length / 2);
    return {
      advantage,
      position: nlPosition,
      total: rates.length
    };
  };
  return <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Tax Rate Comparison: Netherlands vs. Neighboring Countries
      </h3>
      <p className="text-gray-600 mb-6">
        Compare key tax rates across major European countries to understand the
        Netherlands' competitive position. Click on a country to highlight its
        rates across all categories.
      </p>
      <div className="flex items-center justify-center mb-6 space-x-4 overflow-x-auto">
        {countries.map(country => <button key={country.id} onClick={() => setHighlight(country.id === highlight ? null : country.id)} className={`flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${country.id === highlight ? 'bg-blue-100 text-blue-800 border border-blue-300' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            <span className="mr-1.5">{country.flag}</span>
            {country.name}
          </button>)}
      </div>
      <div className="space-y-8">
        {taxRates.map(tax => {
        const nlStats = getNetherlands(tax.id);
        return <div key={tax.id} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-3 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-900">{tax.name}</h4>
                  {tax.id !== 'innovation' && nlStats.advantage ? <div className="flex items-center text-green-600 text-sm">
                      <TrendingDownIcon className="h-4 w-4 mr-1" />
                      NL ranks {nlStats.position} of {nlStats.total} (lower is
                      better)
                    </div> : tax.id === 'innovation' && nlStats.advantage ? <div className="flex items-center text-green-600 text-sm">
                      <TrendingUpIcon className="h-4 w-4 mr-1" />
                      NL ranks {nlStats.position} of {nlStats.total} (higher is
                      better)
                    </div> : <div className="flex items-center text-gray-500 text-sm">
                      NL ranks {nlStats.position} of {nlStats.total}
                    </div>}
                </div>
                <p className="text-sm text-gray-500 mt-1">{tax.description}</p>
              </div>
              <div className="p-4">
                <div className="relative pt-5">
                  {/* Axis labels */}
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>0%</span>
                    <span>5%</span>
                    <span>10%</span>
                    <span>15%</span>
                    <span>20%</span>
                    <span>25%</span>
                    <span>30%</span>
                  </div>
                  {/* Horizontal grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 1, 2, 3, 4, 5, 6].map(i => <div key={i} className="border-t border-gray-100 h-0 w-full"></div>)}
                  </div>
                  {/* Vertical scale markers */}
                  <div className="absolute inset-0 flex justify-between">
                    {[0, 5, 10, 15, 20, 25, 30].map(val => <div key={val} className="border-l border-gray-100 h-full w-0"></div>)}
                  </div>
                  {/* Bars */}
                  <div className="relative z-10 flex items-end justify-between h-60 space-x-6">
                    {countries.map(country => {
                  const rate = tax.rates[country.id as keyof typeof tax.rates];
                  const barHeight = `${Math.min(rate / 30 * 100, 100)}%`;
                  const isHighlighted = country.id === highlight || highlight === null;
                  return <div key={country.id} className="flex-1 flex flex-col items-center">
                          <div className="w-full flex justify-center mb-2">
                            <div className={`relative w-full max-w-[50px] rounded-t-sm transition-all duration-200 ${isHighlighted ? 'opacity-100' : 'opacity-30'}`} style={{
                        height: barHeight,
                        backgroundColor: country.color
                      }}>
                              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium">
                                {rate}%
                              </div>
                            </div>
                          </div>
                          <div className="text-xs font-medium mt-1">
                            {country.flag}
                          </div>
                        </div>;
                })}
                  </div>
                </div>
              </div>
            </div>;
      })}
      </div>
      <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h4 className="text-sm font-medium text-blue-800">
              Key Advantages of the Netherlands
            </h4>
            <ul className="mt-2 space-y-1 text-sm text-blue-700">
              <li>
                • Competitive standard corporate tax rate compared to
                neighboring countries
              </li>
              <li>
                • Favorable innovation box regime (9%) for qualifying
                intellectual property income
              </li>
              <li>
                • Extensive tax treaty network reducing effective withholding
                tax rates
              </li>
              <li>• Participation exemption for qualifying shareholdings</li>
              <li>• Advance tax ruling possibilities providing certainty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
}