import React from 'react';
import { FileTextIcon, CheckCircleIcon, ArrowRightIcon, ClockIcon } from 'lucide-react';
export function VATFilingWorkflow() {
  return <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center mb-6">
        <FileTextIcon className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-medium text-gray-900">VAT Return Filing</h2>
      </div>
      <div className="space-y-6">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
          <p className="text-sm text-blue-700">
            Complete your Q1 VAT return filing by following the steps below.
            We'll guide you through the process to ensure accurate and timely
            submission.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-start p-4 bg-green-50 rounded-lg border border-green-100">
            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-green-800">
                Step 1: Data Collection
              </h3>
              <p className="text-sm text-green-700 mt-1">
                Your financial data has been automatically collected from your
                connected systems.
              </p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-blue-50 rounded-lg border border-blue-100">
            <ClockIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-800">
                Step 2: Review Transactions
              </h3>
              <p className="text-sm text-blue-700 mt-1">
                Review your sales and purchase transactions for the period.
              </p>
              <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                Review Transactions
              </button>
            </div>
          </div>
          <div className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="h-5 w-5 rounded-full border-2 border-gray-300 flex-shrink-0 mr-3 mt-0.5"></div>
            <div>
              <h3 className="font-medium text-gray-800">
                Step 3: Verify Calculations
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Verify the calculated VAT amounts for the period.
              </p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="h-5 w-5 rounded-full border-2 border-gray-300 flex-shrink-0 mr-3 mt-0.5"></div>
            <div>
              <h3 className="font-medium text-gray-800">
                Step 4: Submit Return
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Submit your VAT return to the tax authority.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-4 border-t border-gray-200">
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
            Save for Later
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
            Continue to Review
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>;
}