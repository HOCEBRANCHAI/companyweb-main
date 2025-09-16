import React from 'react';
import { CheckIcon, InfoIcon, FileTextIcon, BriefcaseIcon, ClockIcon, BuildingIcon, UserIcon, ScanIcon, ArrowRightIcon } from 'lucide-react';
interface EmployerRequirementsOverviewProps {
  onContinue: () => void;
  onSelectImportMethod?: (method: 'base' | 'upload' | 'target') => void;
}
export function EmployerRequirementsOverview({
  onContinue,
  onSelectImportMethod
}: EmployerRequirementsOverviewProps) {
  const requirements = [{
    id: 'doc1',
    title: 'Company registration details',
    description: 'KVK number and legal entity information',
    icon: <BuildingIcon className="h-5 w-5 text-blue-600" />
  }, {
    id: 'doc2',
    title: 'Company tax information',
    description: 'VAT ID and fiscal number if available',
    icon: <FileTextIcon className="h-5 w-5 text-blue-600" />
  }, {
    id: 'doc3',
    title: 'Director identification',
    description: 'Passport copies of directors and authorized representatives',
    icon: <UserIcon className="h-5 w-5 text-blue-600" />
  }, {
    id: 'doc4',
    title: 'Employment details',
    description: 'Information about planned employment activities',
    icon: <BriefcaseIcon className="h-5 w-5 text-blue-600" />
  }];
  const formsGenerated = [{
    id: 'form1',
    title: 'Employer Registration Form',
    description: 'Dutch Wage Tax registration application'
  }, {
    id: 'form2',
    title: 'Payroll Authorization',
    description: 'Authorization for payroll processing'
  }];
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Employer Registration Requirements
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              Before proceeding with your employer registration in the
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
              Our system will help you complete the required Dutch Wage Tax
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
              The employer registration process typically takes 3-5 business
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
                  Information gathering and document preparation (1 day)
                </span>
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                <span>Document verification (1-2 days)</span>
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                <span>Tax authority registration (1-2 days)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Import Company Information
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Choose an option to import company information and personnel details
          to speed up your registration process.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-colors" onClick={() => onSelectImportMethod && onSelectImportMethod('target')}>
            <div className="flex flex-col items-center text-center p-4">
              <BuildingIcon className="h-10 w-10 text-blue-600 mb-3" />
              <h4 className="text-sm font-medium text-gray-900">
                Import from Target Company
              </h4>
              <p className="text-xs text-gray-500 mt-2">
                Use information from your existing Dutch market presence
              </p>
              <button className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                Select
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-colors" onClick={() => onSelectImportMethod && onSelectImportMethod('base')}>
            <div className="flex flex-col items-center text-center p-4">
              <BuildingIcon className="h-10 w-10 text-blue-600 mb-3" />
              <h4 className="text-sm font-medium text-gray-900">
                Import from Base Company
              </h4>
              <p className="text-xs text-gray-500 mt-2">
                Use information from your base company profile
              </p>
              <button className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                Select
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-colors" onClick={() => onSelectImportMethod && onSelectImportMethod('upload')}>
            <div className="flex flex-col items-center text-center p-4">
              <ScanIcon className="h-10 w-10 text-blue-600 mb-3" />
              <h4 className="text-sm font-medium text-gray-900">
                Upload Documents
              </h4>
              <p className="text-xs text-gray-500 mt-2">
                Upload documents to extract information automatically
              </p>
              <button className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                Select
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </button>
            </div>
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