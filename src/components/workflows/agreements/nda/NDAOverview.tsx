import React, { useState } from 'react';
import { CheckIcon, InfoIcon, FileTextIcon, ShieldIcon, ScaleIcon, LockIcon, ArrowRightIcon, EyeIcon, XIcon } from 'lucide-react';
interface NDAOverviewProps {
  onContinue: () => void;
}
export function NDAOverview({
  onContinue
}: NDAOverviewProps) {
  const [showPreview, setShowPreview] = useState(false);
  const features = [{
    id: 'feature1',
    title: 'Legally Compliant',
    description: 'Template follows Dutch legal requirements and best practices',
    icon: <ScaleIcon className="h-5 w-5 text-blue-600" />
  }, {
    id: 'feature2',
    title: 'Customizable Terms',
    description: 'Adapt confidentiality terms to your specific needs',
    icon: <FileTextIcon className="h-5 w-5 text-blue-600" />
  }, {
    id: 'feature3',
    title: 'Data Protection',
    description: 'Includes GDPR-compliant data handling provisions',
    icon: <ShieldIcon className="h-5 w-5 text-blue-600" />
  }, {
    id: 'feature4',
    title: 'Secure Signatures',
    description: 'Digital signing with legal validity',
    icon: <LockIcon className="h-5 w-5 text-blue-600" />
  }];
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Non-Disclosure Agreement (NDA)
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              This document helps protect confidential information shared
              between parties. Follow the steps to create a customized NDA for
              your business needs.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Key Features</h3>
        {features.map(feature => <div key={feature.id} className="flex items-start p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex-shrink-0 mt-0.5">{feature.icon}</div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                {feature.description}
              </p>
            </div>
          </div>)}
      </div>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2">
          Process Overview
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center text-sm text-gray-600">
            <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
            <span>Select company profile to use for party information</span>
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
            <span>Enter information about both parties</span>
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
            <span>Customize agreement terms and conditions</span>
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
            <span>Preview the complete agreement</span>
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
            <span>Sign and download the final document</span>
          </li>
        </ul>
      </div>
      <div className="flex justify-between pt-4">
        <button onClick={() => setShowPreview(true)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <EyeIcon className="mr-2 h-4 w-4" />
          Preview Template
        </button>
        <button onClick={onContinue} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
          Continue
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </button>
      </div>
      {showPreview && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                NDA Template Preview
              </h3>
              <button onClick={() => setShowPreview(false)} className="text-gray-400 hover:text-gray-500">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="overflow-y-auto p-6 flex-grow">
              <div className="prose prose-sm max-w-none">
                <h1 className="text-center">NON-DISCLOSURE AGREEMENT</h1>
                <p>
                  <strong>THIS AGREEMENT</strong> is made on [Date]
                </p>
                <p>
                  <strong>BETWEEN:</strong>
                </p>
                <ol>
                  <li>
                    <strong>[Disclosing Party Name]</strong>, with its
                    registered office at [Address], represented by
                    [Representative Name] (the "
                    <strong>Disclosing Party</strong>"); and
                  </li>
                  <li>
                    <strong>[Receiving Party Name]</strong>, with its registered
                    office at [Address], represented by [Representative Name]
                    (the "<strong>Receiving Party</strong>").
                  </li>
                </ol>
                <p>
                  The Disclosing Party and the Receiving Party are collectively
                  referred to as the "<strong>Parties</strong>" and individually
                  as a "<strong>Party</strong>".
                </p>
                <p>
                  <strong>WHEREAS:</strong>
                </p>
                <ol type="A">
                  <li>
                    The Parties wish to engage in discussions regarding [Purpose
                    of Disclosure] (the "<strong>Purpose</strong>"); and
                  </li>
                  <li>
                    In connection with the Purpose, the Disclosing Party may
                    disclose certain confidential and proprietary information to
                    the Receiving Party.
                  </li>
                </ol>
                <p>
                  <strong>NOW, THEREFORE</strong>, in consideration of the
                  mutual covenants contained herein, the Parties agree as
                  follows:
                </p>
                <h2>1. CONFIDENTIAL INFORMATION</h2>
                <p>
                  1.1 "Confidential Information" means any information disclosed
                  by the Disclosing Party to the Receiving Party, either
                  directly or indirectly, in writing, orally or by inspection of
                  tangible objects, including but not limited to [Types of
                  Confidential Information].
                </p>
                <p>
                  1.2 Confidential Information shall not include information
                  that:
                </p>
                <ol type="a">
                  <li>
                    was in the public domain at the time it was disclosed;
                  </li>
                  <li>
                    becomes part of the public domain after disclosure through
                    no fault of the Receiving Party;
                  </li>
                  <li>
                    was known to the Receiving Party prior to disclosure by the
                    Disclosing Party;
                  </li>
                  <li>
                    is lawfully obtained by the Receiving Party from a third
                    party without restriction on disclosure; or
                  </li>
                  <li>
                    is independently developed by the Receiving Party without
                    use of the Confidential Information.
                  </li>
                </ol>
                <p className="text-center text-gray-500 italic mt-4">
                  [Preview truncated - full document will be generated based on
                  your inputs]
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200 p-4 flex justify-end">
              <button onClick={() => setShowPreview(false)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                Close Preview
              </button>
            </div>
          </div>
        </div>}
    </div>;
}