import React, { useState } from 'react';
import { CheckIcon, InfoIcon, FileTextIcon, BuildingIcon, ClockIcon, MapPinIcon, GlobeIcon, UserIcon, ShieldCheckIcon, ScanIcon, ArrowRightIcon, ChevronDownIcon } from 'lucide-react';
import { BranchRegistration } from '../../components/workflows/BranchRegistration';
export function BranchRegistrationOverview() {
  const [showRegistration, setShowRegistration] = useState(false);
  const requirements = [{
    id: 'doc1',
    title: 'Parent company documents',
    description: 'Certificate of incorporation, articles of association',
    icon: <BuildingIcon className="h-6 w-6 text-blue-600" />
  }, {
    id: 'doc2',
    title: 'Proof of address',
    description: 'Business address in the Netherlands',
    icon: <MapPinIcon className="h-6 w-6 text-blue-600" />
  }, {
    id: 'doc3',
    title: 'Director identification',
    description: 'Passport copies of directors and representatives',
    icon: <UserIcon className="h-6 w-6 text-blue-600" />
  }, {
    id: 'doc4',
    title: 'Business activities',
    description: 'Description of planned activities in the Netherlands',
    icon: <GlobeIcon className="h-6 w-6 text-blue-600" />
  }, {
    id: 'doc5',
    title: 'UBO information',
    description: 'Details of Ultimate Beneficial Owners',
    icon: <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
  }];
  const registrationSteps = [{
    title: 'Document Preparation',
    description: 'Upload and verify required documents',
    duration: '1-2 days',
    features: ['AI-powered document scanning', 'Automatic data extraction', 'Real-time validation']
  }, {
    title: 'Information Review',
    description: 'Review and confirm company details',
    duration: '1-2 days',
    features: ['Pre-filled forms from documents', 'Compliance checks', 'Error detection']
  }, {
    title: 'Official Registration',
    description: 'Submit to Chamber of Commerce',
    duration: '3-4 days',
    features: ['Digital submission', 'Progress tracking', 'Authority communications']
  }, {
    title: 'Final Setup',
    description: 'Complete post-registration tasks',
    duration: '1-2 days',
    features: ['Tax registration', 'Bank account assistance', 'Digital certificate delivery']
  }];
  return <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Branch Registration in the Netherlands
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Establish your business presence in the Netherlands with our
              streamlined, AI-powered registration process
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <button onClick={() => setShowRegistration(true)} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium flex items-center">
                Start Registration
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <a href="#learn-more" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium flex items-center">
                Learn More
                <ChevronDownIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Interactive Demo Embed */}
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-xl border border-gray-200">
              <iframe src="https://app.sharefable.com/embed/demo/branch-registration-gk5fvx1d1xgxwi8d" width="100%" height="540px" style={{
              border: 'none'
            }} allowFullScreen allow="fullscreen" />
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <ClockIcon className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">Timeline</h3>
            </div>
            <p className="text-gray-600">
              Complete branch registration within 6-10 business days with our
              streamlined process
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <ScanIcon className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">AI-Powered</h3>
            </div>
            <p className="text-gray-600">
              Our AI technology extracts and validates information from your
              documents automatically
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <ShieldCheckIcon className="h-6 w-6 text-purple-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">Compliant</h3>
            </div>
            <p className="text-gray-600">
              Ensure full compliance with Dutch regulations and KVK requirements
            </p>
          </div>
        </div>
        {/* Requirements Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Required Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map(req => <div key={req.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0">{req.icon}</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      {req.title}
                    </h4>
                    <p className="text-gray-600 mt-1">{req.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
        {/* Process Steps */}
        <div id="learn-more" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Registration Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {registrationSteps.map((step, index) => <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500">{step.duration}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.features.map((feature, i) => <li key={i} className="flex items-center text-gray-600">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
        {/* CTA Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to establish your branch in the Netherlands?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Start your branch registration process today with our AI-powered
            platform. Complete your registration in as little as 6 business
            days.
          </p>
          <button onClick={() => setShowRegistration(true)} className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
            Begin Registration Process
          </button>
        </div>
      </div>
      {showRegistration && <BranchRegistration onClose={() => setShowRegistration(false)} skipRequirements={true} />}
    </div>;
}