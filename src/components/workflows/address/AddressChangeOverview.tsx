import React from 'react';
import { InfoIcon, FileTextIcon, BuildingIcon, ClockIcon, MapPinIcon, CheckIcon } from 'lucide-react';
interface AddressChangeOverviewProps {
  onContinue: () => void;
}
export function AddressChangeOverview({
  onContinue
}: AddressChangeOverviewProps) {
  const requirements = [{
    id: 'doc1',
    title: 'KvK Form',
    description: 'Chamber of Commerce address update form',
    icon: <FileTextIcon className="h-5 w-5 text-blue-600" />
  }, {
    id: 'doc2',
    title: 'Tax Office Form (Optional)',
    description: 'Belastingdienst correspondence address update',
    icon: <FileTextIcon className="h-5 w-5 text-blue-600" />
  }, {
    id: 'doc3',
    title: 'Proof of Address',
    description: 'Utility bill, lease agreement, or property deed',
    icon: <MapPinIcon className="h-5 w-5 text-blue-600" />
  }];
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Change of Registered Office
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              Updating your company's registered address requires filing changes
              with the Chamber of Commerce (KvK) and optionally with the Tax
              Authority (Belastingdienst).
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <BuildingIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Process Overview
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              Our system will guide you through the address change process by:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-blue-700">
              <li className="flex items-start">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  Preparing the KvK form with your new address details
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  Optionally preparing the Tax Office form for correspondence
                  address updates
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Collecting required supporting documentation</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  Submitting the completed forms to the relevant authorities
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <ClockIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Timeline Overview
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              The address change process typically takes 3-5 business days to be
              processed by the Chamber of Commerce after submission.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">
            Required Documents
          </h3>
          {requirements.map(req => <div key={req.id} className="flex items-start p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex-shrink-0 mt-0.5">{req.icon}</div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900">
                  {req.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{req.description}</p>
              </div>
            </div>)}
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Process Details</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Important Information
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                <span>
                  The address change will be effective from the date you specify
                </span>
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                <span>
                  All official correspondence will be sent to the new address
                  after processing
                </span>
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                <span>
                  You must update your address with the Tax Authority separately
                  if you want to change your tax correspondence address
                </span>
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                <span>
                  Address changes may require updating your company's Articles
                  of Association if the registered office moves to a different
                  municipality
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Fees</h3>
            <p className="text-sm text-gray-600">
              Chamber of Commerce filing fee: €18.00 (included in your
              subscription)
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <button onClick={onContinue} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Continue to Address Information
        </button>
      </div>
    </div>;
}