import React, { useState } from 'react';
import { BuildingIcon, GlobeIcon, ArrowLeftIcon, ArrowRightIcon, CheckIcon } from 'lucide-react';
interface CompanySelectionProps {
  onContinue: (companyData: any) => void;
  onBack: () => void;
}
export function CompanySelection({
  onContinue,
  onBack
}: CompanySelectionProps) {
  const [selectedCompany, setSelectedCompany] = useState<'base' | 'target' | 'manual' | null>(null);
  const baseCompanyData = {
    disclosingPartyName: 'Tech Innovations Ltd',
    disclosingPartyAddress: 'World Trade Center, Tower B, Bengaluru, Karnataka 560055, India',
    disclosingPartyRepresentative: 'John Smith'
  };
  const targetCompanyData = {
    disclosingPartyName: 'Tech Innovations Netherlands B.V.',
    disclosingPartyAddress: 'Prinses Beatrixlaan 582, 2595 BM, The Hague, Netherlands',
    disclosingPartyRepresentative: 'Maria Rodriguez'
  };
  const handleContinue = () => {
    if (selectedCompany === 'base') {
      onContinue(baseCompanyData);
    } else if (selectedCompany === 'target') {
      onContinue(targetCompanyData);
    } else {
      onContinue({});
    }
  };
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          Select which company will be the disclosing party in this NDA. This
          information will be pre-filled in the next step.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`border rounded-lg p-6 cursor-pointer transition-colors ${selectedCompany === 'base' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`} onClick={() => setSelectedCompany('base')}>
          <div className="flex justify-between items-start mb-4">
            <BuildingIcon className="h-8 w-8 text-blue-600" />
            {selectedCompany === 'base' && <CheckIcon className="h-5 w-5 text-blue-600" />}
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Base Company
          </h3>
          <p className="text-sm text-gray-500 mb-4">India</p>
          <div className="space-y-2 text-sm text-gray-600">
            <p>{baseCompanyData.disclosingPartyName}</p>
            <p className="text-xs">{baseCompanyData.disclosingPartyAddress}</p>
          </div>
        </div>
        <div className={`border rounded-lg p-6 cursor-pointer transition-colors ${selectedCompany === 'target' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`} onClick={() => setSelectedCompany('target')}>
          <div className="flex justify-between items-start mb-4">
            <GlobeIcon className="h-8 w-8 text-blue-600" />
            {selectedCompany === 'target' && <CheckIcon className="h-5 w-5 text-blue-600" />}
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Target Market
          </h3>
          <p className="text-sm text-gray-500 mb-4">Netherlands</p>
          <div className="space-y-2 text-sm text-gray-600">
            <p>{targetCompanyData.disclosingPartyName}</p>
            <p className="text-xs">
              {targetCompanyData.disclosingPartyAddress}
            </p>
          </div>
        </div>
        <div className={`border rounded-lg p-6 cursor-pointer transition-colors ${selectedCompany === 'manual' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`} onClick={() => setSelectedCompany('manual')}>
          <div className="flex justify-between items-start mb-4">
            <BuildingIcon className="h-8 w-8 text-gray-400" />
            {selectedCompany === 'manual' && <CheckIcon className="h-5 w-5 text-blue-600" />}
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Manual Entry
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Enter party information manually
          </p>
          <p className="text-sm text-gray-600">
            You will need to provide all party information in the next step.
          </p>
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <button onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button onClick={handleContinue} disabled={!selectedCompany} className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${selectedCompany ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
          Continue
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>;
}