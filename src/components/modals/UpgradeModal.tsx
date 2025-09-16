import React, { useState } from 'react';
import { XIcon, ArrowRightIcon, BuildingIcon, RocketIcon } from 'lucide-react';
import { DutchBVRegistration } from '../workflows/DutchBVRegistration';
interface UpgradeModalProps {
  onClose: () => void;
}
export function UpgradeModal({
  onClose
}: UpgradeModalProps) {
  const [showBVRegistration, setShowBVRegistration] = useState(false);
  const options = [{
    title: 'Branch Office',
    description: 'Establish a physical presence with full operational capabilities',
    price: '€2,499',
    timeline: '6-10 business days',
    benefits: ['Legal presence in the Netherlands', 'Use parent company name', 'Chamber of Commerce registration', 'Local business address', 'Full operational freedom'],
    icon: <RocketIcon className="h-6 w-6 text-blue-600" />,
    action: 'Launch Branch Office'
  }, {
    title: 'Dutch BV',
    description: 'Set up a private limited company for maximum credibility',
    price: '€3,999',
    timeline: '6-8 business days',
    benefits: ['Independent legal entity', 'Limited liability protection', 'Enhanced credibility', 'Access to local banking', 'Full operational freedom'],
    icon: <BuildingIcon className="h-6 w-6 text-purple-600" />,
    action: 'Register Dutch BV'
  }];
  if (showBVRegistration) {
    return <DutchBVRegistration onClose={() => setShowBVRegistration(false)} />;
  }
  return <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full m-4">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Upgrade Virtual Office
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="text-center mb-8">
            <h3 className="text-lg font-medium text-gray-900">
              Take Your Business to the Next Level
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Choose the right structure for your business growth in the
              Netherlands
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {options.map(option => <div key={option.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  {option.icon}
                  <h3 className="text-lg font-medium text-gray-900">
                    {option.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  {option.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-gray-900">
                    {option.price}
                  </div>
                  <div className="text-sm text-gray-500">{option.timeline}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {option.benefits.map(benefit => <li key={benefit} className="flex items-start text-sm">
                      <ArrowRightIcon className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>)}
                </ul>
                <button onClick={() => {
              if (option.title === 'Dutch BV') {
                setShowBVRegistration(true);
              } else {
                // Handle branch office registration
                console.log('Starting branch office registration');
              }
            }} className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                  {option.action}
                </button>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
}