import React, { useState } from 'react';
import { FileTextIcon, PlusIcon, ArrowRightIcon, DownloadIcon, CheckCircleIcon, ClockIcon, CalendarIcon } from 'lucide-react';
interface CompanyProfile {
  id: string;
  name: string;
  country: string;
}
interface ObjectionLettersProps {
  companyProfiles: CompanyProfile[];
}
export function ObjectionLetters({
  companyProfiles
}: ObjectionLettersProps) {
  const [showNewObjection, setShowNewObjection] = useState(false);
  const objectionLetters = [{
    id: '1',
    title: 'Corporate Tax Assessment 2023',
    company: companyProfiles[1].name,
    status: 'draft',
    createdAt: '2024-03-10',
    deadline: '2024-04-15',
    progress: 30
  }, {
    id: '2',
    title: 'VAT Assessment Q4 2023',
    company: companyProfiles[0].name,
    status: 'submitted',
    createdAt: '2024-02-15',
    submittedAt: '2024-02-20',
    deadline: '2024-03-25',
    progress: 100
  }, {
    id: '3',
    title: 'Payroll Tax Assessment Jan 2024',
    company: companyProfiles[1].name,
    status: 'in_progress',
    createdAt: '2024-02-28',
    deadline: '2024-04-05',
    progress: 70
  }];
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'draft':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Draft
          </span>;
      case 'in_progress':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            In Progress
          </span>;
      case 'submitted':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Submitted
          </span>;
      default:
        return null;
    }
  };
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Objection Letters
          </h1>
          <p className="text-gray-600 mt-1">
            Create and manage objection letters for tax assessments
          </p>
        </div>
        <button onClick={() => setShowNewObjection(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
          <PlusIcon className="h-4 w-4 mr-2" />
          New Objection Letter
        </button>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">
          Your Objection Letters
        </h3>
        <div className="space-y-6">
          {objectionLetters.map(letter => <div key={letter.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center">
                    <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="text-md font-medium text-gray-900">
                      {letter.title}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{letter.company}</p>
                </div>
                <div>{getStatusBadge(letter.status)}</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarIcon className="h-4 w-4 text-gray-400 mr-2" />
                  Created: {new Date(letter.createdAt).toLocaleDateString()}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="h-4 w-4 text-gray-400 mr-2" />
                  Deadline: {new Date(letter.deadline).toLocaleDateString()}
                </div>
              </div>
              {letter.status !== 'submitted' && <div className="mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500">Progress</span>
                    <span className="text-xs font-medium text-gray-700">
                      {letter.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{
                width: `${letter.progress}%`
              }}></div>
                  </div>
                </div>}
              <div className="flex justify-between pt-4 border-t border-gray-200">
                {letter.status === 'submitted' ? <div className="flex items-center text-green-600 text-sm">
                    <CheckCircleIcon className="h-4 w-4 mr-1.5" />
                    Submitted on{' '}
                    {new Date(letter.submittedAt || '').toLocaleDateString()}
                  </div> : <div></div>}
                <div className="flex space-x-2">
                  {letter.status === 'submitted' && <button className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-xs font-medium flex items-center">
                      <DownloadIcon className="h-3.5 w-3.5 mr-1.5" />
                      Download
                    </button>}
                  <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-xs font-medium flex items-center">
                    <ArrowRightIcon className="h-3.5 w-3.5 mr-1.5" />
                    {letter.status === 'draft' ? 'Continue Editing' : letter.status === 'in_progress' ? 'Continue' : 'View Details'}
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          About Objection Letters
        </h3>
        <p className="text-gray-600 mb-4">
          An objection letter is a formal document submitted to the tax
          authority to dispute a tax assessment. Our system helps you create
          legally sound objection letters with the right structure and
          arguments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                <span className="font-bold">1</span>
              </div>
              <h4 className="font-medium text-gray-900">Create</h4>
            </div>
            <p className="text-sm text-gray-600">
              Start with a tax assessment and our AI will help you identify
              potential grounds for objection.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                <span className="font-bold">2</span>
              </div>
              <h4 className="font-medium text-gray-900">Review</h4>
            </div>
            <p className="text-sm text-gray-600">
              Review and customize the generated letter to add specific details
              about your case.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                <span className="font-bold">3</span>
              </div>
              <h4 className="font-medium text-gray-900">Submit</h4>
            </div>
            <p className="text-sm text-gray-600">
              Submit the letter to the tax authority and track the status of
              your objection.
            </p>
          </div>
        </div>
      </div>
    </div>;
}