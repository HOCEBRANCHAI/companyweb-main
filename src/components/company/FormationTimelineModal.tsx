import React from 'react';
import { XIcon, CheckCircleIcon, CircleIcon, ClockIcon } from 'lucide-react';
interface FormationTimelineModalProps {
  entityType: 'Branch Office' | 'Dutch BV';
  onClose: () => void;
}
export function FormationTimelineModal({
  entityType,
  onClose
}: FormationTimelineModalProps) {
  const branchOfficeSteps = [{
    id: 1,
    title: 'Onboarding Procedure',
    description: 'Complete onboarding procedure at House of Companies',
    status: 'completed',
    days: 'Day 1'
  }, {
    id: 2,
    title: 'Onboarding Approval',
    description: 'House of Companies approves the onboarding',
    status: 'completed',
    days: 'Day 2'
  }, {
    id: 3,
    title: 'Prepare Registration Forms',
    description: 'House of Companies prepares branch registration forms',
    status: 'current',
    days: 'Days 3-4'
  }, {
    id: 4,
    title: 'Client Approval',
    description: 'Client approves the prepared forms',
    status: 'upcoming',
    days: 'Day 5'
  }, {
    id: 5,
    title: 'Chamber of Commerce Registration',
    description: 'Register with the Dutch Chamber of Commerce (KvK)',
    status: 'upcoming',
    days: 'Days 6-10'
  }];
  const dutchBVSteps = [{
    id: 1,
    title: 'Onboarding Procedure',
    description: 'Complete onboarding procedure',
    status: 'completed',
    days: 'Day 1'
  }, {
    id: 2,
    title: 'Onboarding Approval',
    description: 'House of Companies approves the onboarding',
    status: 'completed',
    days: 'Day 2'
  }, {
    id: 3,
    title: 'Draft Formation Deed',
    description: 'Notary prepares and shares the draft Formation Deed',
    status: 'current',
    days: 'Days 3-4'
  }, {
    id: 4,
    title: 'Client Approval',
    description: 'Client reviews and approves the Formation Deed',
    status: 'upcoming',
    days: 'Day 5'
  }, {
    id: 5,
    title: 'Company Registration',
    description: 'Notary finalizes the company registration',
    status: 'upcoming',
    days: 'Days 6-8'
  }];
  const timelineSteps = entityType === 'Branch Office' ? branchOfficeSteps : dutchBVSteps;
  return <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full m-4">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <ClockIcon className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-medium text-gray-900">
              {entityType} Formation Timeline
            </h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {timelineSteps.map((step, index) => <div key={step.id} className="relative pb-8">
                {index < timelineSteps.length - 1 && <div className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />}
                <div className="relative flex items-start">
                  <span className="flex h-8 items-center">
                    {step.status === 'completed' ? <CheckCircleIcon className="h-8 w-8 text-green-500" /> : step.status === 'current' ? <CircleIcon className="h-8 w-8 text-blue-500" /> : <CircleIcon className="h-8 w-8 text-gray-300" />}
                  </span>
                  <div className="ml-4 min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-gray-900">
                        {step.title}
                      </h4>
                      <span className="text-xs text-gray-500">{step.days}</span>
                    </div>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-3">
          <div className="text-xs text-gray-500">
            <p>
              * Timeline may vary depending on various factors including
              document preparation and authority processing times.
            </p>
          </div>
        </div>
      </div>
    </div>;
}