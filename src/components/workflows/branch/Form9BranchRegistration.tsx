import React from 'react';
import { BuildingIcon, MapPinIcon, PhoneIcon, ArrowLeftIcon, CalendarIcon } from 'lucide-react';
interface Form9BranchRegistrationProps {
  formData: any;
  onDataChange: (data: any) => void;
  onContinue: () => void;
  onBack: () => void;
}
export function Form9BranchRegistration({
  formData,
  onDataChange,
  onContinue,
  onBack
}: Form9BranchRegistrationProps) {
  const handleInputChange = (field: string, value: any) => {
    onDataChange({
      [field]: value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };
  return <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          This section collects information for Form 9: Registration of a branch
          office.
        </p>
      </div>
      {/* Branch Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <BuildingIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Branch Information
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Branch Starting Date <span className="text-red-500">*</span>
            </label>
            <input type="date" value={formData.branchStartingDate} onChange={e => handleInputChange('branchStartingDate', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div className="flex items-center h-full pt-7">
            <input type="checkbox" id="isContinuation" checked={formData.isContinuation} onChange={e => handleInputChange('isContinuation', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
            <label htmlFor="isContinuation" className="ml-2 block text-sm text-gray-700">
              This is a continuation of an existing branch
            </label>
          </div>
        </div>
        {formData.isContinuation && <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-4">
              Previous Branch Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Previous Branch Name <span className="text-red-500">*</span>
                </label>
                <input type="text" value={formData.previousBranchName} onChange={e => handleInputChange('previousBranchName', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required={formData.isContinuation} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Previous Branch KvK Number{' '}
                  <span className="text-red-500">*</span>
                </label>
                <input type="text" value={formData.previousBranchKvkNumber} onChange={e => handleInputChange('previousBranchKvkNumber', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required={formData.isContinuation} />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Previous Branch Registered Office{' '}
                <span className="text-red-500">*</span>
              </label>
              <input type="text" value={formData.previousBranchOffice} onChange={e => handleInputChange('previousBranchOffice', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required={formData.isContinuation} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Branch Continuation Date{' '}
                  <span className="text-red-500">*</span>
                </label>
                <input type="date" value={formData.branchContinuationDate} onChange={e => handleInputChange('branchContinuationDate', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required={formData.isContinuation} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Original Branch Starting Date{' '}
                  <span className="text-red-500">*</span>
                </label>
                <input type="date" value={formData.originalBranchStartingDate} onChange={e => handleInputChange('originalBranchStartingDate', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required={formData.isContinuation} />
              </div>
            </div>
          </div>}
      </div>
      {/* Address Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <MapPinIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Address Information
          </h3>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Branch Address <span className="text-red-500">*</span>
          </label>
          <input type="text" value={formData.branchAddress} onChange={e => handleInputChange('branchAddress', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Street address in the Netherlands" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.branchCity} onChange={e => handleInputChange('branchCity', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Postal Code <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.branchPostalCode} onChange={e => handleInputChange('branchPostalCode', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="e.g., 1000 AA" />
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <input type="checkbox" id="hasSeparatePostal" checked={!!formData.separatePostalAddress} onChange={e => {
            if (!e.target.checked) {
              handleInputChange('separatePostalAddress', '');
            } else {
              handleInputChange('separatePostalAddress', ' ');
            }
          }} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
            <label htmlFor="hasSeparatePostal" className="ml-2 block text-sm text-gray-700">
              Separate Postal Address
            </label>
          </div>
          {formData.separatePostalAddress !== '' && <input type="text" value={formData.separatePostalAddress} onChange={e => handleInputChange('separatePostalAddress', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Postal address if different from branch address" />}
        </div>
      </div>
      {/* Contact Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <PhoneIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Contact Information
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input type="tel" value={formData.contactPhone} onChange={e => handleInputChange('contactPhone', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="+31 XX XXX XXXX" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input type="email" value={formData.contactEmail} onChange={e => handleInputChange('contactEmail', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="contact@example.com" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Website
            </label>
            <input type="text" value={formData.contactWebsite} onChange={e => handleInputChange('contactWebsite', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="www.example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message Box Name
            </label>
            <input type="text" value={formData.messageBoxName} onChange={e => handleInputChange('messageBoxName', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="For government communications" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Full-time Employees{' '}
              <span className="text-red-500">*</span>
            </label>
            <input type="number" min="0" value={formData.fullTimeEmployees} onChange={e => handleInputChange('fullTimeEmployees', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="15 hours or more per week" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Part-time Employees{' '}
              <span className="text-red-500">*</span>
            </label>
            <input type="number" min="0" value={formData.partTimeEmployees} onChange={e => handleInputChange('partTimeEmployees', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Less than 15 hours per week" />
          </div>
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