import React, { useEffect } from 'react';
import { UserIcon, BuildingIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
interface NDAPartyInformationProps {
  formData: any;
  onDataChange: (data: any) => void;
  onContinue: () => void;
  onBack: () => void;
  prefillData?: {
    disclosingPartyName: string;
    disclosingPartyAddress: string;
    disclosingPartyRepresentative: string;
  };
}
export function NDAPartyInformation({
  formData,
  onDataChange,
  onContinue,
  onBack,
  prefillData
}: NDAPartyInformationProps) {
  const handleInputChange = (field: string, value: any) => {
    onDataChange({
      [field]: value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };
  useEffect(() => {
    if (prefillData && !formData.disclosingPartyName) {
      onDataChange({
        disclosingPartyName: prefillData.disclosingPartyName,
        disclosingPartyAddress: prefillData.disclosingPartyAddress,
        disclosingPartyRepresentative: prefillData.disclosingPartyRepresentative
      });
    }
  }, [prefillData]);
  return <form onSubmit={handleSubmit} className="space-y-8">
      {/* Disclosing Party Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <UserIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Disclosing Party Information
          </h3>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          This is the party that will be sharing confidential information.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Legal Name <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.disclosingPartyName} onChange={e => handleInputChange('disclosingPartyName', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Company or individual name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea value={formData.disclosingPartyAddress} onChange={e => handleInputChange('disclosingPartyAddress', e.target.value)} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Full legal address" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Authorized Representative <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.disclosingPartyRepresentative} onChange={e => handleInputChange('disclosingPartyRepresentative', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Name of person authorized to sign" />
          </div>
        </div>
      </div>
      {/* Receiving Party Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <BuildingIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Receiving Party Information
          </h3>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          This is the party that will be receiving and protecting confidential
          information.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Legal Name <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.receivingPartyName} onChange={e => handleInputChange('receivingPartyName', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Company or individual name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea value={formData.receivingPartyAddress} onChange={e => handleInputChange('receivingPartyAddress', e.target.value)} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Full legal address" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Authorized Representative <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.receivingPartyRepresentative} onChange={e => handleInputChange('receivingPartyRepresentative', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Name of person authorized to sign" />
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
          Continue
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </button>
      </div>
    </form>;
}