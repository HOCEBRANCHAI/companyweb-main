import React, { useState } from 'react';
import { NDAWorkflow } from '../../components/workflows/agreements/NDAWorkflow';
import { useNavigate } from 'react-router-dom';
import { FileTextIcon, CheckIcon, ShieldIcon, LockIcon, ArrowLeftIcon } from 'lucide-react';
export function NDAPage() {
  const navigate = useNavigate();
  const [showWorkflow, setShowWorkflow] = useState(true);
  return <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={() => navigate('/corporate')} className="mr-4 text-gray-500 hover:text-gray-700">
                <ArrowLeftIcon className="h-5 w-5" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900">
                Non-Disclosure Agreement
              </h1>
            </div>
          </div>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Create a legally binding non-disclosure agreement to protect your
            confidential information
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showWorkflow ? <NDAWorkflow onClose={() => navigate('/corporate')} /> : <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Key Features */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  About Non-Disclosure Agreements
                </h2>
                <p className="text-gray-600 mb-4">
                  A Non-Disclosure Agreement (NDA) is a legally binding contract
                  that establishes a confidential relationship between parties.
                  The party or parties signing the agreement agree that
                  sensitive information they may obtain will not be made
                  available to others.
                </p>
                <p className="text-gray-600">
                  This agreement is commonly used when businesses need to share
                  sensitive information with potential partners, employees, or
                  contractors, but want to ensure that information remains
                  protected.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <ShieldIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">
                        Protect Confidential Information
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Safeguard your business secrets, intellectual property,
                        and sensitive data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <FileTextIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">
                        Customizable Terms
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Tailor the agreement to your specific business needs and
                        requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <LockIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">
                        Legal Enforceability
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Create legally binding agreements that stand up in court
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">
                        Digital Signatures
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Sign electronically and send to counterparties for quick
                        completion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Action Card */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Generate Your NDA
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Complete a simple form to create your customized
                  Non-Disclosure Agreement in minutes.
                </p>
                <button onClick={() => setShowWorkflow(true)} className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                  Start Creating NDA
                </button>
              </div>
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Need Help?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our legal experts can review your specific requirements and
                  provide guidance.
                </p>
                <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
                  Contact Legal Support
                </button>
              </div>
            </div>
          </div>}
      </div>
    </div>;
}