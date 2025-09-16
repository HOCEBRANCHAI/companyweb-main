import React from 'react';
import { CheckIcon, InfoIcon, FileTextIcon, BuildingIcon, ClockIcon, MapPinIcon, GlobeIcon, UserIcon, ShieldCheckIcon, ScanIcon, UploadIcon, ArrowRightIcon, DownloadIcon } from 'lucide-react';
interface VATIDRequirementsOverviewProps {
  onContinue: () => void;
  onSelectImportMethod?: (method: 'base' | 'upload' | 'target') => void;
}
export function VATIDRequirementsOverview({
  onContinue
}: VATIDRequirementsOverviewProps) {
  const requirements = [{
    id: 'doc1',
    title: 'Applicant company documents',
    description: 'Certificate of incorporation, articles of association',
    icon: <BuildingIcon className="h-5 w-5 text-blue-600" />
  }, {
    id: 'doc2',
    title: 'Proof of address',
    description: 'Business address verification',
    icon: <MapPinIcon className="h-5 w-5 text-blue-600" />
  }, {
    id: 'doc3',
    title: 'Director identification',
    description: 'Passport copies of directors and representatives',
    icon: <UserIcon className="h-5 w-5 text-blue-600" />
  }, {
    id: 'doc4',
    title: 'Business activities',
    description: 'Description of planned activities in the Netherlands',
    icon: <GlobeIcon className="h-5 w-5 text-blue-600" />
  }];
  const formsGenerated = [{
    id: 'form1',
    title: 'Application VAT Number',
    description: 'Belastingdienst.nl registration form'
  }];
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              VAT ID Registration Requirements
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              Before proceeding with your VAT ID registration in the
              Netherlands, please ensure you have the following documents and
              information ready.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <ScanIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Simplified Registration Process
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              Our system will help you complete the required Tax Office
              registration forms by:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-blue-700">
              <li className="flex items-start">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Importing data from your base company information</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  Scanning and extracting information from uploaded documents
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Automatically generating all required forms</span>
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
              The VAT ID registration process typically takes 10-21 business
              days from submission of all required documents to formal
              registration.
            </p>
            <div className="flex items-center mt-2">
              <div className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-xs font-medium flex items-center">
                <CheckIcon className="h-3 w-3 mr-1" />
                eBranch Plan Active
              </div>
            </div>
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
          <h3 className="text-lg font-medium text-gray-900">
            Forms We'll Generate
          </h3>
          {formsGenerated.map(form => <div key={form.id} className="flex items-start p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex-shrink-0 mt-0.5">
                <FileTextIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900">
                  {form.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{form.description}</p>
              </div>
            </div>)}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Process Overview
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                <span>
                  Information gathering and document preparation (1-2 days)
                </span>
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                <span>Document verification (1-2 days)</span>
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                <span>Tax authority registration (10-21 days)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <button onClick={onContinue} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Continue to Registration
        </button>
      </div>
    </div>;
}