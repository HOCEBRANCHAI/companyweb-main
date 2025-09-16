import React, { useState } from 'react';
import { BuildingIcon, GlobeIcon, CheckCircleIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
interface CompanyProfileSelectionProps {
  onContinue: (selectedCompany: any) => void;
}
export function CompanyProfileSelection({
  onContinue
}: CompanyProfileSelectionProps) {
  const [selectedProfile, setSelectedProfile] = useState<'base' | 'target' | null>(null);
  const companyProfiles = {
    base: {
      companyName: 'Tech Innovations Ltd',
      kvkNumber: 'U72200MH2022PTC123456',
      currentAddress: 'World Trade Center, Tower B, Bengaluru, Karnataka 560055, India',
      country: 'India',
      phone: '+91 80 1234 5678',
      email: 'info@techinnovations.com'
    },
    target: {
      companyName: 'Tech Innovations Netherlands B.V.',
      kvkNumber: 'NL123456789B01',
      currentAddress: 'Prinses Beatrixlaan 582, 2595 BM, The Hague, Netherlands',
      country: 'Netherlands',
      phone: '+31 70 123 4567',
      email: 'netherlands@techinnovations.com'
    }
  };
  const handleContinue = () => {
    if (selectedProfile) {
      onContinue({
        companyName: companyProfiles[selectedProfile].companyName,
        kvkNumber: companyProfiles[selectedProfile].kvkNumber,
        currentAddress: companyProfiles[selectedProfile].currentAddress,
        selectedProfile
      });
    }
  };
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          Select which company profile you'd like to use for the address change
          process. This will pre-fill some information to make the process
          faster.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              Your home country company
            </p>
            <div className="mt-auto space-y-3 text-sm">
              <div className="flex items-start">
                <BuildingIcon className="h-4 w-4 text-gray-400 mt-0.5 mr-2" />
                <span className="text-gray-600">
                  {companyProfiles.base.companyName}
                </span>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-4 w-4 text-gray-400 mt-0.5 mr-2" />
                <span className="text-gray-600">
                  {companyProfiles.base.country}
                </span>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-4 w-4 text-gray-400 mt-0.5 mr-2" />
                <span className="text-gray-600">
                  {companyProfiles.base.phone}
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
            <h3 className="text-lg font-medium text-gray-900">
              Target Market Company
            </h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">
              Your Netherlands entity
            </p>
            <div className="mt-auto space-y-3 text-sm">
              <div className="flex items-start">
                <BuildingIcon className="h-4 w-4 text-gray-400 mt-0.5 mr-2" />
                <span className="text-gray-600">
                  {companyProfiles.target.companyName}
                </span>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-4 w-4 text-gray-400 mt-0.5 mr-2" />
                <span className="text-gray-600">
                  {companyProfiles.target.country}
                </span>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-4 w-4 text-gray-400 mt-0.5 mr-2" />
                <span className="text-gray-600">
                  {companyProfiles.target.phone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedProfile && <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Selected Company Details
          </h4>
          <div className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500">Company Name</p>
                <p className="text-sm font-medium text-gray-900">
                  {companyProfiles[selectedProfile].companyName}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Registration Number</p>
                <p className="text-sm font-medium text-gray-900">
                  {companyProfiles[selectedProfile].kvkNumber}
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500">Current Address</p>
              <p className="text-sm font-medium text-gray-900">
                {companyProfiles[selectedProfile].currentAddress}
              </p>
            </div>
          </div>
        </div>}
      <div className="flex justify-end pt-4">
        <button onClick={handleContinue} disabled={!selectedProfile} className={`px-4 py-2 rounded-md text-sm font-medium ${selectedProfile ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
          Continue to Address Information
        </button>
      </div>
    </div>;
}