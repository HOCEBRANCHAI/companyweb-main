import React, { useState } from 'react';
import { BuildingIcon, GlobeIcon, CheckIcon, XIcon, PlusIcon, AlertCircleIcon } from 'lucide-react';
interface Company {
  id: string;
  type: 'base' | 'target';
  name: string;
  country: string;
  registrationNumber: string;
}
interface MultiCompanySelectionProps {
  onClose: () => void;
  onConfirm: (companies: Company[]) => void;
}
export function MultiCompanySelection({
  onClose,
  onConfirm
}: MultiCompanySelectionProps) {
  const [selectedCompanies, setSelectedCompanies] = useState<Company[]>([]);
  const availableCompanies: Company[] = [{
    id: 'base-1',
    type: 'base',
    name: 'Tech Innovations Ltd',
    country: 'India',
    registrationNumber: 'U72200MH2022PTC123456'
  }, {
    id: 'target-1',
    type: 'target',
    name: 'Tech Innovations Netherlands B.V.',
    country: 'Netherlands',
    registrationNumber: 'NL123456789B01'
  }];
  const toggleCompany = (company: Company) => {
    if (selectedCompanies.find(c => c.id === company.id)) {
      setSelectedCompanies(selectedCompanies.filter(c => c.id !== company.id));
    } else if (selectedCompanies.length < 3) {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };
  return <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl m-4">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Select Companies to Include
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
            <div className="flex">
              <AlertCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  Select up to 3 companies to include in your report. This will
                  allow you to compare financial data and generate consolidated
                  reports.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {availableCompanies.map(company => <div key={company.id} onClick={() => toggleCompany(company)} className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedCompanies.find(c => c.id === company.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${company.type === 'base' ? 'bg-blue-100' : 'bg-green-100'}`}>
                      {company.type === 'base' ? <BuildingIcon className={`h-6 w-6 ${company.type === 'base' ? 'text-blue-600' : 'text-green-600'}`} /> : <GlobeIcon className="h-6 w-6 text-green-600" />}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {company.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-500">
                          {company.country}
                        </span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-xs text-gray-500">
                          {company.registrationNumber}
                        </span>
                      </div>
                    </div>
                  </div>
                  {selectedCompanies.find(c => c.id === company.id) && <CheckIcon className="h-5 w-5 text-blue-600" />}
                </div>
              </div>)}
          </div>
          {selectedCompanies.length > 0 && <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Selected Companies ({selectedCompanies.length}/3)
              </h4>
              <div className="space-y-2">
                {selectedCompanies.map(company => <div key={company.id} className="flex items-center justify-between bg-white p-2 rounded-md border border-gray-200">
                    <span className="text-sm text-gray-600">
                      {company.name}
                    </span>
                    <button onClick={e => {
                e.stopPropagation();
                toggleCompany(company);
              }} className="text-gray-400 hover:text-gray-600">
                      <XIcon className="h-4 w-4" />
                    </button>
                  </div>)}
              </div>
            </div>}
          <div className="flex justify-end space-x-4 mt-6">
            <button onClick={onClose} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
              Cancel
            </button>
            <button onClick={() => onConfirm(selectedCompanies)} disabled={selectedCompanies.length === 0} className={`px-4 py-2 rounded-md text-sm font-medium ${selectedCompanies.length > 0 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
              Continue with {selectedCompanies.length}{' '}
              {selectedCompanies.length === 1 ? 'Company' : 'Companies'}
            </button>
          </div>
        </div>
      </div>
    </div>;
}