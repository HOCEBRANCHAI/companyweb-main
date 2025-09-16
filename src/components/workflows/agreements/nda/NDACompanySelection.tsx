import React, { useState } from 'react';
import { BuildingIcon, GlobeIcon, ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, UserIcon } from 'lucide-react';
interface CompanyProfile {
  type: 'base' | 'target' | 'custom';
  name: string;
  address: string;
  representative: string;
  country: string;
}
interface NDACompanySelectionProps {
  onContinue: (selectedCompany: CompanyProfile | null) => void;
  onBack: () => void;
}
export function NDACompanySelection({
  onContinue,
  onBack
}: NDACompanySelectionProps) {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  // Sample company profiles
  const companyProfiles: Record<string, CompanyProfile> = {
    base: {
      type: 'base',
      name: 'Tech Innovations Ltd',
      address: 'World Trade Center, Tower B, Bengaluru, Karnataka 560055, India',
      representative: 'John Smith',
      country: 'India'
    },
    target: {
      type: 'target',
      name: 'Tech Innovations Netherlands B.V.',
      address: 'Prinses Beatrixlaan 582, 2595 BM, The Hague, Netherlands',
      representative: 'Maria Rodriguez',
      country: 'Netherlands'
    },
    custom: {
      type: 'custom',
      name: '',
      address: '',
      representative: '',
      country: ''
    }
  };
  const handleContinue = () => {
    if (selectedProfile === 'custom') {
      onContinue(null); // No prefill, continue with empty form
    } else if (selectedProfile) {
      onContinue(companyProfiles[selectedProfile]);
    } else {
      onContinue(null);
    }
  };
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <BuildingIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Select Company Profile
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              Choose a company profile to pre-fill the Disclosing Party
              information in your NDA. This will save you time and ensure
              consistency across your legal documents.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Base Company Option */}
        <div className={`border rounded-lg p-5 cursor-pointer transition-all ${selectedProfile === 'base' ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`} onClick={() => setSelectedProfile('base')}>
          <div className="flex flex-col h-full">
            <div className="mb-4 flex items-center justify-between">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BuildingIcon className="h-6 w-6 text-blue-600" />
              </div>
              {selectedProfile === 'base' && <CheckCircleIcon className="h-5 w-5 text-blue-600" />}
            </div>
            <h3 className="text-lg font-medium text-gray-900">Base Company</h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">
              Use your home country company details
            </p>
            <div className="mt-auto space-y-2 text-sm">
              <div className="flex items-start">
                <BuildingIcon className="h-4 w-4 text-gray-400 mt-0.5 mr-2" />
                <span className="text-gray-600">
                  {companyProfiles.base.name}
                </span>
              </div>
              <div className="flex items-start">
                <UserIcon className="h-4 w-4 text-gray-400 mt-0.5 mr-2" />
                <span className="text-gray-600">
                  {companyProfiles.base.representative}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Target Company Option */}
        <div className={`border rounded-lg p-5 cursor-pointer transition-all ${selectedProfile === 'target' ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`} onClick={() => setSelectedProfile('target')}>
          <div className="flex flex-col h-full">
            <div className="mb-4 flex items-center justify-between">
              <div className="p-2 bg-green-100 rounded-lg">
                <GlobeIcon className="h-6 w-6 text-green-600" />
              </div>
              {selectedProfile === 'target' && <CheckCircleIcon className="h-5 w-5 text-blue-600" />}
            </div>
            <h3 className="text-lg font-medium text-gray-900">Target Market</h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">
              Use your Netherlands entity details
            </p>
            <div className="mt-auto space-y-2 text-sm">
              <div className="flex items-start">
                <BuildingIcon className="h-4 w-4 text-gray-400 mt-0.5 mr-2" />
                <span className="text-gray-600">
                  {companyProfiles.target.name}
                </span>
              </div>
              <div className="flex items-start">
                <UserIcon className="h-4 w-4 text-gray-400 mt-0.5 mr-2" />
                <span className="text-gray-600">
                  {companyProfiles.target.representative}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Custom Option */}
        <div className={`border rounded-lg p-5 cursor-pointer transition-all ${selectedProfile === 'custom' ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`} onClick={() => setSelectedProfile('custom')}>
          <div className="flex flex-col h-full">
            <div className="mb-4 flex items-center justify-between">
              <div className="p-2 bg-gray-100 rounded-lg">
                <UserIcon className="h-6 w-6 text-gray-600" />
              </div>
              {selectedProfile === 'custom' && <CheckCircleIcon className="h-5 w-5 text-blue-600" />}
            </div>
            <h3 className="text-lg font-medium text-gray-900">Custom</h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">
              Enter party information manually
            </p>
            <div className="mt-auto space-y-2 text-sm">
              <p className="text-gray-500">
                You'll enter all party details in the next step
              </p>
            </div>
          </div>
        </div>
      </div>
      {selectedProfile && <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Selected Profile Details
          </h4>
          {selectedProfile !== 'custom' ? <div className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Company Name</p>
                  <p className="text-sm font-medium text-gray-900">
                    {companyProfiles[selectedProfile].name}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Representative</p>
                  <p className="text-sm font-medium text-gray-900">
                    {companyProfiles[selectedProfile].representative}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500">Address</p>
                <p className="text-sm font-medium text-gray-900">
                  {companyProfiles[selectedProfile].address}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Country</p>
                <p className="text-sm font-medium text-gray-900">
                  {companyProfiles[selectedProfile].country}
                </p>
              </div>
            </div> : <p className="text-sm text-gray-600">
              You'll enter all company details manually in the next step.
            </p>}
        </div>}
      <div className="flex justify-between pt-6">
        <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button type="button" onClick={handleContinue} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
          Continue
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>;
}