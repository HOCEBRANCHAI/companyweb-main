import React from 'react';
import { ArrowLeftIcon, CheckCircleIcon, FileTextIcon, MapPinIcon, BuildingIcon, CalendarIcon, InfoIcon } from 'lucide-react';
interface AddressChangeReviewProps {
  formData: any;
  onContinue: () => void;
  onBack: () => void;
}
export function AddressChangeReview({
  formData,
  onContinue,
  onBack
}: AddressChangeReviewProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-700">
            Please review the information below before proceeding. In the next
            steps, you will be able to customize the Tax Office letter and
            upload supporting documents.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <BuildingIcon className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">
              Company Details
            </h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Company Name:</span>
              <span className="text-sm font-medium">
                {formData.companyName}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">KvK Number:</span>
              <span className="text-sm font-medium">{formData.kvkNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Current Address:</span>
              <span className="text-sm font-medium">
                {formData.currentAddress}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <MapPinIcon className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">New Address</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Street:</span>
              <span className="text-sm font-medium">{formData.newStreet}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Number:</span>
              <span className="text-sm font-medium">{formData.newNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Postal Code:</span>
              <span className="text-sm font-medium">
                {formData.newPostalCode}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">City:</span>
              <span className="text-sm font-medium">{formData.newCity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Country:</span>
              <span className="text-sm font-medium">{formData.newCountry}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center mb-4">
          <CalendarIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">Change Details</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Effective Date:</span>
            <span className="text-sm font-medium">
              {formatDate(formData.effectiveDate)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Update Tax Office:</span>
            <span className="text-sm font-medium">
              {formData.updateTaxOffice ? 'Yes' : 'No'}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center mb-4">
          <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Forms to be Generated
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-sm font-medium">KvK Address Change Form</span>
          </div>
          {formData.updateTaxOffice && <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
              <InfoIcon className="h-5 w-5 text-blue-500 mr-2" />
              <div>
                <span className="text-sm font-medium">
                  Tax Office Correspondence Address Letter
                </span>
                <p className="text-xs text-gray-500 mt-1">
                  You'll be able to edit this letter in the next step
                </p>
              </div>
            </div>}
        </div>
      </div>
      <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
        <p className="text-sm text-yellow-700">
          By proceeding, you confirm that all information provided is accurate.
          After this step, you'll be able to customize the Tax Office letter and
          upload supporting documents.
        </p>
      </div>
      <div className="flex justify-between pt-6">
        <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Continue to Tax Letter
        </button>
      </div>
    </form>;
}