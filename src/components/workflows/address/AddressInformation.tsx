import React from 'react';
import { BuildingIcon, MapPinIcon, ArrowLeftIcon, InfoIcon } from 'lucide-react';
interface AddressInformationProps {
  formData: any;
  onDataChange: (data: any) => void;
  onContinue: () => void;
  onBack: () => void;
}
export function AddressInformation({
  formData,
  onDataChange,
  onContinue,
  onBack
}: AddressInformationProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };
  return <form onSubmit={handleSubmit} className="space-y-8">
      {/* Current Address Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <BuildingIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Current Address Information
          </h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input type="text" value={formData.companyName} readOnly className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              KvK Number
            </label>
            <input type="text" value={formData.kvkNumber} readOnly className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Current Registered Address
            </label>
            <input type="text" value={formData.currentAddress} readOnly className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-50" />
          </div>
        </div>
      </div>
      {/* New Address Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <MapPinIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            New Address Information
          </h3>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Street <span className="text-red-500">*</span>
              </label>
              <input type="text" value={formData.newStreet} onChange={e => onDataChange({
              newStreet: e.target.value
            })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number <span className="text-red-500">*</span>
              </label>
              <input type="text" value={formData.newNumber} onChange={e => onDataChange({
              newNumber: e.target.value
            })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Postal Code <span className="text-red-500">*</span>
              </label>
              <input type="text" value={formData.newPostalCode} onChange={e => onDataChange({
              newPostalCode: e.target.value
            })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="e.g., 1000 AA" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City <span className="text-red-500">*</span>
              </label>
              <input type="text" value={formData.newCity} onChange={e => onDataChange({
              newCity: e.target.value
            })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.newCountry} onChange={e => onDataChange({
            newCountry: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Effective Date <span className="text-red-500">*</span>
            </label>
            <input type="date" value={formData.effectiveDate} onChange={e => onDataChange({
            effectiveDate: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required min={new Date().toISOString().split('T')[0]} />
          </div>
        </div>
      </div>
      {/* Tax Office Update */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <InfoIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Tax Office Update
          </h3>
        </div>
        <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mb-4">
          <p className="text-sm text-yellow-700">
            Updating your address with the Chamber of Commerce does not
            automatically update it with the Tax Authority. You can choose to
            update your correspondence address with the Tax Office
            (Belastingdienst) at the same time.
          </p>
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5 mt-1">
            <input id="updateTaxOffice" type="checkbox" checked={formData.updateTaxOffice} onChange={e => onDataChange({
            updateTaxOffice: e.target.checked
          })} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
          </div>
          <label htmlFor="updateTaxOffice" className="ml-2 block text-sm text-gray-700">
            Also update my correspondence address with the Tax Office
          </label>
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Continue
        </button>
      </div>
    </form>;
}