import React from 'react';
import { XIcon, CheckIcon, InfoIcon } from 'lucide-react';
const plans = [{
  name: 'Free Plan',
  price: '€0',
  interval: 'month',
  features: ['Virtual office address in the EU', 'Dedicated phone number', '25 credits for additional services', 'Market Entry Roadmap/Strategy', 'Access to basic AI-powered tools']
}, {
  name: 'eBranch',
  price: '€1,495',
  interval: 'year',
  popular: true,
  features: ['All Free plan features', 'Core Bookkeeping Portal', 'Branch Office Registration', 'VAT and EORI Number Application', 'Employer Registration', 'Quarterly VAT Analysis', 'Annual Corporate Analysis', 'AI-powered Corporate Agent']
}, {
  name: 'Enterprise',
  price: 'Custom',
  features: ['All eBranch features', 'Customized AI solutions', 'Dedicated account manager', 'Priority support', 'Flexible add-ons']
}];
interface CompareModalProps {
  onClose: () => void;
}
export function CompareModal({
  onClose
}: CompareModalProps) {
  return <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full m-4">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Compare Plans</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(plan => <div key={plan.name} className={`rounded-lg border ${plan.popular ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-white'} p-6`}>
                <h3 className="text-lg font-medium text-gray-900">
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.interval && <span className="ml-1 text-gray-500">/{plan.interval}</span>}
                </div>
                <ul className="mt-6 space-y-4">
                  {plan.features.map(feature => <li key={feature} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <InfoIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
              <p className="text-sm text-blue-700">
                The eBranch plan includes all essential services for EU business
                operations. Upgrade now to get Branch Registration, VAT ID, and
                Employer Registration included for free in the Netherlands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}