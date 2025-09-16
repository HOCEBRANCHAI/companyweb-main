import React from 'react';
import { CheckCircleIcon, DownloadIcon, ArrowLeftIcon, ClockIcon, FileTextIcon } from 'lucide-react';
interface AddressChangeConfirmationProps {
  formData: any;
  onBack: () => void;
  onClose: () => void;
}
export function AddressChangeConfirmation({
  formData,
  onBack,
  onClose
}: AddressChangeConfirmationProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };
  // Calculate estimated completion date (5 business days from now)
  const getEstimatedCompletionDate = () => {
    const date = new Date();
    let businessDays = 5;
    while (businessDays > 0) {
      date.setDate(date.getDate() + 1);
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        businessDays--;
      }
    }
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };
  return <div className="space-y-6">
      <div className="text-center py-4">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <CheckCircleIcon className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="mt-3 text-lg font-medium text-gray-900">
          Address Change Request Submitted
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Your request to change your registered office address has been
          successfully submitted.
        </p>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Request Details
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Request ID:</span>
            <span className="text-sm font-medium">
              ADR-
              {Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Submission Date:</span>
            <span className="text-sm font-medium">
              {new Date().toLocaleDateString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Effective Date:</span>
            <span className="text-sm font-medium">
              {formatDate(formData.effectiveDate)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">New Address:</span>
            <span className="text-sm font-medium">
              {formData.newStreet} {formData.newNumber},{' '}
              {formData.newPostalCode}, {formData.newCity}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center mb-4">
          <ClockIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">Next Steps</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                1
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                Document Processing
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Our team will process your documents and submit them to the
                Chamber of Commerce
                {formData.updateTaxOffice ? ' and Tax Office' : ''}.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                2
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                Authority Review
              </p>
              <p className="mt-1 text-sm text-gray-500">
                The authorities will process your address change request. This
                typically takes 3-5 business days.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                3
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Confirmation</p>
              <p className="mt-1 text-sm text-gray-500">
                You will receive a confirmation when the address change has been
                processed. The new address will be effective from{' '}
                {formatDate(formData.effectiveDate)}.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <ClockIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Estimated Completion
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              Your address change is expected to be completed by{' '}
              <strong>{getEstimatedCompletionDate()}</strong>.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center mb-4">
          <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">Generated Forms</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-sm font-medium">KvK Address Change Form</span>
            <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
              <DownloadIcon className="h-4 w-4 mr-1" />
              Download
            </button>
          </div>
          {formData.updateTaxOffice && <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-sm font-medium">
                Tax Office Address Form
              </span>
              <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
                <DownloadIcon className="h-4 w-4 mr-1" />
                Download
              </button>
            </div>}
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button onClick={onClose} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Close
        </button>
      </div>
    </div>;
}