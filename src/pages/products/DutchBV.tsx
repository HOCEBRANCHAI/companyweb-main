import React, { useState } from 'react';
import { ClockIcon, FileTextIcon, CheckCircleIcon, ArrowRightIcon, BuildingIcon } from 'lucide-react';
import { DutchBVRegistration } from '../../components/workflows/DutchBVRegistration';
export function DutchBV() {
  const [showRegistration, setShowRegistration] = useState(false);
  const requirements = ['Valid passport copies of all directors', 'Proof of address (utility bill/bank statement)', 'Company details and structure', 'Business plan (optional but recommended)', 'Initial share capital (min. €0.01)'];
  const timeline = [{
    day: '1-2',
    title: 'Document Collection',
    description: 'Gathering and verification of all required documents'
  }, {
    day: '3-4',
    title: 'Notary Draft',
    description: 'Preparation and review of incorporation deed'
  }, {
    day: '5',
    title: 'Bank Account',
    description: 'Opening of corporate bank account'
  }, {
    day: '6-8',
    title: 'Registration',
    description: 'Final registration with Chamber of Commerce'
  }];
  return <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dutch BV Formation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Complete company formation service including notarial deed,
            registration, and support
          </p>
          <div className="mt-8">
            <button onClick={() => setShowRegistration(true)} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
              Start Formation Process
            </button>
          </div>
        </div>
      </div>
      {/* Requirements Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Required Documents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {requirements.map((req, index) => <div key={index} className="flex items-start space-x-3">
              <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span className="text-gray-600">{req}</span>
            </div>)}
        </div>
      </div>
      {/* Timeline Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Formation Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((step, index) => <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-blue-600 font-bold mb-2">
                  Day {step.day}
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>)}
          </div>
        </div>
      </div>
      {showRegistration && <DutchBVRegistration onClose={() => setShowRegistration(false)} />}
    </div>;
}