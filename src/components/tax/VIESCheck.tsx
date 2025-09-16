import React, { useState } from 'react';
import { SearchIcon, CheckCircleIcon, XCircleIcon, InfoIcon, ClipboardIcon, ArrowRightIcon } from 'lucide-react';
export function VIESCheck() {
  const [vatNumber, setVatNumber] = useState('');
  const [countryCode, setCountryCode] = useState('NL');
  const [searchHistory, setSearchHistory] = useState<any[]>([{
    vatNumber: 'NL123456789B01',
    companyName: 'Tech Solutions B.V.',
    address: 'Prinses Beatrixlaan 582, 2595 BM, The Hague, Netherlands',
    status: 'valid',
    checkedOn: '2024-03-15'
  }, {
    vatNumber: 'DE123456789',
    companyName: 'Deutsch GmbH',
    address: 'Hauptstraße 1, 10115 Berlin, Germany',
    status: 'valid',
    checkedOn: '2024-03-10'
  }]);
  const [searchResult, setSearchResult] = useState<any | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      if (vatNumber.length > 5) {
        const result = {
          vatNumber: `${countryCode}${vatNumber}`,
          companyName: 'Sample Company Name',
          address: 'Sample Address, City, Country',
          status: 'valid',
          checkedOn: new Date().toISOString().split('T')[0]
        };
        setSearchResult(result);
        setSearchHistory([result, ...searchHistory]);
      } else {
        setSearchResult({
          vatNumber: `${countryCode}${vatNumber}`,
          status: 'invalid',
          checkedOn: new Date().toISOString().split('T')[0]
        });
      }
      setIsSearching(false);
    }, 1500);
  };
  const countryCodes = [{
    code: 'AT',
    name: 'Austria'
  }, {
    code: 'BE',
    name: 'Belgium'
  }, {
    code: 'BG',
    name: 'Bulgaria'
  }, {
    code: 'CY',
    name: 'Cyprus'
  }, {
    code: 'CZ',
    name: 'Czech Republic'
  }, {
    code: 'DE',
    name: 'Germany'
  }, {
    code: 'DK',
    name: 'Denmark'
  }, {
    code: 'EE',
    name: 'Estonia'
  }, {
    code: 'ES',
    name: 'Spain'
  }, {
    code: 'FI',
    name: 'Finland'
  }, {
    code: 'FR',
    name: 'France'
  }, {
    code: 'GR',
    name: 'Greece'
  }, {
    code: 'HR',
    name: 'Croatia'
  }, {
    code: 'HU',
    name: 'Hungary'
  }, {
    code: 'IE',
    name: 'Ireland'
  }, {
    code: 'IT',
    name: 'Italy'
  }, {
    code: 'LT',
    name: 'Lithuania'
  }, {
    code: 'LU',
    name: 'Luxembourg'
  }, {
    code: 'LV',
    name: 'Latvia'
  }, {
    code: 'MT',
    name: 'Malta'
  }, {
    code: 'NL',
    name: 'Netherlands'
  }, {
    code: 'PL',
    name: 'Poland'
  }, {
    code: 'PT',
    name: 'Portugal'
  }, {
    code: 'RO',
    name: 'Romania'
  }, {
    code: 'SE',
    name: 'Sweden'
  }, {
    code: 'SI',
    name: 'Slovenia'
  }, {
    code: 'SK',
    name: 'Slovakia'
  }];
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          VIES VAT Number Validation
        </h1>
        <p className="text-gray-600 mt-1">
          Verify the validity of EU VAT numbers and retrieve company details
        </p>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center mb-4">
          <SearchIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            VAT Number Lookup
          </h3>
        </div>
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="country-code" className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <select id="country-code" value={countryCode} onChange={e => setCountryCode(e.target.value)} className="w-full border border-gray-300 rounded-md shadow-sm p-2">
                {countryCodes.map(country => <option key={country.code} value={country.code}>
                    {country.name} ({country.code})
                  </option>)}
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="vat-number" className="block text-sm font-medium text-gray-700 mb-1">
                VAT Number (without country code)
              </label>
              <input id="vat-number" type="text" value={vatNumber} onChange={e => setVatNumber(e.target.value)} placeholder="e.g. 123456789B01" className="w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" disabled={isSearching || vatNumber.length < 3} className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${isSearching || vatNumber.length < 3 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
              {isSearching ? <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Checking...
                </> : <>
                  <SearchIcon className="h-4 w-4 mr-2" />
                  Validate VAT Number
                </>}
            </button>
          </div>
        </form>
        {searchResult && <div className={`mt-6 p-4 rounded-lg border ${searchResult.status === 'valid' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <div className="flex items-start">
              {searchResult.status === 'valid' ? <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" /> : <XCircleIcon className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />}
              <div>
                <h4 className={`font-medium ${searchResult.status === 'valid' ? 'text-green-800' : 'text-red-800'}`}>
                  {searchResult.status === 'valid' ? 'Valid VAT Number' : 'Invalid VAT Number'}
                </h4>
                {searchResult.status === 'valid' ? <div className="mt-2 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">VAT Number:</span>
                      <span className="text-sm font-medium">
                        {searchResult.vatNumber}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Company Name:
                      </span>
                      <span className="text-sm font-medium">
                        {searchResult.companyName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Address:</span>
                      <span className="text-sm font-medium">
                        {searchResult.address}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Checked On:</span>
                      <span className="text-sm font-medium">
                        {searchResult.checkedOn}
                      </span>
                    </div>
                    <div className="flex space-x-2 mt-3 pt-3 border-t border-green-200">
                      <button className="px-3 py-1.5 bg-white text-green-700 border border-green-300 rounded-md hover:bg-green-50 text-xs font-medium flex items-center">
                        <ClipboardIcon className="h-3.5 w-3.5 mr-1.5" />
                        Copy Details
                      </button>
                      <button className="px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 text-xs font-medium flex items-center">
                        <ArrowRightIcon className="h-3.5 w-3.5 mr-1.5" />
                        Save to Contacts
                      </button>
                    </div>
                  </div> : <p className="text-sm text-red-700 mt-1">
                    The VAT number {searchResult.vatNumber} could not be
                    validated. Please check the number and try again.
                  </p>}
              </div>
            </div>
          </div>}
      </div>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <InfoIcon className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-blue-800">
              About VIES VAT Validation
            </h4>
            <p className="text-sm text-blue-700 mt-1">
              The VAT Information Exchange System (VIES) allows businesses to
              verify the validity of VAT numbers of their EU trading partners.
              Valid VAT numbers are crucial for correct VAT handling on intra-EU
              transactions.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Recent Lookups
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  VAT Number
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Checked On
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {searchHistory.map((item, index) => <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.vatNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.companyName || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.status === 'valid' ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Valid
                      </span> : <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        Invalid
                      </span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.checkedOn}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-800">
                      View Details
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
}