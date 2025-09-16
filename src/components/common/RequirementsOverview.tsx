import React from 'react';
import { CheckIcon, InfoIcon, FileTextIcon, BuildingIcon, ClockIcon, MapPinIcon, GlobeIcon, UserIcon, ShieldCheckIcon, ScanIcon, RocketIcon, DownloadIcon, UploadIcon, ArrowRightIcon } from 'lucide-react';

interface Requirement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FormGenerated {
  id: string;
  title: string;
  description: string;
}

interface RequirementsOverviewProps {
  onContinue: () => void;
  onSelectImportMethod?: (method: 'target' | 'base' | 'upload') => void;
  context?: 'registration' | 'branch';
  title?: string;
  description?: string;
  requirements?: Requirement[];
  formsGenerated?: FormGenerated[];
  timeline?: Array<{
    text: string;
    completed?: boolean;
  }>;
}

export function RequirementsOverview({
  onContinue,
  onSelectImportMethod,
  context = 'registration',
  title,
  description,
  requirements,
  formsGenerated,
  timeline
}: RequirementsOverviewProps) {
  
  const getDefaultRequirements = (): Requirement[] => {
    if (requirements) return requirements;
    
    if (context === 'branch') {
      return [
        {
          id: 'doc1',
          title: 'Parent company documents',
          description: 'Certificate of incorporation, articles of association',
          icon: <BuildingIcon className="h-5 w-5 text-blue-600" />
        },
        {
          id: 'doc2',
          title: 'Proof of address',
          description: 'Business address in the Netherlands',
          icon: <MapPinIcon className="h-5 w-5 text-blue-600" />
        },
        {
          id: 'doc3',
          title: 'Director identification',
          description: 'Passport copies of directors and representatives',
          icon: <UserIcon className="h-5 w-5 text-blue-600" />
        },
        {
          id: 'doc4',
          title: 'Business activities',
          description: 'Description of planned activities in the Netherlands',
          icon: <GlobeIcon className="h-5 w-5 text-blue-600" />
        },
        {
          id: 'doc5',
          title: 'UBO information',
          description: 'Details of Ultimate Beneficial Owners',
          icon: <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
        }
      ];
    }
    
    // Default registration requirements
    return [
      {
        id: 'doc1',
        title: 'Valid passport copies',
        description: 'For all directors and UBOs (Ultimate Beneficial Owners)',
        icon: <UserIcon className="h-5 w-5 text-blue-600" />
      },
      {
        id: 'doc2',
        title: 'Proof of address',
        description: 'Recent utility bill or bank statement (less than 3 months old)',
        icon: <FileTextIcon className="h-5 w-5 text-blue-600" />
      },
      {
        id: 'doc3',
        title: 'Company structure',
        description: 'Details of shareholders and their ownership percentages',
        icon: <BuildingIcon className="h-5 w-5 text-blue-600" />
      },
      {
        id: 'doc4',
        title: 'Business plan',
        description: 'Brief description of business activities and goals (optional but recommended)',
        icon: <FileTextIcon className="h-5 w-5 text-blue-600" />
      },
      {
        id: 'doc5',
        title: 'Initial share capital',
        description: 'Minimum €0.01, typically €100 divided into shares',
        icon: <FileTextIcon className="h-5 w-5 text-blue-600" />
      }
    ];
  };

  const getDefaultFormsGenerated = (): FormGenerated[] => {
    if (formsGenerated) return formsGenerated;
    
    if (context === 'branch') {
      return [
        { id: 'form6', title: 'Form 6', description: 'Registration of a non-resident legal entity' },
        { id: 'form9', title: 'Form 9', description: 'Registration of a branch office' },
        { id: 'form11', title: 'Form 11', description: 'Registration of an official of a legal entity' },
        { id: 'form13', title: 'Form 13', description: 'Registration of an authorized representative (if needed)' }
      ];
    }
    
    return [];
  };

  const getDefaultTimeline = () => {
    if (timeline) return timeline;
    
    if (context === 'branch') {
      return [
        { text: 'Information gathering and document preparation (1-2 days)', completed: true },
        { text: 'Document verification (1-2 days)', completed: true },
        { text: 'Chamber of Commerce registration (3-4 days)', completed: true },
        { text: 'Tax authority registration (1-2 days)', completed: true }
      ];
    }
    
    return [
      { text: 'Registration details submission (Today)', completed: true },
      { text: 'Document verification (1-2 business days)', completed: true },
      { text: 'Notary preparation (2-3 business days)', completed: true },
      { text: 'Company registration (1-2 business days)', completed: true }
    ];
  };

  const getContextTitle = () => {
    if (title) return title;
    return context === 'branch' ? 'Branch Registration Requirements' : 'Dutch BV Registration Requirements';
  };

  const getContextDescription = () => {
    if (description) return description;
    return context === 'branch' 
      ? 'Before proceeding with your Branch Office registration in the Netherlands, please ensure you have the following documents and information ready.'
      : 'Before proceeding with your Dutch BV registration, please ensure you have the following documents and information ready.';
  };

  const requirementsList = getDefaultRequirements();
  const formsList = getDefaultFormsGenerated();
  const timelineList = getDefaultTimeline();

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              {getContextTitle()}
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              {getContextDescription()}
            </p>
          </div>
        </div>
      </div>

      {context === 'registration' && (
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
          <div className="flex">
            <RocketIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                eBranch Plan Required
              </h3>
              <p className="text-sm text-blue-700 mt-1">
                Dutch BV registration requires an active eBranch plan. Your
                current plan status is confirmed.
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
      )}

      {context === 'branch' && (
        <>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <div className="flex">
              <ScanIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  Simplified Registration Process
                </h3>
                <p className="text-sm text-blue-700 mt-1">
                  Our system will help you complete the required KvK registration
                  forms by:
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
                    <span>Automatically generating all required KvK forms</span>
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
                  The branch registration process typically takes 6-10 business days
                  from submission of all required documents to formal registration.
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
        </>
      )}

      {context === 'registration' && onSelectImportMethod && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Import Company Information
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Choose an option to import company information and personnel details
            to speed up your registration process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-colors" onClick={() => onSelectImportMethod('target')}>
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
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-colors" onClick={() => onSelectImportMethod('base')}>
              <div className="flex flex-col items-center text-center p-4">
                <DownloadIcon className="h-10 w-10 text-blue-600 mb-3" />
                <h4 className="text-sm font-medium text-gray-900">
                  Import from Base Company
                </h4>
                <p className="text-xs text-gray-500 mt-2">
                  Use directors and shareholders from your base company profile
                </p>
                <button className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                  Select
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-colors" onClick={() => onSelectImportMethod('upload')}>
              <div className="flex flex-col items-center text-center p-4">
                <UploadIcon className="h-10 w-10 text-blue-600 mb-3" />
                <h4 className="text-sm font-medium text-gray-900">
                  Upload Documents
                </h4>
                <p className="text-xs text-gray-500 mt-2">
                  Upload passport copies to extract information automatically
                </p>
                <button className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                  Select
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={context === 'branch' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-4'}>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">
            Required Documents
          </h3>
          {requirementsList.map(req => (
            <div key={req.id} className="flex items-start p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex-shrink-0 mt-0.5">{req.icon}</div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900">{req.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{req.description}</p>
              </div>
            </div>
          ))}
        </div>

        {context === 'branch' && formsList.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
              Forms We'll Generate
            </h3>
            {formsList.map(form => (
              <div key={form.id} className="flex items-start p-4 bg-white border border-gray-200 rounded-lg">
                <div className="flex-shrink-0 mt-0.5">
                  <FileTextIcon className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    {form.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{form.description}</p>
                </div>
              </div>
            ))}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Process Overview
              </h3>
              <ul className="space-y-2">
                {timelineList.map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {context === 'registration' && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">
            Timeline Overview
          </h3>
          <ul className="space-y-2">
            {timelineList.map((item, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-end pt-4">
        <button onClick={onContinue} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Continue to Registration
        </button>
      </div>
    </div>
  );
}
