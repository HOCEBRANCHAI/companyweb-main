import React from 'react';
import { CheckCircleIcon, CircleIcon, ClockIcon } from 'lucide-react';
const timelineSteps = [{
  id: 1,
  title: 'Onboarding',
  description: 'Complete onboarding procedure',
  status: 'completed',
  days: 'Day 1'
}, {
  id: 2,
  title: 'Account Approval',
  description: 'House of Companies approves the onboarding',
  status: 'completed',
  days: 'Day 2'
}, {
  id: 3,
  title: 'Document Preparation',
  description: 'Prepare registration forms and documents',
  status: 'current',
  days: 'Days 3-4'
}, {
  id: 4,
  title: 'Client Review',
  description: 'Client approves prepared documents',
  status: 'upcoming',
  days: 'Day 5'
}, {
  id: 5,
  title: 'Registration',
  description: 'Register with Chamber of Commerce',
  status: 'upcoming',
  days: 'Days 6-8'
}];
export function BusinessTimeline() {
  return <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
      <div className="flex items-center space-x-2 mb-6">
        <ClockIcon className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-medium text-gray-900">
          Formation Timeline
        </h3>
      </div>
      <div className="relative">
        {timelineSteps.map((step, index) => <div key={step.id} className="relative pb-8">
            {index < timelineSteps.length - 1 && <div className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />}
            <div className="relative flex items-start">
              <span className="flex h-8 items-center">
                {step.status === 'completed' && <CheckCircleIcon className="h-8 w-8 text-green-500" />}
                {step.status === 'current' && <CircleIcon className="h-8 w-8 text-blue-500" />}
                {step.status === 'upcoming' && <CircleIcon className="h-8 w-8 text-gray-300" />}
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
    </div>;
}